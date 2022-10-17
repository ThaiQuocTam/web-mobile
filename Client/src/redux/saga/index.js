import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions'
import * as api from '../../Api'

function* handleSignInAction(actions) {
    const post = yield call(api.apiSignIn)
    console.log('API : ', post);
}

function* mySaga() {
    yield takeLatest(actions.signInAction.signInRequest, handleSignInAction)
}

export default mySaga