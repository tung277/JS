
import { createStore } from 'redux'

const nameInitialState = {
    product_name:"",
    product_price:"",
    anh:""
}
const redu = (state = nameInitialState, action) => {
    switch (action.type) {
        case "get1":
            return {...state,product_name:action.$1,product_price:action.$2,anh:action.$3} 
        case ('get2'):
            return state
        default:
            return state
    }
}
var store = createStore(redu);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;