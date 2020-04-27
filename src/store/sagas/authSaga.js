import { call, all, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT } from '../actions/authActions';
import * as appNavigation from '../../utils/appNavigation';

function* loginAsync() {
	yield call(() => appNavigation.navigate('Main'));
}

function* logoutAsync() {
	yield call(() => appNavigation.navigate('Auth'));
}

export default function* watchAuth() {
	yield all([takeLatest(LOGIN, loginAsync), takeLatest(LOGOUT, logoutAsync)]);
}
