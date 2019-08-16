<template lang="html">
  <div class="force-refresh">
    <h1>Enter a valid page URL and click OK to force refresh</h1>
    <div class="content">
      <input
        placeholder="http[s]://"
        v-model="url"
        @keyup.enter="submit"
      >
      <button @click="submit">Go</button>
    </div>

    <div class="tip">
      <h1>Other Forced Refresh Methods</h1>
      <pre>
1. Force refresh on current page

  If windows, press `Ctrl + Shift + R`, or `Ctrl+F5`

  If mac, press `Cmd + Shft + R`
      </pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';

.force-refresh {
  h1 {
    margin: rem(20) 0;
    font-size: rem(30);
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: rem(20);
    background: #f4f4f4;

    input {
      flex: 1;
      height: rem(60);
      padding-left: rem(10);
      font-size: rem(24);
      line-height: rem(60);
    }

    button {
      width: rem(100);
      height: rem(60);
      font-size: rem(30);
      line-height: rem(60);
      color: #fff;
      text-align: center;
      background-color: #ff397e;
    }
  }

  pre {
    font-size: rem(24);
  }
}
</style>

<script>
import queryString from 'query-string'

export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    submit () {
      let url = this.url

      if (/\?/.test(url)) {
        const urlArr = url.split('?')

        const query = queryString.parse(urlArr[1])

        const queryStr = queryString.stringify({
          ...query,
          t: Date.now(),
        })

        url = `${urlArr[0]}?${queryStr}`
      } else {
        url = `${url}?t=${Date.now()}`
      }

      window.open(url)
    },
  }
}
</script>
