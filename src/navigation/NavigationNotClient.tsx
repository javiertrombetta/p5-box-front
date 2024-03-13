import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginAdmin from '../screens/LoginAdmin';
import HomeGestionarPedido from '../screens/HomeGestionarPedido';
import Paquetes from '../screens/Paquetes';
import AddPackage from '../screens/AddPackage';
import PerfilRepartidor from '../screens/PerfilRepartidor';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import HomeIniciarJornada from '../screens/HomeIniciarJornada';
import ObtenerPaquetes from '../screens/ObtenerPaquetes';
import RepartoEnCurso from '../screens/RepartoEnCurso';
import Repartidores from '../screens/Repartidores';
import DeclaracionJurada from '../screens/DeclaracionJurada';
import ForgotPassword from '../screens/ForgotPassword';

const NavigationClient = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator initialRouteName={'ForgotPassword'}>
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
				name="ForgotPassword"
				component={ForgotPassword}
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

export default NavigationClient;
