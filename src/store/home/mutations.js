import * as types from './mutations_types'

export default {
  [types.GET_ARTICLE_LIST](state, res) {
    state.articleList = { ...state, ...res.data }
    state.title = 'hello'
  }
}
