import { combineReducers } from 'redux'
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import topSmartphoneReducer from './topSmartphoneReducer'
import getBillReducer from './getBillReducer'
import getOderDetailReducer from './getOderDetailReducer'

export default combineReducers({
    signInReducer,
    signUpReducer,
    topSmartphoneReducer,
    getBillReducer,
    getOderDetailReducer
})