// store时核心管理者

// 引入createStore,创建store
import {createStore} from 'redux'
// 引入counte_reducer.js

import counteReducer from './count_reducer'
// 创建store并传入countReducer
let store = createStore(counteReducer)
// 暴露
export default store