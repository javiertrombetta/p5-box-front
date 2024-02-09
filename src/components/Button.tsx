import { View, Text, Pressable, Dimensions, Alert } from 'react-native';
import React from 'react';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-elements/dist/helpers';
import Sum from '../assets/Sum.svg';
import { NavigationProp } from '@react-navigation/native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface ButtonProps {
	height: number;
	width: number;
	spec: string;
	content: string;
	navigate?: string;
	svg?: boolean;
	borderR?: number;
	data?: object;
	action?: string;
	navigation: NavigationProp<RootStackParamList>;
}

const texto = '#24424D';
const blanco = '#FEFEFE';
const amarilloVerdoso = '#CEF169';

type RootStackParamList = {
	HomeIniciarJornada: undefined;
	ObtenerPaquetes: undefined;
	CreateAccount: undefined;
	Login: undefined;
	RepartoEnCurso: undefined
	// backOffice
	LoginAdmin: undefined;
	HomeGestionarPedido: undefined;
	Repartidores: undefined;
	Paquetes: undefined;
	AddPackage: undefined;
	PerfilRepartidor: undefined;
};

const Button = (
	{ spec, content, svg, borderR, data, action, navigate, navigation, height, width }: ButtonProps,
) => {
	const handleCreateUser = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/v1/auth/register', data);
			console.log('Usuario creado:', response.data);
		} catch (error) {
			console.error('Error al crear usuario:', error);
		}
	};
	const handleLoginUser = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/v1/auth/login', data);
			console.log('Usuario logueado:', response.data);
		} catch (error) {
			console.error('Error al loguear usuario:', error);
		}
	};
	const handleNavigation = () => {
		if (navigate && navigation) {
			navigation.navigate(navigate);
		}
	};

	return (
		<View style={{height: height * HScale, width: width * WScale}}>
			{action && navigate && (
				<Pressable
					onPress={
						action === 'postR' ? handleCreateUser : action === 'postL' ? handleLoginUser : () => {}
					}
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
			{navigate && !action && (
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
