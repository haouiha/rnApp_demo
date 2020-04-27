export const GET_DEVICE_LANGUAGE = 'GET_DEVICE_LANGUAGE';
export const GET_WIFI_LIST = 'GET_WIFI_LIST';

export const getDeviceLanguageAction = deviceLanguage => ({
	type: GET_DEVICE_LANGUAGE,
	deviceLanguage,
});

export const getWifiListAction = wifiList => ({
	type: GET_WIFI_LIST,
	wifiList,
});
