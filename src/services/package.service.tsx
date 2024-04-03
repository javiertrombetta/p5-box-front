import axios from 'axios';
axios.defaults.withCredentials = true;

import { EXPO_PUBLIC_API_URL } from '@env';
const apiURL = EXPO_PUBLIC_API_URL + 'packages/';

export const handleAvailable = async () => {
	const response = await axios.get(`${apiURL}available'`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleDelivered = async () => {
	const response = await axios.get(`${apiURL}me/delivered`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleDetailsPackage = async (idPackage: string, disponible?: boolean) => {
	let response;
	disponible
		? (response = await axios.get(`${apiURL}at/${idPackage}/available`, {
				withCredentials: true,
		  }))
		: (response = await axios.get(`${apiURL}me/${idPackage}/details`, {
				withCredentials: true,
		  }));
	return response.data;
};

export const handleAddPackage = async (data: object) => {
	try {
		let response = await axios.post(`${apiURL}new`, data, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
