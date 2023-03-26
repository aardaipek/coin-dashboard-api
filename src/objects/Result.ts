export class Result<T>{
    public success: boolean;
    public data: T;

    constructor(success: boolean, data: T){
        this.success = success;
        this.data = data;
    }
}

export class Success extends Result<any> {
    constructor(data: any){
        super(true, data);
    }
}

export class Error extends Result<any> {
    constructor(data: any = { status: false, message: "Error"}){
        super(false, data);
    }
}