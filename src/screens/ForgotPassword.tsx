import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Dimensions, Image, TextInput, Platform, Pressable } from 'react-native';
import box from '../assets/box.png';
import LogoBox from '../assets/LogoBox.svg';
import Button from '../components/Button';
import Title from '../components/Title';
import { handleForgot, handleResetPassword, handleVerify } from '../services/user.service';

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

type LoginCompProps = {
	navigation: NavigationProp<RootStackParamList>;
};

const ForgotPassword = ({ navigation }: LoginCompProps) => {
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	// const [email, setEmail] = useState('');
	const isWeb = Platform.OS === 'web';

	const [email, setEmail] = useState('');
	const [step, setStep] = useState(1);
	const [token, setToken] = useState('');
	const [passwords, setPasswords] = useState({ password: '', confirmPassword: '' });

	const handleInputToken = (value: string) => {
		setToken(value);
	};

	const handleInputEmail = (value: string) => {
		setEmail(value);
	};

	const handlePassword = (field: keyof typeof passwords, value: string) => {
		setPasswords((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center absolute"
		>
			{isWeb ? (
				<Image
					className="right-[110] top-[6]"
					source={box}
					style={{
						height: 30 * HScale,
						width: 80.69 * WScale,
						right: 110 * WScale,
						top: 6 * HScale,
					}}
					resizeMode="contain"
				/>
			) : (
				<LogoBox
					height={30 * HScale}
					width={80.69 * WScale}
					right={110 * WScale}
					top={6 * HScale}
				/>
			)}
			<View
				style={{
					height: 40 * HScale,
					marginTop: 28 * HScale,
					width: '100%',
				}}
			>
				<Title
					content={'RECUPERAR CONTRASEÑA'}
					arrow={'left'}
					navigate={RouteName.Login}
					size={18}
					navigation={navigation}
				/>
			</View>

			{step === 1 ? (
				<View
					className="bg-texto rounded-xl items-center"
					style={{
						top: 185 * HScale,
						left: 30 * WScale,
						width: 300 * WScale,
						height: 200 * HScale,
						position: 'absolute',
					}}
				>
					<Text style={{ color: 'white', top: 50 * HScale, fontSize: scaledSize(22) }}>
						Ingrese su e-mail
					</Text>
					<TextInput
						style={{
							top: 140 * HScale,
							height: 24 * HScale,
							width: 270 * WScale,
							fontSize: scaledSize(12),
						}}
						className="bg-white text-texto font-roboto absolute rounded p-2"
						placeholder="Email@contraseña.com"
						onChangeText={(newText) => handleInputEmail(newText)}
						defaultValue={email}
					/>

					<View
						style={{
							top: 375 * HScale,
						}}
						className="flex justify-center"
					>
						<Pressable onPress={() => handleForgot(email).then(() => setStep(2))}>
							<Text>Enviar</Text>
						</Pressable>
					</View>
				</View>
			) : step === 2 ? (
				<View
					className="bg-texto rounded-xl items-center"
					style={{
						top: 185 * HScale,
						left: 30 * WScale,
						width: 300 * WScale,
						height: 200 * HScale,
						position: 'absolute',
					}}
				>
					<Text style={{ color: 'white', top: 50 * HScale, fontSize: scaledSize(22) }}>
						Ingrese su token
					</Text>
					<TextInput
						style={{
							top: 140 * HScale,
							height: 24 * HScale,
							width: 270 * WScale,
							fontSize: scaledSize(12),
						}}
						className="bg-white text-texto font-roboto absolute rounded p-2"
						placeholder="Email@contraseña.com"
						onChangeText={(newText) => handleInputToken(newText)}
						defaultValue={token}
					/>

					<View
						style={{
							top: 375 * HScale,
						}}
						className="flex justify-center"
					>
						<Pressable onPress={() => handleVerify(token).then(() => setStep(3))}>
							<Text>Enviar</Text>
						</Pressable>
					</View>
				</View>
			) : (
				<View
					className="bg-texto rounded-xl items-center"
					style={{
						top: 185 * HScale,
						left: 30 * WScale,
						width: 300 * WScale,
						height: 200 * HScale,
						position: 'absolute',
					}}
				>
					<Text style={{ color: 'white', top: 50 * HScale, fontSize: scaledSize(22) }}>
						Ingrese las contraseñas
					</Text>
					<TextInput
						style={{
							top: 140 * HScale,
							height: 24 * HScale,
							width: 270 * WScale,
							fontSize: scaledSize(12),
						}}
						className="bg-white text-texto font-roboto absolute rounded p-2"
						placeholder="Email@contraseña.com"
						onChangeText={(newText) => handlePassword('password', newText)}
						defaultValue={passwords.password}
					/>
					<TextInput
						style={{
							top: 140 * HScale,
							height: 24 * HScale,
							width: 270 * WScale,
							fontSize: scaledSize(12),
						}}
						className="bg-white text-texto font-roboto absolute rounded p-2"
						placeholder="Email@contraseña.com"
						onChangeText={(newText) => handlePassword('confirmPassword', newText)}
						defaultValue={passwords.confirmPassword}
					/>

					<View
						style={{
							top: 375 * HScale,
						}}
						className="flex justify-center"
					>
						<Pressable
							onPress={() =>
								handleResetPassword(passwords).then(() => navigation.navigate(RouteName.Login))
							}
						>
							<Text>Enviar</Text>
						</Pressable>
					</View>
				</View>
			)}
		</View>
	);
};

export default ForgotPassword;
