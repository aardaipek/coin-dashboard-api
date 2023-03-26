import { StockResponse } from 'src/objects/StockResponse';
import axios from "axios";
import { Success, Error } from 'src/objects/Result'; 
import { PolygonConfig } from 'src/utils/config';

export class StockService {

    async getTickers(market, type): Promise<StockResponse> {
        const url = `${PolygonConfig.baseUrl}tickers?market=${market}&type=${type}&active=true`;
        console.log(url);
        try{
            const response = await axios.get(url,{ headers:{"Authorization": PolygonConfig.apiKey}});
            console.log(response.data);
        }catch(err){
            console.log(err);
        }
        
        return new StockResponse({openPrice: 1, closePrice: 2});
    }
}
