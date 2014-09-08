
declare function Debug(s:string): Debug;
declare module Debug {
}
interface Debug {
    (...args):void;

}

declare module "debug" {
export = Debug;
}
