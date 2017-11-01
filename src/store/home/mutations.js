import * as types from './mutations_types'

export default {
  [types.INCREASE](state, payload) {
    console.log('进入mutations')
    state.count += 1
    console.log('state更新完毕')
  },
  [types.DECREASE](state, payload) {
    state.count -= 1
  }
}
