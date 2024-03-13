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
		return response.data;
	} catch (error) {
		console.error('Error al loguear usuario:', error);
		throw error;
	}
};

export const handleLogout = async () => {
	const response = await axios.post('http://localhost:3000/api/v1/auth/logout', {
		withCredentials: true,
	});
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

export const handleVerify = async (token: string) => {
	try {
		const response = await axios.post('http://localhost:3000/api/v1/auth/verify-token', token, {
			withCredentials: true,
		});
		console.log('enviado el tokennnnn', response.data);
		return response.data;
	} catch (error) {
		console.log('No se pudo verificar la cuenta');
		throw error;
	}
};

export const handleForgot = async (email: string) => {
	console.log(email, 'este es el email');
	try {
		const response = await axios.post('http://localhost:3000/api/v1/auth/forgot-password', email, {
			withCredentials: true,
		});

		return response.data;
	} catch (error) {
		console.log('No se puedo generar nueva contraseña');
		throw error;
	}
};

export const handleResetPassword = async (passwords: object) => {
	try {
		const response = await axios.post(
			'http://localhost:3000/api/v1/auth/reset-password',
			passwords,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		console.log('No se puedo generar nueva contraseña');
		throw error;
	}
};

//http://localhost:3000/api/v1/auth/verify-token?token=TOKEN_AQUÍ
