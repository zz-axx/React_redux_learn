import React, { Component } from 'react'
// 引入count
import Count from './components/Count'
export default class App extends Component {
    render() {
        // 接收store
        let {store} = this.props
        console.log(this.props)
        console.log(store)
        return (
            <div>
                <Count store={store}/>
            </div>
        )
    }
}
