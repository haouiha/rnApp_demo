import { fork, all } from 'redux-saga/effects';

import watchAuth from './authSaga';

export default function* rootSagas() {
	yield all([fork(watchAuth)]);
}
