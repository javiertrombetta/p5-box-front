import axios from 'axios';
import Constants from 'expo-constants';
axios.defaults.withCredentials = true;

const EXPO_PUBLIC_BACKEND_URL = Constants.expoConfig?.extra?.backendURL;

export const handleCreateUser = async (data: object) => {
	try {
		const response = await axios.post(`${EXPO_PUBLIC_BACKEND_URL}/auth/register`, data, {
			withCredentials: true,
		});		
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const handleLoginUser = async (data: object) => {
	try {
		const response = await axios.post(`${EXPO_PUBLIC_BACKEND_URL}/auth/login`, data, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const handleLogout = async () => {
	const response = await axios.post(`${EXPO_PUBLIC_BACKEND_URL}/auth/logout`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleMeUser = async () => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/auth/me`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleConditions = async (data: object) => {
	try {
		const response = await axios.put(`${EXPO_PUBLIC_BACKEND_URL}/auth/me/packages`, data, {
			withCredentials: true,
		});
		if (response.data.message === 'Se cerró la sesión debido a la declaración jurada registrada.') {
			window.location.reload();
		}
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const handleForgot = async (email: string) => {
	try {
		const response = await axios.post(
			`${EXPO_PUBLIC_BACKEND_URL}/auth/forgot-password`,
			{ email },
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const handleVerify = async (token: string) => {
	try {
		const response = await axios.get(
			`${EXPO_PUBLIC_BACKEND_URL}/auth/verify-token?token=${token}`,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const handleResetPassword = async (password: object) => {
	try {
		const response = await axios.post(`${EXPO_PUBLIC_BACKEND_URL}/auth/reset-password`, password, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const handleMePackages = async () => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/auth/me/packages`, {
		withCredentials: true,
	});
	return response.data;
};

export const handlePackageCancel = async (idPackage: string) => {
	const response = await axios.put(
		`${EXPO_PUBLIC_BACKEND_URL}/auth/me/packages/${idPackage}/cancel`,
		{
			withCredentials: true,
		}
	);

	return response.data;
};

export const handleIniciarPackage = async (idPackage: string) => {
	const response = await axios.put(`${EXPO_PUBLIC_BACKEND_URL}/auth/me/packages/${idPackage}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleFinishPackage = async (idPackage: string) => {
	const response = await axios.put(
		`${EXPO_PUBLIC_BACKEND_URL}/auth/me/packages/${idPackage}/finish`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handleUserId = async (userId: string) => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/auth/users/${userId}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleUserPackage = async (userId: string) => {
	const response = await axios.get(`${EXPO_PUBLIC_BACKEND_URL}/auth/users/${userId}/packages`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleToggleState = async (uuidUser: string) => {
	const response = await axios.put(`${EXPO_PUBLIC_BACKEND_URL}/auth/users/${uuidUser}/state`, {
		withCredentials: true,
	});
	return response.data;
};
