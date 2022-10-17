import { getType, signInAction } from "redux/actions";
import { INIT_STATE } from "redux/constants/constants";

export default function signInReducer(state = INIT_STATE, action) {
    console.log(state)
    switch (action.type) {
        case getType(signInAction.signInRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(signInAction.signInSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(signInAction.signInFailure):
            return {
                ...state,
                isLoading: false
            }
            break;
        default:
            return state
    }
}