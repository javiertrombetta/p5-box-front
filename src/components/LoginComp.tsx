import { View, Text, Dimensions, Pressable, Image, Platform, TextInput } from 'react-native';
import React, { useState } from 'react';

import backgroundI from '../assets/fondoLogin.jpg';
import logo from '../assets/logo.png';
import closeEye from '../assets/Eye.png';

import Button from './Button';

import BackgroundImage from '../assets/FondoLogin.svg';
import LogoFull from '../assets/LogoFull.svg';
import Eye from '../assets/Eye.svg';
import CloseEye from '../assets/Eye.svg';
import { NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface LoginCompProps {
	client: boolean;
	navigation: NavigationProp<RootStackParamList>;
}

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

const LoginComp = ({ client, navigation }: LoginCompProps) => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const [text, setText] = useState('');
	const isWeb = Platform.OS === 'web';
	const handleInputChange = (field: keyof typeof data, value: string) => {
		setData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};
	return (
		<View className="absolute flex rounded-2xl bg-verde w-full h-full">
			<TextInput
				style={{
					top: 66 * HScale,
					left: 15 * WScale,
					height: 24 * HScale,
					width: 270 * WScale,
					fontSize: scaledSize(12),
				}}
				className="text-texto font-roboto absolute"
				placeholder="Email@contraseña.com"
				onChangeText={(newText) => handleInputChange('email', newText)}
				defaultValue={data.email}
			/>
			<TextInput
				style={{
					top: 111 * HScale,
					left: 15 * WScale,
					height: 24 * HScale,
					width: 270 * WScale,
					fontSize: scaledSize(14),
				}}
				className="text-texto font-roboto absolute"
				placeholder="**********"
				onChangeText={(newText) => handleInputChange('password', newText)}
				defaultValue={data.password}
			/>
			{isWeb ? (
				<Image
					style={{
						top: 108 * HScale,
						left: 255 * WScale,
						width: scaledSize(20),
						height: scaledSize(20),
					}}
					className="absolute"
					source={closeEye}
				/>
			) : (
				<CloseEye top={108 * HScale} left={255 * WScale} height={20 * HScale} width={20 * WScale} />
			)}
			<View
				style={{ top: 94 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 * HScale }}
				className="absolute bg-texto"
			></View>
			<View
				style={{ top: 135 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 * HScale }}
				className="absolute bg-texto"
			></View>

			<View
				style={{
					top: 175 * HScale,
					left: 15 * WScale,
				}}
			>
				<Button
					content={'INGRESAR'}
					spec={'texto'}
					borderR={8}
					// action="postL"
					data={data}
					navigate={client ? 'HomeIniciarJornada' : 'HomeGestionarPedido'}
					navigation={navigation}
					height={30}
					width={270}
				/>
			</View>
			{client === true ? (
				<View
					style={{ top: 185 * HScale, left: 15 * WScale, height: 30 * HScale, width: 270 * WScale }}
				>
					<Button content={'CREAR CUENTA'} spec={'blanco'} navigate="CreateAccount" height={30} width={270} navigation={navigation} />
				</View>
			) : (
				''
			)}

			<View
				className="underline"
				style={client === true ? { top: 205 * HScale } : { top: 195 * HScale }}
			>
				<Button content={'Olvidé mi contraseña'} width={300} height={30} spec={'transp'} navigate="" navigation={navigation} />
			</View>
		</View>
	);
};

export default LoginComp;
