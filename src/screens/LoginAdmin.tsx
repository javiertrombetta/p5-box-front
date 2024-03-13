import { View, Image, Dimensions, Platform } from 'react-native';
import React, { useState } from 'react';

import backgroundI from '../assets/fondoLogin.jpg';
import logo from '../assets/logo.png';

import BackgroundImage from '../assets/FondoLogin.svg';
import LogoFull from '../assets/LogoFull.svg';
import LoginComp from '../components/LoginComp';
import { NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

type RootStackParamList = {
	[key in RouteName]: undefined;
};

enum RouteName {
	HomeIniciarJornada = 'HomeIniciarJornada',
	ObtenerPaquetes = 'ObtenerPaquetes',
	CreateAccount = 'CreateAccount',
	Login = 'Login',
	RepartoEnCurso = 'RepartoEnCurso',
	LoginAdmin = 'LoginAdmin',
	HomeGestionarPedido = 'HomeGestionarPedido',
	Repartidores = 'Repartidores',
	Paquetes = 'Paquetes',
	AddPackage = 'AddPackage',
	PerfilRepartidor = 'PerfilRepartidor',
	DeclaracionJurada = 'DeclaracionJurada',
	ForgotPassword = "ForgotPassword",
	NewPassword = 'NewPassword',
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const LoginAdmin = ({ navigation }: Props) => {
	const [text, setText] = useState('');
	const isWeb = Platform.OS === 'web';

	return (
		<View className="flex flex-col w-full h-full justify-center items-center bg-texto">
			{isWeb ? <Image source={backgroundI} className="w-full h-full" /> : <BackgroundImage />}
			<View
				style={{
					top: 205 * HScale,
					left: 30 * WScale,
					width: 300 * WScale,
					height: 275 * HScale,
					position: 'absolute',
				}}
			>
				<LoginComp navigation={navigation} client={false} />
			</View>

			<View
				style={{ top: 170 * HScale, left: 30 * WScale, width: 204 * WScale, height: 69 * HScale }}
				className="absolute rounded-t-2xl rounded-r-2xl bg-amarilloVerdoso flex-row justify-center items-center"
			>
				{isWeb ? (
					<Image
						style={{ width: scaledSize(184), height: scaledSize(49) }}
						resizeMode="contain"
						source={logo}
					/>
				) : (
					<LogoFull height={49 * HScale} width={184 * WScale} />
				)}
			</View>
		</View>
	);
};

export default LoginAdmin;
