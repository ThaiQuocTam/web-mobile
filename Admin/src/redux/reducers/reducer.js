import { combineReducers } from 'redux'
import getListProductTypeReducer from './listProductTypeReducer'
import getListProductGroupReducer from './listProductGroupReducer'
import postCreateProductReducer from './createProductReducer'
import getProductReducer from "./getProductReducer"
import getInfoProductReducer from './getInfoProduct'

export default combineReducers({
    getListProductTypeReducer,
    getListProductGroupReducer,
    postCreateProductReducer,
    getProductReducer,
    getInfoProductReducer
})  
