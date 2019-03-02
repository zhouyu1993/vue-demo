import { fetch, fetchJsonp } from '@/plugins/fetch'
import api from '../api'

export default {
  updateNumber ({ commit }, number) {
    commit('setNumber', number)
  },
  async getSearch ({ commit }, { w, p }) {
    try {
      const json = await fetchJsonp(`${api.cyqq}/soso/fcgi-bin/search_for_qq_cp`, {
        w,
        n: 10,
        p,
        format: 'jsonp',
      }, {
        jsonpCallback: 'jsonpCallback'
      })

      if (json.code === 0 && json.subcode === 0) {
        const data = json.data || {}

        const search = data.song || {}
        search.keyword = data.keyword

        commit('setSearch', search)
      }
    } catch (e) {
      throw new Error(e)
    }
  },
  async getSearch2 ({ commit }, { w, p }) {
    try {
      const json = await fetchJsonp(`${api.cyqq}/splcloud/fcgi-bin/smartbox_new.fcg`, {
        key: w,
        format: 'jsonp',
      }, {
        jsonpCallback: 'jsonpCallback'
      })

      if (json.code === 0 && json.subcode === 0) {
        const data = json.data || {}

        const search = data.song || {}
        search.keyword = w
        search.curnum = search.count
        search.curpage = 1
        search.list = search.itemlist

        commit('setSearch', search)
      }
    } catch (e) {
      throw new Error(e)
    }
  },
  async getSearch3 ({ commit }, { w, p }) {
    try {
      const json = await fetch(`${api.forward}/music/api/search`, {
        w,
        n: 10,
        p,
        format: 'json',
      })

      console.log(json)
    } catch (e) {
      throw new Error(e)
    }
  },
  async getSearch4 ({ commit }, { w, p }) {
    try {
      const json = await fetch(`${api.bzqll}/music/tencent/search`, {
        key: '579621905',
        s: w,
        limit: 10,
        offset: p,
        type: 'song'
      })

      if (json.code === 200) {
        const list = json.data || []

        const search = {}
        search.keyword = w
        search.curnum = list.length
        search.curpage = p
        search.list = list

        commit('setSearch', search)
      }
    } catch (e) {
      throw new Error(e)
    }
  },

  async getVkey ({ commit }, songmid) {
    try {
      const json = await fetch(`//202.182.114.9/api/music/vkey`, {
        songmid,
      })

      if (json && json.code === 0 && json.data && json.data.items && json.data.items[0] && json.data.items[0].vkey) {
        const song = json.data.items[0]

        return `//dl.stream.qqmusic.qq.com/${song.filename}?guid=123456789&vkey=${song.vkey}&uin=0&fromtag=38`
      }
    } catch (e) {
      throw new Error(e)
    }
  },
}
