// store时核心管理者

// 引入createStore,创建store
import {createStore,applyMiddleware} from 'redux'
// 引入counte_reducer.js
import counteReducer from './count_reducer'
// 引入thunk
import thunk from 'redux-thunk'
// 创建store并传入countReducer
let store = createStore(counteReducer,applyMiddleware(thunk))
// 暴露
export default store