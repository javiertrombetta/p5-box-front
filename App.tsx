import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import CircleProgress from './src/components/CircleProgress';

{/* Importacionres Back-Office */}
import LoginAdmin from './src/screens/Login';
import HomeGestionarPedido from './src/screens/HomeGestionarPedido';
import Repartidores from './src/screens/Repartidores';
import Paquetes from './src/screens/Paquetes';
import AddPackage from './src/screens/AddPackage';
import PerfilRepartidor from './src/screens/PerfilRepartidor';

{/* Importacionres Repartidor */}
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import HomeIniciarJornada from './src/screens/HomeIniciarJornada';
import ObtenerPaquetes from './src/screens/ObtenerPaquetes';
import RepartoEnCurso from './src/screens/RepartoEnCurso';

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

			{/* Screens Back-Office */}
			{/* <LoginAdmin /> */}
			{/* <HomeGestionarPedido /> */}				
			{/* <Repartidores /> */}
			{/* <Paquetes/> */}
			{/* <AddPackage /> */}
			{/* <PerfilRepartidor /> */}

			{/* Screens Repartidor */}
			{/* <Login /> */}
			{/* <CreateAccount /> */}			
			{/* <HomeIniciarJornada /> */}
			{/* <ObtenerPaquetes /> */}
			{/* <RepartoEnCurso /> */}

			<StatusBar style="auto" />
		</View>
	);
}
