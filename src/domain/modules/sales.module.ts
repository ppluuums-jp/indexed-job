import { Module } from "@nestjs/common";
import { SalesRepositoryBase } from "src/domain/repository/sales.repository";
import { Driver } from "src/infrastructures/db/driver";
import { SalesRepositoryImpl } from "src/infrastructures/repository/sales.repository.impl";
import { SalesController } from "src/presentations/controllers/sales.controller";
import { SalesService } from "src/services/sales.service.impl";

@Module({
    imports: [],
    controllers: [SalesController],
    providers: [SalesService, { provide: SalesRepositoryBase, useClass: SalesRepositoryImpl }, Driver],
})
export class SalesModule { }

