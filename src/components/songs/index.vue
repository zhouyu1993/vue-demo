<template>
  <!-- <ul class="vue-songs" v-if="songs.length" v-scroll="scrollFun">
    <li v-for="value in songs" @click="toSong(value)">
      <img :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${value.albummid}.jpg`">
      <div class="song-info">
        <p class="song-name">{{value.songname | unicodeTen}}</p>
        <p class="song-singer">
          <span v-for="(singer, index) in value.singer">{{singer.name | unicodeTen}}<i v-if="index != (value.singer.length - 1)">/</i></span>
        </p>
      </div>
    </li>
  </ul> -->
  <ul class="vue-songs" v-if="songs.length">
    <li v-for="value in songs" @click="toSong(value)">
      <img src="https://cmspic-10004025.image.myqcloud.com/0064cca0-a684-11e8-9774-f1d87802945e_size_200x200">
      <div class="song-info">
        <p class="song-name">{{value.name | unicodeTen}}</p>
        <p class="song-singer">{{value.singer}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(['search']),
    keyword () {
      return this.search.keyword || ''
    },
    curnum () {
      return this.search.curnum || 0
    },
    curpage () {
      return this.search.curpage || 0
    },
    songs () {
      return this.search.list || []
    }
  },
  methods: {
    ...mapActions(['getSearch2']),
    async scrollFun (state) {
      if (state !== 'bottom' || this.loading || this.curnum < 10 || !this.keyword.trim()) return

      this.loading = true

      try {
        await this.getSearch2({
          w: this.keyword,
          p: this.curpage + 1
        })

        this.$nextTick(() => {
          this.loading = false
        })
      } catch (e) {
        this.$$toast('系统异常')
      }
    },
    toSong (song) {
      // window.localStorage['vue-demo-song'] = JSON.stringify(song)

      // this.$emit('input', song)

      location.href = `//i.y.qq.com/v8/playsong.html?songmid=${song.mid}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';

.vue-songs {
  padding: 0 rem(20);

  li {
    @include nativeborder();
    display: flex;
    align-items: center;
    height: rem(120);

    img {
      width: rem(90);
      height: rem(90);
    }

    .song-info {
      margin-left: rem(20);
    }

    .song-singer {
      span {
        i {
          margin: 0 rem(10);
        }
      }
    }
  }
}
</style>
