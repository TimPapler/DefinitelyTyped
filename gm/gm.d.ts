/**
 * Created by tim on 13/11/14.
 */

declare function gm(...args): gm;
declare module gm{

}
interface gm{
    resize(w:number, h:number);
    quality(q:number);
    write(dest:string, callback:(err)=>void);
}

declare module "gm" {
    export = gm;
}
