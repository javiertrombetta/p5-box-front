import React, { useEffect, useState } from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation/NavigationClient';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { login, store } from './src/state/user';
import { handleMeUser } from './src/services/user.service';
import NavigationClient from './src/navigation/NavigationClient';
import NavigationNotClient from './src/navigation/NavigationNotClient';
import Progress from './src/screens/Progress';
import { format } from 'date-fns';

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
	const [progress, setProgress] = useState(false);

	if (!loaded) {
		return <AppLoading />;
	}

	let user = store.getState();

	handleMeUser()
		.then((data: object) => {
			store.dispatch(
				login({
					...data,
					back: '',
					packageSelect: '',
					paquetesObtenidos: [],
					date: format(new Date(), 'yyyy/MM/dd'),
				})
			);
			user = store.getState();
		})
		.then(() => {
			setProgress(true);
		})
		.catch(() => setProgress(true));
	let rol = user && user?.roles[0];
	return (
		<Provider store={store}>
			{!progress ? (
				<Progress />
			) : (
				<NavigationContainer>
					{user._id.length > 0 && rol ? <NavigationClient /> : <NavigationNotClient />}
				</NavigationContainer>
			)}
		</Provider>
	);
}
