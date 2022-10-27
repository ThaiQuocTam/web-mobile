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

function* handleTopSmartphoneAction() {
    try {
        const getTopSmartphone = yield call(api.apiTopSmartphone)
        yield put(actions.topSmartphoneAction.topSmartphoneSuccess(getTopSmartphone.data))
    } catch (e) {
        console.log('loi API : ', e);
        yield put(actions.topSmartphoneAction.topSmartphoneFailure)
    }
}

function* handleGetBillAction(action) {
    try {
        const getInfoBill = yield call(api.apiGetBill,action.payload)
        console.log('info bill', getInfoBill.data);   
        yield put(actions.getBillAction.getBillSuccess(getInfoBill.data))
    } catch (e) {
        console.log('loi API : ', e);
        yield put(actions.getBillAction.getBillFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.signInAction.signInRequest, handleSignInAction)
    yield takeLatest(actions.signUpAction.signUpRequest, handleSignUpAction)
    yield takeLatest(actions.topSmartphoneAction.topSmartphoneRequest, handleTopSmartphoneAction)
    yield takeLatest(actions.getBillAction.getBillRequest, handleGetBillAction)
}



export default mySaga