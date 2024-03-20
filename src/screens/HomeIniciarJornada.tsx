import React, { useEffect, useState } from 'react';
import { View, Dimensions, Platform } from 'react-native';
import Header from '../components/Header';
import { NavigationProp } from '@react-navigation/native';
import Button from '../components/Button';
import { handleDelivered } from '../services/package.service';
import { handleMePackages } from '../services/user.service';
import { login, store } from '../state/user';
import { useSelector } from 'react-redux';
import ListPendingsRepartidor from '../components/ListPendingsRepartidor';
import ListRepartosRepartidor from '../components/ListRepartosRepartidor';

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
	ForgotPassword = 'ForgotPassword',
	NewPassword = 'NewPassword',
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const HomeIniciarJornada = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />

			<ListPendingsRepartidor navigation={navigation} />
			<ListRepartosRepartidor navigation={navigation} />

			<View style={{ marginTop: 24 * HScale }} className="flex justify-center items-center">
				<Button
					content="OBTENER PAQUETES"
					height={28}
					width={270}
					spec="texto"
					navigation={navigation}
					navigate={RouteName.ObtenerPaquetes}
				/>
			</View>
		</View>
	);
};

export default HomeIniciarJornada;
