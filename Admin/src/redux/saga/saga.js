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
        console.log('Message : ', messageAddProduct);
        // yield put(actions.getListProductGroupAction.getListProductGroupSuccess(listProductGroup.data))

    } catch (e) {
        yield put(actions.postCreateProductAction.postCreateProductFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.getListProductTypeAction.getListProductTypeRequest, handleGetListProductTypeAction)
    yield takeLatest(actions.getListProductGroupAction.getListProductGroupRequest, handleGetListProductGroupAction)
    yield takeLatest(actions.postCreateProductAction.postCreateProductRequest, handlePostCreateProductAction)
}

export default mySaga