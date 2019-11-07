<template lang="html">
  <div class="midc">
    <div class="content">
      <input
        placeholder="packageName"
        v-model="packageName"
      >
      <input
        placeholder="path"
        v-model="path"
      >
      <input
        placeholder="params"
        v-model="params"
      >
    </div>

    <p>
      <a :href="url">deeplink跳转快应用</a>
    </p>

    <p>
      <a @click="toQa">跳转快应用</a>
    </p>
    <p>
      <a @click="channelReady">检测平台是否支持服务</a>
    </p>

    <p>如不能跳转，请使用安卓手机的全局搜索，搜索“雨乐”快应用</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.midc {
  text-align: center;

  .content {
    padding: rem(20);

    input {
      display: block;
      width: 100%;
      height: rem(60);
      margin-top: rem(20);
      padding-left: rem(10);
      font-size: rem(24);
      line-height: rem(60);
      border: 1px solid #ddd;
    }
  }

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

<script>
import queryString from 'query-string'

export default {
  data () {
    return {
      packageName: 'com.rainjoy1993qa',
      path: 'WebSocket',
      params: '{"debug":"on"}',
      url: 'hap://app/com.rainjoy1993qa/WebSocket?debug=on',
    }
  },
  methods: {
    toQa () {
      let {
        packageName,
        path,
        params,
      } = this

      console.log(packageName, '||', path, '||', params)

      if (packageName) {
        this.$$toast('正在跳转')

        if (params) {
          params = JSON.parse(params)

          window.appRouter(packageName, path, params)
        } else {
          window.appRouter(packageName, path)
        }

        const st = setTimeout(() => {
          clearTimeout(st)

          let url
          if (params) {
            params = queryString.stringify(params)

            url = `hap://app/${packageName}/${path}?${params}`
          } else {
            url = `hap://app/${packageName}/${path}`
          }

          console.log(url)

          this.url = url

          location.replace(url)
        }, 1000)
      }
    },
    channelReady () {
      window.channelReady(bAvailable => {
        alert('是否存在框架服务：' + bAvailable)
      })
    },
  },

  beforeMount () {
    const url = location.href

    console.log(url)

    const urlArr = url.split('?')

    console.log(urlArr)

    const queryStr = urlArr[urlArr.length - 1]

    if (queryStr) {
      const query = queryString.parse(queryStr)

      console.log(query)

      if (query.packageName) {
        this.packageName = query.packageName
      }

      if (query.path) {
        this.path = query.path
      }

      if (query.params) {
        this.params = query.params
      }

      this.toQa()
    }
  },
}
</script>
