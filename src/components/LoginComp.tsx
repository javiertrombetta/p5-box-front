import { View, Dimensions, Image, Platform, TextInput, Pressable, Text, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import closeEye from '../assets/Eye.png';
import Button from './Button';
import CloseEye from '../assets/Eye.svg';
import { NavigationProp } from '@react-navigation/native';
import openEye from '../assets/open-eye.png';
import OpenEye from '../assets/OpenEye.svg';
import Eye from '../assets/Eye.svg';
import Google from '../assets/google.svg';
import Constants from 'expo-constants';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const EXPO_PUBLIC_BACKEND_URL = Constants.expoConfig?.extra?.backendURL;

interface LoginCompProps {
	client: boolean;
	navigation: NavigationProp<RootStackParamList>;
}

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

const LoginComp = ({ client, navigation }: LoginCompProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

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

	const handleGoogleLogin = async () => {
		try {			
			if (Platform.OS === 'web') {
				window.location.href = `${EXPO_PUBLIC_BACKEND_URL}/auth/google`;
			} else {
				const authUrl = `${EXPO_PUBLIC_BACKEND_URL}/auth/google`;
				await Linking.openURL(authUrl);
			}
		} catch (error) {
			console.error('No se pudo realizar la autenticación con Google:', error);
		}
	};

	useEffect(() => {		
		const error = new URLSearchParams(window.location.search).get('error');
		if (error === 'email_in_use') {
			Toast.show({
				type: 'error',
				text1: 'Error de inicio de sesión',
				text2: 'Email ya registrado, sin usar OAuth de Google.',
			});
		}
	}, []);


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

			<View>
				<View>
					<TextInput
						style={{
							top: 111 * HScale,
							left: 15 * WScale,
							height: 24 * HScale,
							width: 270 * WScale,
							fontSize: scaledSize(12),
						}}
						className="text-texto font-roboto absolute"
						secureTextEntry={!showPassword}
						placeholder="**********"
						onChangeText={(newText) => handleInputChange('password', newText)}
						defaultValue={data.password}
					/>

					<Pressable className="relative" onPress={togglePassword}>
						{showPassword ? (
							isWeb ? (
								<Image
									style={{
										top: 113 * HScale,
										left: 255 * WScale,
										width: scaledSize(20),
										height: scaledSize(20),
									}}
									className="absolute"
									source={openEye}
								/>
							) : (
								<OpenEye
									top={108 * HScale}
									left={255 * WScale}
									height={20 * HScale}
									width={20 * WScale}
								/>
							)
						) : isWeb ? (
							<Image
								style={{
									top: 113 * HScale,
									left: 255 * WScale,
									width: scaledSize(20),
									height: scaledSize(20),
								}}
								className="absolute"
								source={closeEye}
							/>
						) : (
							<Eye
								top={108 * HScale}
								left={255 * WScale}
								height={20 * HScale}
								width={20 * WScale}
							/>
						)}
					</Pressable>
				</View>
			</View>

			<View
				style={{ top: 94 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 }}
				className="absolute bg-texto"
			></View>
			<View
				style={{ top: 135 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 }}
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
					action="postL"
					data={data}
					navigate={client ? RouteName.HomeIniciarJornada : RouteName.HomeGestionarPedido}
					navigation={navigation}
					height={30}
					width={270}
				/>
			</View>

			{/* Boton de Google */}
			<View
				className="flex flex-row justify-center align-middle items-center"
				style={{ height: 30 * HScale, top: 185 * HScale }}
			>
				<Pressable
					onPress={handleGoogleLogin}					
					style={{
						width: 270 * WScale,
					}}
					className="relative flex flex-row items-center rounded-lg border border-gray-400 w-full h-full justify-center bg-white focus:bg-gray-300 "
				>
					<View style={{ position: 'absolute', left: 15 * WScale }}>
						<Google height={20 * HScale} width={20 * WScale} />
					</View>

					<Text className="text-xs">CONTINUAR CON GOOGLE</Text>
				</Pressable>
			</View>

			{client === true ? (
				<View
					style={{ top: 195 * HScale, left: 15 * WScale, height: 30 * HScale, width: 270 * WScale }}
				>
					<Button
						content={'CREAR CUENTA'}
						spec={'blanco'}
						navigate={RouteName.CreateAccount}
						height={30}
						width={270}
						navigation={navigation}
					/>
				</View>
			) : (
				''
			)}
			<View
				className="underline"
				style={client === true ? { top: 203 * HScale } : { top: 195 * HScale }}
				//top: 205
			>
				<Button
					content={'Olvidé mi contraseña'}
					width={300}
					height={30}
					spec={'transp'}
					navigate={RouteName.ForgotPassword}
					navigation={navigation}
				/>
			</View>
		</View>
	);
};

export default LoginComp;
