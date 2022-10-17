import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type
}

export const signInAction = createActions({
    signInRequest: undefined,
    signInSuccess: (payload) => payload,
    signInFailure: (err) => err
})