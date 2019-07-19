<template>
  <div id="app">
    <!-- <div class="logo">
      <img :src="src">
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import MiPushSDK from '@/lib/mipushsdk'

export default {
  name: 'app',
  data () {
    return {
      src: require('@/assets/img/logo.png')
    }
  },
  mounted () {
    // const miPushSDK = new MiPushSDK()
    //
    // miPushSDK.subscribe({
    //   success: (data) => {
    //     console.log('%cpush.subscribe.success: ', 'color: #b242ce', data)
    //
    //     // miPushSDK.setAlias()
    //
    //     // miPushSDK.setAccount()
    //
    //     miPushSDK.subscribeTopic()
    //
    //     setTimeout(() => {
    //       // miPushSDK.unsetAlias()
    //
    //       // miPushSDK.unsetAccount()
    //
    //       // miPushSDK.unsubscribeTopic()
    //     }, 2000)
    //   },
    //   fail: (data, code) => {
    //     console.error('%cpush.subscribe.fail: ', 'color: #ff397e', data, code)
    //   },
    // })
  },
}
</script>

<style lang="scss">
@import './assets/css/rem';

#app {
  width: rem(750);
  margin: rem(50) auto;

  .logo {
    padding: rem(20) 0;
    text-align: center;

    img {
      width: rem(200);
      height: rem(200);
    }
  }
}
</style>
