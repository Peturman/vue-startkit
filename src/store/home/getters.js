/**
 * Created by sailengsi on 2017/5/10.
 */

const getArticleList = state => state.articleList
const setTitle = state => {
  console.log(1)
  return state.title
}

export default {
  getArticleList,
  setTitle
}
