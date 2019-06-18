/*eslint-disable*/

// Adler32校验算法
function adler32 (bytes) {
  bytes = new Uint8Array(bytes)

  var a = 1,
    b = 0,
    i = 0,
    MOD_ADLER = 65521,
    len = bytes.length,
    tlen

  while (len > 0) {
    tlen = len > 5550 ? 5550 : len
    len -= tlen

    do {
      a += bytes[i++]
      b += a
    } while (--tlen)

    a %= MOD_ADLER
    b %= MOD_ADLER
  }

  return ((b << 16) | a) >>> 0
}

// RC4加密算法
function rc4 (str, key) {
  var s = [],
    j = 0,
    x,
    res = ''
  var i = 0
  for (i = 0; i < 256; i++) {
    s[i] = i
  }
  for (i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256
    x = s[i]
    s[i] = s[j]
    s[j] = x
  }
  i = 0
  j = 0
  for (var y = 0; y < str.length; y++) {
    i = (i + 1) % 256
    j = (j + s[i]) % 256
    x = s[i]
    s[i] = s[j]
    s[j] = x
    res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256])
  }
  return res
}

// sha1安全哈希算法，数字签名标准
function sha1 (data) {
  // Input: Uint8Array
  // Output: Uint8Array

  var i, j, t
  var l = (((data.length + 8) >>> 6) << 4) + 16,
    s = new Uint8Array(l << 2)
  s.set(new Uint8Array(data.buffer)), (s = new Uint32Array(s.buffer))
  for (t = new DataView(s.buffer), i = 0; i < l; i++) s[i] = t.getUint32(i << 2)
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8)
  s[l - 1] = data.length << 3
  var w = [],
    f = [
      function() {
        return (m[1] & m[2]) | (~m[1] & m[3])
      },
      function() {
        return m[1] ^ m[2] ^ m[3]
      },
      function() {
        return (m[1] & m[2]) | (m[1] & m[3]) | (m[2] & m[3])
      },
      function() {
        return m[1] ^ m[2] ^ m[3]
      }
    ],
    rol = function(n, c) {
      return (n << c) | (n >>> (32 - c))
    },
    k = [1518500249, 1859775393, -1894007588, -899497514],
    m = [1732584193, -271733879, null, null, -1009589776]
  ;(m[2] = ~m[0]), (m[3] = ~m[1])
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0)
    for (j = 0; j < 80; j++)
      (w[j] =
        j < 16
          ? s[i + j]
          : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1)),
      (t =
          (rol(m[0], 5) + f[(j / 20) | 0]() + m[4] + w[j] + k[(j / 20) | 0]) |
          0),
      (m[1] = rol(m[1], 30)),
      m.pop(),
      m.unshift(t)
    for (j = 0; j < 5; j++) m[j] = (m[j] + o[j]) | 0
  }
  t = new DataView(new Uint32Array(m).buffer)
  for (var ii = 0; ii < 5; ii++) m[ii] = t.getUint32(ii << 2)
  return new Uint8Array(new Uint32Array(m).buffer)
}

// 字符串转ArrayBuffer
function str2ab (str) {
  var bytes = new Uint8Array(str.length)
  for (var iii = 0; iii < str.length; iii++) {
    bytes[iii] = str.charCodeAt(iii)
  }

  return bytes
}

// ArrayBuffer转字符串
function ab2str (buffer) {
  var str = ''
  for (var iii = 0; iii < buffer.byteLength; iii++) {
    str += String.fromCharCode(buffer[iii])
  }

  return str
}

// 生成随机字符串
function randomStr () {
  return Math.random()
    .toString(36)
    .substr(2)
}

// 包头和内容之间采用 http://wiki.mioffice.cn/xmg/MsgV5-FE-XMQ-design#V5_.E5.8D.8F.E8.AE.AE 指定的包格式
function buildPacketV5 (header, payload) {
  // Input: Uint8Array, Uint8Array
  // Output: ArrayBuffer

  var PacketV5_Size = 18
  var header_len = header.length
  var payload_len = payload.length
  var packet_size = PacketV5_Size + header_len + payload_len
  var buffer = new ArrayBuffer(packet_size)
  var dv = new DataView(buffer)
  // set packetv5 magic，魔数。设置为 0xc2fe
  // 等价于 dv.setUint16(0, 0xc2fe)
  dv.setUint8(0, 0xc2)
  dv.setUint8(1, 0xfe)
  // set packetv5 version，协议版本。设置为 0x04
  // 等价于 dv.setUint16(2, 0x04)
  dv.setUint8(2, 0)
  dv.setUint8(3, 4)
  // set packetv5 headerType。header 的类型。header 是 FE 和 XMQ 之间传输的包，这个包的类型值，设置为 3
  dv.setUint16(4, 3)
  // set packetv5 payloadType。payload 的类型。采用 Thrift 编码设置为 1，采用 ProtoBuf 编码，payload 设置为 2
  dv.setUint16(6, 2)
  // set packetv5 headerLen
  dv.setUint16(8, header_len)
  // set packetv5 payloadLen
  dv.setUint32(10, payload_len)
  // set packetv5 header
  for (var i = 0; i < header_len; i++) {
    dv.setUint8(14 + i, header[i])
  }
  // set packetv5 payload。payload 的字节数。
  for (i = 0; i < payload_len; i++) {
    dv.setUint8(14 + header_len + i, payload[i])
  }
  // 整包后面附上一个32位的校验位，校验算法为Adler32，改字段不计算在上面定义的协议包的一部分。
  var checksum = adler32(buffer.slice(0, packet_size - 4))
  dv.setUint32(packet_size - 4, checksum)

  return buffer
}

export {
  adler32,
  rc4,
  sha1,
  ab2str,
  str2ab,
  randomStr,
  buildPacketV5,
}

export default {
  adler32,
  rc4,
  sha1,
  ab2str,
  str2ab,
  randomStr,
  buildPacketV5,
}
