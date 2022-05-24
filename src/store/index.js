import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ws: null,
    messages: []
  },
  getters: {
    ws : ({ ws }) => ws,
    messages : ({ messages }) => messages.reverse(),
  },
  mutations: {
    WS: (state, ws) => state.ws = ws,
    ADD_MESSAGE: (state, message) => state.messages.push({message, timestamp: new Date()})
  },
  actions: {
  },
  modules: {
  }
})
