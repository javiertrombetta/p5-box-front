'use client';
import { View, Text, Pressable, Dimensions, Platform } from 'react-native';
import React from 'react';
import Sum from '../assets/Sum.svg';
import { NavigationProp } from '@react-navigation/native';
import {
	handleConditions,
	handleCreateUser,
	handleLoginUser,
	handleMeUser,
} from '../services/user.service';
import { Image } from 'react-native';
import ArrowLeft from '../assets/ArrowLeft.svg';
import leftArrow from '../assets/arrow-left.png';
// import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// import { login, useAppSelector } from '../state/user';
// import { RootState, AppDispatch } from '../state/user';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import { login, logout, store } from '../state/user';
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
}

const texto = '#24424D';
const blanco = '#FEFEFE';
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
}

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
}: ButtonProps) => {
	const isWeb = Platform.OS === 'web';
	const handleNavigation = () => {
		if (navigate && navigation) {
			navigation.navigate(navigate);
		}
	};
	const handleNavigationRol = () => {
		let user = store.getState();
		console.log(store.getState(), 'store');
		console.log(user, 'pre if');
		if (user.name) {
			console.log(user, 'navigationRol', user.roles[0], user.roles[0]);
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
								console.log('primero');
								await handleMeUser().then((data: object) => {
									console.log(data, '/me button');
									store.dispatch(login(data));
								});
								console.log('segundo');
								handleNavigationRol();
							} catch (error) {
								console.error(error, 'hola');
							}
						} else if (action === 'postC' && data) {
							try {
								await handleConditions(data);
							} catch (error) {
								console.error(error, 'hola');
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
