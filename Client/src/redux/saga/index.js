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
        console.log('API signUp : ', post.data)
    } catch (e) {
        console.log('loi API : ', post);
        yield put(actions.signUpAction.signInFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.signInAction.signInRequest, handleSignInAction)
    yield takeLatest(actions.signUpAction.signUpRequest, handleSignUpAction)
}

export default mySaga