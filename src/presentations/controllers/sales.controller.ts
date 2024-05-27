import { Controller } from "@nestjs/common";
import { SalesService } from "src/services/sales.service.impl";

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) { }
    async batch(): Promise<void> {
        return this.salesService.execute();
    }
}
