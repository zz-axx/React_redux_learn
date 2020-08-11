// 用于Count组件的action


// 引入常量文件
import {INCREMENT,DECREMENT} from './constant'
// 加的action
export let incrementAction = (number) => ({type:INCREMENT,data:number})
// 减的action
export let decrementAction = (number) => ({type:DECREMENT,data:number})
// 异步action
export let incrementActionAsync = (number) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementAction(number))
        }, 2000);
    }
}