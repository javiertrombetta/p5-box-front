import React, { useEffect } from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { login, store } from './src/state/user';
import { handleMeUser } from './src/services/user.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

	handleMeUser().then((data: object) => {
		console.log(data);
		store.dispatch(login({ ...data, back: '', packageSelect: '', paquetesObtenidos: [] }));
		// const user = store.getState();
		// AsyncStorage.setItem('client', user._id);
	});

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		</Provider>
	);
}
