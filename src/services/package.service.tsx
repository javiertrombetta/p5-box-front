import axios from 'axios';
import Constants from 'expo-constants';
axios.defaults.withCredentials = true;

const EXPO_PUBLIC_BACKEND_URL = Constants.expoConfig?.extra?.backendURL;

export const handleAvailable = async () => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/packages/available`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleDelivered = async () => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/packages/me/delivered`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleDetailsPackage = async (idPackage: string, disponible?: boolean) => {
	let response;
	disponible
		? (response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/packages/at/${idPackage}/available`, {
				withCredentials: true,
		  }))
		: (response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/packages/me/${idPackage}/details`, {
				withCredentials: true,
		  }));
	return response.data;
};

export const handleAddPackage = async (data: object) => {
	try {
		let response = await axios.post(`${EXPO_PUBLIC_BACKEND_URL}/packages/new`, data, {
			withCredentials: true,
		});
		const obj = { ...response.data, message: 'Paquete agregado' };
		return obj;
	} catch (error) {
	}
};
