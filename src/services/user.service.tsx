import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleCreateUser = async (data: object) => {
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

export const handleLoginUser = async (data: object) => {
	try {
		const response = await axios.post('http://localhost:3000/api/v1/auth/login', data, {
			withCredentials: true,
		});
		console.log('Usuario creado:', response.data);
		return response.data;
	} catch (error) {
		console.error('Error al loguear usuario:', error);
		throw error;
	}
};

export const handleMeUser = async () => {
	const response = await axios.get('http://localhost:3000/api/v1/auth/me', {
		withCredentials: true,
	});
	return response.data;
};

export const handleConditions = async (data: object) => {
	try {
		const response = await axios.post(
			'http://localhost:3000/api/v1/auth/me/packages',
			{
				...data,
				packages: ['fa453ddb-52ac-46a7-9c87-2e96538ec8c2'],
			},
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error al procesar la declaración:', error);
		throw error;
	}
};
