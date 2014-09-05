/**
 * Created by tim on 03/09/14.
 */
declare module tmp {
    interface FileCleanupCallback {
        ()
    }
    interface FileCreationCallback {
        (err:Error, path:string, fd:any, cleanupCallback:FileCleanupCallback)
    }
    function file(callback:FileCreationCallback);
}

declare module "tmp" {
    export = tmp;
}