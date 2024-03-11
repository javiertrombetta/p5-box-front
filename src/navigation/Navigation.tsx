import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{
	/* Importaciones Back-Office */
}
import LoginAdmin from '../screens/LoginAdmin';
import HomeGestionarPedido from '../screens/HomeGestionarPedido';
import Paquetes from '../screens/Paquetes';
import AddPackage from '../screens/AddPackage';
import PerfilRepartidor from '../screens/PerfilRepartidor';

{
	/* Importaciones Repartidor */
}
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import HomeIniciarJornada from '../screens/HomeIniciarJornada';
import ObtenerPaquetes from '../screens/ObtenerPaquetes';
import RepartoEnCurso from '../screens/RepartoEnCurso';
import Repartidores from '../screens/Repartidores';
import DeclaracionJurada from '../screens/DeclaracionJurada';
import { login, store } from '../state/user';
import { handleMeUser } from '../services/user.service';

const Navigation = () => {
	const Stack = createNativeStackNavigator();
	const [user, setUser] = useState({
		_id: '',
		name: '',
		lastname: '',
		email: '',
		roles: [''],
		packages: [''],
		photoUrl: '',
		state: '',
		points: 0,
		__v: 0,
	});
	handleMeUser().then((data: object) => {
		store.dispatch(login(data));
		setUser(store.getState());
	});
	return (
		<Stack.Navigator initialRouteName={user.roles[0] !== 'repartidor' ? 'Login' : 'LoginAdmin'}>
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<Stack.Screen
				name="CreateAccount"
				component={CreateAccount}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="HomeIniciarJornada"
				component={HomeIniciarJornada}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ObtenerPaquetes"
				component={ObtenerPaquetes}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="RepartoEnCurso"
				component={RepartoEnCurso}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DeclaracionJurada"
				component={DeclaracionJurada}
				options={{ headerShown: false }}
			/>
			{/* RootStackParamBackOfficeList */}

			<Stack.Screen name="LoginAdmin" component={LoginAdmin} options={{ headerShown: false }} />
			<Stack.Screen
				name="HomeGestionarPedido"
				component={HomeGestionarPedido}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Repartidores" component={Repartidores} options={{ headerShown: false }} />
			<Stack.Screen name="Paquetes" component={Paquetes} options={{ headerShown: false }} />
			<Stack.Screen name="AddPackage" component={AddPackage} options={{ headerShown: false }} />
			<Stack.Screen
				name="PerfilRepartidor"
				component={PerfilRepartidor}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default Navigation;
