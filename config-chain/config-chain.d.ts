

declare function ConfigChain(...args): ConfigChain;
declare module ConfigChain {
    function env(prefix:string, env?);
    function find(find:string);
    function json(...args);
    function ConfigChain():ConfigChain;
    function parse(content, file, type);
}
interface ConfigChain {
    get(s:string, name?:string):any;
    set(key, value, name);
    add(object, name?);
    addUrl(url, type, name?);
    addEnv(prefix, env, name?);
    addString(data, file, type, name?);
    root:Object;
    store:any;
    save(name:string,type);
    sources:any;
    addFile(filename, type, name?);
    on(e:string, cb);
}

declare module "config-chain" {
    export = ConfigChain;
}
