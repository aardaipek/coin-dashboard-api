
export class StockResponse {
    openPrice: any;
    closePrice: any;

    public constructor(init?:Partial<StockResponse>){
        Object.assign(this, init);
    }
}