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

export const handleMePackages = async () => {
	const response = await axios.get('http://localhost:3000/api/v1/auth/me/packages', {
		withCredentials: true,
	});
	return response.data;
};

export const handlePackageCancel = async (idPackage: string) => {
	const response = await axios.put(
		`http://localhost:3000/api/v1/auth/me/packages/${idPackage}/cancel`,
		{
			withCredentials: true,
		}
	);
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
