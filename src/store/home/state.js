/**
 * Created by sailengsi on 2017/5/10.
 */
import store from '../store'

export default {
  // 登录成功后的用户信息
  userinfo: store.get('userinfo') || {}
}
