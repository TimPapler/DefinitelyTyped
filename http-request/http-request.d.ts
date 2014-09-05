/**
 * Created by tim on 03/09/14.
 */

declare module httpRequest {
    export interface Callback {
        (error:Error, res:any):void;
    }
    export function mimeSniff(url:string, callback:Callback);
    export function get(options:any, destination:string, callback:Callback);
}

declare module "http-request" {
    export = httpRequest;
}