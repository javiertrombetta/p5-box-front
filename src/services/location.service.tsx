import axios from 'axios';
import Constants from 'expo-constants';
axios.defaults.withCredentials = true;

const EXPO_PUBLIC_BACKEND_URL = Constants.expoConfig?.extra?.backendURL;

export const getRouteData = async (idPackage: string) => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/locations/package/${idPackage}`, {
		withCredentials: true,
	});
	return response.data;
};