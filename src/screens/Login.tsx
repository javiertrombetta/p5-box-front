import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Dimensions, Platform } from 'react-native';

import backgroundI from '../assets/fondoLogin.jpg';
import logo from '../assets/logo.png';
import closeEye from '../assets/Eye.png';

import BackgroundImage from '../assets/FondoLogin.svg';
import LogoFull from '../assets/LogoFull.svg';
import Eye from '../assets/Eye.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const Login = () => {
	const [text, setText] = useState('');
	const isWeb = Platform.OS === 'web';

	return (
		<View className="flex flex-col w-full h-full justify-center items-center bg-texto">
			{isWeb ? <Image source={backgroundI} className="w-full h-full" /> : <BackgroundImage />}
			<View
				style={{ top: 185 * HScale, left: 30 * WScale, width: 300 * WScale, height: 315 * HScale }}
				className="absolute flex rounded-2xl bg-verde"
			>
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				{isWeb ? <Image
					style={{
						top: 108 * HScale,
						left: 255 * WScale,
						width: scaledSize(20),
						height: scaledSize(20),
					}}
					className="absolute text-texto"
					source={closeEye}
				/> : <Eye top={108 * HScale} left={255 * WScale} width={scaledSize(20)} height={scaledSize(20)} /> }
				<View
					style={{ top: 93 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 * HScale }}
					className="absolute bg-texto"
				></View>
				<View
					style={{ top: 135 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 * HScale }}
					className="absolute bg-texto"
				></View>
				<Pressable
					style={{ top: 175 * HScale, left: 15 * WScale, height: 30 * HScale, width: 270 * WScale, borderRadius: 8 }}
					className="absolute flex flex-row justify-center items-center align-middle border-none bg-texto"
				>
					<Text
						style={{ marginRight: 8 * WScale, fontSize: scaledSize(12) }}
						className="text-center font-roboto text-amarilloVerdoso text-xs"
					>
						INGRESAR
					</Text>
				</Pressable>
				<Pressable
					style={{ top: 215 * HScale, left: 15 * WScale, height: 30 * HScale, width: 270 * WScale, borderRadius: 7, borderWidth:0.5}}
					className="absolute flex flex-row justify-center items-center align-middle border-texto"
				>
					<Text
						style={{ marginRight: 8 * WScale, fontSize: scaledSize(12)}}
						className="text-center font-roboto text-texto "
					>
						CREAR CUENTA
					</Text>
				</Pressable>
				<Pressable
					style={{ top: 240 * HScale }}
					className=" justify-center items-center align-middle"
				>
					<Text
						className="font-roboto text-texto"
						style={{ textDecorationLine: 'underline', fontSize: scaledSize(12) }}
					>
						Olvidé mi contraseña
					</Text>
				</Pressable>
			</View>
			<View
				style={{ top: 150 * HScale, left: 30 * WScale, width: 204 * WScale, height: 69 * HScale }}
				className="absolute rounded-t-2xl rounded-r-2xl bg-amarilloVerdoso flex-row justify-center items-center"
			>
				{isWeb ? <Image
					style={{ width: scaledSize(184), height: scaledSize(49) }}
					resizeMode="contain"
					source={logo}
				/> : <LogoFull width={scaledSize(184)} height={scaledSize(49)} />}
			</View>
		</View>
	);
};

export default Login;
