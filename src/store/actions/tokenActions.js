export const GET_FCM_TOKEN = 'GET_FCM_TOKEN';
export const CLEAR_FCM_TOKEN = 'CLEAR_FCM_TOKEN';

export const getFCMToken = fcmToken => ({
	type: GET_FCM_TOKEN,
	fcmToken,
});

export const clearFCMToken = () => ({
	type: CLEAR_FCM_TOKEN,
});
