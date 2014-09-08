
declare class Config {
    static env(prefix:string, env?);
    static find(find:string);
    static json(...args);
    static ConfigChain():Config;
    static parse(content, file, type);
    public get(s:string, name?:string);
    public set(key, value, name);
    public add(object, name?);
    public addUrl(url, type, name?);
    public addEnv(prefix, env, name?);
    public addString(data, file, type, name?);
    public root:Object;
    public store:any;
    public save(name:string,type);
    public sources:any;
    public addFile(filename, type, name?);
    public on(e:string, cb);
    constructor(...args);
}

declare var c:Config;

declare module "config-chain" {
export = c;
}