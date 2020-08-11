import React, { Component } from 'react'
// 引入store
import store from '../redux/store'
export default class Count extends Component {
    

    // 加
    increment = () => {
        
        // 获取所加数值
        let {value} = this.refs.selectedNumber
        // 传递action
        store.dispatch({type:'increment',data:value*1})
       
    }

    // 减
    decrement = () => {
         // 获取所减数值
         let {value} = this.refs.selectedNumber
         // 传递action
        store.dispatch({type:'decrement',data:value*1})
    }

    // 奇数时加
    incrementIfOdd = () => {
        // 获取所减数值
        let {value} = this.refs.selectedNumber
        let count = store.getState()
        if(count % 2 !== 0){
          // 传递action
        store.dispatch({type:'incrementIfOdd',data:value*1})
        }    
    }

    // 异步加
    incrementAsync = () => {
        setTimeout(() => {
            // 获取所加数值
        let {value} = this.refs.selectedNumber
        // 传递action
        store.dispatch({type:'incrementAsync',data:value*1})
        }, 500);
    }
    render() {
        
        return (
            <div>
                <h1>所求之和：{store.getState()}</h1>
                <select ref="selectedNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>和为奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
