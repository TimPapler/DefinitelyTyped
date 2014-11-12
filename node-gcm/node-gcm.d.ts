/**
 * Created by tim on 12/11/14.
 */
declare module 'node-gcm' {
    export class Message {
        addData(key:String, value:any);
        addDataWithObject(object:Object);
    }
    export class Sender {
        constructor(key:String, options:any);
        sendNoRetry(message:String, registrationIds:any[], callback:(err:Error, result:Result)=>void);
        send(message:String, registrationId:any, retries:Number, callback:Function);
    }
    export class Result {

    }
    export class MulitcastResult {

    }
    export class Constants {

    }
}