import { combineReducers } from 'redux'
import getListProductTypeReducer from './listProductTypeReducer'
import getListProductGroupReducer from './listProductGroupReducer'
import postCreateProductReducer from './createProductReducer'
import getProductReducer from "./getProductReducer"
import getInfoProductReducer from './getInfoProductReducer'
import postEditInfoProductReducer from './postEditInfoProductReducer'
import postAddProductDetailReducer from './postAddProductDetailReducer'
import getInfoProductDetailReducer from './getInfoProductDetail'

export default combineReducers({
    getListProductTypeReducer,
    getListProductGroupReducer,
    postCreateProductReducer,
    getProductReducer,
    getInfoProductReducer,
    postEditInfoProductReducer,
    postAddProductDetailReducer,
    getInfoProductDetailReducer
})  
