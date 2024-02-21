import { View, Dimensions, Pressable } from 'react-native';
import React, { ReactNode } from 'react';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Title from './Title';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface cardProps {
	header: string;
	heightT: number;
	heightC: number;
	children: ReactNode;
	dropdown: boolean;
}

const Card = ({ header, heightT, heightC, children, dropdown }: cardProps) => {
	const arrayHeader: Array<string> = header.split(', ');

	const sizeInt = parseInt(arrayHeader[2]);
	const date = arrayHeader[3] === 'true' ? true : false;

	return (
		<View
			style={{ height: heightC * HScale, width: '100%', marginTop: 10 * HScale }}
			className={
				dropdown
					? 'w-full items-center justify-start rounded-t-xl bg-blanco'
					: 'w-full items-center justify-start rounded-xl bg-blanco'
			}
		>
			<View style={{ height: heightT * HScale, width: '100%' }}>
				{arrayHeader[0] === 'violet' && (
					<Title
						color="v"
						content={arrayHeader[1]}
						size={sizeInt}
						date={date}
						arrow={arrayHeader[4]}
						details={arrayHeader[5]}
					/>
				)}
				{arrayHeader[0] === 'green' && (
					<Title
						content={arrayHeader[1]}
						size={sizeInt}
						date={date}
						arrow={arrayHeader[4]}
						details={arrayHeader[5]}
					/>
				)}
			</View>

			<View className="flex items-center">{children}</View>
		</View>
	);
};

export default Card;
