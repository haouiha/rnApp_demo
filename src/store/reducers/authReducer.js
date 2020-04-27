import { LOGIN, LOGOUT } from '../actions/authActions';

const initialState = {
	isLogin: true,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isLogin: true };
		case LOGOUT:
			return { ...state, isLogin: false };

		default:
			return state;
	}
};

export default authReducer;
