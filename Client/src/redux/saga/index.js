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
function* handleGetInfoProductAction(action) {
    try {
        const infoProduct = yield call(api.apiGetInfoProduct, action.payload)
        console.log(infoProduct.data);
        yield put(actions.getInfoProductAction.getInfoProductSuccess(infoProduct.data))
    } catch (e) {
        console.log('loi API : ', e);
        yield put(actions.getInfoProductAction.getInfoProductFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.signInAction.signInRequest, handleSignInAction)
    yield takeLatest(actions.signUpAction.signUpRequest, handleSignUpAction)
    yield takeLatest(actions.topSmartphoneAction.topSmartphoneRequest, handleTopSmartphoneAction)
    yield takeLatest(actions.getInfoProductAction.getInfoProductRequest, handleGetInfoProductAction)
}


export default mySaga