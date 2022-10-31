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

export const getInfoProductAction = createActions({
    getInfoProductRequest: (payload) => payload,
    getInfoProductSuccess: (payload) => payload,
    getInfoProductFailure: (err) => err
})

export const getListSmartphoneAction = createActions({
    getListSmartphoneRequest: (payload) => payload,
    getListSmartphoneSuccess: (payload) => payload,
    getListSmartphoneFailure: (err) => err
})

export const getListTopTabletAction = createActions({
    getListTopTabletRequest: (payload) => payload,
    getListTopTabletSuccess: (payload) => payload,
    getListTopTabletFailure: (err) => err
})

export const getInfoUserAction = createActions({
    getInfoUserRequest: (payload) => payload,
    getInfoUserSuccess: (payload) => payload,
    getInfoUserFailure: (err) => err
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

export const getListProductGroupAction = createActions({
    getListProductGroupRequest: (payload) => payload,
    getListProductGroupSuccess: (payload) => payload,
    getListProductGroupFailure: (err) => err
})