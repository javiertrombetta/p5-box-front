import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleCreateUser = async (data) => {
	try {
		const response = await axios.post('http://localhost:3000/api/v1/auth/register', data, {
			withCredentials: true,
		});
		console.log('Usuario creado:', response.data);
		return response.data;
	} catch (error) {
		console.error('Error al crear usuario:', error);
		throw error;
	}
};

export const handleLoginUser = async (data) => {
	try {
		const response = await axios.post('http://localhost:3000/api/v1/auth/login', data, {
			withCredentials: true,
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('Error al loguear usuario:', error);
		throw error;
	}
};

export const handleMeUser = async () => {
	console.log("pre response me")
	const response = await axios.get('http://localhost:3000/api/v1/auth/me', {withCredentials: true})
	return response.data;
}