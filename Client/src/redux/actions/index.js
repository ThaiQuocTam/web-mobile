import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type
}

export const signInAction = createActions({
    signInRequest: (payload) => payload,
    signInSuccess: (payload) => payload,
    signInFailure: (err) => err
})

export const signUpAction = createActions({
    signUpRequest: (payload) => payload,
    signUpSuccess: (payload) => payload,
    signUpFailure: (err) => err
})

export const topSmartphoneAction = createActions({
    topSmartphoneRequest: (payload) => payload,
    topSmartphoneSuccess: (payload) => payload,
    topSmartphoneFailure: (err) => err
})

export const getOderDetailAction = createActions({
    getOderDetailRequest: (payload) => payload,
    getOderDetailSuccess: (payload) => payload,
    getOderDetailFailure: (err) => err
})

export const getBillAction = createActions({
    getBillRequest: (payload) => payload,
    getBillSuccess: (payload) => payload,
    getBillFailure: (err) => err
})