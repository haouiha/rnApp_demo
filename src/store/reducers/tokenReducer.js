import { GET_FCM_TOKEN, CLEAR_FCM_TOKEN } from '../actions/tokenActions';

const initialState = {
	fcmToken: '',
};

const tokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FCM_TOKEN:
			return { ...state, fcmToken: action.fcmToken };
		case CLEAR_FCM_TOKEN:
			return { ...state, fcmToken: '' };

		default:
			return state;
	}
};

export default tokenReducer;
