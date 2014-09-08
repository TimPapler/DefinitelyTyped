/// <reference path="../node/node.d.ts" />

declare module "jws" {
    import stream = require("stream");
    export interface VerifyStream extends stream.Stream {
        verify():boolean;
    }
    export interface SignStream extends stream.Stream {
        sign():string;
    }

    export var ALGORITHMS:string[];
    export interface Options {
        header : {alg:string};
        payload?: any;
        key?: any;
        secret?: string;
        privateKey?: any;
    }
    export function createSign(options:Options):SignStream;
    export function createVerify(options:Options):VerifyStream;

    export function sign();
    export function verify();
    export function decode();
    export function isValid();
}
