/**
 * Created by tim on 05/09/14.
 */

declare module jws {
    export interface Options {
        header : {alg:string};
        payload: any;
        key: any;
        secret: string;
        privateKey: any;
    }
    export function createSign(options:Options):any;
    export function createVerify();
}

declare module "jws" {
    export = jws;
}