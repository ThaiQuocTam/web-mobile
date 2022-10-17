import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions'
import * as api from '../../Api'

function* handleSignInAction(action) {
    try {
        const post = yield call(api.apiSignIn, action.payload)
        console.log('APIs : ', post.data);
        yield put(actions.signInAction.signInSuccess(post.data))
    } catch (e) {
        console.log('loi API : ', post);
        yield put(actions.signInAction.signInFailure)
    }
}

function* mySaga() {
    yield takeLatest(actions.signInAction.signInRequest, handleSignInAction)
}

export default mySaga