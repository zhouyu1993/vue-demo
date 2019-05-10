<template>
  <div class="test">
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import test1 from '@/components/test/1.vue'

export default {

  data () {
    const id = this.$route.params.id

    return {
      currentComponent: `test${id}`,
    }
  },
  components: {
    [test1.name]: test1,
  },

}
</script>

<style lang="scss" scoped>
</style>
