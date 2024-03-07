import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleAvailable = async () => {
	const response = await axios.get('http://localhost:3000/api/v1/packages/available', {
		withCredentials: true,
	});
	// console.log(response.data);
	return response.data;
};
