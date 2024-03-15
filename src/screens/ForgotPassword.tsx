import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Dimensions, Image, TextInput, Platform, Pressable } from 'react-native';
import box from '../assets/box.png';
import LogoBox from '../assets/LogoBox.svg';
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
	const isWeb = Platform.OS === 'web';

	const [email, setEmail] = useState('');
	const [step, setStep] = useState(1);
	const [token, setToken] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const handleInputToken = (value: string) => {
		setToken(value);
	};

	const handleInputEmail = (value: string) => {
		setEmail(value);
	};

	const handleInputNewPassword = (value: string) => {
		setNewPassword(value);
	};
	const handleInputConfirmPassword = (value: string) => {
		setConfirmPassword(value);
	};

	function confirmation() {
		if (newPassword === confirmPassword) {
			handleResetPassword({ newPassword, token }).then(() => navigation.navigate(RouteName.Login));
			setStep(1);
		} else {
			console.log("'La confirmacion debe coincidir con el nuevo password'");
		}
	}

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
				<View className="w-full h-[80%] flex justify-evenly">
					<View
						className="bg-white rounded-xl items-center"
						style={{
							width: 300 * WScale,
							height: 200 * HScale,
							marginTop: 10 * HScale,
						}}
					>
						<View
							style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
							className="w-full flex flex-row rounded-t-xl items-center justify-center bg-violeta"
						>
							<Text
								className="font-robotoMedium text-texto text-center"
								style={{ fontSize: scaledSize(12) }}
							>
								INGRESE SU EMAIL
							</Text>
						</View>
						<View className="flex items-center justify-evenly w-full h-full p-2">
							<View>
								<TextInput
									style={{
										height: 24 * HScale,
										fontSize: scaledSize(12),
									}}
									className="bg-white text-texto w-full font-roboto rounded p-2"
									placeholder="email@gmail.com"
									onChangeText={(newText) => handleInputEmail(newText)}
									defaultValue={email}
								/>
								<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto" />
							</View>

							<View className="p-2">
								<Text style={{ fontSize: scaledSize(12) }} className="text-texto text-center">
									Se le enviará un token el cual tendrá que verificar para cambiar su contraseña.
								</Text>
							</View>
						</View>
					</View>
					<View className="flex justify-center w-full p-4">
						<Pressable
							style={{ borderRadius: 8 }}
							className="bg-texto flex w-full h-10 items-center justify-center"
							onPress={() =>
								handleForgot(email).then(() => {
									setStep(2);
									setEmail('hola');
								})
							}
						>
							<Text className="text-amarilloVerdoso">ENVIAR</Text>
						</Pressable>
					</View>
				</View>
			) : step === 2 ? (
				<View className="w-full h-[80%] flex justify-evenly">
					<View
						className="bg-white rounded-xl items-center"
						style={{
							width: 300 * WScale,
							height: 200 * HScale,
							marginTop: 10 * HScale,
						}}
					>
						<View
							style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
							className="w-full flex flex-row rounded-t-xl items-center justify-center bg-violeta"
						>
							<Text
								className="font-robotoMedium text-texto text-center"
								style={{ fontSize: scaledSize(12) }}
							>
								INGRESE SU TOKEN
							</Text>
						</View>
						<View className="flex items-center justify-evenly w-full h-full p-2">
							<View>
								<TextInput
									style={{
										height: 24 * HScale,
										fontSize: scaledSize(12),
									}}
									className="bg-white text-texto w-full font-roboto rounded p-2"
									placeholder="token"
									onChangeText={(newText) => handleInputToken(newText)}
									defaultValue={token}
								/>
								<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto" />
							</View>
							<View className="p-2">
								<Text style={{ fontSize: scaledSize(12) }} className="text-texto text-center">
									Una vez verfificado ya podrá cambiar su contraseña.
								</Text>
							</View>
						</View>
					</View>
					<View className="flex justify-center w-full p-4">
						<Pressable
							style={{ borderRadius: 8 }}
							className="bg-texto flex w-full h-10 items-center justify-center"
							onPress={() =>
								handleVerify(token).then(() => {
									setStep(3);
								})
							}
						>
							<Text className="text-amarilloVerdoso">ENVIAR</Text>
						</Pressable>
					</View>
				</View>
			) : (
				<View className="w-full h-[80%] flex justify-evenly">
					<View
						className="bg-white rounded-xl items-center"
						style={{
							width: 300 * WScale,
							height: 200 * HScale,
							marginTop: 10 * HScale,
						}}
					>
						<View
							style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
							className="w-full flex flex-row rounded-t-xl items-center justify-center bg-violeta"
						>
							<Text
								className="font-robotoMedium text-texto text-center"
								style={{ fontSize: scaledSize(12) }}
							>
								INGRESE SU CONTRASEÑA NUEVA
							</Text>
						</View>
						<View className="flex items-center justify-evenly w-full h-full p-2">
							<View>
								<TextInput
									style={{
										height: 24 * HScale,
										fontSize: scaledSize(12),
									}}
									className="bg-white text-texto w-full font-roboto rounded p-2"
									placeholder="contraseña"
									onChangeText={(newText) => handleInputNewPassword(newText)}
									defaultValue={newPassword}
								/>
								<TextInput
									style={{
										height: 24 * HScale,
										fontSize: scaledSize(12),
									}}
									className="bg-white text-texto w-full font-roboto rounded p-2"
									placeholder="confirmar contraseña"
									onChangeText={(newText) => handleInputConfirmPassword(newText)}
									defaultValue={confirmPassword}
								/>
								<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto" />
							</View>
							<View className="p-2">
								<Text style={{ fontSize: scaledSize(12) }} className="text-texto text-center">
									Si las contraseñas coinciden esa será su nueva contraseña.
								</Text>
							</View>
						</View>
					</View>
					<View className="flex justify-center w-full p-4">
						<Pressable
							style={{ borderRadius: 8 }}
							className="bg-texto flex w-full h-10 items-center justify-center"
							onPress={confirmation}
						>
							<Text className="text-amarilloVerdoso">ENVIAR</Text>
						</Pressable>
					</View>
				</View>
			)}
		</View>
	);
};

export default ForgotPassword;
