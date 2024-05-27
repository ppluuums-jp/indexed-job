import { Injectable } from "@nestjs/common";
import { SalesRepositoryBase } from "src/domain/repository/sales.repository";
import { SalesServiceBase } from "src/domain/services/sales.service";

@Injectable()
export class SalesService extends SalesServiceBase {
    constructor(private readonly salesRepository: SalesRepositoryBase) {
        super();
    }
    async execute(): Promise<void> {
        return await this.salesRepository.batch();
    }
}

