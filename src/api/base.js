const serverHost = `http://120.77.147.197:3389`

export default {

  // 修改用户信息
  getArticleList: {
    url: `${serverHost}/api/articles`,
    method: 'GET'
  }
}
