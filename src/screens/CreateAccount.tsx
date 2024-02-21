import React, { useState } from 'react';
import { View, Dimensions, Image, TextInput, Pressable, Platform } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';

import box from '../assets/box.png';
import closeEye from '../assets/Eye.png';
import profilePic from '../assets/profile-pic.png';
import openEye from '../assets/close-eye.png';

import LogoBox from '../assets/LogoBox.svg';
import Eye from '../assets/Eye.svg';
import ProfilePic from '../assets/ProfilePic.svg';
import OpenEye from '../assets/OpenEye.svg';
import Button from '../components/Button';
import Card from '../components/Card';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';

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
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const CreateAccount = ({ navigation }: Props) => {
	const [data, setData] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
	});
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const isWeb = Platform.OS === 'web';
	const [selectPhoto, setSelectPhoto] = useState<string | undefined>();
	const pickImage = () => {
		const options: ImageLibraryOptions = {
			mediaType: 'photo',
			includeBase64: false,
		};

		launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log('El usuario canceló la selección');
			} else if (response.errorCode) {
				console.error('Error al seleccionar la imagen', response.errorMessage);
			} else if (response.assets && response.assets.length > 0) {
				const uri = response.assets[0].uri;
				if (uri) {
					setSelectPhoto(uri);
				}
			}
		});
	};

	const handleInputChange = (field: keyof typeof data, value: string) => {
		setData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleToggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
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
					content={'CREA TU CUENTA'}
					arrow={'left'}
					navigate={RouteName.Login}
					size={18}
					navigation={navigation}
				/>
			</View>
			<Card header="none" height={510} dropdown="false">
				{selectPhoto ? (
					<Pressable
						onPress={pickImage}
						className="justify-center items-center bg-gris rounded-[18px]"
						style={{ width: scaledSize(96), height: scaledSize(95), top: 20 * HScale }}
					>
						<Image
							source={{ uri: selectPhoto }}
							style={{
								width: scaledSize(96),
								height: scaledSize(95),
								borderRadius: 18,
							}}
						/>
					</Pressable>
				) : (
					<Pressable
						onPress={pickImage}
						className="justify-center items-center bg-gris rounded-[18px]"
						style={{ width: scaledSize(96), height: scaledSize(95), top: 20 * HScale }}
					>
						{isWeb ? <Image source={profilePic} /> : <ProfilePic width={30 * WScale} />}
					</Pressable>
				)}

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 35 * HScale,
						fontSize: scaledSize(14),
					}}
					className=" text-texto font-roboto"
					placeholder="Nombre"
					onChangeText={(newText) => handleInputChange('name', newText)}
					defaultValue={data.name}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 21 * HScale,
						fontSize: scaledSize(14),
					}}
					className=" text-texto font-roboto"
					placeholder="Apellido"
					onChangeText={(newText) => handleInputChange('lastname', newText)}
					defaultValue={data.lastname}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 21 * HScale,
						fontSize: scaledSize(14),
					}}
					className=" text-texto font-roboto"
					placeholder="Email@contraseña.com"
					onChangeText={(newText) => handleInputChange('email', newText)}
					defaultValue={data.email}
				/>
				<View style={{ width: 260 * WScale, height: 0.5 }} className="bg-texto"></View>

				<View>
					<View className="flex flex-row">
						<TextInput
							style={{
								height: 24 * HScale,
								width: 240 * WScale,
								marginTop: 21 * HScale,
								fontSize: scaledSize(14),
							}}
							className=" text-texto font-roboto"
							placeholder="Contraseña"
							secureTextEntry={!showPassword}
							onChangeText={(newText) => handleInputChange('password', newText)}
							defaultValue={data.password}
						/>

						<Pressable className="relative" onPress={handleTogglePassword}>
							{showPassword ? (
								isWeb ? (
									<Image
										style={{
											top: 20 * HScale,
											right: 5 * WScale,
											width: scaledSize(20),
											height: scaledSize(20),
										}}
										className=" text-texto"
										source={openEye}
									/>
								) : (
									<OpenEye
										top={20 * HScale}
										right={5 * WScale}
										width={scaledSize(20)}
										height={scaledSize(20)}
									/>
								)
							) : isWeb ? (
								<Image
									style={{
										top: 20 * HScale,
										right: 5 * WScale,
										width: scaledSize(20),
										height: scaledSize(20),
									}}
									className=" text-texto"
									source={closeEye}
								/>
							) : (
								<Eye
									top={20 * HScale}
									right={5 * WScale}
									width={scaledSize(20)}
									height={scaledSize(20)}
								/>
							)}
						</Pressable>
					</View>
					<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>
				</View>

				<View>
					<View className="flex flex-row">
						<TextInput
							style={{
								height: 24 * HScale,
								width: 240 * WScale,
								marginTop: 21 * HScale,
								fontSize: scaledSize(14),
							}}
							className=" text-texto font-roboto"
							placeholder="Confirmar contraseña"
							secureTextEntry={!showConfirmPassword}
							onChangeText={(newText) => setConfirmPassword(newText)}
							defaultValue={confirmPassword}
						/>

						<Pressable className="relative" onPress={handleToggleConfirmPassword}>
							{showConfirmPassword ? (
								isWeb ? (
									<Image
										style={{
											top: 20 * HScale,
											right: 5 * WScale,
											width: scaledSize(20),
											height: scaledSize(20),
										}}
										className=" text-texto"
										source={openEye}
									/>
								) : (
									<OpenEye
										top={20 * HScale}
										right={5 * WScale}
										width={scaledSize(20)}
										height={scaledSize(20)}
									/>
								)
							) : isWeb ? (
								<Image
									style={{
										top: 20 * HScale,
										right: 5 * WScale,
										width: scaledSize(20),
										height: scaledSize(20),
									}}
									className=" text-texto"
									source={closeEye}
								/>
							) : (
								<Eye
									top={20 * HScale}
									right={5 * WScale}
									width={scaledSize(20)}
									height={scaledSize(20)}
								/>
							)}
						</Pressable>
					</View>
					<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>
				</View>
				<View style={{ marginTop: 50 * HScale }}>
					<Button
						spec="texto"
						height={28}
						width={270}
						content="CREAR"
						action="postR"
						data={data}
						navigate={RouteName.Login}
						navigation={navigation}
					/>{' '}
				</View>
				<View
					style={{
						marginTop: 10 * HScale,
					}}
				>
					<Button
						spec="blanco"
						height={30}
						width={270}
						content="INICIAR SESION"
						navigate={RouteName.Login}
						navigation={navigation}
					/>
				</View>
				<View
					style={{ top: 15 * HScale }}
					className="justify-center underline items-center align-middle"
				>
					<Button
						spec="transp"
						height={30}
						width={270}
						content="¿Ya tenés una cuenta?"
						navigate={RouteName.Login}
						navigation={navigation}
					/>
				</View>
			</Card>
		</View>
	);
};

export default CreateAccount;
