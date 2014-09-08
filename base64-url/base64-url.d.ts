
declare module base64Url {
    export function decode(str:string):string;
    export function encode(str:string):string;
    export function unescape(str:string):string;
    export function escape(str:string):string;
}

declare module "base64-url" {
    export = base64Url;
}