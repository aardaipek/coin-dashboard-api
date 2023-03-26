import { Controller, Get, Param } from "@nestjs/common";
import { Result } from 'src/objects/Result';
import { StockResponse } from 'src/objects/StockResponse';
import { StockService } from 'src/services/stock-service/stock-service';

@Controller('coin')
export class CoinControllerController {
    constructor(private readonly stockService: StockService){}

    @Get("getTickers/:market/:type")
    async getTickers(@Param("market") market: string, @Param("type") type: string): Promise<Result<StockResponse>> {
        const stockResult : StockResponse = await this.stockService.getTickers(market, type);
        return new Result(true,stockResult);
    }
}
