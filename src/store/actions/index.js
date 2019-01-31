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
        search.totalnum = search.count

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
}
