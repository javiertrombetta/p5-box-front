import axios from 'axios';
axios.defaults.withCredentials = true;

export const handleCreateUser = async (data: object) => {
	try {
		const response = await axios.post('http://localhost:3000/api/v1/auth/register', data, {
			withCredentials: true,
		});
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
		console.log(data);
		const response = await axios.put('http://localhost:3000/api/v1/auth/me/packages', data, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error('Error al procesar la declaración:', error);
		throw error;
	}
};

export const handleForgot = async (email: string) => {
	try {
		const response = await axios.post(
			'http://localhost:3000/api/v1/auth/forgot-password',
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
		const response = await axios.get(
			`http://localhost:3000/api/v1/auth/verify-token?token=${token}`,
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

export const handleResetPassword = async (password: object) => {
	try {
		const response = await axios.post(
			'http://localhost:3000/api/v1/auth/reset-password',
			password,
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

export const handleMePackages = async () => {
	const response = await axios.get('http://localhost:3000/api/v1/auth/me/packages', {
		withCredentials: true,
	});
	return response.data;
};

export const handlePackageCancel = async (idPackage: string) => {
	console.log(idPackage, 'Estas llegando???');
	const response = await axios.put(
		`http://localhost:3000/api/v1/auth/me/packages/${idPackage}/cancel`,
		{
			withCredentials: true,
		}
	);
	console.log('Te cancelo');
	return response.data;
};

export const handleIniciarPackage = async (idPackage: string) => {
	const response = await axios.put(`http://localhost:3000/api/v1/auth/me/packages/${idPackage}`, {
		withCredentials: true,
	});
	return response.data;
};

export const handleFinishPackage = async (idPackage: string) => {
	const response = await axios.put(
		`http://localhost:3000/api/v1/auth/me/packages/${idPackage}/finish`,
		{
			withCredentials: true,
		}
	);
	return response.data;
};

export const handleUserId = async (userId: string) => {
	const response = await axios.get(`http://localhost:3000/api/v1/auth/users/${userId}`, {
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
	const response = await axios.put(`http://localhost:3000/api/v1/auth/users/${uuidUser}/state`, {
		withCredentials: true,
	});
	return response.data;
};
