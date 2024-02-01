import { View, Text, Pressable, Dimensions, Platform, Image } from 'react-native';
import React from 'react';
import LogoBox from '../assets/LogoBox.svg';
import box from '../assets/box.png';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const Header = () => {
	const isWeb = Platform.OS === 'web';
	return (
		<View
			style={{ marginTop: 6 * HScale }}
			className="w-full flex flex-row justify-between items-center"
		>
			{isWeb ? (
				<Image
					source={box}
					style={{ height: scaledSize(30), width: scaledSize(80.69) }}
					resizeMode="contain"
				/>
			) : (
				<LogoBox height={30 * HScale} width={80.69 * WScale} />
			)}
			<Pressable
				style={{
					width: 109 * WScale,
					height: 26 * HScale,
					marginTop: 6 * HScale,
					borderRadius: 8,
					borderWidth: 0.5,
				}}
				className="flex justify-center items-center align-middle border border-texto text-texto"
			>
				<Text style={{ fontSize: scaledSize(12) }} className="text-center text-texto">
					CERRAR SESION
				</Text>
			</Pressable>
		</View>
	);
};

export default Header;
