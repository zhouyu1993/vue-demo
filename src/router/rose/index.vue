<template lang="html">
  <div class="rose">
    <button @click="messageBox">{{ new Date() | dateFormate('YYMMDD') }}</button>

    <canvas id="rose-canvas"></canvas>

    <div class="heart">
      <p>I&emsp;💗&emsp;U</p>
    </div>

    <pre>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>
      <span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>66666666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>666666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6666<span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span><span style="background: #ff079e; color: #fff;">9</span>6
    </pre>
  </div>
</template>

<style lang="scss" scoped>
.rose {
  width: 400px;
  margin: 0 auto;

  .heart {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background: red;
    transform: rotate(45deg);
    animation-duration: 3s;
    animation-name: heart;
    animation-fill-mode: forwards;

    &:before{
      content: "";
      width: 200px;
      height: 200px;
      background: red;
      position: absolute;
      border-radius: 50%;
      transform: translateX(-100px);
    }

    &:after{
      content: "";
      width: 200px;
      height: 200px;
      background: red;
      position: absolute;
      border-radius: 50%;
      transform: translateY(-100px);
    }

    p {
      font-size: 2em;
      color: blue;
      position: absolute;
      top: 30px;
      left: 2px;
      transform: rotate(-45deg);
      animation-name: words;
      animation-duration: 2s;
      animation-delay: 3s;
      z-index: 1;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    @keyframes heart{
      25% {
        transform: rotate(45deg) scale(1)
      }

      50% {
        transform: rotate(45deg) scale(0.5)
      }

      75% {
        transform: rotate(45deg) scale(1)
      }

      85% {
        transform: rotate(45deg) scale(0.5)
      }

      100% {
        transform: rotate(45deg) scale(1);
      }
    }

    @keyframes words{
      100% {
        transform: rotate(315deg);
        opacity: 0.8;
      }
    }
  }

  button {
    position: relative;
    left: 50%;
    width: 100px;
    margin-left: -50px;
    padding: 10px 20px;
    color: #fff;
    background-color: #f0397e;
    text-align: center;
  }
}
</style>

<script>
import { MessageBox } from 'mint-ui'

let SetInterval

export default {

  data () {
    return {
      i: 0,
      messages: [
        // '我有些话想对你说：',
        // '从现在开始，我只疼你一个，宠你，不会骗你，',
        // '答应你的每一件事情，我都会做得到，',
        // '对你讲的每一句话，都是真话，',
        // '不欺负你，不骂你，相信你，',
        // '有人欺负你，我会在第一时间来帮你，',
        // '你开心的时候，我会陪着你开心，',
        // '你不开心，我也会哄着你开心，',
        // '永远觉得你最漂亮，做梦都会梦见你，',
        // '在我的心里，只有你！',
        // '工资奖金全交，',
        // '剩菜剩饭全包，',
        // '家务杂活全干，',
        // '一切以老婆的话为最高宗旨，遵循2条原则：',
        // '第一，老婆的话都是对的；',
        // '第二，即使老婆错了，按照第一条执行。',
        // '我爱你！'
        '温柔的女人是金子，',
        '漂亮的女人是钻石，',
        '聪明的女人是宝藏，',
        '可爱的女人是名画！',
        '据考证，',
        '你是世界上最大的宝藏，',
        '里面藏满了金子、钻石和名画！',
        '你沉鱼落雁',
        '你闭月羞花',
        '你蛾眉皓齿',
        '你皓齿明眸',
        '你绝色佳人',
        '你兰质蕙心',
        '你天生丽质',
        '你国色天香',
        '你最可爱',
        '你最漂亮',
      ],
    }
  },
  methods: {
    createRose () {
      var c = document.getElementsByTagName('canvas')[0]
      var a = c.getContext('2d')

      var m = Math

      var C = m.cos
      var S = m.sin
      var P = m.pow
      var R = m.random

      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

      width = Math.min(width, 400)
      height = Math.min(height, 400)

      c.width = width
      c.height = height

      var f = width
      var h = -250

      function p (a, b, c) {
        if (c > 60) {
          return [S(a * 7) * (13 + 5 / (0.2 + P(b * 4, 4))) - S(b) * 50, b * f + 50, 625 + C(a * 7) * (13 + 5 / (
            0.2 + P(b * 4, 4))) + b * 400, a * 1 - b / 2, a]
        }
        var A = a * 2 - 1
        var B = b * 2 - 1
        if (A * A + B * B < 1) {
          if (c > 37) {
            var j = c & 1
            var n = j ? 6 : 4
            var o = 0.5 / (a + 0.01) + C(b * 125) * 3 - a * 300
            var w = b * h
            return [o * C(n) + w * S(n) + j * 610 - 390, o * S(n) - w * C(n) + 550 - j * 350, 1180 + C(B + A) * 99 - j * 300, 0.4 - a * 0.1 + P(1 - B * B, -h * 6) * 0.15 - a * b * 0.4 + C(a + b) / 5 + P(C((o * (a + 1) + (B >
              0 ? w : -w)) / 25), 30) * 0.1 * (1 - B * B), o / 1e3 + 0.7 - o * w * 3e-6]
          }
          if (c > 32) {
            c = c * 1.16 - 0.15
            o = a * 45 - 20
            w = b * b * h
            var z = o * S(c) + w * C(c) + 620
            return [o * C(c) - w * S(c), 28 + C(B * 0.5) * 99 - b * b * b * 60 - z / 2 - h, z, (b * b * 0.3 + P((1 - (A * A)), 7) * 0.15 + 0.3) * b, b * 0.7]
          }
          o = A * (2 - b) * (80 - c * 2)
          w = 99 - C(A) * 120 - C(b) * (-h - c * 4.9) + C(P(1 - b, 7)) * 50 + c * 2
          z = o * S(c) + w * C(c) + 700
          return [o * C(c) - w * S(c), B * 99 - C(P(b, 7)) * 50 - c / 3 - z / 1.35 + 450, z, (1 - b / 1.2) * 0.9 + a * 0.1, P((1 - b), 20) / 4 + 0.05]
        }
      }

      if (SetInterval) {
        clearInterval(SetInterval)
      }

      SetInterval = setInterval(() => {
        for (var i = 0; i < 1e4; i++) {
          var s = p(R(), R(), i % 46 / 0.74)
          if (s) {
            var z = s[2]
            var x = ~~(s[0] * f / z - h - width / 6)
            var y = ~~(s[1] * f / z - h - height / 6)
            var q = y * f + x
            if (!m[q] | m[q] > z) {
              /* eslint-disable */
              m[q] = z

              a.fillStyle = 'rgb(' + ~(s[3] * h) + ',' + ~(s[4] * h) +
                ',' + ~(s[3] * s[3] * -80) + ')'

              a.fillRect(x, y, 1, 1)
            }
          }
        }
      }, 0)
    },
    messageBox () {
      MessageBox({
        message: this.messages[this.i],
        closeOnClickModal: false,
      }).then(res => {
        if (this.i !== this.messages.length - 1) {
          this.i ++

          this.messageBox()
        } else {
          this.i = 0
        }
      })
    },
  },
  mounted () {
    this.createRose()
  },

}
</script>
