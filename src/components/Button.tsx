'use client';
import { View, Text, Pressable, Dimensions, Platform } from 'react-native';
import React from 'react';
import Sum from '../assets/Sum.svg';
import { NavigationProp } from '@react-navigation/native';
import {
	handleConditions,
	handleCreateUser,
	handleForgot,
	handleVerify,
	handleFinishPackage,
	handleLoginUser,
	handleLogout,
	handleMeUser,
	handlePackageCancel,
} from '../services/user.service';
import { Image } from 'react-native';
import ArrowLeft from '../assets/ArrowLeft.svg';
import leftArrow from '../assets/arrow-left.png';
import { login, store } from '../state/user';
import { handleIniciarPackage } from '../services/user.service';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface ButtonProps {
	height: number;
	width: number;
	spec: string;
	content: string;
	navigate: RouteName;
	svg?: boolean;
	borderR?: number;
	data?: object;
	action?: string;
	arrowLeft?: boolean;
	navigation: NavigationProp<RootStackParamList>;
	id?: string;
}

const texto = '#24424D';
const amarilloVerdoso = '#CEF169';

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

type User = {
	_id: '';
	name: '';
	lastname: '';
	email: '';
	roles: [''];
	packages: [''];
	photoUrl: '';
	state: '';
	points: 0;
	__v: 0;
	back: '';
	packageSelect: '';
};

const Button = ({
	spec,
	content,
	svg,
	borderR,
	data,
	action,
	navigate,
	navigation,
	height,
	width,
	arrowLeft,
	id,
}: ButtonProps) => {
	const isWeb = Platform.OS === 'web';
	let user = useSelector((state) => state) as User;
	const handleNavigation = () => {
		if (navigate && navigation) {
			navigation.navigate(navigate);
		}
	};
	const handleNavigationRol = () => {
		let user = store.getState();
		if (user.name) {
			user.roles[0] === 'repartidor'
				? navigation.navigate(RouteName.HomeIniciarJornada)
				: user.roles[0] === 'administrador'
				? navigation.navigate(RouteName.HomeGestionarPedido)
				: console.log('error');
		}
	};
	const handleBack = () => {
		navigate && navigation.navigate(navigate);
	};
	return (
		<View style={{ height: height * HScale, width: width * WScale }}>
			{action && navigate && (
				<Pressable
					onPress={async () => {
						if (action === 'postR' && data) {
							await handleCreateUser(data);
							try {
								navigation.navigate(RouteName.Login);
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'postL' && data) {
							await handleLoginUser(data);
							try {
								await handleMeUser().then((data: object) => {
									data = { ...data, back: '', packageSelect: '', paquetesObtenidos: [] };
									store.dispatch(login(data));
								});
								handleNavigationRol();
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'postC' && data) {
							try {
								await handleConditions(data);
								store.dispatch(login({ ...user, back: undefined }));
								navigation.navigate(RouteName.HomeIniciarJornada);
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'postCS') {
							try {
								await handleLogout();
								navigation.navigate(RouteName.Login);
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'postI' && id) {
							try {
								await handleIniciarPackage(id);
								store.dispatch(login({ ...user, back: 'en curso', packageSelect: id }));
								navigation.navigate(RouteName.RepartoEnCurso);
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'putFinalizar' && id) {
							try {
								await handleFinishPackage(id);
								store.dispatch(login({ ...user, back: undefined }));
								navigation.navigate(RouteName.HomeIniciarJornada);
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'postCancelPackage' && id) {
							try {
								await handlePackageCancel(id);
								store.dispatch(login({ ...user, back: undefined }));
								navigation.navigate(RouteName.HomeIniciarJornada);
							} catch (error) {
								console.error(error);
							}
						} else if (action === 'pushPackages' && data) {
							try {
								store.dispatch(
									login({ ...user, paquetesObtenidos: data, back: 'obtenerPaquetes' })
								);
								navigation.navigate(RouteName.DeclaracionJurada);
							} catch (error) {
								console.error(error);
							}
						}
					}}
					style={({ pressed }) => [
						spec === 'texto' && {
							backgroundColor: pressed ? 'rgb(22 41 48)' : texto,
						},
						spec === 'blanco' && {
							backgroundColor: pressed ? 'rgb(231 231 231)' : 'transparent',
							borderColor: texto,
							borderWidth: 1,
						},
						borderR
							? {
									borderRadius: borderR,
							  }
							: {
									borderRadius: 8,
							  },
						{
							width: '100%',
							height: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 8,
						},
					]}
				>
					<Text
						style={{
							fontSize: scaledSize(12),
							...(spec === 'texto' ? { color: amarilloVerdoso } : { color: texto }),
						}}
						className="text-center font-roboto"
					>
						{content}
					</Text>
					{svg && <Sum height={12 * HScale} width={12 * WScale} />}
				</Pressable>
			)}
			{navigate && !action && !arrowLeft && (
				<Pressable
					onPress={handleNavigation}
					style={({ pressed }) => [
						spec === 'texto' && {
							backgroundColor: pressed ? 'rgb(22 41 48)' : texto,
						},
						spec === 'blanco' && {
							backgroundColor: pressed ? 'rgb(231 231 231)' : 'transparent',
							borderColor: texto,
							borderWidth: 1,
						},
						borderR
							? {
									borderRadius: borderR,
							  }
							: {
									borderRadius: 8,
							  },
						{
							width: '100%',
							height: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 8,
						},
					]}
				>
					<Text
						style={{
							fontSize: scaledSize(12),
							...(spec === 'texto' ? { color: amarilloVerdoso } : { color: texto }),
						}}
						className="text-center font-roboto"
					>
						{content}
					</Text>
					{svg && <Sum height={12 * HScale} width={12 * WScale} />}
				</Pressable>
			)}
			{navigate &&
				!action &&
				arrowLeft &&
				(isWeb ? (
					<Pressable onPress={handleBack}>
						<Image source={leftArrow} />
					</Pressable>
				) : (
					<Pressable onPress={handleBack}>
						<ArrowLeft width={scaledSize(14)} />
					</Pressable>
				))}
			{!navigate && !action && (
				<Pressable
					style={({ pressed }) => [
						spec === 'texto' && {
							backgroundColor: pressed ? 'rgb(22 41 48)' : texto,
						},
						spec === 'blanco' && {
							backgroundColor: pressed ? 'rgb(231 231 231)' : 'transparent',
							borderColor: texto,
							borderWidth: 1,
						},
						borderR
							? {
									borderRadius: borderR,
							  }
							: {
									borderRadius: 8,
							  },
						{
							width: '100%',
							height: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 8,
						},
					]}
				>
					<Text
						style={{
							fontSize: scaledSize(12),
							...(spec === 'texto' ? { color: amarilloVerdoso } : { color: texto }),
						}}
						className="text-center font-roboto"
					>
						{content}
					</Text>
					{svg && <Sum height={12 * HScale} width={12 * WScale} />}
				</Pressable>
			)}
		</View>
	);
};

export default Button;
