import { combineReducers } from 'redux'
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import topSmartphoneReducer from './topSmartphoneReducer'
import getInfoProductReducer from './getInfoProductReducer'
import getListSmartphoneReducer from './getListSmartphoneReducer'
import getListTopTabletReducer from './getListTopTabletReducer'

export default combineReducers({
    signInReducer,
    signUpReducer,
    topSmartphoneReducer,
    getInfoProductReducer,
    getListSmartphoneReducer,
    getListTopTabletReducer
})