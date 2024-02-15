import { View, Text, Dimensions, Platform, Image, Pressable } from 'react-native';
import React from 'react';
import { format } from 'date-fns';

import leftArrow from '../assets/arrow-left.png';
import downArrow from '../assets/arrow-head-down.png';
import rightArrow from '../assets/arrow-right.png';
import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowDown from '../assets/ArrowHeadDown.svg';
import ArrowRight from '../assets/Arrow-right.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface titleProps {
	content: string;
	arrow?: string;
	details?: string;
	date?: boolean;
	color?: string;
	size: number;
}

const Title = ({ content, arrow, details, date, color, size }: titleProps) => {
	const currentDate: Date = new Date();
	const formattedDate: string = format(currentDate, 'dd/MM/yy');
	const dayOfWeek = format(currentDate, 'EEE');
	const dayOfMonth = format(currentDate, 'dd');

	const isWeb = Platform.OS === 'web';

	return (
		<View
			style={{ paddingHorizontal: 16 * WScale }}
			className={
				color === 'v'
					? 'bg-violeta flex-row flex h-full w-full justify-between items-center rounded-t-xl'
					: (arrow ? 'justify-between' : 'justify-center') +
					  ' bg-amarilloVerdoso h-full w-full flex-row flex items-center  rounded-xl'
			}
		>
			<View className={details ? 'items-start' : 'items-center' + ' flex flex-row justify-between'}>
				<Text style={{ fontSize: scaledSize(size) }} className="font-sairaBold text-texto">
					{content}
				</Text>

				<Text
					style={{ fontSize: scaledSize(12), marginTop: scaledSize(-8) }}
					className="text-texto font-sairaMedium"
				>
					{details}
				</Text>
			</View>

			<View className=" flex items-center flex-row justify-between">
				{date === true && color === 'v' ? (
					<View className=" flex items-center flex-row justify-between">
						<Text style={{ fontSize: scaledSize(14) }} className="font-roboto text-texto">
							{dayOfWeek.toLocaleLowerCase() + ' '}
						</Text>
						<Text style={{ fontSize: scaledSize(14) }} className="font-robotoBold text-texto">
							/ {dayOfMonth}
						</Text>
					</View>
				) : date ? (
					<Text
						style={{ fontSize: scaledSize(14), paddingRight: 8 * WScale }}
						className="font-saira text-texto"
					>
						{formattedDate}
					</Text>
				) : (
					''
				)}

				{arrow ? (
					<Pressable
						style={{ width: scaledSize(14), height: scaledSize(12) }}
						className="flex items-center justify-center"
					>
						{arrow === 'left' ? (
							isWeb ? (
								<Image source={leftArrow} />
							) : (
								<ArrowLeft width={scaledSize(14)} />
							)
						) : arrow === 'down' ? (
							isWeb ? (
								<Image source={downArrow} />
							) : (
								<ArrowDown width={scaledSize(14)} />
							)
						) : arrow === 'right' ? (
							isWeb ? (
								<Image source={rightArrow} />
							) : (
								<ArrowRight width={scaledSize(14)} />
							)
						) : (
							''
						)}
					</Pressable>
				) : (
					''
				)}
			</View>
		</View>
	);
};

export default Title;
