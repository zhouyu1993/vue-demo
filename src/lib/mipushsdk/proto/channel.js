/*eslint-disable*/
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

$util.Long = require("long");

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PushServiceConfigMsg = (function() {

    /**
     * Properties of a PushServiceConfigMsg.
     * @exports IPushServiceConfigMsg
     * @interface IPushServiceConfigMsg
     * @property {boolean|null} [fetchBucket] PushServiceConfigMsg fetchBucket
     * @property {number|null} [clientVersion] PushServiceConfigMsg clientVersion
     * @property {number|null} [cloudVersion] PushServiceConfigMsg cloudVersion
     * @property {number|null} [dots] PushServiceConfigMsg dots
     */

    /**
     * Constructs a new PushServiceConfigMsg.
     * @exports PushServiceConfigMsg
     * @classdesc Server&Client sync status and command with this message.
     * @implements IPushServiceConfigMsg
     * @constructor
     * @param {IPushServiceConfigMsg=} [properties] Properties to set
     */
    function PushServiceConfigMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PushServiceConfigMsg fetchBucket.
     * @member {boolean} fetchBucket
     * @memberof PushServiceConfigMsg
     * @instance
     */
    PushServiceConfigMsg.prototype.fetchBucket = false;

    /**
     * PushServiceConfigMsg clientVersion.
     * @member {number} clientVersion
     * @memberof PushServiceConfigMsg
     * @instance
     */
    PushServiceConfigMsg.prototype.clientVersion = 0;

    /**
     * PushServiceConfigMsg cloudVersion.
     * @member {number} cloudVersion
     * @memberof PushServiceConfigMsg
     * @instance
     */
    PushServiceConfigMsg.prototype.cloudVersion = 0;

    /**
     * PushServiceConfigMsg dots.
     * @member {number} dots
     * @memberof PushServiceConfigMsg
     * @instance
     */
    PushServiceConfigMsg.prototype.dots = 0;

    /**
     * Creates a new PushServiceConfigMsg instance using the specified properties.
     * @function create
     * @memberof PushServiceConfigMsg
     * @static
     * @param {IPushServiceConfigMsg=} [properties] Properties to set
     * @returns {PushServiceConfigMsg} PushServiceConfigMsg instance
     */
    PushServiceConfigMsg.create = function create(properties) {
        return new PushServiceConfigMsg(properties);
    };

    /**
     * Encodes the specified PushServiceConfigMsg message. Does not implicitly {@link PushServiceConfigMsg.verify|verify} messages.
     * @function encode
     * @memberof PushServiceConfigMsg
     * @static
     * @param {IPushServiceConfigMsg} message PushServiceConfigMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushServiceConfigMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fetchBucket != null && message.hasOwnProperty("fetchBucket"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.fetchBucket);
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.clientVersion);
        if (message.cloudVersion != null && message.hasOwnProperty("cloudVersion"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cloudVersion);
        if (message.dots != null && message.hasOwnProperty("dots"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dots);
        return writer;
    };

    /**
     * Encodes the specified PushServiceConfigMsg message, length delimited. Does not implicitly {@link PushServiceConfigMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PushServiceConfigMsg
     * @static
     * @param {IPushServiceConfigMsg} message PushServiceConfigMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushServiceConfigMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PushServiceConfigMsg message from the specified reader or buffer.
     * @function decode
     * @memberof PushServiceConfigMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PushServiceConfigMsg} PushServiceConfigMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushServiceConfigMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PushServiceConfigMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.fetchBucket = reader.bool();
                break;
            case 3:
                message.clientVersion = reader.int32();
                break;
            case 4:
                message.cloudVersion = reader.int32();
                break;
            case 5:
                message.dots = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PushServiceConfigMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PushServiceConfigMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PushServiceConfigMsg} PushServiceConfigMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushServiceConfigMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PushServiceConfigMsg message.
     * @function verify
     * @memberof PushServiceConfigMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PushServiceConfigMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fetchBucket != null && message.hasOwnProperty("fetchBucket"))
            if (typeof message.fetchBucket !== "boolean")
                return "fetchBucket: boolean expected";
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            if (!$util.isInteger(message.clientVersion))
                return "clientVersion: integer expected";
        if (message.cloudVersion != null && message.hasOwnProperty("cloudVersion"))
            if (!$util.isInteger(message.cloudVersion))
                return "cloudVersion: integer expected";
        if (message.dots != null && message.hasOwnProperty("dots"))
            if (!$util.isInteger(message.dots))
                return "dots: integer expected";
        return null;
    };

    /**
     * Creates a PushServiceConfigMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PushServiceConfigMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PushServiceConfigMsg} PushServiceConfigMsg
     */
    PushServiceConfigMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.PushServiceConfigMsg)
            return object;
        var message = new $root.PushServiceConfigMsg();
        if (object.fetchBucket != null)
            message.fetchBucket = Boolean(object.fetchBucket);
        if (object.clientVersion != null)
            message.clientVersion = object.clientVersion | 0;
        if (object.cloudVersion != null)
            message.cloudVersion = object.cloudVersion | 0;
        if (object.dots != null)
            message.dots = object.dots | 0;
        return message;
    };

    /**
     * Creates a plain object from a PushServiceConfigMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PushServiceConfigMsg
     * @static
     * @param {PushServiceConfigMsg} message PushServiceConfigMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PushServiceConfigMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fetchBucket = false;
            object.clientVersion = 0;
            object.cloudVersion = 0;
            object.dots = 0;
        }
        if (message.fetchBucket != null && message.hasOwnProperty("fetchBucket"))
            object.fetchBucket = message.fetchBucket;
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            object.clientVersion = message.clientVersion;
        if (message.cloudVersion != null && message.hasOwnProperty("cloudVersion"))
            object.cloudVersion = message.cloudVersion;
        if (message.dots != null && message.hasOwnProperty("dots"))
            object.dots = message.dots;
        return object;
    };

    /**
     * Converts this PushServiceConfigMsg to JSON.
     * @function toJSON
     * @memberof PushServiceConfigMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PushServiceConfigMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PushServiceConfigMsg;
})();

$root.ClientHeader = (function() {

    /**
     * Properties of a ClientHeader.
     * @exports IClientHeader
     * @interface IClientHeader
     * @property {number|null} [chid] ClientHeader chid
     * @property {number|Long|null} [uuid] ClientHeader uuid
     * @property {string|null} [server] ClientHeader server
     * @property {string|null} [resource] ClientHeader resource
     * @property {string|null} [cmd] ClientHeader cmd
     * @property {string|null} [subcmd] ClientHeader subcmd
     * @property {string|null} [id] ClientHeader id
     * @property {ClientHeader.MSG_DIR_FLAG|null} [dirFlag] ClientHeader dirFlag
     * @property {number|null} [cipher] ClientHeader cipher
     * @property {number|null} [errCode] ClientHeader errCode
     * @property {string|null} [errStr] ClientHeader errStr
     */

    /**
     * Constructs a new ClientHeader.
     * @exports ClientHeader
     * @classdesc Represents a ClientHeader.
     * @implements IClientHeader
     * @constructor
     * @param {IClientHeader=} [properties] Properties to set
     */
    function ClientHeader(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientHeader chid.
     * @member {number} chid
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.chid = 0;

    /**
     * ClientHeader uuid.
     * @member {number|Long} uuid
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.uuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClientHeader server.
     * @member {string} server
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.server = "";

    /**
     * ClientHeader resource.
     * @member {string} resource
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.resource = "";

    /**
     * ClientHeader cmd.
     * @member {string} cmd
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.cmd = "";

    /**
     * ClientHeader subcmd.
     * @member {string} subcmd
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.subcmd = "";

    /**
     * ClientHeader id.
     * @member {string} id
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.id = "";

    /**
     * ClientHeader dirFlag.
     * @member {ClientHeader.MSG_DIR_FLAG} dirFlag
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.dirFlag = 1;

    /**
     * ClientHeader cipher.
     * @member {number} cipher
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.cipher = 0;

    /**
     * ClientHeader errCode.
     * @member {number} errCode
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.errCode = 0;

    /**
     * ClientHeader errStr.
     * @member {string} errStr
     * @memberof ClientHeader
     * @instance
     */
    ClientHeader.prototype.errStr = "";

    /**
     * Creates a new ClientHeader instance using the specified properties.
     * @function create
     * @memberof ClientHeader
     * @static
     * @param {IClientHeader=} [properties] Properties to set
     * @returns {ClientHeader} ClientHeader instance
     */
    ClientHeader.create = function create(properties) {
        return new ClientHeader(properties);
    };

    /**
     * Encodes the specified ClientHeader message. Does not implicitly {@link ClientHeader.verify|verify} messages.
     * @function encode
     * @memberof ClientHeader
     * @static
     * @param {IClientHeader} message ClientHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chid != null && message.hasOwnProperty("chid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chid);
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uuid);
        if (message.server != null && message.hasOwnProperty("server"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.server);
        if (message.resource != null && message.hasOwnProperty("resource"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.resource);
        if (message.cmd != null && message.hasOwnProperty("cmd"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.cmd);
        if (message.subcmd != null && message.hasOwnProperty("subcmd"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.subcmd);
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.id);
        if (message.dirFlag != null && message.hasOwnProperty("dirFlag"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.dirFlag);
        if (message.cipher != null && message.hasOwnProperty("cipher"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cipher);
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.errCode);
        if (message.errStr != null && message.hasOwnProperty("errStr"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.errStr);
        return writer;
    };

    /**
     * Encodes the specified ClientHeader message, length delimited. Does not implicitly {@link ClientHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientHeader
     * @static
     * @param {IClientHeader} message ClientHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientHeader message from the specified reader or buffer.
     * @function decode
     * @memberof ClientHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientHeader} ClientHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chid = reader.int32();
                break;
            case 2:
                message.uuid = reader.int64();
                break;
            case 3:
                message.server = reader.string();
                break;
            case 4:
                message.resource = reader.string();
                break;
            case 5:
                message.cmd = reader.string();
                break;
            case 6:
                message.subcmd = reader.string();
                break;
            case 7:
                message.id = reader.string();
                break;
            case 8:
                message.dirFlag = reader.int32();
                break;
            case 9:
                message.cipher = reader.int32();
                break;
            case 10:
                message.errCode = reader.int32();
                break;
            case 11:
                message.errStr = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientHeader} ClientHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientHeader message.
     * @function verify
     * @memberof ClientHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chid != null && message.hasOwnProperty("chid"))
            if (!$util.isInteger(message.chid))
                return "chid: integer expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isInteger(message.uuid) && !(message.uuid && $util.isInteger(message.uuid.low) && $util.isInteger(message.uuid.high)))
                return "uuid: integer|Long expected";
        if (message.server != null && message.hasOwnProperty("server"))
            if (!$util.isString(message.server))
                return "server: string expected";
        if (message.resource != null && message.hasOwnProperty("resource"))
            if (!$util.isString(message.resource))
                return "resource: string expected";
        if (message.cmd != null && message.hasOwnProperty("cmd"))
            if (!$util.isString(message.cmd))
                return "cmd: string expected";
        if (message.subcmd != null && message.hasOwnProperty("subcmd"))
            if (!$util.isString(message.subcmd))
                return "subcmd: string expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.dirFlag != null && message.hasOwnProperty("dirFlag"))
            switch (message.dirFlag) {
            default:
                return "dirFlag: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
        if (message.cipher != null && message.hasOwnProperty("cipher"))
            if (!$util.isInteger(message.cipher))
                return "cipher: integer expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errStr != null && message.hasOwnProperty("errStr"))
            if (!$util.isString(message.errStr))
                return "errStr: string expected";
        return null;
    };

    /**
     * Creates a ClientHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientHeader} ClientHeader
     */
    ClientHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientHeader)
            return object;
        var message = new $root.ClientHeader();
        if (object.chid != null)
            message.chid = object.chid | 0;
        if (object.uuid != null)
            if ($util.Long)
                (message.uuid = $util.Long.fromValue(object.uuid)).unsigned = false;
            else if (typeof object.uuid === "string")
                message.uuid = parseInt(object.uuid, 10);
            else if (typeof object.uuid === "number")
                message.uuid = object.uuid;
            else if (typeof object.uuid === "object")
                message.uuid = new $util.LongBits(object.uuid.low >>> 0, object.uuid.high >>> 0).toNumber();
        if (object.server != null)
            message.server = String(object.server);
        if (object.resource != null)
            message.resource = String(object.resource);
        if (object.cmd != null)
            message.cmd = String(object.cmd);
        if (object.subcmd != null)
            message.subcmd = String(object.subcmd);
        if (object.id != null)
            message.id = String(object.id);
        switch (object.dirFlag) {
        case "CS_ONEWAY":
        case 1:
            message.dirFlag = 1;
            break;
        case "CS_REQ":
        case 2:
            message.dirFlag = 2;
            break;
        case "CS_RESP":
        case 3:
            message.dirFlag = 3;
            break;
        case "SC_ONEWAY":
        case 4:
            message.dirFlag = 4;
            break;
        case "SC_REQ":
        case 5:
            message.dirFlag = 5;
            break;
        case "SC_RESP":
        case 6:
            message.dirFlag = 6;
            break;
        }
        if (object.cipher != null)
            message.cipher = object.cipher | 0;
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errStr != null)
            message.errStr = String(object.errStr);
        return message;
    };

    /**
     * Creates a plain object from a ClientHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientHeader
     * @static
     * @param {ClientHeader} message ClientHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chid = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uuid = options.longs === String ? "0" : 0;
            object.server = "";
            object.resource = "";
            object.cmd = "";
            object.subcmd = "";
            object.id = "";
            object.dirFlag = options.enums === String ? "CS_ONEWAY" : 1;
            object.cipher = 0;
            object.errCode = 0;
            object.errStr = "";
        }
        if (message.chid != null && message.hasOwnProperty("chid"))
            object.chid = message.chid;
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (typeof message.uuid === "number")
                object.uuid = options.longs === String ? String(message.uuid) : message.uuid;
            else
                object.uuid = options.longs === String ? $util.Long.prototype.toString.call(message.uuid) : options.longs === Number ? new $util.LongBits(message.uuid.low >>> 0, message.uuid.high >>> 0).toNumber() : message.uuid;
        if (message.server != null && message.hasOwnProperty("server"))
            object.server = message.server;
        if (message.resource != null && message.hasOwnProperty("resource"))
            object.resource = message.resource;
        if (message.cmd != null && message.hasOwnProperty("cmd"))
            object.cmd = message.cmd;
        if (message.subcmd != null && message.hasOwnProperty("subcmd"))
            object.subcmd = message.subcmd;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.dirFlag != null && message.hasOwnProperty("dirFlag"))
            object.dirFlag = options.enums === String ? $root.ClientHeader.MSG_DIR_FLAG[message.dirFlag] : message.dirFlag;
        if (message.cipher != null && message.hasOwnProperty("cipher"))
            object.cipher = message.cipher;
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errStr != null && message.hasOwnProperty("errStr"))
            object.errStr = message.errStr;
        return object;
    };

    /**
     * Converts this ClientHeader to JSON.
     * @function toJSON
     * @memberof ClientHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MSG_DIR_FLAG enum.
     * @name ClientHeader.MSG_DIR_FLAG
     * @enum {string}
     * @property {number} CS_ONEWAY=1 CS_ONEWAY value
     * @property {number} CS_REQ=2 CS_REQ value
     * @property {number} CS_RESP=3 CS_RESP value
     * @property {number} SC_ONEWAY=4 SC_ONEWAY value
     * @property {number} SC_REQ=5 SC_REQ value
     * @property {number} SC_RESP=6 SC_RESP value
     */
    ClientHeader.MSG_DIR_FLAG = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CS_ONEWAY"] = 1;
        values[valuesById[2] = "CS_REQ"] = 2;
        values[valuesById[3] = "CS_RESP"] = 3;
        values[valuesById[4] = "SC_ONEWAY"] = 4;
        values[valuesById[5] = "SC_REQ"] = 5;
        values[valuesById[6] = "SC_RESP"] = 6;
        return values;
    })();

    return ClientHeader;
})();

$root.XMMsgConn = (function() {

    /**
     * Properties of a XMMsgConn.
     * @exports IXMMsgConn
     * @interface IXMMsgConn
     * @property {number|null} [version] XMMsgConn version
     * @property {string|null} [model] XMMsgConn model
     * @property {string|null} [os] XMMsgConn os
     * @property {string|null} [udid] XMMsgConn udid
     * @property {number|null} [sdk] XMMsgConn sdk
     * @property {string|null} [connpt] XMMsgConn connpt
     * @property {string|null} [host] XMMsgConn host
     * @property {string|null} [locale] XMMsgConn locale
     * @property {IPushServiceConfigMsg|null} [psc] XMMsgConn psc
     * @property {number|null} [andver] XMMsgConn andver
     */

    /**
     * Constructs a new XMMsgConn.
     * @exports XMMsgConn
     * @classdesc Represents a XMMsgConn.
     * @implements IXMMsgConn
     * @constructor
     * @param {IXMMsgConn=} [properties] Properties to set
     */
    function XMMsgConn(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgConn version.
     * @member {number} version
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.version = 0;

    /**
     * XMMsgConn model.
     * @member {string} model
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.model = "";

    /**
     * XMMsgConn os.
     * @member {string} os
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.os = "";

    /**
     * XMMsgConn udid.
     * @member {string} udid
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.udid = "";

    /**
     * XMMsgConn sdk.
     * @member {number} sdk
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.sdk = 0;

    /**
     * XMMsgConn connpt.
     * @member {string} connpt
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.connpt = "";

    /**
     * XMMsgConn host.
     * @member {string} host
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.host = "";

    /**
     * XMMsgConn locale.
     * @member {string} locale
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.locale = "";

    /**
     * XMMsgConn psc.
     * @member {IPushServiceConfigMsg|null|undefined} psc
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.psc = null;

    /**
     * XMMsgConn andver.
     * @member {number} andver
     * @memberof XMMsgConn
     * @instance
     */
    XMMsgConn.prototype.andver = 0;

    /**
     * Creates a new XMMsgConn instance using the specified properties.
     * @function create
     * @memberof XMMsgConn
     * @static
     * @param {IXMMsgConn=} [properties] Properties to set
     * @returns {XMMsgConn} XMMsgConn instance
     */
    XMMsgConn.create = function create(properties) {
        return new XMMsgConn(properties);
    };

    /**
     * Encodes the specified XMMsgConn message. Does not implicitly {@link XMMsgConn.verify|verify} messages.
     * @function encode
     * @memberof XMMsgConn
     * @static
     * @param {IXMMsgConn} message XMMsgConn message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgConn.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
        if (message.model != null && message.hasOwnProperty("model"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
        if (message.os != null && message.hasOwnProperty("os"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.os);
        if (message.udid != null && message.hasOwnProperty("udid"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.udid);
        if (message.sdk != null && message.hasOwnProperty("sdk"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sdk);
        if (message.connpt != null && message.hasOwnProperty("connpt"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.connpt);
        if (message.host != null && message.hasOwnProperty("host"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.host);
        if (message.locale != null && message.hasOwnProperty("locale"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.locale);
        if (message.psc != null && message.hasOwnProperty("psc"))
            $root.PushServiceConfigMsg.encode(message.psc, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.andver != null && message.hasOwnProperty("andver"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.andver);
        return writer;
    };

    /**
     * Encodes the specified XMMsgConn message, length delimited. Does not implicitly {@link XMMsgConn.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgConn
     * @static
     * @param {IXMMsgConn} message XMMsgConn message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgConn.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgConn message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgConn
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgConn} XMMsgConn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgConn.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgConn();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.version = reader.uint32();
                break;
            case 2:
                message.model = reader.string();
                break;
            case 3:
                message.os = reader.string();
                break;
            case 4:
                message.udid = reader.string();
                break;
            case 5:
                message.sdk = reader.int32();
                break;
            case 6:
                message.connpt = reader.string();
                break;
            case 7:
                message.host = reader.string();
                break;
            case 8:
                message.locale = reader.string();
                break;
            case 9:
                message.psc = $root.PushServiceConfigMsg.decode(reader, reader.uint32());
                break;
            case 10:
                message.andver = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgConn message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgConn
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgConn} XMMsgConn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgConn.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgConn message.
     * @function verify
     * @memberof XMMsgConn
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgConn.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        if (message.model != null && message.hasOwnProperty("model"))
            if (!$util.isString(message.model))
                return "model: string expected";
        if (message.os != null && message.hasOwnProperty("os"))
            if (!$util.isString(message.os))
                return "os: string expected";
        if (message.udid != null && message.hasOwnProperty("udid"))
            if (!$util.isString(message.udid))
                return "udid: string expected";
        if (message.sdk != null && message.hasOwnProperty("sdk"))
            if (!$util.isInteger(message.sdk))
                return "sdk: integer expected";
        if (message.connpt != null && message.hasOwnProperty("connpt"))
            if (!$util.isString(message.connpt))
                return "connpt: string expected";
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.locale != null && message.hasOwnProperty("locale"))
            if (!$util.isString(message.locale))
                return "locale: string expected";
        if (message.psc != null && message.hasOwnProperty("psc")) {
            var error = $root.PushServiceConfigMsg.verify(message.psc);
            if (error)
                return "psc." + error;
        }
        if (message.andver != null && message.hasOwnProperty("andver"))
            if (!$util.isInteger(message.andver))
                return "andver: integer expected";
        return null;
    };

    /**
     * Creates a XMMsgConn message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgConn
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgConn} XMMsgConn
     */
    XMMsgConn.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgConn)
            return object;
        var message = new $root.XMMsgConn();
        if (object.version != null)
            message.version = object.version >>> 0;
        if (object.model != null)
            message.model = String(object.model);
        if (object.os != null)
            message.os = String(object.os);
        if (object.udid != null)
            message.udid = String(object.udid);
        if (object.sdk != null)
            message.sdk = object.sdk | 0;
        if (object.connpt != null)
            message.connpt = String(object.connpt);
        if (object.host != null)
            message.host = String(object.host);
        if (object.locale != null)
            message.locale = String(object.locale);
        if (object.psc != null) {
            if (typeof object.psc !== "object")
                throw TypeError(".XMMsgConn.psc: object expected");
            message.psc = $root.PushServiceConfigMsg.fromObject(object.psc);
        }
        if (object.andver != null)
            message.andver = object.andver | 0;
        return message;
    };

    /**
     * Creates a plain object from a XMMsgConn message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgConn
     * @static
     * @param {XMMsgConn} message XMMsgConn
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgConn.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.version = 0;
            object.model = "";
            object.os = "";
            object.udid = "";
            object.sdk = 0;
            object.connpt = "";
            object.host = "";
            object.locale = "";
            object.psc = null;
            object.andver = 0;
        }
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.model != null && message.hasOwnProperty("model"))
            object.model = message.model;
        if (message.os != null && message.hasOwnProperty("os"))
            object.os = message.os;
        if (message.udid != null && message.hasOwnProperty("udid"))
            object.udid = message.udid;
        if (message.sdk != null && message.hasOwnProperty("sdk"))
            object.sdk = message.sdk;
        if (message.connpt != null && message.hasOwnProperty("connpt"))
            object.connpt = message.connpt;
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.locale != null && message.hasOwnProperty("locale"))
            object.locale = message.locale;
        if (message.psc != null && message.hasOwnProperty("psc"))
            object.psc = $root.PushServiceConfigMsg.toObject(message.psc, options);
        if (message.andver != null && message.hasOwnProperty("andver"))
            object.andver = message.andver;
        return object;
    };

    /**
     * Converts this XMMsgConn to JSON.
     * @function toJSON
     * @memberof XMMsgConn
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgConn.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgConn;
})();

$root.XMMsgConnResp = (function() {

    /**
     * Properties of a XMMsgConnResp.
     * @exports IXMMsgConnResp
     * @interface IXMMsgConnResp
     * @property {string|null} [challenge] XMMsgConnResp challenge
     * @property {string|null} [host] XMMsgConnResp host
     * @property {IPushServiceConfigMsg|null} [psc] XMMsgConnResp psc
     */

    /**
     * Constructs a new XMMsgConnResp.
     * @exports XMMsgConnResp
     * @classdesc Represents a XMMsgConnResp.
     * @implements IXMMsgConnResp
     * @constructor
     * @param {IXMMsgConnResp=} [properties] Properties to set
     */
    function XMMsgConnResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgConnResp challenge.
     * @member {string} challenge
     * @memberof XMMsgConnResp
     * @instance
     */
    XMMsgConnResp.prototype.challenge = "";

    /**
     * XMMsgConnResp host.
     * @member {string} host
     * @memberof XMMsgConnResp
     * @instance
     */
    XMMsgConnResp.prototype.host = "";

    /**
     * XMMsgConnResp psc.
     * @member {IPushServiceConfigMsg|null|undefined} psc
     * @memberof XMMsgConnResp
     * @instance
     */
    XMMsgConnResp.prototype.psc = null;

    /**
     * Creates a new XMMsgConnResp instance using the specified properties.
     * @function create
     * @memberof XMMsgConnResp
     * @static
     * @param {IXMMsgConnResp=} [properties] Properties to set
     * @returns {XMMsgConnResp} XMMsgConnResp instance
     */
    XMMsgConnResp.create = function create(properties) {
        return new XMMsgConnResp(properties);
    };

    /**
     * Encodes the specified XMMsgConnResp message. Does not implicitly {@link XMMsgConnResp.verify|verify} messages.
     * @function encode
     * @memberof XMMsgConnResp
     * @static
     * @param {IXMMsgConnResp} message XMMsgConnResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgConnResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.challenge != null && message.hasOwnProperty("challenge"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.challenge);
        if (message.host != null && message.hasOwnProperty("host"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
        if (message.psc != null && message.hasOwnProperty("psc"))
            $root.PushServiceConfigMsg.encode(message.psc, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified XMMsgConnResp message, length delimited. Does not implicitly {@link XMMsgConnResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgConnResp
     * @static
     * @param {IXMMsgConnResp} message XMMsgConnResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgConnResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgConnResp message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgConnResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgConnResp} XMMsgConnResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgConnResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgConnResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.challenge = reader.string();
                break;
            case 2:
                message.host = reader.string();
                break;
            case 3:
                message.psc = $root.PushServiceConfigMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgConnResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgConnResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgConnResp} XMMsgConnResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgConnResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgConnResp message.
     * @function verify
     * @memberof XMMsgConnResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgConnResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.challenge != null && message.hasOwnProperty("challenge"))
            if (!$util.isString(message.challenge))
                return "challenge: string expected";
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.psc != null && message.hasOwnProperty("psc")) {
            var error = $root.PushServiceConfigMsg.verify(message.psc);
            if (error)
                return "psc." + error;
        }
        return null;
    };

    /**
     * Creates a XMMsgConnResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgConnResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgConnResp} XMMsgConnResp
     */
    XMMsgConnResp.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgConnResp)
            return object;
        var message = new $root.XMMsgConnResp();
        if (object.challenge != null)
            message.challenge = String(object.challenge);
        if (object.host != null)
            message.host = String(object.host);
        if (object.psc != null) {
            if (typeof object.psc !== "object")
                throw TypeError(".XMMsgConnResp.psc: object expected");
            message.psc = $root.PushServiceConfigMsg.fromObject(object.psc);
        }
        return message;
    };

    /**
     * Creates a plain object from a XMMsgConnResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgConnResp
     * @static
     * @param {XMMsgConnResp} message XMMsgConnResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgConnResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.challenge = "";
            object.host = "";
            object.psc = null;
        }
        if (message.challenge != null && message.hasOwnProperty("challenge"))
            object.challenge = message.challenge;
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.psc != null && message.hasOwnProperty("psc"))
            object.psc = $root.PushServiceConfigMsg.toObject(message.psc, options);
        return object;
    };

    /**
     * Converts this XMMsgConnResp to JSON.
     * @function toJSON
     * @memberof XMMsgConnResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgConnResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgConnResp;
})();

$root.XMMsgBind = (function() {

    /**
     * Properties of a XMMsgBind.
     * @exports IXMMsgBind
     * @interface IXMMsgBind
     * @property {string|null} [token] XMMsgBind token
     * @property {string|null} [kick] XMMsgBind kick
     * @property {string|null} [method] XMMsgBind method
     * @property {string|null} [clientAttrs] XMMsgBind clientAttrs
     * @property {string|null} [cloudAttrs] XMMsgBind cloudAttrs
     * @property {string|null} [sig] XMMsgBind sig
     */

    /**
     * Constructs a new XMMsgBind.
     * @exports XMMsgBind
     * @classdesc Represents a XMMsgBind.
     * @implements IXMMsgBind
     * @constructor
     * @param {IXMMsgBind=} [properties] Properties to set
     */
    function XMMsgBind(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgBind token.
     * @member {string} token
     * @memberof XMMsgBind
     * @instance
     */
    XMMsgBind.prototype.token = "";

    /**
     * XMMsgBind kick.
     * @member {string} kick
     * @memberof XMMsgBind
     * @instance
     */
    XMMsgBind.prototype.kick = "";

    /**
     * XMMsgBind method.
     * @member {string} method
     * @memberof XMMsgBind
     * @instance
     */
    XMMsgBind.prototype.method = "";

    /**
     * XMMsgBind clientAttrs.
     * @member {string} clientAttrs
     * @memberof XMMsgBind
     * @instance
     */
    XMMsgBind.prototype.clientAttrs = "";

    /**
     * XMMsgBind cloudAttrs.
     * @member {string} cloudAttrs
     * @memberof XMMsgBind
     * @instance
     */
    XMMsgBind.prototype.cloudAttrs = "";

    /**
     * XMMsgBind sig.
     * @member {string} sig
     * @memberof XMMsgBind
     * @instance
     */
    XMMsgBind.prototype.sig = "";

    /**
     * Creates a new XMMsgBind instance using the specified properties.
     * @function create
     * @memberof XMMsgBind
     * @static
     * @param {IXMMsgBind=} [properties] Properties to set
     * @returns {XMMsgBind} XMMsgBind instance
     */
    XMMsgBind.create = function create(properties) {
        return new XMMsgBind(properties);
    };

    /**
     * Encodes the specified XMMsgBind message. Does not implicitly {@link XMMsgBind.verify|verify} messages.
     * @function encode
     * @memberof XMMsgBind
     * @static
     * @param {IXMMsgBind} message XMMsgBind message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgBind.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && message.hasOwnProperty("token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        if (message.kick != null && message.hasOwnProperty("kick"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.kick);
        if (message.method != null && message.hasOwnProperty("method"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
        if (message.clientAttrs != null && message.hasOwnProperty("clientAttrs"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientAttrs);
        if (message.cloudAttrs != null && message.hasOwnProperty("cloudAttrs"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.cloudAttrs);
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sig);
        return writer;
    };

    /**
     * Encodes the specified XMMsgBind message, length delimited. Does not implicitly {@link XMMsgBind.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgBind
     * @static
     * @param {IXMMsgBind} message XMMsgBind message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgBind.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgBind message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgBind
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgBind} XMMsgBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgBind.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgBind();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.kick = reader.string();
                break;
            case 3:
                message.method = reader.string();
                break;
            case 4:
                message.clientAttrs = reader.string();
                break;
            case 5:
                message.cloudAttrs = reader.string();
                break;
            case 6:
                message.sig = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgBind message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgBind
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgBind} XMMsgBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgBind.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgBind message.
     * @function verify
     * @memberof XMMsgBind
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgBind.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.kick != null && message.hasOwnProperty("kick"))
            if (!$util.isString(message.kick))
                return "kick: string expected";
        if (message.method != null && message.hasOwnProperty("method"))
            if (!$util.isString(message.method))
                return "method: string expected";
        if (message.clientAttrs != null && message.hasOwnProperty("clientAttrs"))
            if (!$util.isString(message.clientAttrs))
                return "clientAttrs: string expected";
        if (message.cloudAttrs != null && message.hasOwnProperty("cloudAttrs"))
            if (!$util.isString(message.cloudAttrs))
                return "cloudAttrs: string expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!$util.isString(message.sig))
                return "sig: string expected";
        return null;
    };

    /**
     * Creates a XMMsgBind message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgBind
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgBind} XMMsgBind
     */
    XMMsgBind.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgBind)
            return object;
        var message = new $root.XMMsgBind();
        if (object.token != null)
            message.token = String(object.token);
        if (object.kick != null)
            message.kick = String(object.kick);
        if (object.method != null)
            message.method = String(object.method);
        if (object.clientAttrs != null)
            message.clientAttrs = String(object.clientAttrs);
        if (object.cloudAttrs != null)
            message.cloudAttrs = String(object.cloudAttrs);
        if (object.sig != null)
            message.sig = String(object.sig);
        return message;
    };

    /**
     * Creates a plain object from a XMMsgBind message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgBind
     * @static
     * @param {XMMsgBind} message XMMsgBind
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgBind.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.token = "";
            object.kick = "";
            object.method = "";
            object.clientAttrs = "";
            object.cloudAttrs = "";
            object.sig = "";
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.kick != null && message.hasOwnProperty("kick"))
            object.kick = message.kick;
        if (message.method != null && message.hasOwnProperty("method"))
            object.method = message.method;
        if (message.clientAttrs != null && message.hasOwnProperty("clientAttrs"))
            object.clientAttrs = message.clientAttrs;
        if (message.cloudAttrs != null && message.hasOwnProperty("cloudAttrs"))
            object.cloudAttrs = message.cloudAttrs;
        if (message.sig != null && message.hasOwnProperty("sig"))
            object.sig = message.sig;
        return object;
    };

    /**
     * Converts this XMMsgBind to JSON.
     * @function toJSON
     * @memberof XMMsgBind
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgBind.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgBind;
})();

$root.XMMsgBindResp = (function() {

    /**
     * Properties of a XMMsgBindResp.
     * @exports IXMMsgBindResp
     * @interface IXMMsgBindResp
     * @property {boolean|null} [result] XMMsgBindResp result
     * @property {string|null} [errorType] XMMsgBindResp errorType
     * @property {string|null} [errorReason] XMMsgBindResp errorReason
     * @property {string|null} [errorDesc] XMMsgBindResp errorDesc
     */

    /**
     * Constructs a new XMMsgBindResp.
     * @exports XMMsgBindResp
     * @classdesc Represents a XMMsgBindResp.
     * @implements IXMMsgBindResp
     * @constructor
     * @param {IXMMsgBindResp=} [properties] Properties to set
     */
    function XMMsgBindResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgBindResp result.
     * @member {boolean} result
     * @memberof XMMsgBindResp
     * @instance
     */
    XMMsgBindResp.prototype.result = false;

    /**
     * XMMsgBindResp errorType.
     * @member {string} errorType
     * @memberof XMMsgBindResp
     * @instance
     */
    XMMsgBindResp.prototype.errorType = "";

    /**
     * XMMsgBindResp errorReason.
     * @member {string} errorReason
     * @memberof XMMsgBindResp
     * @instance
     */
    XMMsgBindResp.prototype.errorReason = "";

    /**
     * XMMsgBindResp errorDesc.
     * @member {string} errorDesc
     * @memberof XMMsgBindResp
     * @instance
     */
    XMMsgBindResp.prototype.errorDesc = "";

    /**
     * Creates a new XMMsgBindResp instance using the specified properties.
     * @function create
     * @memberof XMMsgBindResp
     * @static
     * @param {IXMMsgBindResp=} [properties] Properties to set
     * @returns {XMMsgBindResp} XMMsgBindResp instance
     */
    XMMsgBindResp.create = function create(properties) {
        return new XMMsgBindResp(properties);
    };

    /**
     * Encodes the specified XMMsgBindResp message. Does not implicitly {@link XMMsgBindResp.verify|verify} messages.
     * @function encode
     * @memberof XMMsgBindResp
     * @static
     * @param {IXMMsgBindResp} message XMMsgBindResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgBindResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.result);
        if (message.errorType != null && message.hasOwnProperty("errorType"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorType);
        if (message.errorReason != null && message.hasOwnProperty("errorReason"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorReason);
        if (message.errorDesc != null && message.hasOwnProperty("errorDesc"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorDesc);
        return writer;
    };

    /**
     * Encodes the specified XMMsgBindResp message, length delimited. Does not implicitly {@link XMMsgBindResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgBindResp
     * @static
     * @param {IXMMsgBindResp} message XMMsgBindResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgBindResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgBindResp message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgBindResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgBindResp} XMMsgBindResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgBindResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgBindResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.bool();
                break;
            case 2:
                message.errorType = reader.string();
                break;
            case 3:
                message.errorReason = reader.string();
                break;
            case 4:
                message.errorDesc = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgBindResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgBindResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgBindResp} XMMsgBindResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgBindResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgBindResp message.
     * @function verify
     * @memberof XMMsgBindResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgBindResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (typeof message.result !== "boolean")
                return "result: boolean expected";
        if (message.errorType != null && message.hasOwnProperty("errorType"))
            if (!$util.isString(message.errorType))
                return "errorType: string expected";
        if (message.errorReason != null && message.hasOwnProperty("errorReason"))
            if (!$util.isString(message.errorReason))
                return "errorReason: string expected";
        if (message.errorDesc != null && message.hasOwnProperty("errorDesc"))
            if (!$util.isString(message.errorDesc))
                return "errorDesc: string expected";
        return null;
    };

    /**
     * Creates a XMMsgBindResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgBindResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgBindResp} XMMsgBindResp
     */
    XMMsgBindResp.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgBindResp)
            return object;
        var message = new $root.XMMsgBindResp();
        if (object.result != null)
            message.result = Boolean(object.result);
        if (object.errorType != null)
            message.errorType = String(object.errorType);
        if (object.errorReason != null)
            message.errorReason = String(object.errorReason);
        if (object.errorDesc != null)
            message.errorDesc = String(object.errorDesc);
        return message;
    };

    /**
     * Creates a plain object from a XMMsgBindResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgBindResp
     * @static
     * @param {XMMsgBindResp} message XMMsgBindResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgBindResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = false;
            object.errorType = "";
            object.errorReason = "";
            object.errorDesc = "";
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.errorType != null && message.hasOwnProperty("errorType"))
            object.errorType = message.errorType;
        if (message.errorReason != null && message.hasOwnProperty("errorReason"))
            object.errorReason = message.errorReason;
        if (message.errorDesc != null && message.hasOwnProperty("errorDesc"))
            object.errorDesc = message.errorDesc;
        return object;
    };

    /**
     * Converts this XMMsgBindResp to JSON.
     * @function toJSON
     * @memberof XMMsgBindResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgBindResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgBindResp;
})();

$root.XMMsgPing = (function() {

    /**
     * Properties of a XMMsgPing.
     * @exports IXMMsgPing
     * @interface IXMMsgPing
     * @property {Uint8Array|null} [stats] XMMsgPing stats
     * @property {IPushServiceConfigMsg|null} [psc] XMMsgPing psc
     */

    /**
     * Constructs a new XMMsgPing.
     * @exports XMMsgPing
     * @classdesc Represents a XMMsgPing.
     * @implements IXMMsgPing
     * @constructor
     * @param {IXMMsgPing=} [properties] Properties to set
     */
    function XMMsgPing(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgPing stats.
     * @member {Uint8Array} stats
     * @memberof XMMsgPing
     * @instance
     */
    XMMsgPing.prototype.stats = $util.newBuffer([]);

    /**
     * XMMsgPing psc.
     * @member {IPushServiceConfigMsg|null|undefined} psc
     * @memberof XMMsgPing
     * @instance
     */
    XMMsgPing.prototype.psc = null;

    /**
     * Creates a new XMMsgPing instance using the specified properties.
     * @function create
     * @memberof XMMsgPing
     * @static
     * @param {IXMMsgPing=} [properties] Properties to set
     * @returns {XMMsgPing} XMMsgPing instance
     */
    XMMsgPing.create = function create(properties) {
        return new XMMsgPing(properties);
    };

    /**
     * Encodes the specified XMMsgPing message. Does not implicitly {@link XMMsgPing.verify|verify} messages.
     * @function encode
     * @memberof XMMsgPing
     * @static
     * @param {IXMMsgPing} message XMMsgPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgPing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.stats != null && message.hasOwnProperty("stats"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.stats);
        if (message.psc != null && message.hasOwnProperty("psc"))
            $root.PushServiceConfigMsg.encode(message.psc, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified XMMsgPing message, length delimited. Does not implicitly {@link XMMsgPing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgPing
     * @static
     * @param {IXMMsgPing} message XMMsgPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgPing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgPing message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgPing} XMMsgPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgPing.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgPing();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.stats = reader.bytes();
                break;
            case 2:
                message.psc = $root.PushServiceConfigMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgPing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgPing} XMMsgPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgPing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgPing message.
     * @function verify
     * @memberof XMMsgPing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgPing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stats != null && message.hasOwnProperty("stats"))
            if (!(message.stats && typeof message.stats.length === "number" || $util.isString(message.stats)))
                return "stats: buffer expected";
        if (message.psc != null && message.hasOwnProperty("psc")) {
            var error = $root.PushServiceConfigMsg.verify(message.psc);
            if (error)
                return "psc." + error;
        }
        return null;
    };

    /**
     * Creates a XMMsgPing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgPing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgPing} XMMsgPing
     */
    XMMsgPing.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgPing)
            return object;
        var message = new $root.XMMsgPing();
        if (object.stats != null)
            if (typeof object.stats === "string")
                $util.base64.decode(object.stats, message.stats = $util.newBuffer($util.base64.length(object.stats)), 0);
            else if (object.stats.length)
                message.stats = object.stats;
        if (object.psc != null) {
            if (typeof object.psc !== "object")
                throw TypeError(".XMMsgPing.psc: object expected");
            message.psc = $root.PushServiceConfigMsg.fromObject(object.psc);
        }
        return message;
    };

    /**
     * Creates a plain object from a XMMsgPing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgPing
     * @static
     * @param {XMMsgPing} message XMMsgPing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgPing.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.stats = "";
            else {
                object.stats = [];
                if (options.bytes !== Array)
                    object.stats = $util.newBuffer(object.stats);
            }
            object.psc = null;
        }
        if (message.stats != null && message.hasOwnProperty("stats"))
            object.stats = options.bytes === String ? $util.base64.encode(message.stats, 0, message.stats.length) : options.bytes === Array ? Array.prototype.slice.call(message.stats) : message.stats;
        if (message.psc != null && message.hasOwnProperty("psc"))
            object.psc = $root.PushServiceConfigMsg.toObject(message.psc, options);
        return object;
    };

    /**
     * Converts this XMMsgPing to JSON.
     * @function toJSON
     * @memberof XMMsgPing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgPing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgPing;
})();

$root.XMMsgKick = (function() {

    /**
     * Properties of a XMMsgKick.
     * @exports IXMMsgKick
     * @interface IXMMsgKick
     * @property {string|null} [type] XMMsgKick type
     * @property {string|null} [reason] XMMsgKick reason
     * @property {string|null} [desc] XMMsgKick desc
     */

    /**
     * Constructs a new XMMsgKick.
     * @exports XMMsgKick
     * @classdesc Represents a XMMsgKick.
     * @implements IXMMsgKick
     * @constructor
     * @param {IXMMsgKick=} [properties] Properties to set
     */
    function XMMsgKick(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgKick type.
     * @member {string} type
     * @memberof XMMsgKick
     * @instance
     */
    XMMsgKick.prototype.type = "";

    /**
     * XMMsgKick reason.
     * @member {string} reason
     * @memberof XMMsgKick
     * @instance
     */
    XMMsgKick.prototype.reason = "";

    /**
     * XMMsgKick desc.
     * @member {string} desc
     * @memberof XMMsgKick
     * @instance
     */
    XMMsgKick.prototype.desc = "";

    /**
     * Creates a new XMMsgKick instance using the specified properties.
     * @function create
     * @memberof XMMsgKick
     * @static
     * @param {IXMMsgKick=} [properties] Properties to set
     * @returns {XMMsgKick} XMMsgKick instance
     */
    XMMsgKick.create = function create(properties) {
        return new XMMsgKick(properties);
    };

    /**
     * Encodes the specified XMMsgKick message. Does not implicitly {@link XMMsgKick.verify|verify} messages.
     * @function encode
     * @memberof XMMsgKick
     * @static
     * @param {IXMMsgKick} message XMMsgKick message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgKick.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
        if (message.desc != null && message.hasOwnProperty("desc"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
        return writer;
    };

    /**
     * Encodes the specified XMMsgKick message, length delimited. Does not implicitly {@link XMMsgKick.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgKick
     * @static
     * @param {IXMMsgKick} message XMMsgKick message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgKick.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgKick message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgKick
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgKick} XMMsgKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgKick.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgKick();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.string();
                break;
            case 2:
                message.reason = reader.string();
                break;
            case 3:
                message.desc = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgKick message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgKick
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgKick} XMMsgKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgKick.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgKick message.
     * @function verify
     * @memberof XMMsgKick
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgKick.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        return null;
    };

    /**
     * Creates a XMMsgKick message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgKick
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgKick} XMMsgKick
     */
    XMMsgKick.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgKick)
            return object;
        var message = new $root.XMMsgKick();
        if (object.type != null)
            message.type = String(object.type);
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.desc != null)
            message.desc = String(object.desc);
        return message;
    };

    /**
     * Creates a plain object from a XMMsgKick message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgKick
     * @static
     * @param {XMMsgKick} message XMMsgKick
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgKick.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = "";
            object.reason = "";
            object.desc = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        return object;
    };

    /**
     * Converts this XMMsgKick to JSON.
     * @function toJSON
     * @memberof XMMsgKick
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgKick.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgKick;
})();

$root.XMMsgNotify = (function() {

    /**
     * Properties of a XMMsgNotify.
     * @exports IXMMsgNotify
     * @interface IXMMsgNotify
     * @property {number|null} [errCode] XMMsgNotify errCode
     * @property {string|null} [errStr] XMMsgNotify errStr
     */

    /**
     * Constructs a new XMMsgNotify.
     * @exports XMMsgNotify
     * @classdesc Represents a XMMsgNotify.
     * @implements IXMMsgNotify
     * @constructor
     * @param {IXMMsgNotify=} [properties] Properties to set
     */
    function XMMsgNotify(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * XMMsgNotify errCode.
     * @member {number} errCode
     * @memberof XMMsgNotify
     * @instance
     */
    XMMsgNotify.prototype.errCode = 0;

    /**
     * XMMsgNotify errStr.
     * @member {string} errStr
     * @memberof XMMsgNotify
     * @instance
     */
    XMMsgNotify.prototype.errStr = "";

    /**
     * Creates a new XMMsgNotify instance using the specified properties.
     * @function create
     * @memberof XMMsgNotify
     * @static
     * @param {IXMMsgNotify=} [properties] Properties to set
     * @returns {XMMsgNotify} XMMsgNotify instance
     */
    XMMsgNotify.create = function create(properties) {
        return new XMMsgNotify(properties);
    };

    /**
     * Encodes the specified XMMsgNotify message. Does not implicitly {@link XMMsgNotify.verify|verify} messages.
     * @function encode
     * @memberof XMMsgNotify
     * @static
     * @param {IXMMsgNotify} message XMMsgNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgNotify.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
        if (message.errStr != null && message.hasOwnProperty("errStr"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errStr);
        return writer;
    };

    /**
     * Encodes the specified XMMsgNotify message, length delimited. Does not implicitly {@link XMMsgNotify.verify|verify} messages.
     * @function encodeDelimited
     * @memberof XMMsgNotify
     * @static
     * @param {IXMMsgNotify} message XMMsgNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XMMsgNotify.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XMMsgNotify message from the specified reader or buffer.
     * @function decode
     * @memberof XMMsgNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {XMMsgNotify} XMMsgNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgNotify.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.XMMsgNotify();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errCode = reader.int32();
                break;
            case 2:
                message.errStr = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a XMMsgNotify message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof XMMsgNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {XMMsgNotify} XMMsgNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XMMsgNotify.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XMMsgNotify message.
     * @function verify
     * @memberof XMMsgNotify
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XMMsgNotify.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errStr != null && message.hasOwnProperty("errStr"))
            if (!$util.isString(message.errStr))
                return "errStr: string expected";
        return null;
    };

    /**
     * Creates a XMMsgNotify message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof XMMsgNotify
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {XMMsgNotify} XMMsgNotify
     */
    XMMsgNotify.fromObject = function fromObject(object) {
        if (object instanceof $root.XMMsgNotify)
            return object;
        var message = new $root.XMMsgNotify();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errStr != null)
            message.errStr = String(object.errStr);
        return message;
    };

    /**
     * Creates a plain object from a XMMsgNotify message. Also converts values to other types if specified.
     * @function toObject
     * @memberof XMMsgNotify
     * @static
     * @param {XMMsgNotify} message XMMsgNotify
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XMMsgNotify.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errCode = 0;
            object.errStr = "";
        }
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errStr != null && message.hasOwnProperty("errStr"))
            object.errStr = message.errStr;
        return object;
    };

    /**
     * Converts this XMMsgNotify to JSON.
     * @function toJSON
     * @memberof XMMsgNotify
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XMMsgNotify.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XMMsgNotify;
})();

// module.exports = $root;

export default $root;
