import { combineReducers } from 'redux'
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import topSmartphoneReducer from './topSmartphoneReducer'

export default combineReducers({
    signInReducer,
    signUpReducer,
    topSmartphoneReducer
})