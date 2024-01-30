import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import CircleProgress from './src/components/CircleProgress';

import Login from './src/screens/Login';
import LoginAdmin from './src/screens/Login';
import HomeGestionarPedido from './src/screens/HomeGestionarPedido';
import PerfilRepartidor from './src/screens/PerfilRepartidor';
import Repartidores from './src/screens/Repartidores';
import Paquetes from './src/screens/Paquetes';
import AddPackage from './src/screens/AddPackage';
import ObtenerPaquetes from './src/screens/ObtenerPaquetes';
import HomeIniciarJornada from './src/screens/HomeIniciarJornada';
import RepartoEnCurso from './src/screens/RepartoEnCurso';
import CreateAccount from './src/screens/CreateAccount';

NativeWindStyleSheet.setOutput({
	default: 'native',
});

export default function App() {
	const [loaded] = useFonts({
		SairaRegular: require('./src/assets/fonts/Saira-Regular.ttf'),
		SairaMedium: require('./src/assets/fonts/Saira-Medium.ttf'),
		SairaSemiBold: require('./src/assets/fonts/Saira-SemiBold.ttf'),
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
			{/* <Login /> */}
			{/* <LoginAdmin /> */}
			{/* <CreateAccount /> */}
			{/* <HomeGestionarPedido /> */}
			{/* <RepartoEnCurso /> */}
			{/* <Repartidores /> */}
			<Paquetes/>
			{/* <AddPackage /> */}
			{/* <PerfilRepartidor /> */}
			{/* Screens Repartidor */}
			{/* <ObtenerPaquetes /> */}
			{/* <HomeIniciarJornada /> */}
			<StatusBar style="auto" />
		</View>
	);
}
