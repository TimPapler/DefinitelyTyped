/**
 * Created by tim on 13/11/14.
 */

/// <reference path="../node/node.d.ts" />


declare module 'busboy' {

    import stream = require('stream');
    module b{
        interface Busboy extends stream.Stream {
            new (options:BusboyOptions):Busboy;
        }
        interface BusboyOptions {
            headers:Object;
            highWaterMark?:number;
            fileHwm?:number;
            defCharset?:string;
            limits?:{
                fieldNameSize?:number;
                fieldSize?:number;
                fields?:number;
                fileSize?:number;
                files?:number;
                parts?:number;
                headerPairs?:number;
            };
        }
    }
    var b:b.Busboy;
    function Busboy(opions:b.BusboyOptions):b.Busboy;
    export = b;
}
