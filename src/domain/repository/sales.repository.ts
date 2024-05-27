import { Logger } from "src/core/logger";
import { Sale } from "../entities/sale.entity";
import { Injectable } from "@nestjs/common";

export interface SalesRepository {
    batch(): Promise<void>;
}

@Injectable()
export abstract class SalesRepositoryBase implements SalesRepository {
    async batch(): Promise<void> {
        Logger.error(
            "batch: Method not implemented.",
            {
                timestamp: new Date().toISOString(),
            },
            new Error("Method not implemented.")
        );
        throw new Error("Method not implemented.");
    }
}

