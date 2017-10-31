// 组装模块并导出 store 的地方

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' // Vuex 自带一个日志插件用于一般的调试

import home from './home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
