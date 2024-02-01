import { View, Text, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-elements/dist/helpers';
import Sum from '../assets/Sum.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface ButtonProps {
	spec: string;
	content: string;
	svg: boolean;
	borderR?: boolean;
}

const texto = '#24424D';
const blanco = '#FEFEFE';
const amarilloVerdoso = '#CEF169';

const Button = ({ spec, content, svg, borderR }: ButtonProps) => {
	return (
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
							borderRadius: 4,
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
	);
};

export default Button;
