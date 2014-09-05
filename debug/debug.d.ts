
interface Logger {
    (...args):void;
}
interface Debug {
    (s:string):Logger;
}

declare var c:Debug;
declare module "debug" {
    export = c;
}
