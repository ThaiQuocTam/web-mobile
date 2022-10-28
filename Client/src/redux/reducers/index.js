import { combineReducers } from 'redux'
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import topSmartphoneReducer from './topSmartphoneReducer'
import getInfoProductReducer from './getInfoProductReducer'
import getListSmartphoneReducer from './getListSmartphoneReducer'
import getListTopTabletReducer from './getListTopTabletReducer'
import getInfoUserReducer from './getInfoUserReducer'
import getBillReducer from './getBillReducer'
import getOderDetailReducer from './getOderDetailReducer'

export default combineReducers({
    signInReducer,
    signUpReducer,
    topSmartphoneReducer,
    getInfoProductReducer,
    getListSmartphoneReducer,
    getListTopTabletReducer,
    getInfoUserReducer,
    getBillReducer,
    getOderDetailReducer
})