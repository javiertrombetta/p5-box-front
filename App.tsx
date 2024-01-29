import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import CircleProgress from './src/components/CircleProgress';

import LoginAdmin from './src/screens/LoginAdmin';
import Login from './src/screens/Login';
import HomeGestionarPedido from './src/screens/HomeGestionarPedido';
import PerfilRepartidor from './src/screens/PerfilRepartidor';
import Repartidores from './src/screens/Repartidores';
import Paquetes from './src/screens/Paquetes';
import AddPackage from './src/screens/AddPackage';
import ObtenerPaquetes from './src/screens/ObtenerPaquetes';
import HomeIniciarJornada from './src/screens/HomeIniciarJornada';

NativeWindStyleSheet.setOutput({
	default: 'native',
});

export default function App() {
	const [loaded] = useFonts({
		SairaRegular: require('./src/assets/fonts/Saira-Regular.ttf'),
		SairaBold: require('./src/assets/fonts/Saira-Bold.ttf'),
		RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
		RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
	});

	if (!loaded) {
		return <AppLoading />;
	}

	return (
		<View className="w-full h-full">
			<LoginAdmin />
			{/* <Login /> */}
			{/* <HomeGestionarPedido/> */}
			{/* <Repartidores /> */}
			{/* <Paquetes /> */}
			{/* <AddPackage /> */}
			{/* <PerfilRepartidor /> */}

			{/* Screens Repartidor */}

			{/* <ObtenerPaquetes /> */}
			{/* <HomeIniciarJornada /> */}
			<StatusBar style="auto" />
		</View>
	);
}
