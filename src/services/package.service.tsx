import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleAvailable = async () => {
	const response = await axios.get('http://localhost:3000/api/v1/packages/available', {
		withCredentials: true,
	});
	return response.data;
};

export const handleDelivered = async () => {
	const response = await axios.get('http://localhost:3000/api/v1/packages/me/delivered', {
		withCredentials: true,
	});
	return response.data;
};
