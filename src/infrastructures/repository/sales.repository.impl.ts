import { Injectable } from "@nestjs/common";
import { Sale } from "src/domain/entities/sale.entity";
import { SalesRepositoryBase } from "src/domain/repository/sales.repository";
import { Driver } from "../db/driver";
import { Utils } from "src/core/utils";
import { Logger } from "src/core/logger";
import { Database } from "@google-cloud/spanner";

@Injectable()
export class SalesRepositoryImpl extends SalesRepositoryBase {
    constructor(private readonly driver: Driver) {
        super();
    }
    async batch(): Promise<void> {
        const db: Database = this.driver.getDB();
        const [startPrefix, endPrefix] = Utils.getPrefixRange(
            Number(process.env.JOB_COMPLETION_INDEX),
            Number(process.env.PARALLELISM)
        );
        Logger.info('Prefix', { 'start': startPrefix, 'end': endPrefix });

        // serial - parallel (indexed)
        const query = {
            sql: `SELECT Id, Name, IsDone 
                  FROM Sales 
                  WHERE SUBSTR(Id, 25, 1) BETWEEN @startPrefix AND @endPrefix`,
            params: {
                startPrefix: startPrefix,
                endPrefix: endPrefix
            }
        };
        // parallel
        // const query = {
        //     sql: `SELECT Id, Name, IsDone 
        //           FROM Sales `
        // };
        
        const [rows] = await db.run(query);
        const sales: Sale[] = rows.map(row => {
            const json = row.toJSON();
            return new Sale(json.Id, json.Name, json.IsDone);
        });

        Logger.info(`Number of sales for job ${process.env.JOB_COMPLETION_INDEX}: ${sales.length}`,
            { 'job': process.env.JOB_COMPLETION_INDEX, 'sales': sales.length });

        let updateBatch = [];
        const batchSize = 10000;

        for (const sale of sales) {
            await new Promise(resolve => setTimeout(resolve, 100)); // sleep 100ms for external API call
            updateBatch.push({
                Id: sale.id,
                Name: sale.name,
                IsDone: true,
            });
            if (updateBatch.length >= batchSize) {
                await this.update(db, updateBatch);
                updateBatch = [];
            }
        }
        if (updateBatch.length > 0) {
            await this.update(db, updateBatch);
        }
    }

    private async update(db: Database, updates: object[]) {
        try {
            db.runTransaction(async (e, tx) => {
                if (e) {
                    Logger.error('Transaction Error', { 'timestamp': new Date().toISOString() }, e);
                    return;
                }
                tx.update('Sales', updates);
                await tx.commit();
            });
            Logger.info(`Committed ${updates.length} updates.`, { 'timestamp': new Date().toISOString() });
        } catch (e) {
            Logger.error('Commit failed:', { 'timestamp': new Date().toISOString() }, e);
        }
    }
}
