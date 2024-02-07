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

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface LoginCompProps {
	client?: boolean;
}

const LoginComp = ({ client }: LoginCompProps) => {
	const [text, setText] = useState('');
	const isWeb = Platform.OS === 'web';

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
					height: 30 * HScale,
					width: 270 * WScale,
				}}
			>
				<Button content={'INGRESAR'} spec={'texto'} borderR={8} navigate="" />
			</View>
			{client === true ? (
				<View
					style={{ top: 185 * HScale, left: 15 * WScale, height: 30 * HScale, width: 270 * WScale }}
				>
					<Button content={'CREAR CUENTA'} spec={'blanco'} navigate="" />
				</View>
			) : (
				''
			)}

			<View
				className="underline"
				style={client === true ? { top: 205 * HScale } : { top: 195 * HScale }}
			>
				<Button content={'Olvidé mi contraseña'} spec={'transp'} navigate="" />
			</View>
		</View>
	);
};

export default LoginComp;
