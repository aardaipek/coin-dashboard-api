import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinControllerController } from './controllers/coin-controller/coin-controller.controller';
import { StockService } from './services/stock-service/stock-service';

@Module({
  imports: [],
  controllers: [AppController, CoinControllerController],
  providers: [AppService, StockService],
})
export class AppModule {}
