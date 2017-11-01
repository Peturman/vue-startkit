import * as types from './mutations_types.js'

const increase = ({commit}) => {
  console.log('进入action')
  return new Promise((resolve, reject) => {
    console.log('触发commit')
    commit(types.INCREASE)
    resolve()
  })
}

const decrease = ({commit}) => {
  return new Promise((resolve, reject) => {
    commit(types.DECREASE)
    resolve()
  })
}

export default { increase, decrease }
