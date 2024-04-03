import axios from 'axios';
axios.defaults.withCredentials = true;

import { EXPO_PUBLIC_API_URL } from '@env';
const apiURL = EXPO_PUBLIC_API_URL + 'reports/';

export const handleActiveDeliveryman = async (year: string, month: string, day: string) => {
	const response = await axios.get(`${apiURL}deliveryman/state/totals/${year}/${month}/${day}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleTotalDeliveryman = async (year: string, month: string, day: string) => {
	try {
		const response = await axios.get(`${apiURL}deliveryman/state/details/${year}/${month}/${day}`, {
			withCredentials: true,
		});
		return response.data;
	} catch {}
};

export const handleDeliverymanDelivery = async (
	year: string,
	month: string,
	day: string | number,
	deliveryManId: string
) => {
	const response = await axios.get(
		`${apiURL}deliveryman/delivery/${year}/${month}/${day}?deliverymanId=${deliveryManId}`,
		{
			withCredentials: true,
		}
	);
	console.log(response);
	if (response.status === 404) {
		return null;
	}
	return response.data;
};

export const handlePackagesTotal = async (year: string, month: string, day: string | number) => {
	const response = await axios.get(`${apiURL}packages/all/${year}/${month}/${day}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handlePackagesDelivered = async (year: string, month: string, day: string) => {
	const response = await axios.get(`${apiURL}packages/delivered/${year}/${month}/${day}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handlePackagesDeliveredUser = async (userId: string) => {
	const response = await axios.get(`${apiURL}packages/delivered?userId=${userId}`, {
		withCredentials: true,
	});
	return response.data;
};
