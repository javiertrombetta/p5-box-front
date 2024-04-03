import axios from 'axios';
axios.defaults.withCredentials = true;

import { EXPO_PUBLIC_API_URL } from '@env';
const apiURL = EXPO_PUBLIC_API_URL + 'auth/';

export const handleCreateUser = async (data: object) => {
	try {
		const response = await axios.post(`${apiURL}register`, data, {
			withCredentials: true,
		});
		console.log(response, 'solo response');
		console.log(data, 'soloData');
		console.log(response.data, 'esto es response.data');
		console.log('ahora probando si se creo bien el usuairo');
		return response.data;
	} catch (error) {
		console.error('Error al crear usuario:', error);
		throw error;
	}
};

export const handleLoginUser = async (data: object) => {
	try {
		const response = await axios.post(`${apiURL}login`, data, {
			withCredentials: true,
		});
		console.log('Usuario creado:', response.data);
		return response.data;
	} catch (error) {
		console.error('Error al loguear usuario:', error);
		throw error;
	}
};

export const handleLogout = async () => {
	const response = await axios.post(`${apiURL}logout`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleMeUser = async () => {
	const response = await axios.get(`${apiURL}me`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleConditions = async (data: object) => {
	try {
		const response = await axios.put(`${apiURL}me/packages`, data, {
			withCredentials: true,
		});
		if (response.data.message === 'Se cerró la sesión debido a la declaración jurada registrada.') {
			window.location.reload();
		}
		return response.data;
	} catch (error) {
		console.error('Error al procesar la declaración:', error);
		throw error;
	}
};

export const handleForgot = async (email: string) => {
	try {
		const response = await axios.post(
			`${apiURL}forgot-password`,
			{ email },
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const handleVerify = async (token: string) => {
	try {
		const response = await axios.get(`${apiURL}verify-token?token=${token}`, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const handleResetPassword = async (password: object) => {
	try {
		const response = await axios.post(`${apiURL}reset-password`, password, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const handleMePackages = async () => {
	const response = await axios.get(`${apiURL}me/packages`, {
		withCredentials: true,
	});
	return response.data;
};

export const handlePackageCancel = async (idPackage: string) => {
	const response = await axios.put(`${apiURL}me/packages/${idPackage}/cancel`, {
		withCredentials: true,
	});

	return response.data;
};

export const handleIniciarPackage = async (idPackage: string) => {
	const response = await axios.put(`${apiURL}me/packages/${idPackage}`, {
		withCredentials: true,
	});
	console.log(response.data, 'PACKAGE');
	return response.data;
};

export const handleFinishPackage = async (idPackage: string) => {
	const response = await axios.put(`${apiURL}me/packages/${idPackage}/finish`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleUserId = async (userId: string) => {
	const response = await axios.get(`${apiURL}users/${userId}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleUserPackage = async (userId: string) => {
	const response = await axios.get(`http://localhost:3000/api/v1/auth/users/${userId}/packages`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleToggleState = async (uuidUser: string) => {
	const response = await axios.put(`${apiURL}users/${uuidUser}/state`, {
		withCredentials: true,
	});
	return response.data;
};
