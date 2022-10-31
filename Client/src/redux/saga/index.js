import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from '../actions'
import * as api from '../../Api'

function* handleSignInAction(action) {
    try {
        const post = yield call(api.apiSignIn, action.payload)
        yield put(actions.signInAction.signInSuccess(post.data))
    } catch (e) {
        yield put(actions.signInAction.signInFailure)
    }
}

function* handleSignUpAction(action) {
    try {
        const post = yield call(api.apiSignUp, action.payload)
        yield put(actions.signUpAction.signUpSuccess(post.data))
    } catch (e) {
        yield put(actions.signUpAction.signInFailure)
    }
}

function* handleTopSmartphoneAction(action) {
    try {
        const getTopSmartphone = yield call(api.apiTopSmartphone, action.payload)
        yield put(actions.topSmartphoneAction.topSmartphoneSuccess(getTopSmartphone.data))
    } catch (e) {
        console.log(e);
        yield put(actions.topSmartphoneAction.topSmartphoneFailure)
    }
}

function* handleGetInfoProductAction(action) {
    try {
        const infoProduct = yield call(api.apiGetInfoProduct, action.payload)
        yield put(actions.getInfoProductAction.getInfoProductSuccess(infoProduct.data))
    } catch (e) {
        yield put(actions.getInfoProductAction.getInfoProductFailure)
    }
}

function* handleGetListSmartphoneAction(action) {
    try {
        const listSmartphone = yield call(api.apiGetListSmartphone, action.payload)
        yield put(actions.getListSmartphoneAction.getListSmartphoneSuccess(listSmartphone.data))
    } catch (e) {
        yield put(actions.getListSmartphoneAction.getListSmartphoneFailure)
    }
}


function* handleGetListTopTabletAction(action) {
    try {
        const listTablet = yield call(api.apiTopSmartphone, action.payload)
        yield put(actions.getListTopTabletAction.getListTopTabletSuccess(listTablet.data))
    } catch (e) {
        yield put(actions.getListTopTabletAction.getListTopTabletFailure)
    }
}

function* handleGetInfoUserAction(action) {
    try {
        const infoUser = yield call(api.apiGetInfoUser, action.payload)
        yield put(actions.getInfoUserAction.getInfoUserSuccess(infoUser.data))
    } catch (e) {
        yield put(actions.getInfoUserAction.getInfoUserFailure)
    }
}

function* handleGetBillAction(action) {
    try {
        const getInfoBill = yield call(api.apiGetBill, action.payload)
        yield put(actions.getBillAction.getBillSuccess(getInfoBill.data))
    } catch (e) {
        console.log('loi API : ', e);
        yield put(actions.getBillAction.getBillFailure)
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

function* handlePostPaymentAction(action) {
    try {
        const messagePayment = yield call(api.apiPostPayment, action.payload)
        console.log(messagePayment.data);
        // yield put(actions.getListProductGroupAction.getListProductGroupSuccess(listProductGroup.data))

    } catch (e) {
        // yield put(actions.getListProductGroupAction.getListProductGroupFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.signInAction.signInRequest, handleSignInAction)
    yield takeLatest(actions.signUpAction.signUpRequest, handleSignUpAction)
    yield takeLatest(actions.topSmartphoneAction.topSmartphoneRequest, handleTopSmartphoneAction)
    yield takeLatest(actions.getInfoProductAction.getInfoProductRequest, handleGetInfoProductAction)
    yield takeLatest(actions.getListSmartphoneAction.getListSmartphoneRequest, handleGetListSmartphoneAction)
    yield takeLatest(actions.getListTopTabletAction.getListTopTabletRequest, handleGetListTopTabletAction)
    yield takeLatest(actions.getInfoUserAction.getInfoUserRequest, handleGetInfoUserAction)
    yield takeLatest(actions.getBillAction.getBillRequest, handleGetBillAction)
    yield takeLatest(actions.getListProductGroupAction.getListProductGroupRequest, handleGetListProductGroupAction)
    yield takeLatest(actions.postPaymentAction.postPaymentRequest, handlePostPaymentAction)
}


export default mySaga