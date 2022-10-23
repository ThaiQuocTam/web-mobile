import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from '../actions/actions'
import * as api from '../../API/api'

function* handleGetListProductTypeAction() {
    try {
        const listProductType = yield call(api.apiGetListProductType)
        yield put(actions.getListProductTypeAction.getListProductTypeSuccess(listProductType.data))
    } catch (e) {
        yield put(actions.getListProductTypeAction.getListProductTypeFailure)
    }
}

function* handleGetListProductGroupAction() {
    try {
        const listProductGroup = yield call(api.apiGetListProductGroup)
        yield put(actions.getListProductGroupAction.getListProductGroupSuccess(listProductGroup.data))

    } catch (e) {
        yield put(actions.getListProductGroupAction.getListProductGroupFailure)
    }
}

function* handlePostCreateProductAction(action) {
    try {
        const messageAddProduct = yield call(api.apiPostCreateProduct, action.payload)
        yield put(actions.postCreateProductAction.postCreateProductSuccess(messageAddProduct.data))

    } catch (e) {
        yield put(actions.postCreateProductAction.postCreateProductFailure)
    }
}

function* handleGetProductAction(action) {
    try {
        const listProduct = yield call(api.apiGetProduct)
        yield put(actions.getProductAction.getProductSuccess(listProduct.data))

    } catch (e) {
        yield put(actions.getProductAction.getProductFailure)
    }
}

function* handleGetInfoProductAction(action) {
    try {
        const infoProduct = yield call(api.apiGetInfoProduct, action.payload)
        console.log('Info product : ', infoProduct.data);
        yield put(actions.getInfoProductAction.getInfoProductSuccess(infoProduct.data.data))

    } catch (e) {
        yield put(actions.getInfoProductAction.getInfoProductFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.getListProductTypeAction.getListProductTypeRequest, handleGetListProductTypeAction)
    yield takeLatest(actions.getListProductGroupAction.getListProductGroupRequest, handleGetListProductGroupAction)
    yield takeLatest(actions.postCreateProductAction.postCreateProductRequest, handlePostCreateProductAction)
    yield takeLatest(actions.getProductAction.getProductRequest, handleGetProductAction)
    yield takeLatest(actions.getInfoProductAction.getInfoProductRequest, handleGetInfoProductAction)
}

export default mySaga