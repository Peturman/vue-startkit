import * as types from './mutations_types.js'
import requestAPI from '@/api/index'

const getArticleList = ({commit}) => {
  console.log('进入action')
  requestAPI('getArticleList').then((res) => {
    console.log('action中调用封装后的axios成功')
    commit(types.GET_ARTICLE_LIST, res)
  })
}

export default { getArticleList }
