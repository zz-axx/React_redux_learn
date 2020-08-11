// 用于Count的reducer

// 设置初始值
const initState = 0
// 设置用于reducer
/**
 * 
 * @param {*} prev  之前的状态值，若时第一次调用则传入的时undefined，可以设置初使值
 * @param {*} action 根据action中的type和data，决定要如何做，若是第一次则传入的是内置的action
 */
function counterReducer (prev=initState,action) {
    // 获取action中的数据
    let {type,data} = action
    // 根据type类型，决定要做的事情
    switch (type) {
        case 'increment':
            return prev + data;
            case 'decrement':
                return prev - data;    
            case 'incrementIfOdd':
                return prev + data;
            case 'incrementAsync':
                return prev + data;
        default:
            return prev
            
    }
}


// 对外暴露
export default counterReducer