// 用于Count组件的action


// 引入常量文件
import {INCREMENT,DECREMENT} from './constant'
// 加的action
export let incrementAction = (number) => ({type:INCREMENT,data:number})
// 减的action
export let decrementAction = (number) => ({type:DECREMENT,data:number})