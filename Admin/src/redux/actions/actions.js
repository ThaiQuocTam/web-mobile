import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type
}

export const getListProductTypeAction = createActions({
    getListProductTypeRequest: (payload) => payload,
    getListProductTypeSuccess: (payload) => payload,
    getListProductTypeFailure: (err) => err
})

export const getListProductGroupAction = createActions({
    getListProductGroupRequest: (payload) => payload,
    getListProductGroupSuccess: (payload) => payload,
    getListProductGroupFailure: (err) => err
})

export const postCreateProductAction = createActions({
    postCreateProductRequest: (payload) => payload,
    postCreateProductSuccess: (payload) => payload,
    postCreateProductFailure: (err) => err
})

export const getProductAction = createActions({
    getProductRequest: (payload) => payload,
    getProductSuccess: (payload) => payload,
    getProductFailure: (err) => err
})

export const getInfoProductAction = createActions({
    getInfoProductRequest: (payload) => payload,
    getInfoProductSuccess: (payload) => payload,
    getInfoProductFailure: (err) => err
})

export const postEditInfoProductAction = createActions({
    postEditInfoProductRequest: (payload) => payload,
    postEditInfoProductSuccess: (payload) => payload,
    postEditInfoProductFailure: (err) => err
})

export const postAddProductDetailAction = createActions({
    postAddProductDetailRequest: (payload) => payload,
    postAddProductDetailSuccess: (payload) => payload,
    postAddProductDetailFailure: (err) => err
})

export const getInfoProductDetailAction = createActions({
    getInfoProductDetailRequest: (payload) => payload,
    getInfoProductDetailSuccess: (payload) => payload,
    getInfoProductDetailFailure: (err) => err
})


