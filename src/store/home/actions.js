/**
 * Created by sailengsi on 2017/5/10.
 */

import * as types from './mutations_types.js'

const updateUserInfo = ({commit}, {userinfo}) => {
  return new Promise((resolve, reject) => {
    commit(types.UPDATE_USERINFO, {
      userinfo
    })
    resolve()
  })
}

export default { updateUserInfo }
