
declare module multiparty {
    export interface Callback {
        (err:Error, fields:any, files:any)
    }
    export interface Form {
        constructor();
        parse(req:any, callback:Callback);
    }
}

declare module "multiparty" {
    export = multiparty;
}