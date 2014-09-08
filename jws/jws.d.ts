/**
 * Created by tim on 05/09/14.
 */



declare module jws {
    export class VerifyStream extends Stream {
        verify():boolean;
    }
    export class SignStream extends Stream {
        sign():string;
    }

    export var ALGORITHMS:string[];
    export interface Options {
        header : {alg:string};
        payload: any;
        key: any;
        secret: string;
        privateKey: any;
    }
    export function createSign(options:Options):SignStream;
    export function createVerify(options:Options):VerifyStream;

    export function sign();
    export function verify();
    export function decode();
    export function isValid();
}

declare module "jws" {
    export = jws;
}