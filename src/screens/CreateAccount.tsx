import React, { useState } from 'react';
import { View, Text, Dimensions, Image, TextInput, Pressable, Platform } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';

import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import closeEye from '../assets/Eye.png';
import profilePic from '../assets/profile-pic.png';
import openEye from '../assets/close-eye.png';

import LogoBox from '../assets/LogoBox.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import Eye from '../assets/Eye.svg';
import ProfilePic from '../assets/ProfilePic.svg';
import OpenEye from '../assets/OpenEye.svg';
import Button from '../components/Button';
import Card from '../components/Card';

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const CreateAccount = () => {
	const [text, setText] = useState('');
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
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(18) }} // py-1
					className=" flex justify-center items-center font-sairaBold text-texto"
				>
					CREÁ TU CUENTA
				</Text>
				<View
					style={{ paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					{isWeb ? <Image source={leftArrow} /> : <ArrowLeft width={scaledSize(14)} />}
				</View>
			</View>
			{/* <View
				style={{ height: 510 * HScale, marginTop: 10 * HScale }}
				className="w-full items-center rounded-xl bg-blanco"
			> */}
				<Card header='none' height={510} dropdown='false'>
					
				{/* aca loco */}
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
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
							placeholder="**********"
							onChangeText={(newText) => setText(newText)}
							defaultValue={text}
						/>

						<Pressable className="relative">
							{isWeb ? (
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
							onChangeText={(newText) => setText(newText)}
							defaultValue={text}
						/>

						<Pressable className="relative">
							{isWeb ? (
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
							)}
						</Pressable>
					</View>
					<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>
				</View>
				<View style={{ height: 28 * HScale, width: 270 * WScale, marginTop: 50 * HScale }}>
					<Button spec="texto" content="CREAR" />
				</View>
				<View
					style={{
						width: 270 * WScale,
						height: 30 * HScale,
						marginTop: 10 * HScale,
					}}
					// className="flex justify-center items-center align-middle border border-texto text-texto"
				>
					<Button spec="blanco" content="INICIAR SESION" />
				</View>
				<View
					style={{ top: 15 * HScale }}
					className="justify-center underline items-center align-middle"
				>
					<Button spec="transp" content="¿Ya tenés una cuenta?" />
				</View>
				</Card>

			{/* </View> */}
		</View>
	);
};

export default CreateAccount;
