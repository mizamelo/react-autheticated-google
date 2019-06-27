import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import AuthActions from '../ducks/auth';

export function* signIn({ data }) {
  try {
    localStorage.setItem('@Auth:token', data.tokenId);

    yield put(AuthActions.signInSuccess(data.tokenId));
    yield put(push('/'));
  } catch (error) {
    console.log(error);
  }
}
