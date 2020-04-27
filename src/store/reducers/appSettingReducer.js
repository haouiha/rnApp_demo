import { GET_DEVICE_LANGUAGE, GET_WIFI_LIST } from '../actions/appSettingAction';

const initState = {
	deviceLanguage: 'en',
	wifiList: [],
};

const appSettingReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_DEVICE_LANGUAGE:
			return { ...state, deviceLanguage: action.deviceLanguage };
		case GET_WIFI_LIST:
			return { ...state, wifiList: action.wifiList };
		default:
			return state;
	}
};

export default appSettingReducer;
