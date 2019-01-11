<template>
  <div class="home">
    <p>
      <a href="//zhouyu1993.github.io/awesome/vue-demo/#/salary-tax-calculator">工资(个税)计算器</a>
    </p>
    <p>
      <a href="//zhouyu1993.github.io/awesome/vue-demo/#/music">音乐搜索</a>
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
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.home {
  text-align: center;

  a {
    padding-bottom: rem(20);
    font-size: rem(30);
    border-bottom: 1px solid #333;
  }
}
</style>
