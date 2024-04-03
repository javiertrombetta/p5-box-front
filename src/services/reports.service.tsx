import axios from 'axios';
import Constants from 'expo-constants';
axios.defaults.withCredentials = true;

const EXPO_PUBLIC_BACKEND_URL = Constants.expoConfig?.extra?.backendURL;

export const handleActiveDeliveryman = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`${EXPO_PUBLIC_BACKEND_URL}/reports/deliveryman/state/totals/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handleTotalDeliveryman = async (year: string, month: string, day: string) => {
	try {
		const response = await axios.get(
			`${EXPO_PUBLIC_BACKEND_URL}/reports/deliveryman/state/details/${year}/${month}/${day}`,
			{
				withCredentials: true,
			}
		);
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
		`${EXPO_PUBLIC_BACKEND_URL}/reports/deliveryman/delivery/${year}/${month}/${day}?deliverymanId=${deliveryManId}`,
		{
			withCredentials: true,
		}
	);
	if (response.status === 404) {
		return null;
	}
	return response.data;
};

export const handlePackagesTotal = async (year: string, month: string, day: string | number) => {
	const response = await axios.get(
		`${EXPO_PUBLIC_BACKEND_URL}/reports/packages/all/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handlePackagesDelivered = async (year: string, month: string, day: string) => {
	const response = await axios.get(
		`${EXPO_PUBLIC_BACKEND_URL}/reports/packages/delivered/${year}/${month}/${day}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handlePackagesDeliveredUser = async (userId: string) => {
	const response = await axios.get(
		`${EXPO_PUBLIC_BACKEND_URL}/reports/packages/delivered?userId=${userId}`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};
