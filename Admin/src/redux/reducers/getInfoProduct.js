import { getType, getInfoProductAction } from "../actions/actions"
import { INIT_STATE_INFO_PRODUCT } from "redux/constants/constants";

export default function getInfoProductReducer(state = INIT_STATE_INFO_PRODUCT, action) {
    console.log(state);
    switch (action.type) {
        case getType(getInfoProductAction.getInfoProductRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getInfoProductAction.getInfoProductSuccess):
            return {
                ...state,
                isLoading: true,
                data: action.payload
            }
        case getType(getInfoProductAction.getInfoProductFailure):
            return {
                ...state,
                isLoading: true
            }
            break;
        default:
            return state
    }
}