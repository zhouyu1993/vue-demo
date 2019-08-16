<template>
  <div class="home">
    <p>
      <a href="//zhouyu1993.github.io/awesome/vue-demo/#/music">音乐搜索</a>
    </p>
    <p>
      <a href="//zhouyu1993.github.io/awesome/vue-demo/#/salary-tax-calculator">工资(个税)计算器</a>
    </p>
    <p>
      <a href="//zhouyu1993.github.io/awesome/vue-demo/#/rose">玫瑰花</a>
    </p>
    <p>
      <a href="//zhouyu1993.github.io/awesome/vue-demo/#/force-refresh">强制刷新</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
  },
  watch: {
  },
  async mounted () {
    // const res1 = await fetch('//202.182.114.9/api/music/gethotkey')
    //
    // const json1 = await res1.json()
    //
    // console.log(json1)
    //
    // const res2 = await fetch('//202.182.114.9/api/music/search?w=陈奕迅')
    //
    // const json2 = await res2.json()
    //
    // console.log(json2)
    //
    // const res3 = await fetch('//202.182.114.9/api/music/singer?singermid=003Nz2So3XXYek')
    //
    // const json3 = await res3.json()
    //
    // console.log(json3)
    //
    // const res4 = await fetch('//202.182.114.9/api/music/vkey?songmid=004ec8yZ02bRYx')
    //
    // const json4 = await res4.json()
    //
    // console.log(json4)
    //
    // const res5 = await fetch('//202.182.114.9/api/music/lyric?songid=5536869')
    //
    // const json5 = await res5.json()
    //
    // console.log(json5)

    // const res6 = await fetch('//api.bzqll.com/music/tencent/search?key=579621905&s=秦时明月&limit=100&offset=0&type=song')
    //
    // const json6 = await res6.json()
    //
    // console.log(json6)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.home {
  text-align: center;

  p {
    margin-bottom: rem(40);

    a {
      padding-bottom: rem(20);
      font-size: rem(30);
      border-bottom: 1px solid #333;
    }
  }
}
</style>
