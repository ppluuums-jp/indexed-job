import { Logger } from "src/core/logger";
import { Sale } from "../entities/sale.entity";
import { SalesRepositoryBase } from "../repository/sales.repository";
import { Injectable } from "@nestjs/common";

export interface SalesService {
    execute(): Promise<void>;
}

@Injectable()
export abstract class SalesServiceBase implements SalesService {
    // readonly salesRepository: SalesRepositoryBase;

    // constructor(salesRepository: SalesRepositoryBase) {
    //     this.salesRepository = salesRepository;
    // }
    async execute(): Promise<void> {
        Logger.error(
            "batch.execute: Method not implemented.",
            {
                timestamp: new Date().toISOString(),
            },
            new Error("Method not implemented.")
        );
        throw new Error("Method not implemented.");
    }
}
