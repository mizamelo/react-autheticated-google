import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Type & Action Creator */
const { Types, Creators } = createActions({
  signInRequest: ['data'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Auth:token'),
  token: localStorage.getItem('@Auth:token') || null,
});

/* Reducers */
export const success = (state, { token }) => state.merge({ signedIn: true, token });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
