/**
 * Created by tim on 12/11/14.
 */
/// <reference path="../node/node.d.ts" />


declare module 'apn' {
    import events = require('events');
    interface Options {
        /**
         * cert {Buffer|String} TThe filename of the connection certificate to load from disk, or a Buffer/String containing the certificate data. (Defaults to: cert.pem)
         */
        cert?:any;
        /**
         * key {Buffer|String} The filename of the connection key to load from disk, or a Buffer/String containing the key data. (Defaults to: key.pem)
         */
        key?:any;
        /**
         * ca An array of trusted certificates. Each element should contain either a filename to load, or a Buffer/String (in PEM format) to be used directly. If this is omitted several well known "root" CAs will be used. - You may need to use this as some environments don't include the CA used by Apple (entrust_2048).
         */
        ca?:any[];
        /**
         * pfx {Buffer|String} File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer containing the PFX data. If supplied will be used instead of certificate and key above.
         */
        pfx?:any;
        /**
         * passphrase {String} The passphrase for the connection key, if required
         */
        passphrase?:String;
        /**
         * production {Boolean} Specifies which environment to connect to: Production (if true) or Sandbox - The hostname will be set automatically. (Defaults to NODE_ENV == "production", i.e. false unless the NODE_ENV environment variable is set accordingly)
         */
        production?:Boolean;
        /**
         * port {Number} Gateway port (Defaults to: 2195)
         */
        port?:Number;
        /**
         * rejectUnauthorized {Boolean} Reject Unauthorized property to be passed through to tls.connect() (Defaults to true)
         */
        rejectUnauthorized?:Boolean
    }
    export interface FeedbackOptions extends Options {
        /**
         * batchFeedback {Boolean} Sets the behaviour for triggering the feedback event. When true the event will be triggered once per connection with an array of timestamp and device token tuples. Otherwise a feedback event will be emitted once per token received. (Defaults to: true)
         */
        batchFeedback?:Boolean;
        /**
         * batchSize {Number} The maximum number of tokens to pass when emitting the event - a value of 0 will cause all tokens to be passed after connection is reset. After this number of tokens are received the feedback event will be emitted. (Only applies when batchFeedback is enabled)
         */
        batchSize?:Number;
        /**
         * interval {Number} How often to automatically poll the feedback service. Set to 0 to disable. (Defaults to: 3600)
         */
        interval?:Number;

    }
    export interface ConnectionOptions extends Options {
        /**
         * enhanced {Boolean} Whether to use the enhanced notification format (recommended, defaults to: true)
         */
        enhanced?:Boolean;
        /**
         * cacheLength {Number} Number of notifications to cache for error purposes (See "Handling Errors" below, (Defaults to: 100)
         */
        cacheLength?:Number;
        /**
         * autoAdjustCache {Boolean} Whether the cache should grow in response to messages being lost after errors. (Will still emit a 'cacheTooSmall' event) (Defaults to: false)
         */
        autoAdjustCache?:Boolean;
        /**
         * maxConnections {Number} The maximum number of connections to create for sending messages. (Defaults to: 1)
         */
        maxConnections?:Number;
        /**
         * connectTimeout {Number} The duration of time the module should wait, in milliseconds, when trying to establish a connection to Apple before failing. 0 = Disabled. {Defaults to: 10000}
         */
        connectTimeout?:Number;
        /**
         * connectionTimeout {Number} The duration the socket should stay alive with no activity in milliseconds. 0 = Disabled. (Defaults to: 0)
         */
        connectionTimeout?:Number;
        /**
         * connectionRetryLimit {Number} The maximum number of connection failures that will be tolerated before apn will "terminate". See below. (Defaults to: 10)
         */
        connectionRetryLimit?:Number;
        /**
         * buffersNotifications {Boolean} Whether to buffer notifications and resend them after failure. (Defaults to: true)
         */
        buffersNotifications?:Boolean;
        /**
         * fastMode {Boolean} Whether to aggresively empty the notification buffer while connected - if set to true node-apn may enter a tight loop under heavy load while delivering notifications. (Defaults to: false)
         */
        fastMode?:Boolean;
        /**
         * legacy {Boolean} Whether to use the pre-iOS 7 protocol format. (Defaults to false)
         */
        legacy?:Boolean;
        /**
         * largePayloads {Boolean} Whether to raise the notification limit from 256 bytes to 2048 bytes - not yet available in Production, automatically enabled for Sandbox.
         */
        largePayloads?:Boolean;
    }
    export class Notification {

        /**
         * Set the expiry value on the payload
         * @param {Number} [expiry] Timestamp when the notification should expire.
         * @since v1.3.5
         */
        expiry:Number;
        /**
         * Set the priority
         * @param {Number} [priority=10] Priority value for the notification.
         * @since v1.3.9
         */
        priority:Number;
        /**
         * Set the "badge" value on the alert object
         * @param {Number} [badge] Badge Value
         * @since v1.3.5
         */
        badge:Number;
        /**
         * Set the "sound" value on the alert object
         * @param {String} [sound] Sound file name
         * @since v1.3.5
         */
        sound:String;
        /**
         * Set the alert text for the notification
         * @param {String} alertText The text of the alert message.
         * @see The <a href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100-SW1">Payload Documentation</a>
         * @since v1.2.0
         */
        text:String;
        /**
         * Set the alert title for the notification - used with Safari Push Notifications
         * @param {String} alertTitle The title for the alert.
         * @see The <a href="https://developer.apple.com/library/mac/documentation/NetworkingInternet/Conceptual/NotificationProgrammingGuideForWebsites/PushNotifications/PushNotifications.html#//apple_ref/doc/uid/TP40013225-CH3-SW12">Pushing Notifications</a> in the Notification Programming Guide for Websites
         * @since v1.5.0
         */
        alertTitle:String;
        /**
         * Set the alert action label for the notification - used with Safari Push Notifications
         * @param {String} alertLabel The label for the alert action button.
         * @see The <a href="https://developer.apple.com/library/mac/documentation/NetworkingInternet/Conceptual/NotificationProgrammingGuideForWebsites/PushNotifications/PushNotifications.html#//apple_ref/doc/uid/TP40013225-CH3-SW12">Pushing Notifications</a> in the Notification Programming Guide for Websites
         * @since v1.5.0
         */
        alertAction:String;
        /**
         * Set the action-loc-key property on the alert object
         * @param {String} [key] If a string is specified, displays an alert with two buttons, whose behavior is described in Table 3-1. However, iOS uses the string as a key to get a localized string in the current localization to use for the right button’s title instead of “View”. If the value is null, the system displays an alert with a single OK button that simply dismisses the alert when tapped.
         * @see The <a href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100-SW1">Payload Documentation</a>
         * @since v1.2.0
         */
        actionLocKey:String;
        /**
         * Set the loc-key parameter on the alert object
         * @param {String} [key] A key to an alert-message string in a Localizable.strings file for the current localization (which is set by the user’s language preference).
         * @see The <a href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100-SW1">Payload Documentation</a>
         * @since v1.2.0
         */
        locKey:String;
        /**
         * Set the loc-args parameter on the alert object
         * @param {String[]} [args] Variable string values to appear in place of the format specifiers in loc-key.
         * @see The <a href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100-SW1">Payload Documentation</a>
         * @since v1.2.0
         */
        locArgs:String[];
        /**
         * Set the launch-image parameter on the alert object
         * @param {String} [image] The filename of an image file in the application bundle; it may include the extension or omit it.
         * @see The <a href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100-SW1">Payload Documentation</a>
         * @since v1.2.0
         */
        launchImage:String;
        /**
         * Set the 'content-available' flag on the payload
         * @param {Boolean} [contentAvailable] Whether the content-available flag should be set or not.
         * @since v1.3.5
         */
        contentAvailable:Boolean;
        /**
         * Set the 'content-available' flag on the payload
         * @param {Boolean} [newsstandAvailable] Whether the content-available flag should be set or not.
         * @since v1.3.5
         */
        newsstandAvailable:Boolean;
        /**
         * Set the 'mdm' flag on the payload
         * @param {Object} [mdm] The mdm property for the payload.
         * @since v1.3.5
         */
        setMDM(mdm:Object);
        /**
         * Set the 'truncateAtWordEnd' flag for truncation logic
         * @param {Boolean} [truncateAtWordEnd] Whether the truncateAtWordEnd flag should be set or not.
         */
        truncateAtWordEnd:Boolean;

        /**
         * Set the urlArgs for the notification
         * @param {Array} [urlArgs] The url args for the endpoint
         * @see The <a href="https://developer.apple.com/library/prerelease/mac/documentation/NetworkingInternet/Conceptual/NotificationProgrammingGuideForWebsites/PushNotifications/PushNotifications.html#//apple_ref/doc/uid/TP40013225-CH3-SW12">Web Payload Documentation</a>
         * @since v1.4.1
         */
        urlArgs:any[];

        /**
         * Set the category for the notification
         * @param {String} [category] The category for the push notification action
         */
        category:String;

        /**
         * @returns {Number} Byte length of the notification payload
         * @since v1.2.0
         */
        length():Number;

        /**
         * If the notification payload is too long to send this method will attempt to trim the alert body text.
         * @returns {Number} The number of characters removed from the body text. If a negative value is returned, the text is too short to be trimmed enough.
         * @since v1.2.0
         */
        trim(length:Number):Number;

        /**
         * Compile a notification down to its JSON format. Compilation is final, changes made to the notification after this method is called will not be reflected in further calls.
         * @returns {String} JSON payload for the notification.
         * @since v1.3.0
         */
        compile():String;

        alert:String;

        payload:any;

    }
    export class Connection {
        constructor(options:ConnectionOptions);
        setCacheLength(newLength:Number);
        /**
         * Queue a notification for delivery to recipients
         * @param {Notification} notification The Notification object to be sent
         * @param {Device|String|Buffer|Device[]|String[]|Buffer[]} recipient The token(s) for devices the notification should be delivered to.
         * @since v1.3.0
         */
        public pushNotification(notification:Notification, recipient:any);

        /**
         * End connections with APNS once we've finished sending all notifications
         */
        shutdown();

    }
    export class Device {
        constructor(token:String);
    }
    export class Feedback extends events.EventEmitter {
        constructor(options:FeedbackOptions);

        start();

        cancel();
    }
}