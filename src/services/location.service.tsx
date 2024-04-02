import axios from 'axios';
axios.defaults.withCredentials = true;

export const getRouteData = async (idPackage: string) => {
	const response = await axios.get(`http://localhost:3000/api/v1/locations/package/${idPackage}`, {
		withCredentials: true,
	});
	return response.data;
};