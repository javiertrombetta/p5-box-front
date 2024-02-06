import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{
	/* Importaciones Back-Office */
}
// import LoginAdmin from './src/screens/LoginAdmin';
// import HomeGestionarPedido from './src/screens/HomeGestionarPedido';
import Repartidores from './src/screens/Repartidores';
import HomeGestionarPedido from './src/screens/HomeGestionarPedido';
// import Paquetes from './src/screens/Paquetes';
// import AddPackage from './src/screens/AddPackage';
// import PerfilRepartidor from './src/screens/PerfilRepartidor';

{
	/* Importaciones Repartidor */
}
// import Login from './src/screens/Login';
// import CreateAccount from './src/screens/CreateAccount';
// import HomeIniciarJornada from './src/screens/HomeIniciarJornada';
// import ObtenerPaquetes from './src/screens/ObtenerPaquetes';
// import RepartoEnCurso from './src/screens/RepartoEnCurso';

NativeWindStyleSheet.setOutput({
	default: 'native',
});

export default function App() {
	const [loaded] = useFonts({
		SairaRegular: require('./src/assets/fonts/Saira-Regular.ttf'),
		SairaMedium: require('./src/assets/fonts/Saira-Medium.ttf'),
		SairaSemiBold: require('./src/assets/fonts/Saira-SemiBold.ttf'),
		SairaBold: require('./src/assets/fonts/Saira-Bold.ttf'),
		RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
		RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
		RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
	});

	if (!loaded) {
		return <AppLoading />;
	}
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Repartidores"
						component={Repartidores}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="HomeGestionarPedido"
						component={HomeGestionarPedido}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
		</NavigationContainer>
	);
}
