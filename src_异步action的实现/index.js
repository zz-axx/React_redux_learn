// 引入React核心库
import React from 'react'
// 引入dom
import ReactDOM from 'react-dom'
// 引入App
import App from './App'
// 引入store
import store from './redux/store'
// 渲染页面
ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// 调用store中的subscribe，用于检测状态变化
store.subscribe(() => {
    // 状态一旦变化，就重新渲染页面
    ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})