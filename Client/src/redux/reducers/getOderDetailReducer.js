import { getType, getOderDetailAction } from "redux/actions";
import { INIT_STATE_ODERDETAIL } from "redux/constants/constants";

export default function getOderDetailReducer(state = INIT_STATE_ODERDETAIL, action) {
    switch (action.type) {
        case getType(getOderDetailAction.getOderDetailRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getOderDetailAction.getOderDetailSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getOderDetailAction.getOderDetailFailure):
            return {
                ...state,
                isLoading: false
            }
            break;
        default:
            return state
    }
}