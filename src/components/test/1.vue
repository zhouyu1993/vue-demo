<template>
  <div class="test-1">
    <div class="test-wrapper" :class="class1">
      <div class="image"></div>
      <div class="text" :class="class2">
        春眠不觉晓，处处闻啼鸟。
        夜来风雨声，花落知多少。
      </div>
    </div>

    <p>image 是 float: left 发现溢出，容器的坍塌现象</p>

    <button @click="action1">给 test-wrapper 加 display: flow-root</button>

    <p>打开控制台，靠右，向左缩小视口，发现右边文字会滑倒下方</p>

    <button @click="action2">给 text 加 display: flow-root</button>

    <p>另外，display: flow-root 和 overflow: hidden 效果看似一样</p>

    <a href="https://www.w3cplus.com/css3/display-flow-root.html">w3cplus之flow-root</a>

    <div class="test-wrapper layout-flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>

    <p>当子元素的 flex-grow 之和小于1时，只能按比例分配部分剩余空间，而不是全部</p>
  </div>
</template>

<style lang="scss" scoped>
.test-1 {
  .test-wrapper {
    border: 3px solid #bbb;

    &.class1 {
      display: flow-root;
    }

    .image {
      float: left;
      width: 300px;
      height: 300px;
      background-color: #ff397e;
    }

    .text {
      &.class2 {
        display: flow-root;
      }
    }
  }

  p {
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    color: #fff;
    background-color: #13a75c;
  }

  a {
    margin-top: 20px;
    color: #ff397e;
    text-decoration: underline;
  }

  .layout-flex {
    display: flex;

    .item {
      color: #fff;
      border-left: 1px solid #bbb;
      background-color: #44a724;
    }
  }
}
</style>

<script>
export default {

  name: 'test1',
  data () {
    return {
      class1: '',
      class2: '',
    }
  },
  methods: {
    action1 () {
      this.class1 = 'class1'
    },
    action2 () {
      this.class2 = 'class2'
    },
  },

}
</script>
