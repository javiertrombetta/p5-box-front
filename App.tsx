import React from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

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
			<Navigation />
		</NavigationContainer>
	);
}
