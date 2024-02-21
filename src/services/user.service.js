import axios from "axios";
axios.defaults.withCredentials = true;

export const handleCreateUser = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/register', data);
        console.log('Usuario creado:', response.data);
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
};

export const handleLoginUser = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/login', data);
        console.log('Usuario logueado:', response.data);
    } catch (error) {
        console.error('Error al loguear usuario:', error);
    }
};