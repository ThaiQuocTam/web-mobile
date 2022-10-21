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


