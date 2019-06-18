/*eslint-disable*/
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

$util.Long = require("long");

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.XmPushActionContainer = (function() {

    /**
     * Properties of a XmPushActionContainer.
     * @exports IXmPushActionContainer
     * @interface IXmPushActionContainer
     * @property {ActionType} action XmPushActionContainer action
     * @property {boolean} encryptAction XmPushActionContainer encryptAction
     * @property {boolean} isRequest XmPushActionContainer isRequest
     * @property {Uint8Array} pushAction XmPushActionContainer pushAction
     * @property {string|null} [appid] XmPushActionContainer appid
     * @property {string|null} [packageName] XmPushActionContainer packageName
     * @property {ITarget} target XmPushActionContainer target
     * @property {IPushMetaInfo|null} [metaInfo] XmPushActionContainer metaInfo
     */

    /**
     * Constructs a new XmPushActionContainer.
     * @exports XmPushActionContainer
     * @classdesc Represents a XmPushActionContainer.
     * @implements IXmPushActionContainer
     * @constructor
     * @param {IXmPushActionContainer=} [properties] Properties to set
     */
    function XmPushActionContainer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionContainer action.
     * @member {ActionType} action
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.action = 1;

    /**
     * XmPushActionContainer encryptAction.
     * @member {boolean} encryptAction
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.encryptAction = false;

    /**
     * XmPushActionContainer isRequest.
     * @member {boolean} isRequest
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.isRequest = false;

    /**
     * XmPushActionContainer pushAction.
     * @member {Uint8Array} pushAction
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.pushAction = $util.newBuffer([]);

    /**
     * XmPushActionContainer appid.
     * @member {string} appid
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.appid = "";

    /**
     * XmPushActionContainer packageName.
     * @member {string} packageName
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.packageName = "";

    /**
     * XmPushActionContainer target.
     * @member {ITarget} target
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.target = null;

    /**
     * XmPushActionContainer metaInfo.
     * @member {IPushMetaInfo|null|undefined} metaInfo
     * @memberof XmPushActionContainer
     * @instance
     */
    XmPushActionContainer.prototype.metaInfo = null;

    /**
     * Creates a new XmPushActionContainer instance using the specified properties.
     * @function create
     * @memberof XmPushActionContainer
     * @static
     * @param {IXmPushActionContainer=} [properties] Properties to set
     * @returns {XmPushActionContainer} XmPushActionContainer instance
     */
    XmPushActionContainer.create = function create(properties) {
        return new XmPushActionContainer(properties);
    };

    /**
     * Encodes the specified XmPushActionContainer message. Does not implicitly {@link XmPushActionContainer.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionContainer
     * @static
     * @param {IXmPushActionContainer} message XmPushActionContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionContainer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.encryptAction);
        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isRequest);
        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.pushAction);
        if (message.appid != null && message.hasOwnProperty("appid"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.appid);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.packageName);
        $root.Target.encode(message.target, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo"))
            $root.PushMetaInfo.encode(message.metaInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified XmPushActionContainer message, length delimited. Does not implicitly {@link XmPushActionContainer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionContainer
     * @static
     * @param {IXmPushActionContainer} message XmPushActionContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionContainer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionContainer message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionContainer} XmPushActionContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionContainer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionContainer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.encryptAction = reader.bool();
                break;
            case 3:
                message.isRequest = reader.bool();
                break;
            case 4:
                message.pushAction = reader.bytes();
                break;
            case 5:
                message.appid = reader.string();
                break;
            case 6:
                message.packageName = reader.string();
                break;
            case 7:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 8:
                message.metaInfo = $root.PushMetaInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("action"))
            throw $util.ProtocolError("missing required 'action'", { instance: message });
        if (!message.hasOwnProperty("encryptAction"))
            throw $util.ProtocolError("missing required 'encryptAction'", { instance: message });
        if (!message.hasOwnProperty("isRequest"))
            throw $util.ProtocolError("missing required 'isRequest'", { instance: message });
        if (!message.hasOwnProperty("pushAction"))
            throw $util.ProtocolError("missing required 'pushAction'", { instance: message });
        if (!message.hasOwnProperty("target"))
            throw $util.ProtocolError("missing required 'target'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionContainer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionContainer} XmPushActionContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionContainer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionContainer message.
     * @function verify
     * @memberof XmPushActionContainer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionContainer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.action) {
        default:
            return "action: enum value expected";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 22:
        case 23:
        case 24:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 107:
        case 108:
        case 109:
        case 110:
        case 112:
        case 113:
        case 114:
        case 115:
        case 200:
            break;
        }
        if (typeof message.encryptAction !== "boolean")
            return "encryptAction: boolean expected";
        if (typeof message.isRequest !== "boolean")
            return "isRequest: boolean expected";
        if (!(message.pushAction && typeof message.pushAction.length === "number" || $util.isString(message.pushAction)))
            return "pushAction: buffer expected";
        if (message.appid != null && message.hasOwnProperty("appid"))
            if (!$util.isString(message.appid))
                return "appid: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo")) {
            var error = $root.PushMetaInfo.verify(message.metaInfo);
            if (error)
                return "metaInfo." + error;
        }
        return null;
    };

    /**
     * Creates a XmPushActionContainer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionContainer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionContainer} XmPushActionContainer
     */
    XmPushActionContainer.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionContainer)
            return object;
        var message = new $root.XmPushActionContainer();
        switch (object.action) {
        case "Registration":
        case 1:
            message.action = 1;
            break;
        case "UnRegistration":
        case 2:
            message.action = 2;
            break;
        case "Subscription":
        case 3:
            message.action = 3;
            break;
        case "UnSubscription":
        case 4:
            message.action = 4;
            break;
        case "SendMessage":
        case 5:
            message.action = 5;
            break;
        case "AckMessage":
        case 6:
            message.action = 6;
            break;
        case "SetConfig":
        case 7:
            message.action = 7;
            break;
        case "ReportFeedback":
        case 8:
            message.action = 8;
            break;
        case "Notification":
        case 9:
            message.action = 9;
            break;
        case "Command":
        case 10:
            message.action = 10;
            break;
        case "MultiConnectionBroadcast":
        case 11:
            message.action = 11;
            break;
        case "MultiConnectionResult":
        case 12:
            message.action = 12;
            break;
        case "ConnectionKick":
        case 13:
            message.action = 13;
            break;
        case "ApnsMessage":
        case 14:
            message.action = 14;
            break;
        case "IOSDeviceTokenWrite":
        case 15:
            message.action = 15;
            break;
        case "SaveInvalidRegId":
        case 16:
            message.action = 16;
            break;
        case "ApnsCertChanged":
        case 17:
            message.action = 17;
            break;
        case "RegisterDevice":
        case 18:
            message.action = 18;
            break;
        case "ExpandTopicInXmq":
        case 19:
            message.action = 19;
            break;
        case "SendMessageNew":
        case 22:
            message.action = 22;
            break;
        case "ExpandTopicInXmqNew":
        case 23:
            message.action = 23;
            break;
        case "DeleteInvalidMessage":
        case 24:
            message.action = 24;
            break;
        case "BadAction":
        case 99:
            message.action = 99;
            break;
        case "Presence":
        case 100:
            message.action = 100;
            break;
        case "FetchOfflineMessage":
        case 101:
            message.action = 101;
            break;
        case "SaveJob":
        case 102:
            message.action = 102;
            break;
        case "Broadcast":
        case 103:
            message.action = 103;
            break;
        case "BatchPresence":
        case 104:
            message.action = 104;
            break;
        case "BatchMessage":
        case 105:
            message.action = 105;
            break;
        case "StatCounter":
        case 107:
            message.action = 107;
            break;
        case "FetchTopicMessage":
        case 108:
            message.action = 108;
            break;
        case "DeleteAliasCache":
        case 109:
            message.action = 109;
            break;
        case "UpdateRegistration":
        case 110:
            message.action = 110;
            break;
        case "BatchMessageNew":
        case 112:
            message.action = 112;
            break;
        case "PublicWelfareMessage":
        case 113:
            message.action = 113;
            break;
        case "RevokeMessage":
        case 114:
            message.action = 114;
            break;
        case "NotifyAwakeApp":
        case 115:
            message.action = 115;
            break;
        case "SimulatorJob":
        case 200:
            message.action = 200;
            break;
        }
        if (object.encryptAction != null)
            message.encryptAction = Boolean(object.encryptAction);
        if (object.isRequest != null)
            message.isRequest = Boolean(object.isRequest);
        if (object.pushAction != null)
            if (typeof object.pushAction === "string")
                $util.base64.decode(object.pushAction, message.pushAction = $util.newBuffer($util.base64.length(object.pushAction)), 0);
            else if (object.pushAction.length)
                message.pushAction = object.pushAction;
        if (object.appid != null)
            message.appid = String(object.appid);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionContainer.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.metaInfo != null) {
            if (typeof object.metaInfo !== "object")
                throw TypeError(".XmPushActionContainer.metaInfo: object expected");
            message.metaInfo = $root.PushMetaInfo.fromObject(object.metaInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionContainer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionContainer
     * @static
     * @param {XmPushActionContainer} message XmPushActionContainer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionContainer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.action = options.enums === String ? "Registration" : 1;
            object.encryptAction = false;
            object.isRequest = false;
            if (options.bytes === String)
                object.pushAction = "";
            else {
                object.pushAction = [];
                if (options.bytes !== Array)
                    object.pushAction = $util.newBuffer(object.pushAction);
            }
            object.appid = "";
            object.packageName = "";
            object.target = null;
            object.metaInfo = null;
        }
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = options.enums === String ? $root.ActionType[message.action] : message.action;
        if (message.encryptAction != null && message.hasOwnProperty("encryptAction"))
            object.encryptAction = message.encryptAction;
        if (message.isRequest != null && message.hasOwnProperty("isRequest"))
            object.isRequest = message.isRequest;
        if (message.pushAction != null && message.hasOwnProperty("pushAction"))
            object.pushAction = options.bytes === String ? $util.base64.encode(message.pushAction, 0, message.pushAction.length) : options.bytes === Array ? Array.prototype.slice.call(message.pushAction) : message.pushAction;
        if (message.appid != null && message.hasOwnProperty("appid"))
            object.appid = message.appid;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo"))
            object.metaInfo = $root.PushMetaInfo.toObject(message.metaInfo, options);
        return object;
    };

    /**
     * Converts this XmPushActionContainer to JSON.
     * @function toJSON
     * @memberof XmPushActionContainer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionContainer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionContainer;
})();

$root.XmPushActionRegistration = (function() {

    /**
     * Properties of a XmPushActionRegistration.
     * @exports IXmPushActionRegistration
     * @interface IXmPushActionRegistration
     * @property {string|null} [debug] XmPushActionRegistration debug
     * @property {ITarget|null} [target] XmPushActionRegistration target
     * @property {string} id XmPushActionRegistration id
     * @property {string} appId XmPushActionRegistration appId
     * @property {string|null} [appVersion] XmPushActionRegistration appVersion
     * @property {string|null} [packageName] XmPushActionRegistration packageName
     * @property {string} token XmPushActionRegistration token
     * @property {string|null} [deviceId] XmPushActionRegistration deviceId
     * @property {string|null} [aliasName] XmPushActionRegistration aliasName
     * @property {string|null} [sdkVersion] XmPushActionRegistration sdkVersion
     * @property {string|null} [regId] XmPushActionRegistration regId
     * @property {string|null} [pushSdkVersionName] XmPushActionRegistration pushSdkVersionName
     * @property {number|null} [pushSdkVersionCode] XmPushActionRegistration pushSdkVersionCode
     * @property {number|null} [appVersionCode] XmPushActionRegistration appVersionCode
     * @property {string|null} [androidId] XmPushActionRegistration androidId
     * @property {string|null} [imei] XmPushActionRegistration imei
     * @property {string|null} [serial] XmPushActionRegistration serial
     * @property {string|null} [imeiMd5] XmPushActionRegistration imeiMd5
     * @property {number|null} [spaceId] XmPushActionRegistration spaceId
     * @property {RegistrationReason|null} [reason] XmPushActionRegistration reason
     * @property {boolean|null} [validateToken] XmPushActionRegistration validateToken
     * @property {number|Long|null} [miid] XmPushActionRegistration miid
     * @property {number|Long|null} [createdTs] XmPushActionRegistration createdTs
     * @property {string|null} [subImei] XmPushActionRegistration subImei
     * @property {string|null} [subImeiMd5] XmPushActionRegistration subImeiMd5
     * @property {string|null} [connectionAttrs] XmPushActionRegistration connectionAttrs
     * @property {boolean|null} [cleanOldRegInfo] XmPushActionRegistration cleanOldRegInfo
     * @property {string|null} [oldRegId] XmPushActionRegistration oldRegId
     */

    /**
     * Constructs a new XmPushActionRegistration.
     * @exports XmPushActionRegistration
     * @classdesc Represents a XmPushActionRegistration.
     * @implements IXmPushActionRegistration
     * @constructor
     * @param {IXmPushActionRegistration=} [properties] Properties to set
     */
    function XmPushActionRegistration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionRegistration debug.
     * @member {string} debug
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.debug = "";

    /**
     * XmPushActionRegistration target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.target = null;

    /**
     * XmPushActionRegistration id.
     * @member {string} id
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.id = "";

    /**
     * XmPushActionRegistration appId.
     * @member {string} appId
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.appId = "";

    /**
     * XmPushActionRegistration appVersion.
     * @member {string} appVersion
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.appVersion = "";

    /**
     * XmPushActionRegistration packageName.
     * @member {string} packageName
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.packageName = "";

    /**
     * XmPushActionRegistration token.
     * @member {string} token
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.token = "";

    /**
     * XmPushActionRegistration deviceId.
     * @member {string} deviceId
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.deviceId = "";

    /**
     * XmPushActionRegistration aliasName.
     * @member {string} aliasName
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.aliasName = "";

    /**
     * XmPushActionRegistration sdkVersion.
     * @member {string} sdkVersion
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.sdkVersion = "";

    /**
     * XmPushActionRegistration regId.
     * @member {string} regId
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.regId = "";

    /**
     * XmPushActionRegistration pushSdkVersionName.
     * @member {string} pushSdkVersionName
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.pushSdkVersionName = "";

    /**
     * XmPushActionRegistration pushSdkVersionCode.
     * @member {number} pushSdkVersionCode
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.pushSdkVersionCode = 0;

    /**
     * XmPushActionRegistration appVersionCode.
     * @member {number} appVersionCode
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.appVersionCode = 0;

    /**
     * XmPushActionRegistration androidId.
     * @member {string} androidId
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.androidId = "";

    /**
     * XmPushActionRegistration imei.
     * @member {string} imei
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.imei = "";

    /**
     * XmPushActionRegistration serial.
     * @member {string} serial
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.serial = "";

    /**
     * XmPushActionRegistration imeiMd5.
     * @member {string} imeiMd5
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.imeiMd5 = "";

    /**
     * XmPushActionRegistration spaceId.
     * @member {number} spaceId
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.spaceId = 0;

    /**
     * XmPushActionRegistration reason.
     * @member {RegistrationReason} reason
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.reason = 0;

    /**
     * XmPushActionRegistration validateToken.
     * @member {boolean} validateToken
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.validateToken = false;

    /**
     * XmPushActionRegistration miid.
     * @member {number|Long} miid
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.miid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionRegistration createdTs.
     * @member {number|Long} createdTs
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.createdTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionRegistration subImei.
     * @member {string} subImei
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.subImei = "";

    /**
     * XmPushActionRegistration subImeiMd5.
     * @member {string} subImeiMd5
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.subImeiMd5 = "";

    /**
     * XmPushActionRegistration connectionAttrs.
     * @member {string} connectionAttrs
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.connectionAttrs = "";

    /**
     * XmPushActionRegistration cleanOldRegInfo.
     * @member {boolean} cleanOldRegInfo
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.cleanOldRegInfo = false;

    /**
     * XmPushActionRegistration oldRegId.
     * @member {string} oldRegId
     * @memberof XmPushActionRegistration
     * @instance
     */
    XmPushActionRegistration.prototype.oldRegId = "";

    /**
     * Creates a new XmPushActionRegistration instance using the specified properties.
     * @function create
     * @memberof XmPushActionRegistration
     * @static
     * @param {IXmPushActionRegistration=} [properties] Properties to set
     * @returns {XmPushActionRegistration} XmPushActionRegistration instance
     */
    XmPushActionRegistration.create = function create(properties) {
        return new XmPushActionRegistration(properties);
    };

    /**
     * Encodes the specified XmPushActionRegistration message. Does not implicitly {@link XmPushActionRegistration.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionRegistration
     * @static
     * @param {IXmPushActionRegistration} message XmPushActionRegistration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionRegistration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.appVersion);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.packageName);
        writer.uint32(/* id 7, wireType 2 =*/58).string(message.token);
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.deviceId);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.aliasName);
        if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.sdkVersion);
        if (message.regId != null && message.hasOwnProperty("regId"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.regId);
        if (message.pushSdkVersionName != null && message.hasOwnProperty("pushSdkVersionName"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.pushSdkVersionName);
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.pushSdkVersionCode);
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.appVersionCode);
        if (message.androidId != null && message.hasOwnProperty("androidId"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.androidId);
        if (message.imei != null && message.hasOwnProperty("imei"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.imei);
        if (message.serial != null && message.hasOwnProperty("serial"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.serial);
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.imeiMd5);
        if (message.spaceId != null && message.hasOwnProperty("spaceId"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.spaceId);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.reason);
        if (message.validateToken != null && message.hasOwnProperty("validateToken"))
            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.validateToken);
        if (message.miid != null && message.hasOwnProperty("miid"))
            writer.uint32(/* id 22, wireType 0 =*/176).int64(message.miid);
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            writer.uint32(/* id 23, wireType 0 =*/184).int64(message.createdTs);
        if (message.subImei != null && message.hasOwnProperty("subImei"))
            writer.uint32(/* id 24, wireType 2 =*/194).string(message.subImei);
        if (message.subImeiMd5 != null && message.hasOwnProperty("subImeiMd5"))
            writer.uint32(/* id 25, wireType 2 =*/202).string(message.subImeiMd5);
        if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs"))
            writer.uint32(/* id 26, wireType 2 =*/210).string(message.connectionAttrs);
        if (message.cleanOldRegInfo != null && message.hasOwnProperty("cleanOldRegInfo"))
            writer.uint32(/* id 27, wireType 0 =*/216).bool(message.cleanOldRegInfo);
        if (message.oldRegId != null && message.hasOwnProperty("oldRegId"))
            writer.uint32(/* id 28, wireType 2 =*/226).string(message.oldRegId);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionRegistration message, length delimited. Does not implicitly {@link XmPushActionRegistration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionRegistration
     * @static
     * @param {IXmPushActionRegistration} message XmPushActionRegistration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionRegistration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionRegistration message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionRegistration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionRegistration} XmPushActionRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionRegistration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionRegistration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.appVersion = reader.string();
                break;
            case 6:
                message.packageName = reader.string();
                break;
            case 7:
                message.token = reader.string();
                break;
            case 8:
                message.deviceId = reader.string();
                break;
            case 9:
                message.aliasName = reader.string();
                break;
            case 10:
                message.sdkVersion = reader.string();
                break;
            case 11:
                message.regId = reader.string();
                break;
            case 12:
                message.pushSdkVersionName = reader.string();
                break;
            case 13:
                message.pushSdkVersionCode = reader.int32();
                break;
            case 14:
                message.appVersionCode = reader.int32();
                break;
            case 15:
                message.androidId = reader.string();
                break;
            case 16:
                message.imei = reader.string();
                break;
            case 17:
                message.serial = reader.string();
                break;
            case 18:
                message.imeiMd5 = reader.string();
                break;
            case 19:
                message.spaceId = reader.int32();
                break;
            case 20:
                message.reason = reader.int32();
                break;
            case 21:
                message.validateToken = reader.bool();
                break;
            case 22:
                message.miid = reader.int64();
                break;
            case 23:
                message.createdTs = reader.int64();
                break;
            case 24:
                message.subImei = reader.string();
                break;
            case 25:
                message.subImeiMd5 = reader.string();
                break;
            case 26:
                message.connectionAttrs = reader.string();
                break;
            case 27:
                message.cleanOldRegInfo = reader.bool();
                break;
            case 28:
                message.oldRegId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionRegistration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionRegistration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionRegistration} XmPushActionRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionRegistration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionRegistration message.
     * @function verify
     * @memberof XmPushActionRegistration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionRegistration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            if (!$util.isString(message.appVersion))
                return "appVersion: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (!$util.isString(message.token))
            return "token: string expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
            if (!$util.isString(message.sdkVersion))
                return "sdkVersion: string expected";
        if (message.regId != null && message.hasOwnProperty("regId"))
            if (!$util.isString(message.regId))
                return "regId: string expected";
        if (message.pushSdkVersionName != null && message.hasOwnProperty("pushSdkVersionName"))
            if (!$util.isString(message.pushSdkVersionName))
                return "pushSdkVersionName: string expected";
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            if (!$util.isInteger(message.pushSdkVersionCode))
                return "pushSdkVersionCode: integer expected";
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            if (!$util.isInteger(message.appVersionCode))
                return "appVersionCode: integer expected";
        if (message.androidId != null && message.hasOwnProperty("androidId"))
            if (!$util.isString(message.androidId))
                return "androidId: string expected";
        if (message.imei != null && message.hasOwnProperty("imei"))
            if (!$util.isString(message.imei))
                return "imei: string expected";
        if (message.serial != null && message.hasOwnProperty("serial"))
            if (!$util.isString(message.serial))
                return "serial: string expected";
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            if (!$util.isString(message.imeiMd5))
                return "imeiMd5: string expected";
        if (message.spaceId != null && message.hasOwnProperty("spaceId"))
            if (!$util.isInteger(message.spaceId))
                return "spaceId: integer expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            switch (message.reason) {
            default:
                return "reason: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.validateToken != null && message.hasOwnProperty("validateToken"))
            if (typeof message.validateToken !== "boolean")
                return "validateToken: boolean expected";
        if (message.miid != null && message.hasOwnProperty("miid"))
            if (!$util.isInteger(message.miid) && !(message.miid && $util.isInteger(message.miid.low) && $util.isInteger(message.miid.high)))
                return "miid: integer|Long expected";
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (!$util.isInteger(message.createdTs) && !(message.createdTs && $util.isInteger(message.createdTs.low) && $util.isInteger(message.createdTs.high)))
                return "createdTs: integer|Long expected";
        if (message.subImei != null && message.hasOwnProperty("subImei"))
            if (!$util.isString(message.subImei))
                return "subImei: string expected";
        if (message.subImeiMd5 != null && message.hasOwnProperty("subImeiMd5"))
            if (!$util.isString(message.subImeiMd5))
                return "subImeiMd5: string expected";
        if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs"))
            if (!$util.isString(message.connectionAttrs))
                return "connectionAttrs: string expected";
        if (message.cleanOldRegInfo != null && message.hasOwnProperty("cleanOldRegInfo"))
            if (typeof message.cleanOldRegInfo !== "boolean")
                return "cleanOldRegInfo: boolean expected";
        if (message.oldRegId != null && message.hasOwnProperty("oldRegId"))
            if (!$util.isString(message.oldRegId))
                return "oldRegId: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionRegistration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionRegistration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionRegistration} XmPushActionRegistration
     */
    XmPushActionRegistration.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionRegistration)
            return object;
        var message = new $root.XmPushActionRegistration();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionRegistration.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.appVersion != null)
            message.appVersion = String(object.appVersion);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.token != null)
            message.token = String(object.token);
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.sdkVersion != null)
            message.sdkVersion = String(object.sdkVersion);
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.pushSdkVersionName != null)
            message.pushSdkVersionName = String(object.pushSdkVersionName);
        if (object.pushSdkVersionCode != null)
            message.pushSdkVersionCode = object.pushSdkVersionCode | 0;
        if (object.appVersionCode != null)
            message.appVersionCode = object.appVersionCode | 0;
        if (object.androidId != null)
            message.androidId = String(object.androidId);
        if (object.imei != null)
            message.imei = String(object.imei);
        if (object.serial != null)
            message.serial = String(object.serial);
        if (object.imeiMd5 != null)
            message.imeiMd5 = String(object.imeiMd5);
        if (object.spaceId != null)
            message.spaceId = object.spaceId | 0;
        switch (object.reason) {
        case "RegIdExpired":
        case 0:
            message.reason = 0;
            break;
        case "PackageUnregistered":
        case 1:
            message.reason = 1;
            break;
        case "Init":
        case 2:
            message.reason = 2;
            break;
        }
        if (object.validateToken != null)
            message.validateToken = Boolean(object.validateToken);
        if (object.miid != null)
            if ($util.Long)
                (message.miid = $util.Long.fromValue(object.miid)).unsigned = false;
            else if (typeof object.miid === "string")
                message.miid = parseInt(object.miid, 10);
            else if (typeof object.miid === "number")
                message.miid = object.miid;
            else if (typeof object.miid === "object")
                message.miid = new $util.LongBits(object.miid.low >>> 0, object.miid.high >>> 0).toNumber();
        if (object.createdTs != null)
            if ($util.Long)
                (message.createdTs = $util.Long.fromValue(object.createdTs)).unsigned = false;
            else if (typeof object.createdTs === "string")
                message.createdTs = parseInt(object.createdTs, 10);
            else if (typeof object.createdTs === "number")
                message.createdTs = object.createdTs;
            else if (typeof object.createdTs === "object")
                message.createdTs = new $util.LongBits(object.createdTs.low >>> 0, object.createdTs.high >>> 0).toNumber();
        if (object.subImei != null)
            message.subImei = String(object.subImei);
        if (object.subImeiMd5 != null)
            message.subImeiMd5 = String(object.subImeiMd5);
        if (object.connectionAttrs != null)
            message.connectionAttrs = String(object.connectionAttrs);
        if (object.cleanOldRegInfo != null)
            message.cleanOldRegInfo = Boolean(object.cleanOldRegInfo);
        if (object.oldRegId != null)
            message.oldRegId = String(object.oldRegId);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionRegistration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionRegistration
     * @static
     * @param {XmPushActionRegistration} message XmPushActionRegistration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionRegistration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.appVersion = "";
            object.packageName = "";
            object.token = "";
            object.deviceId = "";
            object.aliasName = "";
            object.sdkVersion = "";
            object.regId = "";
            object.pushSdkVersionName = "";
            object.pushSdkVersionCode = 0;
            object.appVersionCode = 0;
            object.androidId = "";
            object.imei = "";
            object.serial = "";
            object.imeiMd5 = "";
            object.spaceId = 0;
            object.reason = options.enums === String ? "RegIdExpired" : 0;
            object.validateToken = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.miid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.miid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdTs = options.longs === String ? "0" : 0;
            object.subImei = "";
            object.subImeiMd5 = "";
            object.connectionAttrs = "";
            object.cleanOldRegInfo = false;
            object.oldRegId = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            object.appVersion = message.appVersion;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
            object.sdkVersion = message.sdkVersion;
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.pushSdkVersionName != null && message.hasOwnProperty("pushSdkVersionName"))
            object.pushSdkVersionName = message.pushSdkVersionName;
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            object.pushSdkVersionCode = message.pushSdkVersionCode;
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            object.appVersionCode = message.appVersionCode;
        if (message.androidId != null && message.hasOwnProperty("androidId"))
            object.androidId = message.androidId;
        if (message.imei != null && message.hasOwnProperty("imei"))
            object.imei = message.imei;
        if (message.serial != null && message.hasOwnProperty("serial"))
            object.serial = message.serial;
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            object.imeiMd5 = message.imeiMd5;
        if (message.spaceId != null && message.hasOwnProperty("spaceId"))
            object.spaceId = message.spaceId;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = options.enums === String ? $root.RegistrationReason[message.reason] : message.reason;
        if (message.validateToken != null && message.hasOwnProperty("validateToken"))
            object.validateToken = message.validateToken;
        if (message.miid != null && message.hasOwnProperty("miid"))
            if (typeof message.miid === "number")
                object.miid = options.longs === String ? String(message.miid) : message.miid;
            else
                object.miid = options.longs === String ? $util.Long.prototype.toString.call(message.miid) : options.longs === Number ? new $util.LongBits(message.miid.low >>> 0, message.miid.high >>> 0).toNumber() : message.miid;
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (typeof message.createdTs === "number")
                object.createdTs = options.longs === String ? String(message.createdTs) : message.createdTs;
            else
                object.createdTs = options.longs === String ? $util.Long.prototype.toString.call(message.createdTs) : options.longs === Number ? new $util.LongBits(message.createdTs.low >>> 0, message.createdTs.high >>> 0).toNumber() : message.createdTs;
        if (message.subImei != null && message.hasOwnProperty("subImei"))
            object.subImei = message.subImei;
        if (message.subImeiMd5 != null && message.hasOwnProperty("subImeiMd5"))
            object.subImeiMd5 = message.subImeiMd5;
        if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs"))
            object.connectionAttrs = message.connectionAttrs;
        if (message.cleanOldRegInfo != null && message.hasOwnProperty("cleanOldRegInfo"))
            object.cleanOldRegInfo = message.cleanOldRegInfo;
        if (message.oldRegId != null && message.hasOwnProperty("oldRegId"))
            object.oldRegId = message.oldRegId;
        return object;
    };

    /**
     * Converts this XmPushActionRegistration to JSON.
     * @function toJSON
     * @memberof XmPushActionRegistration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionRegistration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionRegistration;
})();

$root.XmPushActionRegistrationResult = (function() {

    /**
     * Properties of a XmPushActionRegistrationResult.
     * @exports IXmPushActionRegistrationResult
     * @interface IXmPushActionRegistrationResult
     * @property {string|null} [debug] XmPushActionRegistrationResult debug
     * @property {ITarget|null} [target] XmPushActionRegistrationResult target
     * @property {string} id XmPushActionRegistrationResult id
     * @property {string} appId XmPushActionRegistrationResult appId
     * @property {number|Long} errorCode XmPushActionRegistrationResult errorCode
     * @property {string|null} [reason] XmPushActionRegistrationResult reason
     * @property {string|null} [regId] XmPushActionRegistrationResult regId
     * @property {string|null} [regSecret] XmPushActionRegistrationResult regSecret
     * @property {string|null} [packageName] XmPushActionRegistrationResult packageName
     * @property {number|Long|null} [registeredAt] XmPushActionRegistrationResult registeredAt
     * @property {string|null} [aliasName] XmPushActionRegistrationResult aliasName
     * @property {string|null} [clientId] XmPushActionRegistrationResult clientId
     * @property {number|Long|null} [costTime] XmPushActionRegistrationResult costTime
     * @property {string|null} [appVersion] XmPushActionRegistrationResult appVersion
     * @property {number|null} [pushSdkVersionCode] XmPushActionRegistrationResult pushSdkVersionCode
     * @property {string|null} [hybridPushEndpoint] XmPushActionRegistrationResult hybridPushEndpoint
     * @property {number|null} [appVersionCode] XmPushActionRegistrationResult appVersionCode
     * @property {string|null} [region] XmPushActionRegistrationResult region
     */

    /**
     * Constructs a new XmPushActionRegistrationResult.
     * @exports XmPushActionRegistrationResult
     * @classdesc Represents a XmPushActionRegistrationResult.
     * @implements IXmPushActionRegistrationResult
     * @constructor
     * @param {IXmPushActionRegistrationResult=} [properties] Properties to set
     */
    function XmPushActionRegistrationResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionRegistrationResult debug.
     * @member {string} debug
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.debug = "";

    /**
     * XmPushActionRegistrationResult target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.target = null;

    /**
     * XmPushActionRegistrationResult id.
     * @member {string} id
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.id = "";

    /**
     * XmPushActionRegistrationResult appId.
     * @member {string} appId
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.appId = "";

    /**
     * XmPushActionRegistrationResult errorCode.
     * @member {number|Long} errorCode
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionRegistrationResult reason.
     * @member {string} reason
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.reason = "";

    /**
     * XmPushActionRegistrationResult regId.
     * @member {string} regId
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.regId = "";

    /**
     * XmPushActionRegistrationResult regSecret.
     * @member {string} regSecret
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.regSecret = "";

    /**
     * XmPushActionRegistrationResult packageName.
     * @member {string} packageName
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.packageName = "";

    /**
     * XmPushActionRegistrationResult registeredAt.
     * @member {number|Long} registeredAt
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.registeredAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionRegistrationResult aliasName.
     * @member {string} aliasName
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.aliasName = "";

    /**
     * XmPushActionRegistrationResult clientId.
     * @member {string} clientId
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.clientId = "";

    /**
     * XmPushActionRegistrationResult costTime.
     * @member {number|Long} costTime
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.costTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionRegistrationResult appVersion.
     * @member {string} appVersion
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.appVersion = "";

    /**
     * XmPushActionRegistrationResult pushSdkVersionCode.
     * @member {number} pushSdkVersionCode
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.pushSdkVersionCode = 0;

    /**
     * XmPushActionRegistrationResult hybridPushEndpoint.
     * @member {string} hybridPushEndpoint
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.hybridPushEndpoint = "";

    /**
     * XmPushActionRegistrationResult appVersionCode.
     * @member {number} appVersionCode
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.appVersionCode = 0;

    /**
     * XmPushActionRegistrationResult region.
     * @member {string} region
     * @memberof XmPushActionRegistrationResult
     * @instance
     */
    XmPushActionRegistrationResult.prototype.region = "";

    /**
     * Creates a new XmPushActionRegistrationResult instance using the specified properties.
     * @function create
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {IXmPushActionRegistrationResult=} [properties] Properties to set
     * @returns {XmPushActionRegistrationResult} XmPushActionRegistrationResult instance
     */
    XmPushActionRegistrationResult.create = function create(properties) {
        return new XmPushActionRegistrationResult(properties);
    };

    /**
     * Encodes the specified XmPushActionRegistrationResult message. Does not implicitly {@link XmPushActionRegistrationResult.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {IXmPushActionRegistrationResult} message XmPushActionRegistrationResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionRegistrationResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.errorCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.reason);
        if (message.regId != null && message.hasOwnProperty("regId"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.regId);
        if (message.regSecret != null && message.hasOwnProperty("regSecret"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.regSecret);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.packageName);
        if (message.registeredAt != null && message.hasOwnProperty("registeredAt"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.registeredAt);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.aliasName);
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.clientId);
        if (message.costTime != null && message.hasOwnProperty("costTime"))
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.costTime);
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.appVersion);
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.pushSdkVersionCode);
        if (message.hybridPushEndpoint != null && message.hasOwnProperty("hybridPushEndpoint"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.hybridPushEndpoint);
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.appVersionCode);
        if (message.region != null && message.hasOwnProperty("region"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.region);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionRegistrationResult message, length delimited. Does not implicitly {@link XmPushActionRegistrationResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {IXmPushActionRegistrationResult} message XmPushActionRegistrationResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionRegistrationResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionRegistrationResult message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionRegistrationResult} XmPushActionRegistrationResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionRegistrationResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionRegistrationResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.errorCode = reader.int64();
                break;
            case 6:
                message.reason = reader.string();
                break;
            case 7:
                message.regId = reader.string();
                break;
            case 8:
                message.regSecret = reader.string();
                break;
            case 9:
                message.packageName = reader.string();
                break;
            case 10:
                message.registeredAt = reader.int64();
                break;
            case 11:
                message.aliasName = reader.string();
                break;
            case 12:
                message.clientId = reader.string();
                break;
            case 13:
                message.costTime = reader.int64();
                break;
            case 14:
                message.appVersion = reader.string();
                break;
            case 15:
                message.pushSdkVersionCode = reader.int32();
                break;
            case 16:
                message.hybridPushEndpoint = reader.string();
                break;
            case 17:
                message.appVersionCode = reader.int32();
                break;
            case 18:
                message.region = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("errorCode"))
            throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionRegistrationResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionRegistrationResult} XmPushActionRegistrationResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionRegistrationResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionRegistrationResult message.
     * @function verify
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionRegistrationResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
            return "errorCode: integer|Long expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.regId != null && message.hasOwnProperty("regId"))
            if (!$util.isString(message.regId))
                return "regId: string expected";
        if (message.regSecret != null && message.hasOwnProperty("regSecret"))
            if (!$util.isString(message.regSecret))
                return "regSecret: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.registeredAt != null && message.hasOwnProperty("registeredAt"))
            if (!$util.isInteger(message.registeredAt) && !(message.registeredAt && $util.isInteger(message.registeredAt.low) && $util.isInteger(message.registeredAt.high)))
                return "registeredAt: integer|Long expected";
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
        if (message.costTime != null && message.hasOwnProperty("costTime"))
            if (!$util.isInteger(message.costTime) && !(message.costTime && $util.isInteger(message.costTime.low) && $util.isInteger(message.costTime.high)))
                return "costTime: integer|Long expected";
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            if (!$util.isString(message.appVersion))
                return "appVersion: string expected";
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            if (!$util.isInteger(message.pushSdkVersionCode))
                return "pushSdkVersionCode: integer expected";
        if (message.hybridPushEndpoint != null && message.hasOwnProperty("hybridPushEndpoint"))
            if (!$util.isString(message.hybridPushEndpoint))
                return "hybridPushEndpoint: string expected";
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            if (!$util.isInteger(message.appVersionCode))
                return "appVersionCode: integer expected";
        if (message.region != null && message.hasOwnProperty("region"))
            if (!$util.isString(message.region))
                return "region: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionRegistrationResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionRegistrationResult} XmPushActionRegistrationResult
     */
    XmPushActionRegistrationResult.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionRegistrationResult)
            return object;
        var message = new $root.XmPushActionRegistrationResult();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionRegistrationResult.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.regSecret != null)
            message.regSecret = String(object.regSecret);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.registeredAt != null)
            if ($util.Long)
                (message.registeredAt = $util.Long.fromValue(object.registeredAt)).unsigned = false;
            else if (typeof object.registeredAt === "string")
                message.registeredAt = parseInt(object.registeredAt, 10);
            else if (typeof object.registeredAt === "number")
                message.registeredAt = object.registeredAt;
            else if (typeof object.registeredAt === "object")
                message.registeredAt = new $util.LongBits(object.registeredAt.low >>> 0, object.registeredAt.high >>> 0).toNumber();
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.clientId != null)
            message.clientId = String(object.clientId);
        if (object.costTime != null)
            if ($util.Long)
                (message.costTime = $util.Long.fromValue(object.costTime)).unsigned = false;
            else if (typeof object.costTime === "string")
                message.costTime = parseInt(object.costTime, 10);
            else if (typeof object.costTime === "number")
                message.costTime = object.costTime;
            else if (typeof object.costTime === "object")
                message.costTime = new $util.LongBits(object.costTime.low >>> 0, object.costTime.high >>> 0).toNumber();
        if (object.appVersion != null)
            message.appVersion = String(object.appVersion);
        if (object.pushSdkVersionCode != null)
            message.pushSdkVersionCode = object.pushSdkVersionCode | 0;
        if (object.hybridPushEndpoint != null)
            message.hybridPushEndpoint = String(object.hybridPushEndpoint);
        if (object.appVersionCode != null)
            message.appVersionCode = object.appVersionCode | 0;
        if (object.region != null)
            message.region = String(object.region);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionRegistrationResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionRegistrationResult
     * @static
     * @param {XmPushActionRegistrationResult} message XmPushActionRegistrationResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionRegistrationResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
            object.reason = "";
            object.regId = "";
            object.regSecret = "";
            object.packageName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.registeredAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.registeredAt = options.longs === String ? "0" : 0;
            object.aliasName = "";
            object.clientId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.costTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.costTime = options.longs === String ? "0" : 0;
            object.appVersion = "";
            object.pushSdkVersionCode = 0;
            object.hybridPushEndpoint = "";
            object.appVersionCode = 0;
            object.region = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.regSecret != null && message.hasOwnProperty("regSecret"))
            object.regSecret = message.regSecret;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.registeredAt != null && message.hasOwnProperty("registeredAt"))
            if (typeof message.registeredAt === "number")
                object.registeredAt = options.longs === String ? String(message.registeredAt) : message.registeredAt;
            else
                object.registeredAt = options.longs === String ? $util.Long.prototype.toString.call(message.registeredAt) : options.longs === Number ? new $util.LongBits(message.registeredAt.low >>> 0, message.registeredAt.high >>> 0).toNumber() : message.registeredAt;
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        if (message.costTime != null && message.hasOwnProperty("costTime"))
            if (typeof message.costTime === "number")
                object.costTime = options.longs === String ? String(message.costTime) : message.costTime;
            else
                object.costTime = options.longs === String ? $util.Long.prototype.toString.call(message.costTime) : options.longs === Number ? new $util.LongBits(message.costTime.low >>> 0, message.costTime.high >>> 0).toNumber() : message.costTime;
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            object.appVersion = message.appVersion;
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            object.pushSdkVersionCode = message.pushSdkVersionCode;
        if (message.hybridPushEndpoint != null && message.hasOwnProperty("hybridPushEndpoint"))
            object.hybridPushEndpoint = message.hybridPushEndpoint;
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            object.appVersionCode = message.appVersionCode;
        if (message.region != null && message.hasOwnProperty("region"))
            object.region = message.region;
        return object;
    };

    /**
     * Converts this XmPushActionRegistrationResult to JSON.
     * @function toJSON
     * @memberof XmPushActionRegistrationResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionRegistrationResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionRegistrationResult;
})();

$root.XmPushActionUnRegistration = (function() {

    /**
     * Properties of a XmPushActionUnRegistration.
     * @exports IXmPushActionUnRegistration
     * @interface IXmPushActionUnRegistration
     * @property {string|null} [debug] XmPushActionUnRegistration debug
     * @property {ITarget|null} [target] XmPushActionUnRegistration target
     * @property {string} id XmPushActionUnRegistration id
     * @property {string} appId XmPushActionUnRegistration appId
     * @property {string|null} [regId] XmPushActionUnRegistration regId
     * @property {string|null} [appVersion] XmPushActionUnRegistration appVersion
     * @property {string|null} [packageName] XmPushActionUnRegistration packageName
     * @property {string|null} [token] XmPushActionUnRegistration token
     * @property {string|null} [deviceId] XmPushActionUnRegistration deviceId
     * @property {string|null} [aliasName] XmPushActionUnRegistration aliasName
     * @property {boolean|null} [needAck] XmPushActionUnRegistration needAck
     * @property {number|Long|null} [createdTs] XmPushActionUnRegistration createdTs
     */

    /**
     * Constructs a new XmPushActionUnRegistration.
     * @exports XmPushActionUnRegistration
     * @classdesc Represents a XmPushActionUnRegistration.
     * @implements IXmPushActionUnRegistration
     * @constructor
     * @param {IXmPushActionUnRegistration=} [properties] Properties to set
     */
    function XmPushActionUnRegistration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionUnRegistration debug.
     * @member {string} debug
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.debug = "";

    /**
     * XmPushActionUnRegistration target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.target = null;

    /**
     * XmPushActionUnRegistration id.
     * @member {string} id
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.id = "";

    /**
     * XmPushActionUnRegistration appId.
     * @member {string} appId
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.appId = "";

    /**
     * XmPushActionUnRegistration regId.
     * @member {string} regId
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.regId = "";

    /**
     * XmPushActionUnRegistration appVersion.
     * @member {string} appVersion
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.appVersion = "";

    /**
     * XmPushActionUnRegistration packageName.
     * @member {string} packageName
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.packageName = "";

    /**
     * XmPushActionUnRegistration token.
     * @member {string} token
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.token = "";

    /**
     * XmPushActionUnRegistration deviceId.
     * @member {string} deviceId
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.deviceId = "";

    /**
     * XmPushActionUnRegistration aliasName.
     * @member {string} aliasName
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.aliasName = "";

    /**
     * XmPushActionUnRegistration needAck.
     * @member {boolean} needAck
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.needAck = false;

    /**
     * XmPushActionUnRegistration createdTs.
     * @member {number|Long} createdTs
     * @memberof XmPushActionUnRegistration
     * @instance
     */
    XmPushActionUnRegistration.prototype.createdTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new XmPushActionUnRegistration instance using the specified properties.
     * @function create
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {IXmPushActionUnRegistration=} [properties] Properties to set
     * @returns {XmPushActionUnRegistration} XmPushActionUnRegistration instance
     */
    XmPushActionUnRegistration.create = function create(properties) {
        return new XmPushActionUnRegistration(properties);
    };

    /**
     * Encodes the specified XmPushActionUnRegistration message. Does not implicitly {@link XmPushActionUnRegistration.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {IXmPushActionUnRegistration} message XmPushActionUnRegistration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnRegistration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.regId != null && message.hasOwnProperty("regId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.regId);
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.appVersion);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.packageName);
        if (message.token != null && message.hasOwnProperty("token"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.token);
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.deviceId);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.aliasName);
        if (message.needAck != null && message.hasOwnProperty("needAck"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.needAck);
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.createdTs);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionUnRegistration message, length delimited. Does not implicitly {@link XmPushActionUnRegistration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {IXmPushActionUnRegistration} message XmPushActionUnRegistration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnRegistration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionUnRegistration message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionUnRegistration} XmPushActionUnRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnRegistration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionUnRegistration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.regId = reader.string();
                break;
            case 6:
                message.appVersion = reader.string();
                break;
            case 7:
                message.packageName = reader.string();
                break;
            case 8:
                message.token = reader.string();
                break;
            case 9:
                message.deviceId = reader.string();
                break;
            case 10:
                message.aliasName = reader.string();
                break;
            case 11:
                message.needAck = reader.bool();
                break;
            case 12:
                message.createdTs = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionUnRegistration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionUnRegistration} XmPushActionUnRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnRegistration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionUnRegistration message.
     * @function verify
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionUnRegistration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (message.regId != null && message.hasOwnProperty("regId"))
            if (!$util.isString(message.regId))
                return "regId: string expected";
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            if (!$util.isString(message.appVersion))
                return "appVersion: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.needAck != null && message.hasOwnProperty("needAck"))
            if (typeof message.needAck !== "boolean")
                return "needAck: boolean expected";
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (!$util.isInteger(message.createdTs) && !(message.createdTs && $util.isInteger(message.createdTs.low) && $util.isInteger(message.createdTs.high)))
                return "createdTs: integer|Long expected";
        return null;
    };

    /**
     * Creates a XmPushActionUnRegistration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionUnRegistration} XmPushActionUnRegistration
     */
    XmPushActionUnRegistration.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionUnRegistration)
            return object;
        var message = new $root.XmPushActionUnRegistration();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionUnRegistration.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.appVersion != null)
            message.appVersion = String(object.appVersion);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.token != null)
            message.token = String(object.token);
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.needAck != null)
            message.needAck = Boolean(object.needAck);
        if (object.createdTs != null)
            if ($util.Long)
                (message.createdTs = $util.Long.fromValue(object.createdTs)).unsigned = false;
            else if (typeof object.createdTs === "string")
                message.createdTs = parseInt(object.createdTs, 10);
            else if (typeof object.createdTs === "number")
                message.createdTs = object.createdTs;
            else if (typeof object.createdTs === "object")
                message.createdTs = new $util.LongBits(object.createdTs.low >>> 0, object.createdTs.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionUnRegistration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionUnRegistration
     * @static
     * @param {XmPushActionUnRegistration} message XmPushActionUnRegistration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionUnRegistration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.regId = "";
            object.appVersion = "";
            object.packageName = "";
            object.token = "";
            object.deviceId = "";
            object.aliasName = "";
            object.needAck = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdTs = options.longs === String ? "0" : 0;
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            object.appVersion = message.appVersion;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.needAck != null && message.hasOwnProperty("needAck"))
            object.needAck = message.needAck;
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (typeof message.createdTs === "number")
                object.createdTs = options.longs === String ? String(message.createdTs) : message.createdTs;
            else
                object.createdTs = options.longs === String ? $util.Long.prototype.toString.call(message.createdTs) : options.longs === Number ? new $util.LongBits(message.createdTs.low >>> 0, message.createdTs.high >>> 0).toNumber() : message.createdTs;
        return object;
    };

    /**
     * Converts this XmPushActionUnRegistration to JSON.
     * @function toJSON
     * @memberof XmPushActionUnRegistration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionUnRegistration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionUnRegistration;
})();

$root.XmPushActionUnRegistrationResult = (function() {

    /**
     * Properties of a XmPushActionUnRegistrationResult.
     * @exports IXmPushActionUnRegistrationResult
     * @interface IXmPushActionUnRegistrationResult
     * @property {string|null} [debug] XmPushActionUnRegistrationResult debug
     * @property {ITarget|null} [target] XmPushActionUnRegistrationResult target
     * @property {string} id XmPushActionUnRegistrationResult id
     * @property {string} appId XmPushActionUnRegistrationResult appId
     * @property {number|Long} errorCode XmPushActionUnRegistrationResult errorCode
     * @property {string|null} [reason] XmPushActionUnRegistrationResult reason
     * @property {string|null} [packageName] XmPushActionUnRegistrationResult packageName
     * @property {number|Long|null} [unRegisteredAt] XmPushActionUnRegistrationResult unRegisteredAt
     * @property {number|Long|null} [costTime] XmPushActionUnRegistrationResult costTime
     */

    /**
     * Constructs a new XmPushActionUnRegistrationResult.
     * @exports XmPushActionUnRegistrationResult
     * @classdesc Represents a XmPushActionUnRegistrationResult.
     * @implements IXmPushActionUnRegistrationResult
     * @constructor
     * @param {IXmPushActionUnRegistrationResult=} [properties] Properties to set
     */
    function XmPushActionUnRegistrationResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionUnRegistrationResult debug.
     * @member {string} debug
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.debug = "";

    /**
     * XmPushActionUnRegistrationResult target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.target = null;

    /**
     * XmPushActionUnRegistrationResult id.
     * @member {string} id
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.id = "";

    /**
     * XmPushActionUnRegistrationResult appId.
     * @member {string} appId
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.appId = "";

    /**
     * XmPushActionUnRegistrationResult errorCode.
     * @member {number|Long} errorCode
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionUnRegistrationResult reason.
     * @member {string} reason
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.reason = "";

    /**
     * XmPushActionUnRegistrationResult packageName.
     * @member {string} packageName
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.packageName = "";

    /**
     * XmPushActionUnRegistrationResult unRegisteredAt.
     * @member {number|Long} unRegisteredAt
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.unRegisteredAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionUnRegistrationResult costTime.
     * @member {number|Long} costTime
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     */
    XmPushActionUnRegistrationResult.prototype.costTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new XmPushActionUnRegistrationResult instance using the specified properties.
     * @function create
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {IXmPushActionUnRegistrationResult=} [properties] Properties to set
     * @returns {XmPushActionUnRegistrationResult} XmPushActionUnRegistrationResult instance
     */
    XmPushActionUnRegistrationResult.create = function create(properties) {
        return new XmPushActionUnRegistrationResult(properties);
    };

    /**
     * Encodes the specified XmPushActionUnRegistrationResult message. Does not implicitly {@link XmPushActionUnRegistrationResult.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {IXmPushActionUnRegistrationResult} message XmPushActionUnRegistrationResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnRegistrationResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.errorCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.reason);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.packageName);
        if (message.unRegisteredAt != null && message.hasOwnProperty("unRegisteredAt"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.unRegisteredAt);
        if (message.costTime != null && message.hasOwnProperty("costTime"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.costTime);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionUnRegistrationResult message, length delimited. Does not implicitly {@link XmPushActionUnRegistrationResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {IXmPushActionUnRegistrationResult} message XmPushActionUnRegistrationResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnRegistrationResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionUnRegistrationResult message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionUnRegistrationResult} XmPushActionUnRegistrationResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnRegistrationResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionUnRegistrationResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.errorCode = reader.int64();
                break;
            case 6:
                message.reason = reader.string();
                break;
            case 7:
                message.packageName = reader.string();
                break;
            case 8:
                message.unRegisteredAt = reader.int64();
                break;
            case 9:
                message.costTime = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("errorCode"))
            throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionUnRegistrationResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionUnRegistrationResult} XmPushActionUnRegistrationResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnRegistrationResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionUnRegistrationResult message.
     * @function verify
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionUnRegistrationResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
            return "errorCode: integer|Long expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.unRegisteredAt != null && message.hasOwnProperty("unRegisteredAt"))
            if (!$util.isInteger(message.unRegisteredAt) && !(message.unRegisteredAt && $util.isInteger(message.unRegisteredAt.low) && $util.isInteger(message.unRegisteredAt.high)))
                return "unRegisteredAt: integer|Long expected";
        if (message.costTime != null && message.hasOwnProperty("costTime"))
            if (!$util.isInteger(message.costTime) && !(message.costTime && $util.isInteger(message.costTime.low) && $util.isInteger(message.costTime.high)))
                return "costTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a XmPushActionUnRegistrationResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionUnRegistrationResult} XmPushActionUnRegistrationResult
     */
    XmPushActionUnRegistrationResult.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionUnRegistrationResult)
            return object;
        var message = new $root.XmPushActionUnRegistrationResult();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionUnRegistrationResult.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.unRegisteredAt != null)
            if ($util.Long)
                (message.unRegisteredAt = $util.Long.fromValue(object.unRegisteredAt)).unsigned = false;
            else if (typeof object.unRegisteredAt === "string")
                message.unRegisteredAt = parseInt(object.unRegisteredAt, 10);
            else if (typeof object.unRegisteredAt === "number")
                message.unRegisteredAt = object.unRegisteredAt;
            else if (typeof object.unRegisteredAt === "object")
                message.unRegisteredAt = new $util.LongBits(object.unRegisteredAt.low >>> 0, object.unRegisteredAt.high >>> 0).toNumber();
        if (object.costTime != null)
            if ($util.Long)
                (message.costTime = $util.Long.fromValue(object.costTime)).unsigned = false;
            else if (typeof object.costTime === "string")
                message.costTime = parseInt(object.costTime, 10);
            else if (typeof object.costTime === "number")
                message.costTime = object.costTime;
            else if (typeof object.costTime === "object")
                message.costTime = new $util.LongBits(object.costTime.low >>> 0, object.costTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionUnRegistrationResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionUnRegistrationResult
     * @static
     * @param {XmPushActionUnRegistrationResult} message XmPushActionUnRegistrationResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionUnRegistrationResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
            object.reason = "";
            object.packageName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.unRegisteredAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.unRegisteredAt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.costTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.costTime = options.longs === String ? "0" : 0;
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.unRegisteredAt != null && message.hasOwnProperty("unRegisteredAt"))
            if (typeof message.unRegisteredAt === "number")
                object.unRegisteredAt = options.longs === String ? String(message.unRegisteredAt) : message.unRegisteredAt;
            else
                object.unRegisteredAt = options.longs === String ? $util.Long.prototype.toString.call(message.unRegisteredAt) : options.longs === Number ? new $util.LongBits(message.unRegisteredAt.low >>> 0, message.unRegisteredAt.high >>> 0).toNumber() : message.unRegisteredAt;
        if (message.costTime != null && message.hasOwnProperty("costTime"))
            if (typeof message.costTime === "number")
                object.costTime = options.longs === String ? String(message.costTime) : message.costTime;
            else
                object.costTime = options.longs === String ? $util.Long.prototype.toString.call(message.costTime) : options.longs === Number ? new $util.LongBits(message.costTime.low >>> 0, message.costTime.high >>> 0).toNumber() : message.costTime;
        return object;
    };

    /**
     * Converts this XmPushActionUnRegistrationResult to JSON.
     * @function toJSON
     * @memberof XmPushActionUnRegistrationResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionUnRegistrationResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionUnRegistrationResult;
})();

$root.XmPushActionSendMessage = (function() {

    /**
     * Properties of a XmPushActionSendMessage.
     * @exports IXmPushActionSendMessage
     * @interface IXmPushActionSendMessage
     * @property {string|null} [debug] XmPushActionSendMessage debug
     * @property {ITarget|null} [target] XmPushActionSendMessage target
     * @property {string} id XmPushActionSendMessage id
     * @property {string} appId XmPushActionSendMessage appId
     * @property {string|null} [packageName] XmPushActionSendMessage packageName
     * @property {string|null} [topic] XmPushActionSendMessage topic
     * @property {string|null} [aliasName] XmPushActionSendMessage aliasName
     * @property {IPushMessage|null} [message] XmPushActionSendMessage message
     * @property {boolean|null} [needAck] XmPushActionSendMessage needAck
     * @property {string|null} [params] XmPushActionSendMessage params
     * @property {string|null} [category] XmPushActionSendMessage category
     * @property {string|null} [userAccount] XmPushActionSendMessage userAccount
     */

    /**
     * Constructs a new XmPushActionSendMessage.
     * @exports XmPushActionSendMessage
     * @classdesc Represents a XmPushActionSendMessage.
     * @implements IXmPushActionSendMessage
     * @constructor
     * @param {IXmPushActionSendMessage=} [properties] Properties to set
     */
    function XmPushActionSendMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionSendMessage debug.
     * @member {string} debug
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.debug = "";

    /**
     * XmPushActionSendMessage target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.target = null;

    /**
     * XmPushActionSendMessage id.
     * @member {string} id
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.id = "";

    /**
     * XmPushActionSendMessage appId.
     * @member {string} appId
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.appId = "";

    /**
     * XmPushActionSendMessage packageName.
     * @member {string} packageName
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.packageName = "";

    /**
     * XmPushActionSendMessage topic.
     * @member {string} topic
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.topic = "";

    /**
     * XmPushActionSendMessage aliasName.
     * @member {string} aliasName
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.aliasName = "";

    /**
     * XmPushActionSendMessage message.
     * @member {IPushMessage|null|undefined} message
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.message = null;

    /**
     * XmPushActionSendMessage needAck.
     * @member {boolean} needAck
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.needAck = false;

    /**
     * XmPushActionSendMessage params.
     * @member {string} params
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.params = "";

    /**
     * XmPushActionSendMessage category.
     * @member {string} category
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.category = "";

    /**
     * XmPushActionSendMessage userAccount.
     * @member {string} userAccount
     * @memberof XmPushActionSendMessage
     * @instance
     */
    XmPushActionSendMessage.prototype.userAccount = "";

    /**
     * Creates a new XmPushActionSendMessage instance using the specified properties.
     * @function create
     * @memberof XmPushActionSendMessage
     * @static
     * @param {IXmPushActionSendMessage=} [properties] Properties to set
     * @returns {XmPushActionSendMessage} XmPushActionSendMessage instance
     */
    XmPushActionSendMessage.create = function create(properties) {
        return new XmPushActionSendMessage(properties);
    };

    /**
     * Encodes the specified XmPushActionSendMessage message. Does not implicitly {@link XmPushActionSendMessage.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionSendMessage
     * @static
     * @param {IXmPushActionSendMessage} message XmPushActionSendMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionSendMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.packageName);
        if (message.topic != null && message.hasOwnProperty("topic"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.topic);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.aliasName);
        if (message.message != null && message.hasOwnProperty("message"))
            $root.PushMessage.encode(message.message, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.needAck != null && message.hasOwnProperty("needAck"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.needAck);
        if (message.params != null && message.hasOwnProperty("params"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.params);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.category);
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.userAccount);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionSendMessage message, length delimited. Does not implicitly {@link XmPushActionSendMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionSendMessage
     * @static
     * @param {IXmPushActionSendMessage} message XmPushActionSendMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionSendMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionSendMessage message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionSendMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionSendMessage} XmPushActionSendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionSendMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionSendMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.packageName = reader.string();
                break;
            case 6:
                message.topic = reader.string();
                break;
            case 7:
                message.aliasName = reader.string();
                break;
            case 8:
                message.message = $root.PushMessage.decode(reader, reader.uint32());
                break;
            case 9:
                message.needAck = reader.bool();
                break;
            case 10:
                message.params = reader.string();
                break;
            case 11:
                message.category = reader.string();
                break;
            case 12:
                message.userAccount = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionSendMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionSendMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionSendMessage} XmPushActionSendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionSendMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionSendMessage message.
     * @function verify
     * @memberof XmPushActionSendMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionSendMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            var error = $root.PushMessage.verify(message.message);
            if (error)
                return "message." + error;
        }
        if (message.needAck != null && message.hasOwnProperty("needAck"))
            if (typeof message.needAck !== "boolean")
                return "needAck: boolean expected";
        if (message.params != null && message.hasOwnProperty("params"))
            if (!$util.isString(message.params))
                return "params: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            if (!$util.isString(message.userAccount))
                return "userAccount: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionSendMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionSendMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionSendMessage} XmPushActionSendMessage
     */
    XmPushActionSendMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionSendMessage)
            return object;
        var message = new $root.XmPushActionSendMessage();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionSendMessage.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".XmPushActionSendMessage.message: object expected");
            message.message = $root.PushMessage.fromObject(object.message);
        }
        if (object.needAck != null)
            message.needAck = Boolean(object.needAck);
        if (object.params != null)
            message.params = String(object.params);
        if (object.category != null)
            message.category = String(object.category);
        if (object.userAccount != null)
            message.userAccount = String(object.userAccount);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionSendMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionSendMessage
     * @static
     * @param {XmPushActionSendMessage} message XmPushActionSendMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionSendMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.packageName = "";
            object.topic = "";
            object.aliasName = "";
            object.message = null;
            object.needAck = false;
            object.params = "";
            object.category = "";
            object.userAccount = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.PushMessage.toObject(message.message, options);
        if (message.needAck != null && message.hasOwnProperty("needAck"))
            object.needAck = message.needAck;
        if (message.params != null && message.hasOwnProperty("params"))
            object.params = message.params;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            object.userAccount = message.userAccount;
        return object;
    };

    /**
     * Converts this XmPushActionSendMessage to JSON.
     * @function toJSON
     * @memberof XmPushActionSendMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionSendMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionSendMessage;
})();

$root.PushMessage = (function() {

    /**
     * Properties of a PushMessage.
     * @exports IPushMessage
     * @interface IPushMessage
     * @property {ITarget|null} [to] PushMessage to
     * @property {string} id PushMessage id
     * @property {string} appId PushMessage appId
     * @property {string} payload PushMessage payload
     * @property {number|Long|null} [createAt] PushMessage createAt
     * @property {number|Long|null} [ttl] PushMessage ttl
     * @property {string|null} [collapseKey] PushMessage collapseKey
     * @property {string|null} [packageName] PushMessage packageName
     * @property {string|null} [regId] PushMessage regId
     * @property {string|null} [category] PushMessage category
     * @property {string|null} [topic] PushMessage topic
     * @property {IPushMetaInfo|null} [metaInfo] PushMessage metaInfo
     * @property {string|null} [aliasName] PushMessage aliasName
     * @property {boolean|null} [isOnline] PushMessage isOnline
     * @property {string|null} [userAccount] PushMessage userAccount
     * @property {number|Long|null} [miid] PushMessage miid
     * @property {string|null} [gaid] PushMessage gaid
     * @property {string|null} [imeiMd5] PushMessage imeiMd5
     * @property {string|null} [deviceId] PushMessage deviceId
     */

    /**
     * Constructs a new PushMessage.
     * @exports PushMessage
     * @classdesc Represents a PushMessage.
     * @implements IPushMessage
     * @constructor
     * @param {IPushMessage=} [properties] Properties to set
     */
    function PushMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PushMessage to.
     * @member {ITarget|null|undefined} to
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.to = null;

    /**
     * PushMessage id.
     * @member {string} id
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.id = "";

    /**
     * PushMessage appId.
     * @member {string} appId
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.appId = "";

    /**
     * PushMessage payload.
     * @member {string} payload
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.payload = "";

    /**
     * PushMessage createAt.
     * @member {number|Long} createAt
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PushMessage ttl.
     * @member {number|Long} ttl
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.ttl = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PushMessage collapseKey.
     * @member {string} collapseKey
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.collapseKey = "";

    /**
     * PushMessage packageName.
     * @member {string} packageName
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.packageName = "";

    /**
     * PushMessage regId.
     * @member {string} regId
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.regId = "";

    /**
     * PushMessage category.
     * @member {string} category
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.category = "";

    /**
     * PushMessage topic.
     * @member {string} topic
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.topic = "";

    /**
     * PushMessage metaInfo.
     * @member {IPushMetaInfo|null|undefined} metaInfo
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.metaInfo = null;

    /**
     * PushMessage aliasName.
     * @member {string} aliasName
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.aliasName = "";

    /**
     * PushMessage isOnline.
     * @member {boolean} isOnline
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.isOnline = false;

    /**
     * PushMessage userAccount.
     * @member {string} userAccount
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.userAccount = "";

    /**
     * PushMessage miid.
     * @member {number|Long} miid
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.miid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PushMessage gaid.
     * @member {string} gaid
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.gaid = "";

    /**
     * PushMessage imeiMd5.
     * @member {string} imeiMd5
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.imeiMd5 = "";

    /**
     * PushMessage deviceId.
     * @member {string} deviceId
     * @memberof PushMessage
     * @instance
     */
    PushMessage.prototype.deviceId = "";

    /**
     * Creates a new PushMessage instance using the specified properties.
     * @function create
     * @memberof PushMessage
     * @static
     * @param {IPushMessage=} [properties] Properties to set
     * @returns {PushMessage} PushMessage instance
     */
    PushMessage.create = function create(properties) {
        return new PushMessage(properties);
    };

    /**
     * Encodes the specified PushMessage message. Does not implicitly {@link PushMessage.verify|verify} messages.
     * @function encode
     * @memberof PushMessage
     * @static
     * @param {IPushMessage} message PushMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.to != null && message.hasOwnProperty("to"))
            $root.Target.encode(message.to, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appId);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.payload);
        if (message.createAt != null && message.hasOwnProperty("createAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createAt);
        if (message.ttl != null && message.hasOwnProperty("ttl"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.ttl);
        if (message.collapseKey != null && message.hasOwnProperty("collapseKey"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.collapseKey);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.packageName);
        if (message.regId != null && message.hasOwnProperty("regId"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.regId);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.category);
        if (message.topic != null && message.hasOwnProperty("topic"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.topic);
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo"))
            $root.PushMetaInfo.encode(message.metaInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.aliasName);
        if (message.isOnline != null && message.hasOwnProperty("isOnline"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isOnline);
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.userAccount);
        if (message.miid != null && message.hasOwnProperty("miid"))
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.miid);
        if (message.gaid != null && message.hasOwnProperty("gaid"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.gaid);
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.imeiMd5);
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.deviceId);
        return writer;
    };

    /**
     * Encodes the specified PushMessage message, length delimited. Does not implicitly {@link PushMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PushMessage
     * @static
     * @param {IPushMessage} message PushMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PushMessage message from the specified reader or buffer.
     * @function decode
     * @memberof PushMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PushMessage} PushMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PushMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.to = $root.Target.decode(reader, reader.uint32());
                break;
            case 2:
                message.id = reader.string();
                break;
            case 3:
                message.appId = reader.string();
                break;
            case 4:
                message.payload = reader.string();
                break;
            case 5:
                message.createAt = reader.int64();
                break;
            case 6:
                message.ttl = reader.int64();
                break;
            case 7:
                message.collapseKey = reader.string();
                break;
            case 8:
                message.packageName = reader.string();
                break;
            case 9:
                message.regId = reader.string();
                break;
            case 10:
                message.category = reader.string();
                break;
            case 11:
                message.topic = reader.string();
                break;
            case 12:
                message.metaInfo = $root.PushMetaInfo.decode(reader, reader.uint32());
                break;
            case 13:
                message.aliasName = reader.string();
                break;
            case 14:
                message.isOnline = reader.bool();
                break;
            case 15:
                message.userAccount = reader.string();
                break;
            case 16:
                message.miid = reader.int64();
                break;
            case 17:
                message.gaid = reader.string();
                break;
            case 18:
                message.imeiMd5 = reader.string();
                break;
            case 19:
                message.deviceId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("payload"))
            throw $util.ProtocolError("missing required 'payload'", { instance: message });
        return message;
    };

    /**
     * Decodes a PushMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PushMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PushMessage} PushMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PushMessage message.
     * @function verify
     * @memberof PushMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PushMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.to != null && message.hasOwnProperty("to")) {
            var error = $root.Target.verify(message.to);
            if (error)
                return "to." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isString(message.payload))
            return "payload: string expected";
        if (message.createAt != null && message.hasOwnProperty("createAt"))
            if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                return "createAt: integer|Long expected";
        if (message.ttl != null && message.hasOwnProperty("ttl"))
            if (!$util.isInteger(message.ttl) && !(message.ttl && $util.isInteger(message.ttl.low) && $util.isInteger(message.ttl.high)))
                return "ttl: integer|Long expected";
        if (message.collapseKey != null && message.hasOwnProperty("collapseKey"))
            if (!$util.isString(message.collapseKey))
                return "collapseKey: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.regId != null && message.hasOwnProperty("regId"))
            if (!$util.isString(message.regId))
                return "regId: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo")) {
            var error = $root.PushMetaInfo.verify(message.metaInfo);
            if (error)
                return "metaInfo." + error;
        }
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.isOnline != null && message.hasOwnProperty("isOnline"))
            if (typeof message.isOnline !== "boolean")
                return "isOnline: boolean expected";
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            if (!$util.isString(message.userAccount))
                return "userAccount: string expected";
        if (message.miid != null && message.hasOwnProperty("miid"))
            if (!$util.isInteger(message.miid) && !(message.miid && $util.isInteger(message.miid.low) && $util.isInteger(message.miid.high)))
                return "miid: integer|Long expected";
        if (message.gaid != null && message.hasOwnProperty("gaid"))
            if (!$util.isString(message.gaid))
                return "gaid: string expected";
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            if (!$util.isString(message.imeiMd5))
                return "imeiMd5: string expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        return null;
    };

    /**
     * Creates a PushMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PushMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PushMessage} PushMessage
     */
    PushMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.PushMessage)
            return object;
        var message = new $root.PushMessage();
        if (object.to != null) {
            if (typeof object.to !== "object")
                throw TypeError(".PushMessage.to: object expected");
            message.to = $root.Target.fromObject(object.to);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.payload != null)
            message.payload = String(object.payload);
        if (object.createAt != null)
            if ($util.Long)
                (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = false;
            else if (typeof object.createAt === "string")
                message.createAt = parseInt(object.createAt, 10);
            else if (typeof object.createAt === "number")
                message.createAt = object.createAt;
            else if (typeof object.createAt === "object")
                message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber();
        if (object.ttl != null)
            if ($util.Long)
                (message.ttl = $util.Long.fromValue(object.ttl)).unsigned = false;
            else if (typeof object.ttl === "string")
                message.ttl = parseInt(object.ttl, 10);
            else if (typeof object.ttl === "number")
                message.ttl = object.ttl;
            else if (typeof object.ttl === "object")
                message.ttl = new $util.LongBits(object.ttl.low >>> 0, object.ttl.high >>> 0).toNumber();
        if (object.collapseKey != null)
            message.collapseKey = String(object.collapseKey);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.category != null)
            message.category = String(object.category);
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.metaInfo != null) {
            if (typeof object.metaInfo !== "object")
                throw TypeError(".PushMessage.metaInfo: object expected");
            message.metaInfo = $root.PushMetaInfo.fromObject(object.metaInfo);
        }
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.isOnline != null)
            message.isOnline = Boolean(object.isOnline);
        if (object.userAccount != null)
            message.userAccount = String(object.userAccount);
        if (object.miid != null)
            if ($util.Long)
                (message.miid = $util.Long.fromValue(object.miid)).unsigned = false;
            else if (typeof object.miid === "string")
                message.miid = parseInt(object.miid, 10);
            else if (typeof object.miid === "number")
                message.miid = object.miid;
            else if (typeof object.miid === "object")
                message.miid = new $util.LongBits(object.miid.low >>> 0, object.miid.high >>> 0).toNumber();
        if (object.gaid != null)
            message.gaid = String(object.gaid);
        if (object.imeiMd5 != null)
            message.imeiMd5 = String(object.imeiMd5);
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        return message;
    };

    /**
     * Creates a plain object from a PushMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PushMessage
     * @static
     * @param {PushMessage} message PushMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PushMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.to = null;
            object.id = "";
            object.appId = "";
            object.payload = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createAt = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.ttl = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ttl = options.longs === String ? "0" : 0;
            object.collapseKey = "";
            object.packageName = "";
            object.regId = "";
            object.category = "";
            object.topic = "";
            object.metaInfo = null;
            object.aliasName = "";
            object.isOnline = false;
            object.userAccount = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.miid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.miid = options.longs === String ? "0" : 0;
            object.gaid = "";
            object.imeiMd5 = "";
            object.deviceId = "";
        }
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = $root.Target.toObject(message.to, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = message.payload;
        if (message.createAt != null && message.hasOwnProperty("createAt"))
            if (typeof message.createAt === "number")
                object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
            else
                object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber() : message.createAt;
        if (message.ttl != null && message.hasOwnProperty("ttl"))
            if (typeof message.ttl === "number")
                object.ttl = options.longs === String ? String(message.ttl) : message.ttl;
            else
                object.ttl = options.longs === String ? $util.Long.prototype.toString.call(message.ttl) : options.longs === Number ? new $util.LongBits(message.ttl.low >>> 0, message.ttl.high >>> 0).toNumber() : message.ttl;
        if (message.collapseKey != null && message.hasOwnProperty("collapseKey"))
            object.collapseKey = message.collapseKey;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo"))
            object.metaInfo = $root.PushMetaInfo.toObject(message.metaInfo, options);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.isOnline != null && message.hasOwnProperty("isOnline"))
            object.isOnline = message.isOnline;
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            object.userAccount = message.userAccount;
        if (message.miid != null && message.hasOwnProperty("miid"))
            if (typeof message.miid === "number")
                object.miid = options.longs === String ? String(message.miid) : message.miid;
            else
                object.miid = options.longs === String ? $util.Long.prototype.toString.call(message.miid) : options.longs === Number ? new $util.LongBits(message.miid.low >>> 0, message.miid.high >>> 0).toNumber() : message.miid;
        if (message.gaid != null && message.hasOwnProperty("gaid"))
            object.gaid = message.gaid;
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            object.imeiMd5 = message.imeiMd5;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        return object;
    };

    /**
     * Converts this PushMessage to JSON.
     * @function toJSON
     * @memberof PushMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PushMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PushMessage;
})();

$root.XmPushActionNotification = (function() {

    /**
     * Properties of a XmPushActionNotification.
     * @exports IXmPushActionNotification
     * @interface IXmPushActionNotification
     * @property {string|null} [debug] XmPushActionNotification debug
     * @property {ITarget|null} [target] XmPushActionNotification target
     * @property {string} id XmPushActionNotification id
     * @property {string|null} [appId] XmPushActionNotification appId
     * @property {string|null} [type] XmPushActionNotification type
     * @property {boolean} requireAck XmPushActionNotification requireAck
     * @property {string|null} [payload] XmPushActionNotification payload
     * @property {string|null} [extra] XmPushActionNotification extra
     * @property {string|null} [packageName] XmPushActionNotification packageName
     * @property {string|null} [category] XmPushActionNotification category
     * @property {IPushRegistrationInfo|null} [regInfo] XmPushActionNotification regInfo
     * @property {string|null} [regId] XmPushActionNotification regId
     * @property {string|null} [aliasName] XmPushActionNotification aliasName
     * @property {Uint8Array|null} [binaryExtra] XmPushActionNotification binaryExtra
     * @property {number|Long|null} [createdTs] XmPushActionNotification createdTs
     * @property {boolean|null} [alreadyLogClickInXmq] XmPushActionNotification alreadyLogClickInXmq
     * @property {string|null} [imeiMd5] XmPushActionNotification imeiMd5
     */

    /**
     * Constructs a new XmPushActionNotification.
     * @exports XmPushActionNotification
     * @classdesc Represents a XmPushActionNotification.
     * @implements IXmPushActionNotification
     * @constructor
     * @param {IXmPushActionNotification=} [properties] Properties to set
     */
    function XmPushActionNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionNotification debug.
     * @member {string} debug
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.debug = "";

    /**
     * XmPushActionNotification target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.target = null;

    /**
     * XmPushActionNotification id.
     * @member {string} id
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.id = "";

    /**
     * XmPushActionNotification appId.
     * @member {string} appId
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.appId = "";

    /**
     * XmPushActionNotification type.
     * @member {string} type
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.type = "";

    /**
     * XmPushActionNotification requireAck.
     * @member {boolean} requireAck
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.requireAck = false;

    /**
     * XmPushActionNotification payload.
     * @member {string} payload
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.payload = "";

    /**
     * XmPushActionNotification extra.
     * @member {string} extra
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.extra = "";

    /**
     * XmPushActionNotification packageName.
     * @member {string} packageName
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.packageName = "";

    /**
     * XmPushActionNotification category.
     * @member {string} category
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.category = "";

    /**
     * XmPushActionNotification regInfo.
     * @member {IPushRegistrationInfo|null|undefined} regInfo
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.regInfo = null;

    /**
     * XmPushActionNotification regId.
     * @member {string} regId
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.regId = "";

    /**
     * XmPushActionNotification aliasName.
     * @member {string} aliasName
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.aliasName = "";

    /**
     * XmPushActionNotification binaryExtra.
     * @member {Uint8Array} binaryExtra
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.binaryExtra = $util.newBuffer([]);

    /**
     * XmPushActionNotification createdTs.
     * @member {number|Long} createdTs
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.createdTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionNotification alreadyLogClickInXmq.
     * @member {boolean} alreadyLogClickInXmq
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.alreadyLogClickInXmq = false;

    /**
     * XmPushActionNotification imeiMd5.
     * @member {string} imeiMd5
     * @memberof XmPushActionNotification
     * @instance
     */
    XmPushActionNotification.prototype.imeiMd5 = "";

    /**
     * Creates a new XmPushActionNotification instance using the specified properties.
     * @function create
     * @memberof XmPushActionNotification
     * @static
     * @param {IXmPushActionNotification=} [properties] Properties to set
     * @returns {XmPushActionNotification} XmPushActionNotification instance
     */
    XmPushActionNotification.create = function create(properties) {
        return new XmPushActionNotification(properties);
    };

    /**
     * Encodes the specified XmPushActionNotification message. Does not implicitly {@link XmPushActionNotification.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionNotification
     * @static
     * @param {IXmPushActionNotification} message XmPushActionNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        if (message.appId != null && message.hasOwnProperty("appId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.requireAck);
        if (message.payload != null && message.hasOwnProperty("payload"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.payload);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.extra);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.category);
        if (message.regInfo != null && message.hasOwnProperty("regInfo"))
            $root.PushRegistrationInfo.encode(message.regInfo, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.regId != null && message.hasOwnProperty("regId"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.regId);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.aliasName);
        if (message.binaryExtra != null && message.hasOwnProperty("binaryExtra"))
            writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.binaryExtra);
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            writer.uint32(/* id 15, wireType 0 =*/120).int64(message.createdTs);
        if (message.alreadyLogClickInXmq != null && message.hasOwnProperty("alreadyLogClickInXmq"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.alreadyLogClickInXmq);
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.imeiMd5);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionNotification message, length delimited. Does not implicitly {@link XmPushActionNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionNotification
     * @static
     * @param {IXmPushActionNotification} message XmPushActionNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionNotification message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionNotification} XmPushActionNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.type = reader.string();
                break;
            case 6:
                message.requireAck = reader.bool();
                break;
            case 7:
                message.payload = reader.string();
                break;
            case 8:
                message.extra = reader.string();
                break;
            case 9:
                message.packageName = reader.string();
                break;
            case 10:
                message.category = reader.string();
                break;
            case 11:
                message.regInfo = $root.PushRegistrationInfo.decode(reader, reader.uint32());
                break;
            case 12:
                message.regId = reader.string();
                break;
            case 13:
                message.aliasName = reader.string();
                break;
            case 14:
                message.binaryExtra = reader.bytes();
                break;
            case 15:
                message.createdTs = reader.int64();
                break;
            case 16:
                message.alreadyLogClickInXmq = reader.bool();
                break;
            case 17:
                message.imeiMd5 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("requireAck"))
            throw $util.ProtocolError("missing required 'requireAck'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionNotification} XmPushActionNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionNotification message.
     * @function verify
     * @memberof XmPushActionNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (message.appId != null && message.hasOwnProperty("appId"))
            if (!$util.isString(message.appId))
                return "appId: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (typeof message.requireAck !== "boolean")
            return "requireAck: boolean expected";
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!$util.isString(message.payload))
                return "payload: string expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.regInfo != null && message.hasOwnProperty("regInfo")) {
            var error = $root.PushRegistrationInfo.verify(message.regInfo);
            if (error)
                return "regInfo." + error;
        }
        if (message.regId != null && message.hasOwnProperty("regId"))
            if (!$util.isString(message.regId))
                return "regId: string expected";
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.binaryExtra != null && message.hasOwnProperty("binaryExtra"))
            if (!(message.binaryExtra && typeof message.binaryExtra.length === "number" || $util.isString(message.binaryExtra)))
                return "binaryExtra: buffer expected";
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (!$util.isInteger(message.createdTs) && !(message.createdTs && $util.isInteger(message.createdTs.low) && $util.isInteger(message.createdTs.high)))
                return "createdTs: integer|Long expected";
        if (message.alreadyLogClickInXmq != null && message.hasOwnProperty("alreadyLogClickInXmq"))
            if (typeof message.alreadyLogClickInXmq !== "boolean")
                return "alreadyLogClickInXmq: boolean expected";
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            if (!$util.isString(message.imeiMd5))
                return "imeiMd5: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionNotification} XmPushActionNotification
     */
    XmPushActionNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionNotification)
            return object;
        var message = new $root.XmPushActionNotification();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionNotification.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.type != null)
            message.type = String(object.type);
        if (object.requireAck != null)
            message.requireAck = Boolean(object.requireAck);
        if (object.payload != null)
            message.payload = String(object.payload);
        if (object.extra != null)
            message.extra = String(object.extra);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        if (object.regInfo != null) {
            if (typeof object.regInfo !== "object")
                throw TypeError(".XmPushActionNotification.regInfo: object expected");
            message.regInfo = $root.PushRegistrationInfo.fromObject(object.regInfo);
        }
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.binaryExtra != null)
            if (typeof object.binaryExtra === "string")
                $util.base64.decode(object.binaryExtra, message.binaryExtra = $util.newBuffer($util.base64.length(object.binaryExtra)), 0);
            else if (object.binaryExtra.length)
                message.binaryExtra = object.binaryExtra;
        if (object.createdTs != null)
            if ($util.Long)
                (message.createdTs = $util.Long.fromValue(object.createdTs)).unsigned = false;
            else if (typeof object.createdTs === "string")
                message.createdTs = parseInt(object.createdTs, 10);
            else if (typeof object.createdTs === "number")
                message.createdTs = object.createdTs;
            else if (typeof object.createdTs === "object")
                message.createdTs = new $util.LongBits(object.createdTs.low >>> 0, object.createdTs.high >>> 0).toNumber();
        if (object.alreadyLogClickInXmq != null)
            message.alreadyLogClickInXmq = Boolean(object.alreadyLogClickInXmq);
        if (object.imeiMd5 != null)
            message.imeiMd5 = String(object.imeiMd5);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionNotification
     * @static
     * @param {XmPushActionNotification} message XmPushActionNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.type = "";
            object.requireAck = false;
            object.payload = "";
            object.extra = "";
            object.packageName = "";
            object.category = "";
            object.regInfo = null;
            object.regId = "";
            object.aliasName = "";
            if (options.bytes === String)
                object.binaryExtra = "";
            else {
                object.binaryExtra = [];
                if (options.bytes !== Array)
                    object.binaryExtra = $util.newBuffer(object.binaryExtra);
            }
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdTs = options.longs === String ? "0" : 0;
            object.alreadyLogClickInXmq = false;
            object.imeiMd5 = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.requireAck != null && message.hasOwnProperty("requireAck"))
            object.requireAck = message.requireAck;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = message.payload;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.regInfo != null && message.hasOwnProperty("regInfo"))
            object.regInfo = $root.PushRegistrationInfo.toObject(message.regInfo, options);
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.binaryExtra != null && message.hasOwnProperty("binaryExtra"))
            object.binaryExtra = options.bytes === String ? $util.base64.encode(message.binaryExtra, 0, message.binaryExtra.length) : options.bytes === Array ? Array.prototype.slice.call(message.binaryExtra) : message.binaryExtra;
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (typeof message.createdTs === "number")
                object.createdTs = options.longs === String ? String(message.createdTs) : message.createdTs;
            else
                object.createdTs = options.longs === String ? $util.Long.prototype.toString.call(message.createdTs) : options.longs === Number ? new $util.LongBits(message.createdTs.low >>> 0, message.createdTs.high >>> 0).toNumber() : message.createdTs;
        if (message.alreadyLogClickInXmq != null && message.hasOwnProperty("alreadyLogClickInXmq"))
            object.alreadyLogClickInXmq = message.alreadyLogClickInXmq;
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            object.imeiMd5 = message.imeiMd5;
        return object;
    };

    /**
     * Converts this XmPushActionNotification to JSON.
     * @function toJSON
     * @memberof XmPushActionNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionNotification;
})();

$root.PushRegistrationInfo = (function() {

    /**
     * Properties of a PushRegistrationInfo.
     * @exports IPushRegistrationInfo
     * @interface IPushRegistrationInfo
     * @property {string} appId PushRegistrationInfo appId
     * @property {string} regId PushRegistrationInfo regId
     * @property {string} regSecret PushRegistrationInfo regSecret
     * @property {string|null} [appVersion] PushRegistrationInfo appVersion
     * @property {number|Long|null} [registeredAt] PushRegistrationInfo registeredAt
     * @property {string|null} [packageName] PushRegistrationInfo packageName
     * @property {string|null} [configs] PushRegistrationInfo configs
     * @property {IAcceptTimeInfo|null} [acceptTime] PushRegistrationInfo acceptTime
     * @property {string|null} [resourceId] PushRegistrationInfo resourceId
     * @property {ITarget|null} [target] PushRegistrationInfo target
     * @property {string|null} [clientId] PushRegistrationInfo clientId
     * @property {string|null} [connectionAttrs] PushRegistrationInfo connectionAttrs
     * @property {boolean|null} [expired] PushRegistrationInfo expired
     * @property {string|null} [pushSdkVersionName] PushRegistrationInfo pushSdkVersionName
     * @property {number|null} [pushSdkVersionCode] PushRegistrationInfo pushSdkVersionCode
     * @property {string|null} [androidId] PushRegistrationInfo androidId
     * @property {boolean|null} [pushDisabled] PushRegistrationInfo pushDisabled
     * @property {BootModeType|null} [bootModeType] PushRegistrationInfo bootModeType
     * @property {number|null} [appVersionCode] PushRegistrationInfo appVersionCode
     * @property {string|null} [thirdPartyRegInfo] PushRegistrationInfo thirdPartyRegInfo
     * @property {boolean|null} [tokenExpired] PushRegistrationInfo tokenExpired
     */

    /**
     * Constructs a new PushRegistrationInfo.
     * @exports PushRegistrationInfo
     * @classdesc The registration info for a user(or device).
     * Used in HBase user_message, identify the user's registration info.
     * @implements IPushRegistrationInfo
     * @constructor
     * @param {IPushRegistrationInfo=} [properties] Properties to set
     */
    function PushRegistrationInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PushRegistrationInfo appId.
     * @member {string} appId
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.appId = "";

    /**
     * PushRegistrationInfo regId.
     * @member {string} regId
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.regId = "";

    /**
     * PushRegistrationInfo regSecret.
     * @member {string} regSecret
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.regSecret = "";

    /**
     * PushRegistrationInfo appVersion.
     * @member {string} appVersion
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.appVersion = "";

    /**
     * PushRegistrationInfo registeredAt.
     * @member {number|Long} registeredAt
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.registeredAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PushRegistrationInfo packageName.
     * @member {string} packageName
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.packageName = "";

    /**
     * PushRegistrationInfo configs.
     * @member {string} configs
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.configs = "";

    /**
     * PushRegistrationInfo acceptTime.
     * @member {IAcceptTimeInfo|null|undefined} acceptTime
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.acceptTime = null;

    /**
     * PushRegistrationInfo resourceId.
     * @member {string} resourceId
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.resourceId = "";

    /**
     * PushRegistrationInfo target.
     * @member {ITarget|null|undefined} target
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.target = null;

    /**
     * PushRegistrationInfo clientId.
     * @member {string} clientId
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.clientId = "";

    /**
     * PushRegistrationInfo connectionAttrs.
     * @member {string} connectionAttrs
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.connectionAttrs = "";

    /**
     * PushRegistrationInfo expired.
     * @member {boolean} expired
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.expired = false;

    /**
     * PushRegistrationInfo pushSdkVersionName.
     * @member {string} pushSdkVersionName
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.pushSdkVersionName = "";

    /**
     * PushRegistrationInfo pushSdkVersionCode.
     * @member {number} pushSdkVersionCode
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.pushSdkVersionCode = 0;

    /**
     * PushRegistrationInfo androidId.
     * @member {string} androidId
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.androidId = "";

    /**
     * PushRegistrationInfo pushDisabled.
     * @member {boolean} pushDisabled
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.pushDisabled = false;

    /**
     * PushRegistrationInfo bootModeType.
     * @member {BootModeType} bootModeType
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.bootModeType = 0;

    /**
     * PushRegistrationInfo appVersionCode.
     * @member {number} appVersionCode
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.appVersionCode = 0;

    /**
     * PushRegistrationInfo thirdPartyRegInfo.
     * @member {string} thirdPartyRegInfo
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.thirdPartyRegInfo = "";

    /**
     * PushRegistrationInfo tokenExpired.
     * @member {boolean} tokenExpired
     * @memberof PushRegistrationInfo
     * @instance
     */
    PushRegistrationInfo.prototype.tokenExpired = false;

    /**
     * Creates a new PushRegistrationInfo instance using the specified properties.
     * @function create
     * @memberof PushRegistrationInfo
     * @static
     * @param {IPushRegistrationInfo=} [properties] Properties to set
     * @returns {PushRegistrationInfo} PushRegistrationInfo instance
     */
    PushRegistrationInfo.create = function create(properties) {
        return new PushRegistrationInfo(properties);
    };

    /**
     * Encodes the specified PushRegistrationInfo message. Does not implicitly {@link PushRegistrationInfo.verify|verify} messages.
     * @function encode
     * @memberof PushRegistrationInfo
     * @static
     * @param {IPushRegistrationInfo} message PushRegistrationInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRegistrationInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.regId);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.regSecret);
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appVersion);
        if (message.registeredAt != null && message.hasOwnProperty("registeredAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.registeredAt);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.packageName);
        if (message.configs != null && message.hasOwnProperty("configs"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.configs);
        if (message.acceptTime != null && message.hasOwnProperty("acceptTime"))
            $root.AcceptTimeInfo.encode(message.acceptTime, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.resourceId != null && message.hasOwnProperty("resourceId"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.resourceId);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.clientId);
        if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.connectionAttrs);
        if (message.expired != null && message.hasOwnProperty("expired"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.expired);
        if (message.pushSdkVersionName != null && message.hasOwnProperty("pushSdkVersionName"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.pushSdkVersionName);
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.pushSdkVersionCode);
        if (message.androidId != null && message.hasOwnProperty("androidId"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.androidId);
        if (message.pushDisabled != null && message.hasOwnProperty("pushDisabled"))
            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.pushDisabled);
        if (message.bootModeType != null && message.hasOwnProperty("bootModeType"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.bootModeType);
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.appVersionCode);
        if (message.thirdPartyRegInfo != null && message.hasOwnProperty("thirdPartyRegInfo"))
            writer.uint32(/* id 20, wireType 2 =*/162).string(message.thirdPartyRegInfo);
        if (message.tokenExpired != null && message.hasOwnProperty("tokenExpired"))
            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.tokenExpired);
        return writer;
    };

    /**
     * Encodes the specified PushRegistrationInfo message, length delimited. Does not implicitly {@link PushRegistrationInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PushRegistrationInfo
     * @static
     * @param {IPushRegistrationInfo} message PushRegistrationInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushRegistrationInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PushRegistrationInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushRegistrationInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PushRegistrationInfo} PushRegistrationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRegistrationInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PushRegistrationInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.appId = reader.string();
                break;
            case 2:
                message.regId = reader.string();
                break;
            case 3:
                message.regSecret = reader.string();
                break;
            case 4:
                message.appVersion = reader.string();
                break;
            case 5:
                message.registeredAt = reader.int64();
                break;
            case 6:
                message.packageName = reader.string();
                break;
            case 7:
                message.configs = reader.string();
                break;
            case 8:
                message.acceptTime = $root.AcceptTimeInfo.decode(reader, reader.uint32());
                break;
            case 9:
                message.resourceId = reader.string();
                break;
            case 10:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 11:
                message.clientId = reader.string();
                break;
            case 12:
                message.connectionAttrs = reader.string();
                break;
            case 13:
                message.expired = reader.bool();
                break;
            case 14:
                message.pushSdkVersionName = reader.string();
                break;
            case 15:
                message.pushSdkVersionCode = reader.int32();
                break;
            case 16:
                message.androidId = reader.string();
                break;
            case 17:
                message.pushDisabled = reader.bool();
                break;
            case 18:
                message.bootModeType = reader.int32();
                break;
            case 19:
                message.appVersionCode = reader.int32();
                break;
            case 20:
                message.thirdPartyRegInfo = reader.string();
                break;
            case 21:
                message.tokenExpired = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("regId"))
            throw $util.ProtocolError("missing required 'regId'", { instance: message });
        if (!message.hasOwnProperty("regSecret"))
            throw $util.ProtocolError("missing required 'regSecret'", { instance: message });
        return message;
    };

    /**
     * Decodes a PushRegistrationInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PushRegistrationInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PushRegistrationInfo} PushRegistrationInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushRegistrationInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PushRegistrationInfo message.
     * @function verify
     * @memberof PushRegistrationInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PushRegistrationInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isString(message.regId))
            return "regId: string expected";
        if (!$util.isString(message.regSecret))
            return "regSecret: string expected";
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            if (!$util.isString(message.appVersion))
                return "appVersion: string expected";
        if (message.registeredAt != null && message.hasOwnProperty("registeredAt"))
            if (!$util.isInteger(message.registeredAt) && !(message.registeredAt && $util.isInteger(message.registeredAt.low) && $util.isInteger(message.registeredAt.high)))
                return "registeredAt: integer|Long expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.configs != null && message.hasOwnProperty("configs"))
            if (!$util.isString(message.configs))
                return "configs: string expected";
        if (message.acceptTime != null && message.hasOwnProperty("acceptTime")) {
            var error = $root.AcceptTimeInfo.verify(message.acceptTime);
            if (error)
                return "acceptTime." + error;
        }
        if (message.resourceId != null && message.hasOwnProperty("resourceId"))
            if (!$util.isString(message.resourceId))
                return "resourceId: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
        if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs"))
            if (!$util.isString(message.connectionAttrs))
                return "connectionAttrs: string expected";
        if (message.expired != null && message.hasOwnProperty("expired"))
            if (typeof message.expired !== "boolean")
                return "expired: boolean expected";
        if (message.pushSdkVersionName != null && message.hasOwnProperty("pushSdkVersionName"))
            if (!$util.isString(message.pushSdkVersionName))
                return "pushSdkVersionName: string expected";
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            if (!$util.isInteger(message.pushSdkVersionCode))
                return "pushSdkVersionCode: integer expected";
        if (message.androidId != null && message.hasOwnProperty("androidId"))
            if (!$util.isString(message.androidId))
                return "androidId: string expected";
        if (message.pushDisabled != null && message.hasOwnProperty("pushDisabled"))
            if (typeof message.pushDisabled !== "boolean")
                return "pushDisabled: boolean expected";
        if (message.bootModeType != null && message.hasOwnProperty("bootModeType"))
            switch (message.bootModeType) {
            default:
                return "bootModeType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            if (!$util.isInteger(message.appVersionCode))
                return "appVersionCode: integer expected";
        if (message.thirdPartyRegInfo != null && message.hasOwnProperty("thirdPartyRegInfo"))
            if (!$util.isString(message.thirdPartyRegInfo))
                return "thirdPartyRegInfo: string expected";
        if (message.tokenExpired != null && message.hasOwnProperty("tokenExpired"))
            if (typeof message.tokenExpired !== "boolean")
                return "tokenExpired: boolean expected";
        return null;
    };

    /**
     * Creates a PushRegistrationInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PushRegistrationInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PushRegistrationInfo} PushRegistrationInfo
     */
    PushRegistrationInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.PushRegistrationInfo)
            return object;
        var message = new $root.PushRegistrationInfo();
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.regSecret != null)
            message.regSecret = String(object.regSecret);
        if (object.appVersion != null)
            message.appVersion = String(object.appVersion);
        if (object.registeredAt != null)
            if ($util.Long)
                (message.registeredAt = $util.Long.fromValue(object.registeredAt)).unsigned = false;
            else if (typeof object.registeredAt === "string")
                message.registeredAt = parseInt(object.registeredAt, 10);
            else if (typeof object.registeredAt === "number")
                message.registeredAt = object.registeredAt;
            else if (typeof object.registeredAt === "object")
                message.registeredAt = new $util.LongBits(object.registeredAt.low >>> 0, object.registeredAt.high >>> 0).toNumber();
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.configs != null)
            message.configs = String(object.configs);
        if (object.acceptTime != null) {
            if (typeof object.acceptTime !== "object")
                throw TypeError(".PushRegistrationInfo.acceptTime: object expected");
            message.acceptTime = $root.AcceptTimeInfo.fromObject(object.acceptTime);
        }
        if (object.resourceId != null)
            message.resourceId = String(object.resourceId);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".PushRegistrationInfo.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.clientId != null)
            message.clientId = String(object.clientId);
        if (object.connectionAttrs != null)
            message.connectionAttrs = String(object.connectionAttrs);
        if (object.expired != null)
            message.expired = Boolean(object.expired);
        if (object.pushSdkVersionName != null)
            message.pushSdkVersionName = String(object.pushSdkVersionName);
        if (object.pushSdkVersionCode != null)
            message.pushSdkVersionCode = object.pushSdkVersionCode | 0;
        if (object.androidId != null)
            message.androidId = String(object.androidId);
        if (object.pushDisabled != null)
            message.pushDisabled = Boolean(object.pushDisabled);
        switch (object.bootModeType) {
        case "START":
        case 0:
            message.bootModeType = 0;
            break;
        case "BIND":
        case 1:
            message.bootModeType = 1;
            break;
        }
        if (object.appVersionCode != null)
            message.appVersionCode = object.appVersionCode | 0;
        if (object.thirdPartyRegInfo != null)
            message.thirdPartyRegInfo = String(object.thirdPartyRegInfo);
        if (object.tokenExpired != null)
            message.tokenExpired = Boolean(object.tokenExpired);
        return message;
    };

    /**
     * Creates a plain object from a PushRegistrationInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PushRegistrationInfo
     * @static
     * @param {PushRegistrationInfo} message PushRegistrationInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PushRegistrationInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.appId = "";
            object.regId = "";
            object.regSecret = "";
            object.appVersion = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.registeredAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.registeredAt = options.longs === String ? "0" : 0;
            object.packageName = "";
            object.configs = "";
            object.acceptTime = null;
            object.resourceId = "";
            object.target = null;
            object.clientId = "";
            object.connectionAttrs = "";
            object.expired = false;
            object.pushSdkVersionName = "";
            object.pushSdkVersionCode = 0;
            object.androidId = "";
            object.pushDisabled = false;
            object.bootModeType = options.enums === String ? "START" : 0;
            object.appVersionCode = 0;
            object.thirdPartyRegInfo = "";
            object.tokenExpired = false;
        }
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.regSecret != null && message.hasOwnProperty("regSecret"))
            object.regSecret = message.regSecret;
        if (message.appVersion != null && message.hasOwnProperty("appVersion"))
            object.appVersion = message.appVersion;
        if (message.registeredAt != null && message.hasOwnProperty("registeredAt"))
            if (typeof message.registeredAt === "number")
                object.registeredAt = options.longs === String ? String(message.registeredAt) : message.registeredAt;
            else
                object.registeredAt = options.longs === String ? $util.Long.prototype.toString.call(message.registeredAt) : options.longs === Number ? new $util.LongBits(message.registeredAt.low >>> 0, message.registeredAt.high >>> 0).toNumber() : message.registeredAt;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.configs != null && message.hasOwnProperty("configs"))
            object.configs = message.configs;
        if (message.acceptTime != null && message.hasOwnProperty("acceptTime"))
            object.acceptTime = $root.AcceptTimeInfo.toObject(message.acceptTime, options);
        if (message.resourceId != null && message.hasOwnProperty("resourceId"))
            object.resourceId = message.resourceId;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs"))
            object.connectionAttrs = message.connectionAttrs;
        if (message.expired != null && message.hasOwnProperty("expired"))
            object.expired = message.expired;
        if (message.pushSdkVersionName != null && message.hasOwnProperty("pushSdkVersionName"))
            object.pushSdkVersionName = message.pushSdkVersionName;
        if (message.pushSdkVersionCode != null && message.hasOwnProperty("pushSdkVersionCode"))
            object.pushSdkVersionCode = message.pushSdkVersionCode;
        if (message.androidId != null && message.hasOwnProperty("androidId"))
            object.androidId = message.androidId;
        if (message.pushDisabled != null && message.hasOwnProperty("pushDisabled"))
            object.pushDisabled = message.pushDisabled;
        if (message.bootModeType != null && message.hasOwnProperty("bootModeType"))
            object.bootModeType = options.enums === String ? $root.BootModeType[message.bootModeType] : message.bootModeType;
        if (message.appVersionCode != null && message.hasOwnProperty("appVersionCode"))
            object.appVersionCode = message.appVersionCode;
        if (message.thirdPartyRegInfo != null && message.hasOwnProperty("thirdPartyRegInfo"))
            object.thirdPartyRegInfo = message.thirdPartyRegInfo;
        if (message.tokenExpired != null && message.hasOwnProperty("tokenExpired"))
            object.tokenExpired = message.tokenExpired;
        return object;
    };

    /**
     * Converts this PushRegistrationInfo to JSON.
     * @function toJSON
     * @memberof PushRegistrationInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PushRegistrationInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PushRegistrationInfo;
})();

/**
 * BootModeType enum.
 * @exports BootModeType
 * @enum {string}
 * @property {number} START=0 START value
 * @property {number} BIND=1 BIND value
 */
$root.BootModeType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "START"] = 0;
    values[valuesById[1] = "BIND"] = 1;
    return values;
})();

$root.AcceptTimeInfo = (function() {

    /**
     * Properties of an AcceptTimeInfo.
     * @exports IAcceptTimeInfo
     * @interface IAcceptTimeInfo
     * @property {number} startHour AcceptTimeInfo startHour
     * @property {number} startMinute AcceptTimeInfo startMinute
     * @property {number} endHour AcceptTimeInfo endHour
     * @property {number} endMinute AcceptTimeInfo endMinute
     */

    /**
     * Constructs a new AcceptTimeInfo.
     * @exports AcceptTimeInfo
     * @classdesc Client accept push message within this time range.
     * @implements IAcceptTimeInfo
     * @constructor
     * @param {IAcceptTimeInfo=} [properties] Properties to set
     */
    function AcceptTimeInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AcceptTimeInfo startHour.
     * @member {number} startHour
     * @memberof AcceptTimeInfo
     * @instance
     */
    AcceptTimeInfo.prototype.startHour = 0;

    /**
     * AcceptTimeInfo startMinute.
     * @member {number} startMinute
     * @memberof AcceptTimeInfo
     * @instance
     */
    AcceptTimeInfo.prototype.startMinute = 0;

    /**
     * AcceptTimeInfo endHour.
     * @member {number} endHour
     * @memberof AcceptTimeInfo
     * @instance
     */
    AcceptTimeInfo.prototype.endHour = 0;

    /**
     * AcceptTimeInfo endMinute.
     * @member {number} endMinute
     * @memberof AcceptTimeInfo
     * @instance
     */
    AcceptTimeInfo.prototype.endMinute = 0;

    /**
     * Creates a new AcceptTimeInfo instance using the specified properties.
     * @function create
     * @memberof AcceptTimeInfo
     * @static
     * @param {IAcceptTimeInfo=} [properties] Properties to set
     * @returns {AcceptTimeInfo} AcceptTimeInfo instance
     */
    AcceptTimeInfo.create = function create(properties) {
        return new AcceptTimeInfo(properties);
    };

    /**
     * Encodes the specified AcceptTimeInfo message. Does not implicitly {@link AcceptTimeInfo.verify|verify} messages.
     * @function encode
     * @memberof AcceptTimeInfo
     * @static
     * @param {IAcceptTimeInfo} message AcceptTimeInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AcceptTimeInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.startHour);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.startMinute);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.endHour);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.endMinute);
        return writer;
    };

    /**
     * Encodes the specified AcceptTimeInfo message, length delimited. Does not implicitly {@link AcceptTimeInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AcceptTimeInfo
     * @static
     * @param {IAcceptTimeInfo} message AcceptTimeInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AcceptTimeInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AcceptTimeInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AcceptTimeInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AcceptTimeInfo} AcceptTimeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AcceptTimeInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcceptTimeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.startHour = reader.int32();
                break;
            case 2:
                message.startMinute = reader.int32();
                break;
            case 3:
                message.endHour = reader.int32();
                break;
            case 4:
                message.endMinute = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("startHour"))
            throw $util.ProtocolError("missing required 'startHour'", { instance: message });
        if (!message.hasOwnProperty("startMinute"))
            throw $util.ProtocolError("missing required 'startMinute'", { instance: message });
        if (!message.hasOwnProperty("endHour"))
            throw $util.ProtocolError("missing required 'endHour'", { instance: message });
        if (!message.hasOwnProperty("endMinute"))
            throw $util.ProtocolError("missing required 'endMinute'", { instance: message });
        return message;
    };

    /**
     * Decodes an AcceptTimeInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AcceptTimeInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AcceptTimeInfo} AcceptTimeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AcceptTimeInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AcceptTimeInfo message.
     * @function verify
     * @memberof AcceptTimeInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AcceptTimeInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.startHour))
            return "startHour: integer expected";
        if (!$util.isInteger(message.startMinute))
            return "startMinute: integer expected";
        if (!$util.isInteger(message.endHour))
            return "endHour: integer expected";
        if (!$util.isInteger(message.endMinute))
            return "endMinute: integer expected";
        return null;
    };

    /**
     * Creates an AcceptTimeInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AcceptTimeInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AcceptTimeInfo} AcceptTimeInfo
     */
    AcceptTimeInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.AcceptTimeInfo)
            return object;
        var message = new $root.AcceptTimeInfo();
        if (object.startHour != null)
            message.startHour = object.startHour | 0;
        if (object.startMinute != null)
            message.startMinute = object.startMinute | 0;
        if (object.endHour != null)
            message.endHour = object.endHour | 0;
        if (object.endMinute != null)
            message.endMinute = object.endMinute | 0;
        return message;
    };

    /**
     * Creates a plain object from an AcceptTimeInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AcceptTimeInfo
     * @static
     * @param {AcceptTimeInfo} message AcceptTimeInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AcceptTimeInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.startHour = 0;
            object.startMinute = 0;
            object.endHour = 0;
            object.endMinute = 0;
        }
        if (message.startHour != null && message.hasOwnProperty("startHour"))
            object.startHour = message.startHour;
        if (message.startMinute != null && message.hasOwnProperty("startMinute"))
            object.startMinute = message.startMinute;
        if (message.endHour != null && message.hasOwnProperty("endHour"))
            object.endHour = message.endHour;
        if (message.endMinute != null && message.hasOwnProperty("endMinute"))
            object.endMinute = message.endMinute;
        return object;
    };

    /**
     * Converts this AcceptTimeInfo to JSON.
     * @function toJSON
     * @memberof AcceptTimeInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AcceptTimeInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AcceptTimeInfo;
})();

/**
 * RegistrationReason enum.
 * @exports RegistrationReason
 * @enum {string}
 * @property {number} RegIdExpired=0 RegIdExpired value
 * @property {number} PackageUnregistered=1 PackageUnregistered value
 * @property {number} Init=2 Init value
 */
$root.RegistrationReason = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RegIdExpired"] = 0;
    values[valuesById[1] = "PackageUnregistered"] = 1;
    values[valuesById[2] = "Init"] = 2;
    return values;
})();

/**
 * ActionType enum.
 * @exports ActionType
 * @enum {string}
 * @property {number} Registration=1 Registration value
 * @property {number} UnRegistration=2 UnRegistration value
 * @property {number} Subscription=3 Subscription value
 * @property {number} UnSubscription=4 UnSubscription value
 * @property {number} SendMessage=5 SendMessage value
 * @property {number} AckMessage=6 AckMessage value
 * @property {number} SetConfig=7 SetConfig value
 * @property {number} ReportFeedback=8 ReportFeedback value
 * @property {number} Notification=9 Notification value
 * @property {number} Command=10 Command value
 * @property {number} MultiConnectionBroadcast=11 MultiConnectionBroadcast value
 * @property {number} MultiConnectionResult=12 MultiConnectionResult value
 * @property {number} ConnectionKick=13 ConnectionKick value
 * @property {number} ApnsMessage=14 ApnsMessage value
 * @property {number} IOSDeviceTokenWrite=15 IOSDeviceTokenWrite value
 * @property {number} SaveInvalidRegId=16 SaveInvalidRegId value
 * @property {number} ApnsCertChanged=17 ApnsCertChanged value
 * @property {number} RegisterDevice=18 RegisterDevice value
 * @property {number} ExpandTopicInXmq=19 ExpandTopicInXmq value
 * @property {number} SendMessageNew=22 SendMessageNew value
 * @property {number} ExpandTopicInXmqNew=23 ExpandTopicInXmqNew value
 * @property {number} DeleteInvalidMessage=24 DeleteInvalidMessage value
 * @property {number} BadAction=99 BadAction value
 * @property {number} Presence=100 Presence value
 * @property {number} FetchOfflineMessage=101 FetchOfflineMessage value
 * @property {number} SaveJob=102 SaveJob value
 * @property {number} Broadcast=103 Broadcast value
 * @property {number} BatchPresence=104 BatchPresence value
 * @property {number} BatchMessage=105 BatchMessage value
 * @property {number} StatCounter=107 StatCounter value
 * @property {number} FetchTopicMessage=108 FetchTopicMessage value
 * @property {number} DeleteAliasCache=109 DeleteAliasCache value
 * @property {number} UpdateRegistration=110 UpdateRegistration value
 * @property {number} BatchMessageNew=112 BatchMessageNew value
 * @property {number} PublicWelfareMessage=113 PublicWelfareMessage value
 * @property {number} RevokeMessage=114 RevokeMessage value
 * @property {number} NotifyAwakeApp=115 NotifyAwakeApp value
 * @property {number} SimulatorJob=200 SimulatorJob value
 */
$root.ActionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Registration"] = 1;
    values[valuesById[2] = "UnRegistration"] = 2;
    values[valuesById[3] = "Subscription"] = 3;
    values[valuesById[4] = "UnSubscription"] = 4;
    values[valuesById[5] = "SendMessage"] = 5;
    values[valuesById[6] = "AckMessage"] = 6;
    values[valuesById[7] = "SetConfig"] = 7;
    values[valuesById[8] = "ReportFeedback"] = 8;
    values[valuesById[9] = "Notification"] = 9;
    values[valuesById[10] = "Command"] = 10;
    values[valuesById[11] = "MultiConnectionBroadcast"] = 11;
    values[valuesById[12] = "MultiConnectionResult"] = 12;
    values[valuesById[13] = "ConnectionKick"] = 13;
    values[valuesById[14] = "ApnsMessage"] = 14;
    values[valuesById[15] = "IOSDeviceTokenWrite"] = 15;
    values[valuesById[16] = "SaveInvalidRegId"] = 16;
    values[valuesById[17] = "ApnsCertChanged"] = 17;
    values[valuesById[18] = "RegisterDevice"] = 18;
    values[valuesById[19] = "ExpandTopicInXmq"] = 19;
    values[valuesById[22] = "SendMessageNew"] = 22;
    values[valuesById[23] = "ExpandTopicInXmqNew"] = 23;
    values[valuesById[24] = "DeleteInvalidMessage"] = 24;
    values[valuesById[99] = "BadAction"] = 99;
    values[valuesById[100] = "Presence"] = 100;
    values[valuesById[101] = "FetchOfflineMessage"] = 101;
    values[valuesById[102] = "SaveJob"] = 102;
    values[valuesById[103] = "Broadcast"] = 103;
    values[valuesById[104] = "BatchPresence"] = 104;
    values[valuesById[105] = "BatchMessage"] = 105;
    values[valuesById[107] = "StatCounter"] = 107;
    values[valuesById[108] = "FetchTopicMessage"] = 108;
    values[valuesById[109] = "DeleteAliasCache"] = 109;
    values[valuesById[110] = "UpdateRegistration"] = 110;
    values[valuesById[112] = "BatchMessageNew"] = 112;
    values[valuesById[113] = "PublicWelfareMessage"] = 113;
    values[valuesById[114] = "RevokeMessage"] = 114;
    values[valuesById[115] = "NotifyAwakeApp"] = 115;
    values[valuesById[200] = "SimulatorJob"] = 200;
    return values;
})();

$root.Target = (function() {

    /**
     * Properties of a Target.
     * @exports ITarget
     * @interface ITarget
     * @property {number|Long} channelId Target channelId
     * @property {string} userId Target userId
     * @property {string|null} [server] Target server
     * @property {string|null} [resource] Target resource
     * @property {boolean|null} [isPreview] Target isPreview
     * @property {Platform|null} [platform] Target platform
     * @property {string|null} [token] Target token
     * @property {string|null} [siteName] Target siteName
     */

    /**
     * Constructs a new Target.
     * @exports Target
     * @classdesc Represents a Target.
     * @implements ITarget
     * @constructor
     * @param {ITarget=} [properties] Properties to set
     */
    function Target(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Target channelId.
     * @member {number|Long} channelId
     * @memberof Target
     * @instance
     */
    Target.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Target userId.
     * @member {string} userId
     * @memberof Target
     * @instance
     */
    Target.prototype.userId = "";

    /**
     * Target server.
     * @member {string} server
     * @memberof Target
     * @instance
     */
    Target.prototype.server = "xiaomi.com";

    /**
     * Target resource.
     * @member {string} resource
     * @memberof Target
     * @instance
     */
    Target.prototype.resource = "";

    /**
     * Target isPreview.
     * @member {boolean} isPreview
     * @memberof Target
     * @instance
     */
    Target.prototype.isPreview = false;

    /**
     * Target platform.
     * @member {Platform} platform
     * @memberof Target
     * @instance
     */
    Target.prototype.platform = 0;

    /**
     * Target token.
     * @member {string} token
     * @memberof Target
     * @instance
     */
    Target.prototype.token = "";

    /**
     * Target siteName.
     * @member {string} siteName
     * @memberof Target
     * @instance
     */
    Target.prototype.siteName = "";

    /**
     * Creates a new Target instance using the specified properties.
     * @function create
     * @memberof Target
     * @static
     * @param {ITarget=} [properties] Properties to set
     * @returns {Target} Target instance
     */
    Target.create = function create(properties) {
        return new Target(properties);
    };

    /**
     * Encodes the specified Target message. Does not implicitly {@link Target.verify|verify} messages.
     * @function encode
     * @memberof Target
     * @static
     * @param {ITarget} message Target message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Target.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.channelId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.server != null && message.hasOwnProperty("server"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.server);
        if (message.resource != null && message.hasOwnProperty("resource"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.resource);
        if (message.isPreview != null && message.hasOwnProperty("isPreview"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isPreview);
        if (message.platform != null && message.hasOwnProperty("platform"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.platform);
        if (message.token != null && message.hasOwnProperty("token"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.token);
        if (message.siteName != null && message.hasOwnProperty("siteName"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.siteName);
        return writer;
    };

    /**
     * Encodes the specified Target message, length delimited. Does not implicitly {@link Target.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Target
     * @static
     * @param {ITarget} message Target message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Target.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Target message from the specified reader or buffer.
     * @function decode
     * @memberof Target
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Target} Target
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Target.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Target();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.channelId = reader.int64();
                break;
            case 2:
                message.userId = reader.string();
                break;
            case 3:
                message.server = reader.string();
                break;
            case 4:
                message.resource = reader.string();
                break;
            case 5:
                message.isPreview = reader.bool();
                break;
            case 6:
                message.platform = reader.int32();
                break;
            case 7:
                message.token = reader.string();
                break;
            case 8:
                message.siteName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("channelId"))
            throw $util.ProtocolError("missing required 'channelId'", { instance: message });
        if (!message.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: message });
        return message;
    };

    /**
     * Decodes a Target message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Target
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Target} Target
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Target.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Target message.
     * @function verify
     * @memberof Target
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Target.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.channelId) && !(message.channelId && $util.isInteger(message.channelId.low) && $util.isInteger(message.channelId.high)))
            return "channelId: integer|Long expected";
        if (!$util.isString(message.userId))
            return "userId: string expected";
        if (message.server != null && message.hasOwnProperty("server"))
            if (!$util.isString(message.server))
                return "server: string expected";
        if (message.resource != null && message.hasOwnProperty("resource"))
            if (!$util.isString(message.resource))
                return "resource: string expected";
        if (message.isPreview != null && message.hasOwnProperty("isPreview"))
            if (typeof message.isPreview !== "boolean")
                return "isPreview: boolean expected";
        if (message.platform != null && message.hasOwnProperty("platform"))
            switch (message.platform) {
            default:
                return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 5:
            case 8:
            case 10:
            case 11:
                break;
            }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.siteName != null && message.hasOwnProperty("siteName"))
            if (!$util.isString(message.siteName))
                return "siteName: string expected";
        return null;
    };

    /**
     * Creates a Target message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Target
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Target} Target
     */
    Target.fromObject = function fromObject(object) {
        if (object instanceof $root.Target)
            return object;
        var message = new $root.Target();
        if (object.channelId != null)
            if ($util.Long)
                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = false;
            else if (typeof object.channelId === "string")
                message.channelId = parseInt(object.channelId, 10);
            else if (typeof object.channelId === "number")
                message.channelId = object.channelId;
            else if (typeof object.channelId === "object")
                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.server != null)
            message.server = String(object.server);
        if (object.resource != null)
            message.resource = String(object.resource);
        if (object.isPreview != null)
            message.isPreview = Boolean(object.isPreview);
        switch (object.platform) {
        case "Android":
        case 0:
            message.platform = 0;
            break;
        case "iOS":
        case 1:
            message.platform = 1;
            break;
        case "ROUTER":
        case 2:
            message.platform = 2;
            break;
        case "TV":
        case 3:
            message.platform = 3;
            break;
        case "YP":
        case 5:
            message.platform = 5;
            break;
        case "GAME":
        case 8:
            message.platform = 8;
            break;
        case "VRPRO":
        case 10:
            message.platform = 10;
            break;
        case "Hybrid":
        case 11:
            message.platform = 11;
            break;
        }
        if (object.token != null)
            message.token = String(object.token);
        if (object.siteName != null)
            message.siteName = String(object.siteName);
        return message;
    };

    /**
     * Creates a plain object from a Target message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Target
     * @static
     * @param {Target} message Target
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Target.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.channelId = options.longs === String ? "0" : 0;
            object.userId = "";
            object.server = "xiaomi.com";
            object.resource = "";
            object.isPreview = false;
            object.platform = options.enums === String ? "Android" : 0;
            object.token = "";
            object.siteName = "";
        }
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            if (typeof message.channelId === "number")
                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
            else
                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber() : message.channelId;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.server != null && message.hasOwnProperty("server"))
            object.server = message.server;
        if (message.resource != null && message.hasOwnProperty("resource"))
            object.resource = message.resource;
        if (message.isPreview != null && message.hasOwnProperty("isPreview"))
            object.isPreview = message.isPreview;
        if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = options.enums === String ? $root.Platform[message.platform] : message.platform;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.siteName != null && message.hasOwnProperty("siteName"))
            object.siteName = message.siteName;
        return object;
    };

    /**
     * Converts this Target to JSON.
     * @function toJSON
     * @memberof Target
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Target.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Target;
})();

$root.PushMetaInfo = (function() {

    /**
     * Properties of a PushMetaInfo.
     * @exports IPushMetaInfo
     * @interface IPushMetaInfo
     * @property {string} id PushMetaInfo id
     * @property {number|Long} messageTs PushMetaInfo messageTs
     * @property {string|null} [topic] PushMetaInfo topic
     * @property {string|null} [title] PushMetaInfo title
     * @property {string|null} [description] PushMetaInfo description
     * @property {number|null} [notifyType] PushMetaInfo notifyType
     * @property {string|null} [url] PushMetaInfo url
     * @property {number|null} [passThrough] PushMetaInfo passThrough
     * @property {number|null} [notifyId] PushMetaInfo notifyId
     * @property {string|null} [extra] PushMetaInfo extra
     * @property {string|null} [internal] PushMetaInfo internal
     * @property {boolean|null} [ignoreRegInfo] PushMetaInfo ignoreRegInfo
     * @property {string|null} [apsProperFields] extension fields for aps
     */

    /**
     * Constructs a new PushMetaInfo.
     * @exports PushMetaInfo
     * @classdesc Represents a PushMetaInfo.
     * @implements IPushMetaInfo
     * @constructor
     * @param {IPushMetaInfo=} [properties] Properties to set
     */
    function PushMetaInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PushMetaInfo id.
     * @member {string} id
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.id = "";

    /**
     * PushMetaInfo messageTs.
     * @member {number|Long} messageTs
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.messageTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PushMetaInfo topic.
     * @member {string} topic
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.topic = "";

    /**
     * PushMetaInfo title.
     * @member {string} title
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.title = "";

    /**
     * PushMetaInfo description.
     * @member {string} description
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.description = "";

    /**
     * PushMetaInfo notifyType.
     * @member {number} notifyType
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.notifyType = 0;

    /**
     * PushMetaInfo url.
     * @member {string} url
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.url = "";

    /**
     * PushMetaInfo passThrough.
     * @member {number} passThrough
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.passThrough = 0;

    /**
     * PushMetaInfo notifyId.
     * @member {number} notifyId
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.notifyId = 0;

    /**
     * PushMetaInfo extra.
     * @member {string} extra
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.extra = "";

    /**
     * PushMetaInfo internal.
     * @member {string} internal
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.internal = "";

    /**
     * PushMetaInfo ignoreRegInfo.
     * @member {boolean} ignoreRegInfo
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.ignoreRegInfo = false;

    /**
     * extension fields for aps
     * @member {string} apsProperFields
     * @memberof PushMetaInfo
     * @instance
     */
    PushMetaInfo.prototype.apsProperFields = "";

    /**
     * Creates a new PushMetaInfo instance using the specified properties.
     * @function create
     * @memberof PushMetaInfo
     * @static
     * @param {IPushMetaInfo=} [properties] Properties to set
     * @returns {PushMetaInfo} PushMetaInfo instance
     */
    PushMetaInfo.create = function create(properties) {
        return new PushMetaInfo(properties);
    };

    /**
     * Encodes the specified PushMetaInfo message. Does not implicitly {@link PushMetaInfo.verify|verify} messages.
     * @function encode
     * @memberof PushMetaInfo
     * @static
     * @param {IPushMetaInfo} message PushMetaInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushMetaInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.messageTs);
        if (message.topic != null && message.hasOwnProperty("topic"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.topic);
        if (message.title != null && message.hasOwnProperty("title"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
        if (message.notifyType != null && message.hasOwnProperty("notifyType"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.notifyType);
        if (message.url != null && message.hasOwnProperty("url"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.url);
        if (message.passThrough != null && message.hasOwnProperty("passThrough"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.passThrough);
        if (message.notifyId != null && message.hasOwnProperty("notifyId"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.notifyId);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.extra);
        if (message.internal != null && message.hasOwnProperty("internal"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.internal);
        if (message.ignoreRegInfo != null && message.hasOwnProperty("ignoreRegInfo"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.ignoreRegInfo);
        if (message.apsProperFields != null && message.hasOwnProperty("apsProperFields"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.apsProperFields);
        return writer;
    };

    /**
     * Encodes the specified PushMetaInfo message, length delimited. Does not implicitly {@link PushMetaInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PushMetaInfo
     * @static
     * @param {IPushMetaInfo} message PushMetaInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushMetaInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PushMetaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PushMetaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PushMetaInfo} PushMetaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushMetaInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PushMetaInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.messageTs = reader.int64();
                break;
            case 3:
                message.topic = reader.string();
                break;
            case 4:
                message.title = reader.string();
                break;
            case 5:
                message.description = reader.string();
                break;
            case 6:
                message.notifyType = reader.int32();
                break;
            case 7:
                message.url = reader.string();
                break;
            case 8:
                message.passThrough = reader.int32();
                break;
            case 9:
                message.notifyId = reader.int32();
                break;
            case 10:
                message.extra = reader.string();
                break;
            case 11:
                message.internal = reader.string();
                break;
            case 12:
                message.ignoreRegInfo = reader.bool();
                break;
            case 13:
                message.apsProperFields = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("messageTs"))
            throw $util.ProtocolError("missing required 'messageTs'", { instance: message });
        return message;
    };

    /**
     * Decodes a PushMetaInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PushMetaInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PushMetaInfo} PushMetaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushMetaInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PushMetaInfo message.
     * @function verify
     * @memberof PushMetaInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PushMetaInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isInteger(message.messageTs) && !(message.messageTs && $util.isInteger(message.messageTs.low) && $util.isInteger(message.messageTs.high)))
            return "messageTs: integer|Long expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.notifyType != null && message.hasOwnProperty("notifyType"))
            if (!$util.isInteger(message.notifyType))
                return "notifyType: integer expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.passThrough != null && message.hasOwnProperty("passThrough"))
            if (!$util.isInteger(message.passThrough))
                return "passThrough: integer expected";
        if (message.notifyId != null && message.hasOwnProperty("notifyId"))
            if (!$util.isInteger(message.notifyId))
                return "notifyId: integer expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.internal != null && message.hasOwnProperty("internal"))
            if (!$util.isString(message.internal))
                return "internal: string expected";
        if (message.ignoreRegInfo != null && message.hasOwnProperty("ignoreRegInfo"))
            if (typeof message.ignoreRegInfo !== "boolean")
                return "ignoreRegInfo: boolean expected";
        if (message.apsProperFields != null && message.hasOwnProperty("apsProperFields"))
            if (!$util.isString(message.apsProperFields))
                return "apsProperFields: string expected";
        return null;
    };

    /**
     * Creates a PushMetaInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PushMetaInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PushMetaInfo} PushMetaInfo
     */
    PushMetaInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.PushMetaInfo)
            return object;
        var message = new $root.PushMetaInfo();
        if (object.id != null)
            message.id = String(object.id);
        if (object.messageTs != null)
            if ($util.Long)
                (message.messageTs = $util.Long.fromValue(object.messageTs)).unsigned = false;
            else if (typeof object.messageTs === "string")
                message.messageTs = parseInt(object.messageTs, 10);
            else if (typeof object.messageTs === "number")
                message.messageTs = object.messageTs;
            else if (typeof object.messageTs === "object")
                message.messageTs = new $util.LongBits(object.messageTs.low >>> 0, object.messageTs.high >>> 0).toNumber();
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.title != null)
            message.title = String(object.title);
        if (object.description != null)
            message.description = String(object.description);
        if (object.notifyType != null)
            message.notifyType = object.notifyType | 0;
        if (object.url != null)
            message.url = String(object.url);
        if (object.passThrough != null)
            message.passThrough = object.passThrough | 0;
        if (object.notifyId != null)
            message.notifyId = object.notifyId | 0;
        if (object.extra != null)
            message.extra = String(object.extra);
        if (object.internal != null)
            message.internal = String(object.internal);
        if (object.ignoreRegInfo != null)
            message.ignoreRegInfo = Boolean(object.ignoreRegInfo);
        if (object.apsProperFields != null)
            message.apsProperFields = String(object.apsProperFields);
        return message;
    };

    /**
     * Creates a plain object from a PushMetaInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PushMetaInfo
     * @static
     * @param {PushMetaInfo} message PushMetaInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PushMetaInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.messageTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.messageTs = options.longs === String ? "0" : 0;
            object.topic = "";
            object.title = "";
            object.description = "";
            object.notifyType = 0;
            object.url = "";
            object.passThrough = 0;
            object.notifyId = 0;
            object.extra = "";
            object.internal = "";
            object.ignoreRegInfo = false;
            object.apsProperFields = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.messageTs != null && message.hasOwnProperty("messageTs"))
            if (typeof message.messageTs === "number")
                object.messageTs = options.longs === String ? String(message.messageTs) : message.messageTs;
            else
                object.messageTs = options.longs === String ? $util.Long.prototype.toString.call(message.messageTs) : options.longs === Number ? new $util.LongBits(message.messageTs.low >>> 0, message.messageTs.high >>> 0).toNumber() : message.messageTs;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.notifyType != null && message.hasOwnProperty("notifyType"))
            object.notifyType = message.notifyType;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.passThrough != null && message.hasOwnProperty("passThrough"))
            object.passThrough = message.passThrough;
        if (message.notifyId != null && message.hasOwnProperty("notifyId"))
            object.notifyId = message.notifyId;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.internal != null && message.hasOwnProperty("internal"))
            object.internal = message.internal;
        if (message.ignoreRegInfo != null && message.hasOwnProperty("ignoreRegInfo"))
            object.ignoreRegInfo = message.ignoreRegInfo;
        if (message.apsProperFields != null && message.hasOwnProperty("apsProperFields"))
            object.apsProperFields = message.apsProperFields;
        return object;
    };

    /**
     * Converts this PushMetaInfo to JSON.
     * @function toJSON
     * @memberof PushMetaInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PushMetaInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PushMetaInfo;
})();

/**
 * Platform enum.
 * @exports Platform
 * @enum {string}
 * @property {number} Android=0 Android value
 * @property {number} iOS=1 iOS value
 * @property {number} ROUTER=2 ROUTER value
 * @property {number} TV=3 TV value
 * @property {number} YP=5 YP value
 * @property {number} GAME=8 GAME value
 * @property {number} VRPRO=10 VRPRO value
 * @property {number} Hybrid=11 Hybrid value
 */
$root.Platform = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Android"] = 0;
    values[valuesById[1] = "iOS"] = 1;
    values[valuesById[2] = "ROUTER"] = 2;
    values[valuesById[3] = "TV"] = 3;
    values[valuesById[5] = "YP"] = 5;
    values[valuesById[8] = "GAME"] = 8;
    values[valuesById[10] = "VRPRO"] = 10;
    values[valuesById[11] = "Hybrid"] = 11;
    return values;
})();

$root.XmPushActionSubscription = (function() {

    /**
     * Properties of a XmPushActionSubscription.
     * @exports IXmPushActionSubscription
     * @interface IXmPushActionSubscription
     * @property {string|null} [debug] XmPushActionSubscription debug
     * @property {ITarget|null} [target] XmPushActionSubscription target
     * @property {string} id XmPushActionSubscription id
     * @property {string} appId XmPushActionSubscription appId
     * @property {string} topic XmPushActionSubscription topic
     * @property {string|null} [packageName] XmPushActionSubscription packageName
     * @property {string|null} [category] XmPushActionSubscription category
     * @property {Array.<string>|null} [aliases] XmPushActionSubscription aliases
     */

    /**
     * Constructs a new XmPushActionSubscription.
     * @exports XmPushActionSubscription
     * @classdesc Subscription request.
     * @implements IXmPushActionSubscription
     * @constructor
     * @param {IXmPushActionSubscription=} [properties] Properties to set
     */
    function XmPushActionSubscription(properties) {
        this.aliases = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionSubscription debug.
     * @member {string} debug
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.debug = "";

    /**
     * XmPushActionSubscription target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.target = null;

    /**
     * XmPushActionSubscription id.
     * @member {string} id
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.id = "";

    /**
     * XmPushActionSubscription appId.
     * @member {string} appId
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.appId = "";

    /**
     * XmPushActionSubscription topic.
     * @member {string} topic
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.topic = "";

    /**
     * XmPushActionSubscription packageName.
     * @member {string} packageName
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.packageName = "";

    /**
     * XmPushActionSubscription category.
     * @member {string} category
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.category = "";

    /**
     * XmPushActionSubscription aliases.
     * @member {Array.<string>} aliases
     * @memberof XmPushActionSubscription
     * @instance
     */
    XmPushActionSubscription.prototype.aliases = $util.emptyArray;

    /**
     * Creates a new XmPushActionSubscription instance using the specified properties.
     * @function create
     * @memberof XmPushActionSubscription
     * @static
     * @param {IXmPushActionSubscription=} [properties] Properties to set
     * @returns {XmPushActionSubscription} XmPushActionSubscription instance
     */
    XmPushActionSubscription.create = function create(properties) {
        return new XmPushActionSubscription(properties);
    };

    /**
     * Encodes the specified XmPushActionSubscription message. Does not implicitly {@link XmPushActionSubscription.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionSubscription
     * @static
     * @param {IXmPushActionSubscription} message XmPushActionSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionSubscription.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        writer.uint32(/* id 5, wireType 2 =*/42).string(message.topic);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.category);
        if (message.aliases != null && message.aliases.length)
            for (var i = 0; i < message.aliases.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.aliases[i]);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionSubscription message, length delimited. Does not implicitly {@link XmPushActionSubscription.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionSubscription
     * @static
     * @param {IXmPushActionSubscription} message XmPushActionSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionSubscription.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionSubscription message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionSubscription} XmPushActionSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionSubscription.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionSubscription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.topic = reader.string();
                break;
            case 6:
                message.packageName = reader.string();
                break;
            case 7:
                message.category = reader.string();
                break;
            case 8:
                if (!(message.aliases && message.aliases.length))
                    message.aliases = [];
                message.aliases.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("topic"))
            throw $util.ProtocolError("missing required 'topic'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionSubscription message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionSubscription} XmPushActionSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionSubscription.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionSubscription message.
     * @function verify
     * @memberof XmPushActionSubscription
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionSubscription.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isString(message.topic))
            return "topic: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.aliases != null && message.hasOwnProperty("aliases")) {
            if (!Array.isArray(message.aliases))
                return "aliases: array expected";
            for (var i = 0; i < message.aliases.length; ++i)
                if (!$util.isString(message.aliases[i]))
                    return "aliases: string[] expected";
        }
        return null;
    };

    /**
     * Creates a XmPushActionSubscription message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionSubscription
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionSubscription} XmPushActionSubscription
     */
    XmPushActionSubscription.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionSubscription)
            return object;
        var message = new $root.XmPushActionSubscription();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionSubscription.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        if (object.aliases) {
            if (!Array.isArray(object.aliases))
                throw TypeError(".XmPushActionSubscription.aliases: array expected");
            message.aliases = [];
            for (var i = 0; i < object.aliases.length; ++i)
                message.aliases[i] = String(object.aliases[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionSubscription message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionSubscription
     * @static
     * @param {XmPushActionSubscription} message XmPushActionSubscription
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionSubscription.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.aliases = [];
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.topic = "";
            object.packageName = "";
            object.category = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.aliases && message.aliases.length) {
            object.aliases = [];
            for (var j = 0; j < message.aliases.length; ++j)
                object.aliases[j] = message.aliases[j];
        }
        return object;
    };

    /**
     * Converts this XmPushActionSubscription to JSON.
     * @function toJSON
     * @memberof XmPushActionSubscription
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionSubscription.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionSubscription;
})();

$root.XmPushActionUnSubscription = (function() {

    /**
     * Properties of a XmPushActionUnSubscription.
     * @exports IXmPushActionUnSubscription
     * @interface IXmPushActionUnSubscription
     * @property {string|null} [debug] XmPushActionUnSubscription debug
     * @property {ITarget|null} [target] XmPushActionUnSubscription target
     * @property {string} id XmPushActionUnSubscription id
     * @property {string} appId XmPushActionUnSubscription appId
     * @property {string} topic XmPushActionUnSubscription topic
     * @property {string|null} [packageName] XmPushActionUnSubscription packageName
     * @property {string|null} [category] XmPushActionUnSubscription category
     * @property {Array.<string>|null} [aliases] XmPushActionUnSubscription aliases
     */

    /**
     * Constructs a new XmPushActionUnSubscription.
     * @exports XmPushActionUnSubscription
     * @classdesc UnSubscription request.
     * @implements IXmPushActionUnSubscription
     * @constructor
     * @param {IXmPushActionUnSubscription=} [properties] Properties to set
     */
    function XmPushActionUnSubscription(properties) {
        this.aliases = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionUnSubscription debug.
     * @member {string} debug
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.debug = "";

    /**
     * XmPushActionUnSubscription target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.target = null;

    /**
     * XmPushActionUnSubscription id.
     * @member {string} id
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.id = "";

    /**
     * XmPushActionUnSubscription appId.
     * @member {string} appId
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.appId = "";

    /**
     * XmPushActionUnSubscription topic.
     * @member {string} topic
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.topic = "";

    /**
     * XmPushActionUnSubscription packageName.
     * @member {string} packageName
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.packageName = "";

    /**
     * XmPushActionUnSubscription category.
     * @member {string} category
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.category = "";

    /**
     * XmPushActionUnSubscription aliases.
     * @member {Array.<string>} aliases
     * @memberof XmPushActionUnSubscription
     * @instance
     */
    XmPushActionUnSubscription.prototype.aliases = $util.emptyArray;

    /**
     * Creates a new XmPushActionUnSubscription instance using the specified properties.
     * @function create
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {IXmPushActionUnSubscription=} [properties] Properties to set
     * @returns {XmPushActionUnSubscription} XmPushActionUnSubscription instance
     */
    XmPushActionUnSubscription.create = function create(properties) {
        return new XmPushActionUnSubscription(properties);
    };

    /**
     * Encodes the specified XmPushActionUnSubscription message. Does not implicitly {@link XmPushActionUnSubscription.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {IXmPushActionUnSubscription} message XmPushActionUnSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnSubscription.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        writer.uint32(/* id 5, wireType 2 =*/42).string(message.topic);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.category);
        if (message.aliases != null && message.aliases.length)
            for (var i = 0; i < message.aliases.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.aliases[i]);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionUnSubscription message, length delimited. Does not implicitly {@link XmPushActionUnSubscription.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {IXmPushActionUnSubscription} message XmPushActionUnSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnSubscription.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionUnSubscription message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionUnSubscription} XmPushActionUnSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnSubscription.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionUnSubscription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.topic = reader.string();
                break;
            case 6:
                message.packageName = reader.string();
                break;
            case 7:
                message.category = reader.string();
                break;
            case 8:
                if (!(message.aliases && message.aliases.length))
                    message.aliases = [];
                message.aliases.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("topic"))
            throw $util.ProtocolError("missing required 'topic'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionUnSubscription message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionUnSubscription} XmPushActionUnSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnSubscription.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionUnSubscription message.
     * @function verify
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionUnSubscription.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isString(message.topic))
            return "topic: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.aliases != null && message.hasOwnProperty("aliases")) {
            if (!Array.isArray(message.aliases))
                return "aliases: array expected";
            for (var i = 0; i < message.aliases.length; ++i)
                if (!$util.isString(message.aliases[i]))
                    return "aliases: string[] expected";
        }
        return null;
    };

    /**
     * Creates a XmPushActionUnSubscription message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionUnSubscription} XmPushActionUnSubscription
     */
    XmPushActionUnSubscription.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionUnSubscription)
            return object;
        var message = new $root.XmPushActionUnSubscription();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionUnSubscription.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        if (object.aliases) {
            if (!Array.isArray(object.aliases))
                throw TypeError(".XmPushActionUnSubscription.aliases: array expected");
            message.aliases = [];
            for (var i = 0; i < object.aliases.length; ++i)
                message.aliases[i] = String(object.aliases[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionUnSubscription message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionUnSubscription
     * @static
     * @param {XmPushActionUnSubscription} message XmPushActionUnSubscription
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionUnSubscription.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.aliases = [];
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.topic = "";
            object.packageName = "";
            object.category = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.aliases && message.aliases.length) {
            object.aliases = [];
            for (var j = 0; j < message.aliases.length; ++j)
                object.aliases[j] = message.aliases[j];
        }
        return object;
    };

    /**
     * Converts this XmPushActionUnSubscription to JSON.
     * @function toJSON
     * @memberof XmPushActionUnSubscription
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionUnSubscription.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionUnSubscription;
})();

$root.XmPushActionCommand = (function() {

    /**
     * Properties of a XmPushActionCommand.
     * @exports IXmPushActionCommand
     * @interface IXmPushActionCommand
     * @property {ITarget|null} [target] XmPushActionCommand target
     * @property {string} id XmPushActionCommand id
     * @property {string} appId XmPushActionCommand appId
     * @property {string} cmdName XmPushActionCommand cmdName
     * @property {Array.<string>|null} [cmdArgs] XmPushActionCommand cmdArgs
     * @property {string|null} [packageName] XmPushActionCommand packageName
     * @property {IPushRegistrationInfo|null} [regInfo] XmPushActionCommand regInfo
     * @property {string|null} [category] XmPushActionCommand category
     * @property {boolean|null} [updateCache] XmPushActionCommand updateCache
     * @property {boolean|null} [response2Client] XmPushActionCommand response2Client
     * @property {number|Long|null} [createdTs] XmPushActionCommand createdTs
     */

    /**
     * Constructs a new XmPushActionCommand.
     * @exports XmPushActionCommand
     * @classdesc Control command. TODO 从1开始
     * @implements IXmPushActionCommand
     * @constructor
     * @param {IXmPushActionCommand=} [properties] Properties to set
     */
    function XmPushActionCommand(properties) {
        this.cmdArgs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionCommand target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.target = null;

    /**
     * XmPushActionCommand id.
     * @member {string} id
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.id = "";

    /**
     * XmPushActionCommand appId.
     * @member {string} appId
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.appId = "";

    /**
     * XmPushActionCommand cmdName.
     * @member {string} cmdName
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.cmdName = "";

    /**
     * XmPushActionCommand cmdArgs.
     * @member {Array.<string>} cmdArgs
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.cmdArgs = $util.emptyArray;

    /**
     * XmPushActionCommand packageName.
     * @member {string} packageName
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.packageName = "";

    /**
     * XmPushActionCommand regInfo.
     * @member {IPushRegistrationInfo|null|undefined} regInfo
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.regInfo = null;

    /**
     * XmPushActionCommand category.
     * @member {string} category
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.category = "";

    /**
     * XmPushActionCommand updateCache.
     * @member {boolean} updateCache
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.updateCache = false;

    /**
     * XmPushActionCommand response2Client.
     * @member {boolean} response2Client
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.response2Client = false;

    /**
     * XmPushActionCommand createdTs.
     * @member {number|Long} createdTs
     * @memberof XmPushActionCommand
     * @instance
     */
    XmPushActionCommand.prototype.createdTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new XmPushActionCommand instance using the specified properties.
     * @function create
     * @memberof XmPushActionCommand
     * @static
     * @param {IXmPushActionCommand=} [properties] Properties to set
     * @returns {XmPushActionCommand} XmPushActionCommand instance
     */
    XmPushActionCommand.create = function create(properties) {
        return new XmPushActionCommand(properties);
    };

    /**
     * Encodes the specified XmPushActionCommand message. Does not implicitly {@link XmPushActionCommand.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionCommand
     * @static
     * @param {IXmPushActionCommand} message XmPushActionCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appId);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.cmdName);
        if (message.cmdArgs != null && message.cmdArgs.length)
            for (var i = 0; i < message.cmdArgs.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.cmdArgs[i]);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.packageName);
        if (message.regInfo != null && message.hasOwnProperty("regInfo"))
            $root.PushRegistrationInfo.encode(message.regInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.category);
        if (message.updateCache != null && message.hasOwnProperty("updateCache"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.updateCache);
        if (message.response2Client != null && message.hasOwnProperty("response2Client"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.response2Client);
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.createdTs);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionCommand message, length delimited. Does not implicitly {@link XmPushActionCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionCommand
     * @static
     * @param {IXmPushActionCommand} message XmPushActionCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionCommand message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionCommand} XmPushActionCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 2:
                message.id = reader.string();
                break;
            case 3:
                message.appId = reader.string();
                break;
            case 4:
                message.cmdName = reader.string();
                break;
            case 5:
                if (!(message.cmdArgs && message.cmdArgs.length))
                    message.cmdArgs = [];
                message.cmdArgs.push(reader.string());
                break;
            case 6:
                message.packageName = reader.string();
                break;
            case 7:
                message.regInfo = $root.PushRegistrationInfo.decode(reader, reader.uint32());
                break;
            case 8:
                message.category = reader.string();
                break;
            case 9:
                message.updateCache = reader.bool();
                break;
            case 10:
                message.response2Client = reader.bool();
                break;
            case 11:
                message.createdTs = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("cmdName"))
            throw $util.ProtocolError("missing required 'cmdName'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionCommand} XmPushActionCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionCommand message.
     * @function verify
     * @memberof XmPushActionCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isString(message.cmdName))
            return "cmdName: string expected";
        if (message.cmdArgs != null && message.hasOwnProperty("cmdArgs")) {
            if (!Array.isArray(message.cmdArgs))
                return "cmdArgs: array expected";
            for (var i = 0; i < message.cmdArgs.length; ++i)
                if (!$util.isString(message.cmdArgs[i]))
                    return "cmdArgs: string[] expected";
        }
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.regInfo != null && message.hasOwnProperty("regInfo")) {
            var error = $root.PushRegistrationInfo.verify(message.regInfo);
            if (error)
                return "regInfo." + error;
        }
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.updateCache != null && message.hasOwnProperty("updateCache"))
            if (typeof message.updateCache !== "boolean")
                return "updateCache: boolean expected";
        if (message.response2Client != null && message.hasOwnProperty("response2Client"))
            if (typeof message.response2Client !== "boolean")
                return "response2Client: boolean expected";
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (!$util.isInteger(message.createdTs) && !(message.createdTs && $util.isInteger(message.createdTs.low) && $util.isInteger(message.createdTs.high)))
                return "createdTs: integer|Long expected";
        return null;
    };

    /**
     * Creates a XmPushActionCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionCommand} XmPushActionCommand
     */
    XmPushActionCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionCommand)
            return object;
        var message = new $root.XmPushActionCommand();
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionCommand.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.cmdName != null)
            message.cmdName = String(object.cmdName);
        if (object.cmdArgs) {
            if (!Array.isArray(object.cmdArgs))
                throw TypeError(".XmPushActionCommand.cmdArgs: array expected");
            message.cmdArgs = [];
            for (var i = 0; i < object.cmdArgs.length; ++i)
                message.cmdArgs[i] = String(object.cmdArgs[i]);
        }
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.regInfo != null) {
            if (typeof object.regInfo !== "object")
                throw TypeError(".XmPushActionCommand.regInfo: object expected");
            message.regInfo = $root.PushRegistrationInfo.fromObject(object.regInfo);
        }
        if (object.category != null)
            message.category = String(object.category);
        if (object.updateCache != null)
            message.updateCache = Boolean(object.updateCache);
        if (object.response2Client != null)
            message.response2Client = Boolean(object.response2Client);
        if (object.createdTs != null)
            if ($util.Long)
                (message.createdTs = $util.Long.fromValue(object.createdTs)).unsigned = false;
            else if (typeof object.createdTs === "string")
                message.createdTs = parseInt(object.createdTs, 10);
            else if (typeof object.createdTs === "number")
                message.createdTs = object.createdTs;
            else if (typeof object.createdTs === "object")
                message.createdTs = new $util.LongBits(object.createdTs.low >>> 0, object.createdTs.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionCommand
     * @static
     * @param {XmPushActionCommand} message XmPushActionCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cmdArgs = [];
        if (options.defaults) {
            object.target = null;
            object.id = "";
            object.appId = "";
            object.cmdName = "";
            object.packageName = "";
            object.regInfo = null;
            object.category = "";
            object.updateCache = false;
            object.response2Client = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdTs = options.longs === String ? "0" : 0;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.cmdName != null && message.hasOwnProperty("cmdName"))
            object.cmdName = message.cmdName;
        if (message.cmdArgs && message.cmdArgs.length) {
            object.cmdArgs = [];
            for (var j = 0; j < message.cmdArgs.length; ++j)
                object.cmdArgs[j] = message.cmdArgs[j];
        }
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.regInfo != null && message.hasOwnProperty("regInfo"))
            object.regInfo = $root.PushRegistrationInfo.toObject(message.regInfo, options);
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.updateCache != null && message.hasOwnProperty("updateCache"))
            object.updateCache = message.updateCache;
        if (message.response2Client != null && message.hasOwnProperty("response2Client"))
            object.response2Client = message.response2Client;
        if (message.createdTs != null && message.hasOwnProperty("createdTs"))
            if (typeof message.createdTs === "number")
                object.createdTs = options.longs === String ? String(message.createdTs) : message.createdTs;
            else
                object.createdTs = options.longs === String ? $util.Long.prototype.toString.call(message.createdTs) : options.longs === Number ? new $util.LongBits(message.createdTs.low >>> 0, message.createdTs.high >>> 0).toNumber() : message.createdTs;
        return object;
    };

    /**
     * Converts this XmPushActionCommand to JSON.
     * @function toJSON
     * @memberof XmPushActionCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionCommand;
})();

$root.XmPushActionSubscriptionResult = (function() {

    /**
     * Properties of a XmPushActionSubscriptionResult.
     * @exports IXmPushActionSubscriptionResult
     * @interface IXmPushActionSubscriptionResult
     * @property {string|null} [debug] XmPushActionSubscriptionResult debug
     * @property {ITarget|null} [target] XmPushActionSubscriptionResult target
     * @property {string} id XmPushActionSubscriptionResult id
     * @property {string|null} [appId] XmPushActionSubscriptionResult appId
     * @property {number|Long|null} [errorCode] XmPushActionSubscriptionResult errorCode
     * @property {string|null} [reason] XmPushActionSubscriptionResult reason
     * @property {string|null} [topic] XmPushActionSubscriptionResult topic
     * @property {string|null} [packageName] XmPushActionSubscriptionResult packageName
     * @property {string|null} [category] XmPushActionSubscriptionResult category
     */

    /**
     * Constructs a new XmPushActionSubscriptionResult.
     * @exports XmPushActionSubscriptionResult
     * @classdesc Represents a XmPushActionSubscriptionResult.
     * @implements IXmPushActionSubscriptionResult
     * @constructor
     * @param {IXmPushActionSubscriptionResult=} [properties] Properties to set
     */
    function XmPushActionSubscriptionResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionSubscriptionResult debug.
     * @member {string} debug
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.debug = "";

    /**
     * XmPushActionSubscriptionResult target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.target = null;

    /**
     * XmPushActionSubscriptionResult id.
     * @member {string} id
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.id = "";

    /**
     * XmPushActionSubscriptionResult appId.
     * @member {string} appId
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.appId = "";

    /**
     * XmPushActionSubscriptionResult errorCode.
     * @member {number|Long} errorCode
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionSubscriptionResult reason.
     * @member {string} reason
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.reason = "";

    /**
     * XmPushActionSubscriptionResult topic.
     * @member {string} topic
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.topic = "";

    /**
     * XmPushActionSubscriptionResult packageName.
     * @member {string} packageName
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.packageName = "";

    /**
     * XmPushActionSubscriptionResult category.
     * @member {string} category
     * @memberof XmPushActionSubscriptionResult
     * @instance
     */
    XmPushActionSubscriptionResult.prototype.category = "";

    /**
     * Creates a new XmPushActionSubscriptionResult instance using the specified properties.
     * @function create
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {IXmPushActionSubscriptionResult=} [properties] Properties to set
     * @returns {XmPushActionSubscriptionResult} XmPushActionSubscriptionResult instance
     */
    XmPushActionSubscriptionResult.create = function create(properties) {
        return new XmPushActionSubscriptionResult(properties);
    };

    /**
     * Encodes the specified XmPushActionSubscriptionResult message. Does not implicitly {@link XmPushActionSubscriptionResult.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {IXmPushActionSubscriptionResult} message XmPushActionSubscriptionResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionSubscriptionResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        if (message.appId != null && message.hasOwnProperty("appId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.errorCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.reason);
        if (message.topic != null && message.hasOwnProperty("topic"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.topic);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.category);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionSubscriptionResult message, length delimited. Does not implicitly {@link XmPushActionSubscriptionResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {IXmPushActionSubscriptionResult} message XmPushActionSubscriptionResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionSubscriptionResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionSubscriptionResult message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionSubscriptionResult} XmPushActionSubscriptionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionSubscriptionResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionSubscriptionResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.errorCode = reader.int64();
                break;
            case 6:
                message.reason = reader.string();
                break;
            case 7:
                message.topic = reader.string();
                break;
            case 8:
                message.packageName = reader.string();
                break;
            case 9:
                message.category = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionSubscriptionResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionSubscriptionResult} XmPushActionSubscriptionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionSubscriptionResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionSubscriptionResult message.
     * @function verify
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionSubscriptionResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (message.appId != null && message.hasOwnProperty("appId"))
            if (!$util.isString(message.appId))
                return "appId: string expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
                return "errorCode: integer|Long expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionSubscriptionResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionSubscriptionResult} XmPushActionSubscriptionResult
     */
    XmPushActionSubscriptionResult.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionSubscriptionResult)
            return object;
        var message = new $root.XmPushActionSubscriptionResult();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionSubscriptionResult.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionSubscriptionResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionSubscriptionResult
     * @static
     * @param {XmPushActionSubscriptionResult} message XmPushActionSubscriptionResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionSubscriptionResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
            object.reason = "";
            object.topic = "";
            object.packageName = "";
            object.category = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        return object;
    };

    /**
     * Converts this XmPushActionSubscriptionResult to JSON.
     * @function toJSON
     * @memberof XmPushActionSubscriptionResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionSubscriptionResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionSubscriptionResult;
})();

$root.XmPushActionUnSubscriptionResult = (function() {

    /**
     * Properties of a XmPushActionUnSubscriptionResult.
     * @exports IXmPushActionUnSubscriptionResult
     * @interface IXmPushActionUnSubscriptionResult
     * @property {string|null} [debug] XmPushActionUnSubscriptionResult debug
     * @property {ITarget|null} [target] XmPushActionUnSubscriptionResult target
     * @property {string} id XmPushActionUnSubscriptionResult id
     * @property {string|null} [appId] XmPushActionUnSubscriptionResult appId
     * @property {number|Long|null} [errorCode] XmPushActionUnSubscriptionResult errorCode
     * @property {string|null} [reason] XmPushActionUnSubscriptionResult reason
     * @property {string|null} [topic] XmPushActionUnSubscriptionResult topic
     * @property {string|null} [packageName] XmPushActionUnSubscriptionResult packageName
     * @property {string|null} [category] XmPushActionUnSubscriptionResult category
     */

    /**
     * Constructs a new XmPushActionUnSubscriptionResult.
     * @exports XmPushActionUnSubscriptionResult
     * @classdesc Represents a XmPushActionUnSubscriptionResult.
     * @implements IXmPushActionUnSubscriptionResult
     * @constructor
     * @param {IXmPushActionUnSubscriptionResult=} [properties] Properties to set
     */
    function XmPushActionUnSubscriptionResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionUnSubscriptionResult debug.
     * @member {string} debug
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.debug = "";

    /**
     * XmPushActionUnSubscriptionResult target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.target = null;

    /**
     * XmPushActionUnSubscriptionResult id.
     * @member {string} id
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.id = "";

    /**
     * XmPushActionUnSubscriptionResult appId.
     * @member {string} appId
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.appId = "";

    /**
     * XmPushActionUnSubscriptionResult errorCode.
     * @member {number|Long} errorCode
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionUnSubscriptionResult reason.
     * @member {string} reason
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.reason = "";

    /**
     * XmPushActionUnSubscriptionResult topic.
     * @member {string} topic
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.topic = "";

    /**
     * XmPushActionUnSubscriptionResult packageName.
     * @member {string} packageName
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.packageName = "";

    /**
     * XmPushActionUnSubscriptionResult category.
     * @member {string} category
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     */
    XmPushActionUnSubscriptionResult.prototype.category = "";

    /**
     * Creates a new XmPushActionUnSubscriptionResult instance using the specified properties.
     * @function create
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {IXmPushActionUnSubscriptionResult=} [properties] Properties to set
     * @returns {XmPushActionUnSubscriptionResult} XmPushActionUnSubscriptionResult instance
     */
    XmPushActionUnSubscriptionResult.create = function create(properties) {
        return new XmPushActionUnSubscriptionResult(properties);
    };

    /**
     * Encodes the specified XmPushActionUnSubscriptionResult message. Does not implicitly {@link XmPushActionUnSubscriptionResult.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {IXmPushActionUnSubscriptionResult} message XmPushActionUnSubscriptionResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnSubscriptionResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        if (message.appId != null && message.hasOwnProperty("appId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.errorCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.reason);
        if (message.topic != null && message.hasOwnProperty("topic"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.topic);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.category);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionUnSubscriptionResult message, length delimited. Does not implicitly {@link XmPushActionUnSubscriptionResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {IXmPushActionUnSubscriptionResult} message XmPushActionUnSubscriptionResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionUnSubscriptionResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionUnSubscriptionResult message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionUnSubscriptionResult} XmPushActionUnSubscriptionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnSubscriptionResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionUnSubscriptionResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.errorCode = reader.int64();
                break;
            case 6:
                message.reason = reader.string();
                break;
            case 7:
                message.topic = reader.string();
                break;
            case 8:
                message.packageName = reader.string();
                break;
            case 9:
                message.category = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionUnSubscriptionResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionUnSubscriptionResult} XmPushActionUnSubscriptionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionUnSubscriptionResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionUnSubscriptionResult message.
     * @function verify
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionUnSubscriptionResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (message.appId != null && message.hasOwnProperty("appId"))
            if (!$util.isString(message.appId))
                return "appId: string expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
                return "errorCode: integer|Long expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionUnSubscriptionResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionUnSubscriptionResult} XmPushActionUnSubscriptionResult
     */
    XmPushActionUnSubscriptionResult.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionUnSubscriptionResult)
            return object;
        var message = new $root.XmPushActionUnSubscriptionResult();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionUnSubscriptionResult.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionUnSubscriptionResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionUnSubscriptionResult
     * @static
     * @param {XmPushActionUnSubscriptionResult} message XmPushActionUnSubscriptionResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionUnSubscriptionResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
            object.reason = "";
            object.topic = "";
            object.packageName = "";
            object.category = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        return object;
    };

    /**
     * Converts this XmPushActionUnSubscriptionResult to JSON.
     * @function toJSON
     * @memberof XmPushActionUnSubscriptionResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionUnSubscriptionResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionUnSubscriptionResult;
})();

$root.XmPushActionCommandResult = (function() {

    /**
     * Properties of a XmPushActionCommandResult.
     * @exports IXmPushActionCommandResult
     * @interface IXmPushActionCommandResult
     * @property {ITarget|null} [target] XmPushActionCommandResult target
     * @property {string} id XmPushActionCommandResult id
     * @property {string} appId XmPushActionCommandResult appId
     * @property {string} cmdName XmPushActionCommandResult cmdName
     * @property {number|Long} errorCode XmPushActionCommandResult errorCode
     * @property {string|null} [reason] XmPushActionCommandResult reason
     * @property {string|null} [packageName] XmPushActionCommandResult packageName
     * @property {Array.<string>|null} [cmdArgs] XmPushActionCommandResult cmdArgs
     * @property {string|null} [category] XmPushActionCommandResult category
     * @property {boolean|null} [response2Client] XmPushActionCommandResult response2Client
     */

    /**
     * Constructs a new XmPushActionCommandResult.
     * @exports XmPushActionCommandResult
     * @classdesc Set config result.
     * @implements IXmPushActionCommandResult
     * @constructor
     * @param {IXmPushActionCommandResult=} [properties] Properties to set
     */
    function XmPushActionCommandResult(properties) {
        this.cmdArgs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionCommandResult target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.target = null;

    /**
     * XmPushActionCommandResult id.
     * @member {string} id
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.id = "";

    /**
     * XmPushActionCommandResult appId.
     * @member {string} appId
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.appId = "";

    /**
     * XmPushActionCommandResult cmdName.
     * @member {string} cmdName
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.cmdName = "";

    /**
     * XmPushActionCommandResult errorCode.
     * @member {number|Long} errorCode
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionCommandResult reason.
     * @member {string} reason
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.reason = "";

    /**
     * XmPushActionCommandResult packageName.
     * @member {string} packageName
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.packageName = "";

    /**
     * XmPushActionCommandResult cmdArgs.
     * @member {Array.<string>} cmdArgs
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.cmdArgs = $util.emptyArray;

    /**
     * XmPushActionCommandResult category.
     * @member {string} category
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.category = "";

    /**
     * XmPushActionCommandResult response2Client.
     * @member {boolean} response2Client
     * @memberof XmPushActionCommandResult
     * @instance
     */
    XmPushActionCommandResult.prototype.response2Client = true;

    /**
     * Creates a new XmPushActionCommandResult instance using the specified properties.
     * @function create
     * @memberof XmPushActionCommandResult
     * @static
     * @param {IXmPushActionCommandResult=} [properties] Properties to set
     * @returns {XmPushActionCommandResult} XmPushActionCommandResult instance
     */
    XmPushActionCommandResult.create = function create(properties) {
        return new XmPushActionCommandResult(properties);
    };

    /**
     * Encodes the specified XmPushActionCommandResult message. Does not implicitly {@link XmPushActionCommandResult.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionCommandResult
     * @static
     * @param {IXmPushActionCommandResult} message XmPushActionCommandResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionCommandResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appId);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.cmdName);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.errorCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.reason);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.packageName);
        if (message.cmdArgs != null && message.cmdArgs.length)
            for (var i = 0; i < message.cmdArgs.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.cmdArgs[i]);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.category);
        if (message.response2Client != null && message.hasOwnProperty("response2Client"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.response2Client);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionCommandResult message, length delimited. Does not implicitly {@link XmPushActionCommandResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionCommandResult
     * @static
     * @param {IXmPushActionCommandResult} message XmPushActionCommandResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionCommandResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionCommandResult message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionCommandResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionCommandResult} XmPushActionCommandResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionCommandResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionCommandResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 2:
                message.id = reader.string();
                break;
            case 3:
                message.appId = reader.string();
                break;
            case 4:
                message.cmdName = reader.string();
                break;
            case 5:
                message.errorCode = reader.int64();
                break;
            case 6:
                message.reason = reader.string();
                break;
            case 7:
                message.packageName = reader.string();
                break;
            case 8:
                if (!(message.cmdArgs && message.cmdArgs.length))
                    message.cmdArgs = [];
                message.cmdArgs.push(reader.string());
                break;
            case 9:
                message.category = reader.string();
                break;
            case 10:
                message.response2Client = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("cmdName"))
            throw $util.ProtocolError("missing required 'cmdName'", { instance: message });
        if (!message.hasOwnProperty("errorCode"))
            throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionCommandResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionCommandResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionCommandResult} XmPushActionCommandResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionCommandResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionCommandResult message.
     * @function verify
     * @memberof XmPushActionCommandResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionCommandResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isString(message.cmdName))
            return "cmdName: string expected";
        if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
            return "errorCode: integer|Long expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.cmdArgs != null && message.hasOwnProperty("cmdArgs")) {
            if (!Array.isArray(message.cmdArgs))
                return "cmdArgs: array expected";
            for (var i = 0; i < message.cmdArgs.length; ++i)
                if (!$util.isString(message.cmdArgs[i]))
                    return "cmdArgs: string[] expected";
        }
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.response2Client != null && message.hasOwnProperty("response2Client"))
            if (typeof message.response2Client !== "boolean")
                return "response2Client: boolean expected";
        return null;
    };

    /**
     * Creates a XmPushActionCommandResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionCommandResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionCommandResult} XmPushActionCommandResult
     */
    XmPushActionCommandResult.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionCommandResult)
            return object;
        var message = new $root.XmPushActionCommandResult();
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionCommandResult.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.cmdName != null)
            message.cmdName = String(object.cmdName);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.cmdArgs) {
            if (!Array.isArray(object.cmdArgs))
                throw TypeError(".XmPushActionCommandResult.cmdArgs: array expected");
            message.cmdArgs = [];
            for (var i = 0; i < object.cmdArgs.length; ++i)
                message.cmdArgs[i] = String(object.cmdArgs[i]);
        }
        if (object.category != null)
            message.category = String(object.category);
        if (object.response2Client != null)
            message.response2Client = Boolean(object.response2Client);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionCommandResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionCommandResult
     * @static
     * @param {XmPushActionCommandResult} message XmPushActionCommandResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionCommandResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cmdArgs = [];
        if (options.defaults) {
            object.target = null;
            object.id = "";
            object.appId = "";
            object.cmdName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
            object.reason = "";
            object.packageName = "";
            object.category = "";
            object.response2Client = true;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.cmdName != null && message.hasOwnProperty("cmdName"))
            object.cmdName = message.cmdName;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.cmdArgs && message.cmdArgs.length) {
            object.cmdArgs = [];
            for (var j = 0; j < message.cmdArgs.length; ++j)
                object.cmdArgs[j] = message.cmdArgs[j];
        }
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.response2Client != null && message.hasOwnProperty("response2Client"))
            object.response2Client = message.response2Client;
        return object;
    };

    /**
     * Converts this XmPushActionCommandResult to JSON.
     * @function toJSON
     * @memberof XmPushActionCommandResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionCommandResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionCommandResult;
})();

$root.XmPushActionAckNotification = (function() {

    /**
     * Properties of a XmPushActionAckNotification.
     * @exports IXmPushActionAckNotification
     * @interface IXmPushActionAckNotification
     * @property {string|null} [debug] XmPushActionAckNotification debug
     * @property {ITarget|null} [target] XmPushActionAckNotification target
     * @property {string} id XmPushActionAckNotification id
     * @property {string|null} [appId] XmPushActionAckNotification appId
     * @property {string|null} [type] XmPushActionAckNotification type
     * @property {number|Long|null} [errorCode] XmPushActionAckNotification errorCode
     * @property {string|null} [reason] XmPushActionAckNotification reason
     * @property {string|null} [extra] XmPushActionAckNotification extra
     * @property {string|null} [packageName] XmPushActionAckNotification packageName
     * @property {string|null} [category] XmPushActionAckNotification category
     */

    /**
     * Constructs a new XmPushActionAckNotification.
     * @exports XmPushActionAckNotification
     * @classdesc Ack system notifications.
     * @implements IXmPushActionAckNotification
     * @constructor
     * @param {IXmPushActionAckNotification=} [properties] Properties to set
     */
    function XmPushActionAckNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionAckNotification debug.
     * @member {string} debug
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.debug = "";

    /**
     * XmPushActionAckNotification target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.target = null;

    /**
     * XmPushActionAckNotification id.
     * @member {string} id
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.id = "";

    /**
     * XmPushActionAckNotification appId.
     * @member {string} appId
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.appId = "";

    /**
     * XmPushActionAckNotification type.
     * @member {string} type
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.type = "";

    /**
     * XmPushActionAckNotification errorCode.
     * @member {number|Long} errorCode
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionAckNotification reason.
     * @member {string} reason
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.reason = "";

    /**
     * XmPushActionAckNotification extra.
     * @member {string} extra
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.extra = "";

    /**
     * XmPushActionAckNotification packageName.
     * @member {string} packageName
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.packageName = "";

    /**
     * XmPushActionAckNotification category.
     * @member {string} category
     * @memberof XmPushActionAckNotification
     * @instance
     */
    XmPushActionAckNotification.prototype.category = "";

    /**
     * Creates a new XmPushActionAckNotification instance using the specified properties.
     * @function create
     * @memberof XmPushActionAckNotification
     * @static
     * @param {IXmPushActionAckNotification=} [properties] Properties to set
     * @returns {XmPushActionAckNotification} XmPushActionAckNotification instance
     */
    XmPushActionAckNotification.create = function create(properties) {
        return new XmPushActionAckNotification(properties);
    };

    /**
     * Encodes the specified XmPushActionAckNotification message. Does not implicitly {@link XmPushActionAckNotification.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionAckNotification
     * @static
     * @param {IXmPushActionAckNotification} message XmPushActionAckNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionAckNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        if (message.appId != null && message.hasOwnProperty("appId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.errorCode);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.reason);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.extra);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.category);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionAckNotification message, length delimited. Does not implicitly {@link XmPushActionAckNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionAckNotification
     * @static
     * @param {IXmPushActionAckNotification} message XmPushActionAckNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionAckNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionAckNotification message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionAckNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionAckNotification} XmPushActionAckNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionAckNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionAckNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.type = reader.string();
                break;
            case 6:
                message.errorCode = reader.int64();
                break;
            case 7:
                message.reason = reader.string();
                break;
            case 8:
                message.extra = reader.string();
                break;
            case 9:
                message.packageName = reader.string();
                break;
            case 10:
                message.category = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionAckNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionAckNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionAckNotification} XmPushActionAckNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionAckNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionAckNotification message.
     * @function verify
     * @memberof XmPushActionAckNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionAckNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (message.appId != null && message.hasOwnProperty("appId"))
            if (!$util.isString(message.appId))
                return "appId: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
                return "errorCode: integer|Long expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionAckNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionAckNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionAckNotification} XmPushActionAckNotification
     */
    XmPushActionAckNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionAckNotification)
            return object;
        var message = new $root.XmPushActionAckNotification();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionAckNotification.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.type != null)
            message.type = String(object.type);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.extra != null)
            message.extra = String(object.extra);
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionAckNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionAckNotification
     * @static
     * @param {XmPushActionAckNotification} message XmPushActionAckNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionAckNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            object.type = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
            object.reason = "";
            object.extra = "";
            object.packageName = "";
            object.category = "";
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        return object;
    };

    /**
     * Converts this XmPushActionAckNotification to JSON.
     * @function toJSON
     * @memberof XmPushActionAckNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionAckNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionAckNotification;
})();

$root.XmPushActionAckMessage = (function() {

    /**
     * Properties of a XmPushActionAckMessage.
     * @exports IXmPushActionAckMessage
     * @interface IXmPushActionAckMessage
     * @property {string|null} [debug] XmPushActionAckMessage debug
     * @property {ITarget|null} [target] XmPushActionAckMessage target
     * @property {string} id XmPushActionAckMessage id
     * @property {string} appId XmPushActionAckMessage appId
     * @property {number|Long} messageTs XmPushActionAckMessage messageTs
     * @property {string|null} [topic] XmPushActionAckMessage topic
     * @property {string|null} [aliasName] XmPushActionAckMessage aliasName
     * @property {IXmPushActionSendMessage|null} [request] XmPushActionAckMessage request
     * @property {string|null} [packageName] XmPushActionAckMessage packageName
     * @property {string|null} [category] XmPushActionAckMessage category
     * @property {boolean|null} [isOnline] XmPushActionAckMessage isOnline
     * @property {string|null} [regId] XmPushActionAckMessage regId
     * @property {string|null} [callbackUrl] XmPushActionAckMessage callbackUrl
     * @property {string|null} [userAccount] XmPushActionAckMessage userAccount
     * @property {number|null} [deviceStatus] XmPushActionAckMessage deviceStatus
     * @property {number|null} [geoMsgStatus] XmPushActionAckMessage geoMsgStatus
     * @property {string|null} [gaid] XmPushActionAckMessage gaid
     * @property {string|null} [imeiMd5] XmPushActionAckMessage imeiMd5
     * @property {string|null} [deviceId] XmPushActionAckMessage deviceId
     * @property {number|null} [passThrough] XmPushActionAckMessage passThrough
     * @property {string|null} [extra] XmPushActionAckMessage extra
     * @property {IXmPushActionAckExtention|null} [extension] XmPushActionAckMessage extension
     */

    /**
     * Constructs a new XmPushActionAckMessage.
     * @exports XmPushActionAckMessage
     * @classdesc Represents a XmPushActionAckMessage.
     * @implements IXmPushActionAckMessage
     * @constructor
     * @param {IXmPushActionAckMessage=} [properties] Properties to set
     */
    function XmPushActionAckMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionAckMessage debug.
     * @member {string} debug
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.debug = "";

    /**
     * XmPushActionAckMessage target.
     * @member {ITarget|null|undefined} target
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.target = null;

    /**
     * XmPushActionAckMessage id.
     * @member {string} id
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.id = "";

    /**
     * XmPushActionAckMessage appId.
     * @member {string} appId
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.appId = "";

    /**
     * XmPushActionAckMessage messageTs.
     * @member {number|Long} messageTs
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.messageTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * XmPushActionAckMessage topic.
     * @member {string} topic
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.topic = "";

    /**
     * XmPushActionAckMessage aliasName.
     * @member {string} aliasName
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.aliasName = "";

    /**
     * XmPushActionAckMessage request.
     * @member {IXmPushActionSendMessage|null|undefined} request
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.request = null;

    /**
     * XmPushActionAckMessage packageName.
     * @member {string} packageName
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.packageName = "";

    /**
     * XmPushActionAckMessage category.
     * @member {string} category
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.category = "";

    /**
     * XmPushActionAckMessage isOnline.
     * @member {boolean} isOnline
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.isOnline = false;

    /**
     * XmPushActionAckMessage regId.
     * @member {string} regId
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.regId = "";

    /**
     * XmPushActionAckMessage callbackUrl.
     * @member {string} callbackUrl
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.callbackUrl = "";

    /**
     * XmPushActionAckMessage userAccount.
     * @member {string} userAccount
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.userAccount = "";

    /**
     * XmPushActionAckMessage deviceStatus.
     * @member {number} deviceStatus
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.deviceStatus = 0;

    /**
     * XmPushActionAckMessage geoMsgStatus.
     * @member {number} geoMsgStatus
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.geoMsgStatus = 0;

    /**
     * XmPushActionAckMessage gaid.
     * @member {string} gaid
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.gaid = "";

    /**
     * XmPushActionAckMessage imeiMd5.
     * @member {string} imeiMd5
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.imeiMd5 = "";

    /**
     * XmPushActionAckMessage deviceId.
     * @member {string} deviceId
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.deviceId = "";

    /**
     * XmPushActionAckMessage passThrough.
     * @member {number} passThrough
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.passThrough = 0;

    /**
     * XmPushActionAckMessage extra.
     * @member {string} extra
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.extra = "";

    /**
     * XmPushActionAckMessage extension.
     * @member {IXmPushActionAckExtention|null|undefined} extension
     * @memberof XmPushActionAckMessage
     * @instance
     */
    XmPushActionAckMessage.prototype.extension = null;

    /**
     * Creates a new XmPushActionAckMessage instance using the specified properties.
     * @function create
     * @memberof XmPushActionAckMessage
     * @static
     * @param {IXmPushActionAckMessage=} [properties] Properties to set
     * @returns {XmPushActionAckMessage} XmPushActionAckMessage instance
     */
    XmPushActionAckMessage.create = function create(properties) {
        return new XmPushActionAckMessage(properties);
    };

    /**
     * Encodes the specified XmPushActionAckMessage message. Does not implicitly {@link XmPushActionAckMessage.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionAckMessage
     * @static
     * @param {IXmPushActionAckMessage} message XmPushActionAckMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionAckMessage.encode = function encode(message, writer) {
        console.log('啦啦啦', message)
        if (!writer)
            writer = $Writer.create();
        console.log('1')
        if (message.debug != null && message.hasOwnProperty("debug"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.debug);
        console.log('2')
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Target.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.appId);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.messageTs);
        console.log('3')
        if (message.topic != null && message.hasOwnProperty("topic"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.topic);
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.aliasName);
        if (message.request != null && message.hasOwnProperty("request"))
            $root.XmPushActionSendMessage.encode(message.request, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.packageName);
        if (message.category != null && message.hasOwnProperty("category"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.category);
        if (message.isOnline != null && message.hasOwnProperty("isOnline"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isOnline);
        if (message.regId != null && message.hasOwnProperty("regId"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.regId);
        if (message.callbackUrl != null && message.hasOwnProperty("callbackUrl"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.callbackUrl);
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.userAccount);
        if (message.deviceStatus != null && message.hasOwnProperty("deviceStatus"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.deviceStatus);
        if (message.geoMsgStatus != null && message.hasOwnProperty("geoMsgStatus"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.geoMsgStatus);
        if (message.gaid != null && message.hasOwnProperty("gaid"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.gaid);
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.imeiMd5);
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.deviceId);
        if (message.passThrough != null && message.hasOwnProperty("passThrough"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.passThrough);
        if (message.extra != null && message.hasOwnProperty("extra"))
            writer.uint32(/* id 21, wireType 2 =*/170).string(message.extra);
        if (message.extension != null && message.hasOwnProperty("extension"))
            $root.XmPushActionAckExtention.encode(message.extension, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        console.log('哈哈哈')
        return writer;
    };

    /**
     * Encodes the specified XmPushActionAckMessage message, length delimited. Does not implicitly {@link XmPushActionAckMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionAckMessage
     * @static
     * @param {IXmPushActionAckMessage} message XmPushActionAckMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionAckMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionAckMessage message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionAckMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionAckMessage} XmPushActionAckMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionAckMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionAckMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.debug = reader.string();
                break;
            case 2:
                message.target = $root.Target.decode(reader, reader.uint32());
                break;
            case 3:
                message.id = reader.string();
                break;
            case 4:
                message.appId = reader.string();
                break;
            case 5:
                message.messageTs = reader.int64();
                break;
            case 6:
                message.topic = reader.string();
                break;
            case 7:
                message.aliasName = reader.string();
                break;
            case 8:
                message.request = $root.XmPushActionSendMessage.decode(reader, reader.uint32());
                break;
            case 9:
                message.packageName = reader.string();
                break;
            case 10:
                message.category = reader.string();
                break;
            case 11:
                message.isOnline = reader.bool();
                break;
            case 12:
                message.regId = reader.string();
                break;
            case 13:
                message.callbackUrl = reader.string();
                break;
            case 14:
                message.userAccount = reader.string();
                break;
            case 15:
                message.deviceStatus = reader.int32();
                break;
            case 16:
                message.geoMsgStatus = reader.int32();
                break;
            case 17:
                message.gaid = reader.string();
                break;
            case 18:
                message.imeiMd5 = reader.string();
                break;
            case 19:
                message.deviceId = reader.string();
                break;
            case 20:
                message.passThrough = reader.int32();
                break;
            case 21:
                message.extra = reader.string();
                break;
            case 22:
                message.extension = $root.XmPushActionAckExtention.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("appId"))
            throw $util.ProtocolError("missing required 'appId'", { instance: message });
        if (!message.hasOwnProperty("messageTs"))
            throw $util.ProtocolError("missing required 'messageTs'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionAckMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionAckMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionAckMessage} XmPushActionAckMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionAckMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionAckMessage message.
     * @function verify
     * @memberof XmPushActionAckMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionAckMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.debug != null && message.hasOwnProperty("debug"))
            if (!$util.isString(message.debug))
                return "debug: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Target.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (!$util.isString(message.id))
            return "id: string expected";
        if (!$util.isString(message.appId))
            return "appId: string expected";
        if (!$util.isInteger(message.messageTs) && !(message.messageTs && $util.isInteger(message.messageTs.low) && $util.isInteger(message.messageTs.high)))
            return "messageTs: integer|Long expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            if (!$util.isString(message.aliasName))
                return "aliasName: string expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            var error = $root.XmPushActionSendMessage.verify(message.request);
            if (error)
                return "request." + error;
        }
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            if (!$util.isString(message.packageName))
                return "packageName: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.isOnline != null && message.hasOwnProperty("isOnline"))
            if (typeof message.isOnline !== "boolean")
                return "isOnline: boolean expected";
        if (message.regId != null && message.hasOwnProperty("regId"))
            if (!$util.isString(message.regId))
                return "regId: string expected";
        if (message.callbackUrl != null && message.hasOwnProperty("callbackUrl"))
            if (!$util.isString(message.callbackUrl))
                return "callbackUrl: string expected";
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            if (!$util.isString(message.userAccount))
                return "userAccount: string expected";
        if (message.deviceStatus != null && message.hasOwnProperty("deviceStatus"))
            if (!$util.isInteger(message.deviceStatus))
                return "deviceStatus: integer expected";
        if (message.geoMsgStatus != null && message.hasOwnProperty("geoMsgStatus"))
            if (!$util.isInteger(message.geoMsgStatus))
                return "geoMsgStatus: integer expected";
        if (message.gaid != null && message.hasOwnProperty("gaid"))
            if (!$util.isString(message.gaid))
                return "gaid: string expected";
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            if (!$util.isString(message.imeiMd5))
                return "imeiMd5: string expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.passThrough != null && message.hasOwnProperty("passThrough"))
            if (!$util.isInteger(message.passThrough))
                return "passThrough: integer expected";
        if (message.extra != null && message.hasOwnProperty("extra"))
            if (!$util.isString(message.extra))
                return "extra: string expected";
        if (message.extension != null && message.hasOwnProperty("extension")) {
            var error = $root.XmPushActionAckExtention.verify(message.extension);
            if (error)
                return "extension." + error;
        }
        return null;
    };

    /**
     * Creates a XmPushActionAckMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionAckMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionAckMessage} XmPushActionAckMessage
     */
    XmPushActionAckMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionAckMessage)
            return object;
        var message = new $root.XmPushActionAckMessage();
        if (object.debug != null)
            message.debug = String(object.debug);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".XmPushActionAckMessage.target: object expected");
            message.target = $root.Target.fromObject(object.target);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.appId != null)
            message.appId = String(object.appId);
        if (object.messageTs != null)
            if ($util.Long)
                (message.messageTs = $util.Long.fromValue(object.messageTs)).unsigned = false;
            else if (typeof object.messageTs === "string")
                message.messageTs = parseInt(object.messageTs, 10);
            else if (typeof object.messageTs === "number")
                message.messageTs = object.messageTs;
            else if (typeof object.messageTs === "object")
                message.messageTs = new $util.LongBits(object.messageTs.low >>> 0, object.messageTs.high >>> 0).toNumber();
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.aliasName != null)
            message.aliasName = String(object.aliasName);
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".XmPushActionAckMessage.request: object expected");
            message.request = $root.XmPushActionSendMessage.fromObject(object.request);
        }
        if (object.packageName != null)
            message.packageName = String(object.packageName);
        if (object.category != null)
            message.category = String(object.category);
        if (object.isOnline != null)
            message.isOnline = Boolean(object.isOnline);
        if (object.regId != null)
            message.regId = String(object.regId);
        if (object.callbackUrl != null)
            message.callbackUrl = String(object.callbackUrl);
        if (object.userAccount != null)
            message.userAccount = String(object.userAccount);
        if (object.deviceStatus != null)
            message.deviceStatus = object.deviceStatus | 0;
        if (object.geoMsgStatus != null)
            message.geoMsgStatus = object.geoMsgStatus | 0;
        if (object.gaid != null)
            message.gaid = String(object.gaid);
        if (object.imeiMd5 != null)
            message.imeiMd5 = String(object.imeiMd5);
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.passThrough != null)
            message.passThrough = object.passThrough | 0;
        if (object.extra != null)
            message.extra = String(object.extra);
        if (object.extension != null) {
            if (typeof object.extension !== "object")
                throw TypeError(".XmPushActionAckMessage.extension: object expected");
            message.extension = $root.XmPushActionAckExtention.fromObject(object.extension);
        }
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionAckMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionAckMessage
     * @static
     * @param {XmPushActionAckMessage} message XmPushActionAckMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionAckMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.debug = "";
            object.target = null;
            object.id = "";
            object.appId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.messageTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.messageTs = options.longs === String ? "0" : 0;
            object.topic = "";
            object.aliasName = "";
            object.request = null;
            object.packageName = "";
            object.category = "";
            object.isOnline = false;
            object.regId = "";
            object.callbackUrl = "";
            object.userAccount = "";
            object.deviceStatus = 0;
            object.geoMsgStatus = 0;
            object.gaid = "";
            object.imeiMd5 = "";
            object.deviceId = "";
            object.passThrough = 0;
            object.extra = "";
            object.extension = null;
        }
        if (message.debug != null && message.hasOwnProperty("debug"))
            object.debug = message.debug;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Target.toObject(message.target, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.appId != null && message.hasOwnProperty("appId"))
            object.appId = message.appId;
        if (message.messageTs != null && message.hasOwnProperty("messageTs"))
            if (typeof message.messageTs === "number")
                object.messageTs = options.longs === String ? String(message.messageTs) : message.messageTs;
            else
                object.messageTs = options.longs === String ? $util.Long.prototype.toString.call(message.messageTs) : options.longs === Number ? new $util.LongBits(message.messageTs.low >>> 0, message.messageTs.high >>> 0).toNumber() : message.messageTs;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.aliasName != null && message.hasOwnProperty("aliasName"))
            object.aliasName = message.aliasName;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = $root.XmPushActionSendMessage.toObject(message.request, options);
        if (message.packageName != null && message.hasOwnProperty("packageName"))
            object.packageName = message.packageName;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.isOnline != null && message.hasOwnProperty("isOnline"))
            object.isOnline = message.isOnline;
        if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
        if (message.callbackUrl != null && message.hasOwnProperty("callbackUrl"))
            object.callbackUrl = message.callbackUrl;
        if (message.userAccount != null && message.hasOwnProperty("userAccount"))
            object.userAccount = message.userAccount;
        if (message.deviceStatus != null && message.hasOwnProperty("deviceStatus"))
            object.deviceStatus = message.deviceStatus;
        if (message.geoMsgStatus != null && message.hasOwnProperty("geoMsgStatus"))
            object.geoMsgStatus = message.geoMsgStatus;
        if (message.gaid != null && message.hasOwnProperty("gaid"))
            object.gaid = message.gaid;
        if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
            object.imeiMd5 = message.imeiMd5;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.passThrough != null && message.hasOwnProperty("passThrough"))
            object.passThrough = message.passThrough;
        if (message.extra != null && message.hasOwnProperty("extra"))
            object.extra = message.extra;
        if (message.extension != null && message.hasOwnProperty("extension"))
            object.extension = $root.XmPushActionAckExtention.toObject(message.extension, options);
        return object;
    };

    /**
     * Converts this XmPushActionAckMessage to JSON.
     * @function toJSON
     * @memberof XmPushActionAckMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionAckMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionAckMessage;
})();

$root.XmPushActionAckExtention = (function() {

    /**
     * Properties of a XmPushActionAckExtention.
     * @exports IXmPushActionAckExtention
     * @interface IXmPushActionAckExtention
     * @property {number} logType XmPushActionAckExtention logType
     * @property {string|null} [model] XmPushActionAckExtention model
     * @property {number|null} [platform] XmPushActionAckExtention platform
     * @property {string|null} [clientIp] XmPushActionAckExtention clientIp
     * @property {number|null} [sdkVersionCode] XmPushActionAckExtention sdkVersionCode
     * @property {string|null} [attrs] XmPushActionAckExtention attrs
     * @property {string|null} [appVersionName] XmPushActionAckExtention appVersionName
     * @property {IPushMetaInfo|null} [metaInfo] XmPushActionAckExtention metaInfo
     * @property {string|null} [deviceIdentifier] XmPushActionAckExtention deviceIdentifier
     * @property {string|null} [jobkey] XmPushActionAckExtention jobkey
     * @property {string|null} [source] XmPushActionAckExtention source
     * @property {string|null} [topicInfo] XmPushActionAckExtention topicInfo
     */

    /**
     * Constructs a new XmPushActionAckExtention.
     * @exports XmPushActionAckExtention
     * @classdesc Represents a XmPushActionAckExtention.
     * @implements IXmPushActionAckExtention
     * @constructor
     * @param {IXmPushActionAckExtention=} [properties] Properties to set
     */
    function XmPushActionAckExtention(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XmPushActionAckExtention logType.
     * @member {number} logType
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.logType = 0;

    /**
     * XmPushActionAckExtention model.
     * @member {string} model
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.model = "";

    /**
     * XmPushActionAckExtention platform.
     * @member {number} platform
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.platform = 0;

    /**
     * XmPushActionAckExtention clientIp.
     * @member {string} clientIp
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.clientIp = "";

    /**
     * XmPushActionAckExtention sdkVersionCode.
     * @member {number} sdkVersionCode
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.sdkVersionCode = 0;

    /**
     * XmPushActionAckExtention attrs.
     * @member {string} attrs
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.attrs = "";

    /**
     * XmPushActionAckExtention appVersionName.
     * @member {string} appVersionName
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.appVersionName = "";

    /**
     * XmPushActionAckExtention metaInfo.
     * @member {IPushMetaInfo|null|undefined} metaInfo
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.metaInfo = null;

    /**
     * XmPushActionAckExtention deviceIdentifier.
     * @member {string} deviceIdentifier
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.deviceIdentifier = "";

    /**
     * XmPushActionAckExtention jobkey.
     * @member {string} jobkey
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.jobkey = "";

    /**
     * XmPushActionAckExtention source.
     * @member {string} source
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.source = "";

    /**
     * XmPushActionAckExtention topicInfo.
     * @member {string} topicInfo
     * @memberof XmPushActionAckExtention
     * @instance
     */
    XmPushActionAckExtention.prototype.topicInfo = "";

    /**
     * Creates a new XmPushActionAckExtention instance using the specified properties.
     * @function create
     * @memberof XmPushActionAckExtention
     * @static
     * @param {IXmPushActionAckExtention=} [properties] Properties to set
     * @returns {XmPushActionAckExtention} XmPushActionAckExtention instance
     */
    XmPushActionAckExtention.create = function create(properties) {
        return new XmPushActionAckExtention(properties);
    };

    /**
     * Encodes the specified XmPushActionAckExtention message. Does not implicitly {@link XmPushActionAckExtention.verify|verify} messages.
     * @function encode
     * @memberof XmPushActionAckExtention
     * @static
     * @param {IXmPushActionAckExtention} message XmPushActionAckExtention message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionAckExtention.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.logType);
        if (message.model != null && message.hasOwnProperty("model"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
        if (message.platform != null && message.hasOwnProperty("platform"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platform);
        if (message.clientIp != null && message.hasOwnProperty("clientIp"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientIp);
        if (message.sdkVersionCode != null && message.hasOwnProperty("sdkVersionCode"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sdkVersionCode);
        if (message.attrs != null && message.hasOwnProperty("attrs"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.attrs);
        if (message.appVersionName != null && message.hasOwnProperty("appVersionName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.appVersionName);
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo"))
            $root.PushMetaInfo.encode(message.metaInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.deviceIdentifier);
        if (message.jobkey != null && message.hasOwnProperty("jobkey"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.jobkey);
        if (message.source != null && message.hasOwnProperty("source"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.source);
        if (message.topicInfo != null && message.hasOwnProperty("topicInfo"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.topicInfo);
        return writer;
    };

    /**
     * Encodes the specified XmPushActionAckExtention message, length delimited. Does not implicitly {@link XmPushActionAckExtention.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XmPushActionAckExtention
     * @static
     * @param {IXmPushActionAckExtention} message XmPushActionAckExtention message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XmPushActionAckExtention.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XmPushActionAckExtention message from the specified reader or buffer.
     * @function decode
     * @memberof XmPushActionAckExtention
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XmPushActionAckExtention} XmPushActionAckExtention
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionAckExtention.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XmPushActionAckExtention();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.logType = reader.int32();
                break;
            case 2:
                message.model = reader.string();
                break;
            case 3:
                message.platform = reader.int32();
                break;
            case 4:
                message.clientIp = reader.string();
                break;
            case 5:
                message.sdkVersionCode = reader.int32();
                break;
            case 6:
                message.attrs = reader.string();
                break;
            case 7:
                message.appVersionName = reader.string();
                break;
            case 8:
                message.metaInfo = $root.PushMetaInfo.decode(reader, reader.uint32());
                break;
            case 9:
                message.deviceIdentifier = reader.string();
                break;
            case 10:
                message.jobkey = reader.string();
                break;
            case 11:
                message.source = reader.string();
                break;
            case 12:
                message.topicInfo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("logType"))
            throw $util.ProtocolError("missing required 'logType'", { instance: message });
        return message;
    };

    /**
     * Decodes a XmPushActionAckExtention message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XmPushActionAckExtention
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XmPushActionAckExtention} XmPushActionAckExtention
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XmPushActionAckExtention.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XmPushActionAckExtention message.
     * @function verify
     * @memberof XmPushActionAckExtention
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XmPushActionAckExtention.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.logType))
            return "logType: integer expected";
        if (message.model != null && message.hasOwnProperty("model"))
            if (!$util.isString(message.model))
                return "model: string expected";
        if (message.platform != null && message.hasOwnProperty("platform"))
            if (!$util.isInteger(message.platform))
                return "platform: integer expected";
        if (message.clientIp != null && message.hasOwnProperty("clientIp"))
            if (!$util.isString(message.clientIp))
                return "clientIp: string expected";
        if (message.sdkVersionCode != null && message.hasOwnProperty("sdkVersionCode"))
            if (!$util.isInteger(message.sdkVersionCode))
                return "sdkVersionCode: integer expected";
        if (message.attrs != null && message.hasOwnProperty("attrs"))
            if (!$util.isString(message.attrs))
                return "attrs: string expected";
        if (message.appVersionName != null && message.hasOwnProperty("appVersionName"))
            if (!$util.isString(message.appVersionName))
                return "appVersionName: string expected";
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo")) {
            var error = $root.PushMetaInfo.verify(message.metaInfo);
            if (error)
                return "metaInfo." + error;
        }
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            if (!$util.isString(message.deviceIdentifier))
                return "deviceIdentifier: string expected";
        if (message.jobkey != null && message.hasOwnProperty("jobkey"))
            if (!$util.isString(message.jobkey))
                return "jobkey: string expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.topicInfo != null && message.hasOwnProperty("topicInfo"))
            if (!$util.isString(message.topicInfo))
                return "topicInfo: string expected";
        return null;
    };

    /**
     * Creates a XmPushActionAckExtention message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XmPushActionAckExtention
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XmPushActionAckExtention} XmPushActionAckExtention
     */
    XmPushActionAckExtention.fromObject = function fromObject(object) {
        if (object instanceof $root.XmPushActionAckExtention)
            return object;
        var message = new $root.XmPushActionAckExtention();
        if (object.logType != null)
            message.logType = object.logType | 0;
        if (object.model != null)
            message.model = String(object.model);
        if (object.platform != null)
            message.platform = object.platform | 0;
        if (object.clientIp != null)
            message.clientIp = String(object.clientIp);
        if (object.sdkVersionCode != null)
            message.sdkVersionCode = object.sdkVersionCode | 0;
        if (object.attrs != null)
            message.attrs = String(object.attrs);
        if (object.appVersionName != null)
            message.appVersionName = String(object.appVersionName);
        if (object.metaInfo != null) {
            if (typeof object.metaInfo !== "object")
                throw TypeError(".XmPushActionAckExtention.metaInfo: object expected");
            message.metaInfo = $root.PushMetaInfo.fromObject(object.metaInfo);
        }
        if (object.deviceIdentifier != null)
            message.deviceIdentifier = String(object.deviceIdentifier);
        if (object.jobkey != null)
            message.jobkey = String(object.jobkey);
        if (object.source != null)
            message.source = String(object.source);
        if (object.topicInfo != null)
            message.topicInfo = String(object.topicInfo);
        return message;
    };

    /**
     * Creates a plain object from a XmPushActionAckExtention message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XmPushActionAckExtention
     * @static
     * @param {XmPushActionAckExtention} message XmPushActionAckExtention
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XmPushActionAckExtention.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.logType = 0;
            object.model = "";
            object.platform = 0;
            object.clientIp = "";
            object.sdkVersionCode = 0;
            object.attrs = "";
            object.appVersionName = "";
            object.metaInfo = null;
            object.deviceIdentifier = "";
            object.jobkey = "";
            object.source = "";
            object.topicInfo = "";
        }
        if (message.logType != null && message.hasOwnProperty("logType"))
            object.logType = message.logType;
        if (message.model != null && message.hasOwnProperty("model"))
            object.model = message.model;
        if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = message.platform;
        if (message.clientIp != null && message.hasOwnProperty("clientIp"))
            object.clientIp = message.clientIp;
        if (message.sdkVersionCode != null && message.hasOwnProperty("sdkVersionCode"))
            object.sdkVersionCode = message.sdkVersionCode;
        if (message.attrs != null && message.hasOwnProperty("attrs"))
            object.attrs = message.attrs;
        if (message.appVersionName != null && message.hasOwnProperty("appVersionName"))
            object.appVersionName = message.appVersionName;
        if (message.metaInfo != null && message.hasOwnProperty("metaInfo"))
            object.metaInfo = $root.PushMetaInfo.toObject(message.metaInfo, options);
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            object.deviceIdentifier = message.deviceIdentifier;
        if (message.jobkey != null && message.hasOwnProperty("jobkey"))
            object.jobkey = message.jobkey;
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.topicInfo != null && message.hasOwnProperty("topicInfo"))
            object.topicInfo = message.topicInfo;
        return object;
    };

    /**
     * Converts this XmPushActionAckExtention to JSON.
     * @function toJSON
     * @memberof XmPushActionAckExtention
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XmPushActionAckExtention.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XmPushActionAckExtention;
})();

// module.exports = $root;

export default $root;
