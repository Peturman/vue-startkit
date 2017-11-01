import baseAPIs from './base'

export const types = {
  getArticleList: 'getArticleList'
}

export const CUSTOMER_STATUS = {
  TRACKING: 'tracking',
  UNTRACK: 'untrack'
}

export const API_STATUS_KEY_FIELD = {
  success: 1,
  failed: 0
}

export const RECHARGE_TYPE = {
  NUM: 'customer_num',
  AMOUNT: 'amount'
}

// TODO:后续随 API 增加，可以考虑根据功能拆分成单独文件维护
// 拆分 API 在此处 assign 进来，如 Object.assign({}, baseAPIs, { moreAPIs })
export const apis = Object.assign({}, baseAPIs)
