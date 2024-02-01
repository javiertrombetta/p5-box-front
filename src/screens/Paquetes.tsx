import React from 'react';
import { View, Text, Button, Pressable, Image, Dimensions, Platform } from 'react-native';

import box from '../assets/box.png';
import BoxList from '../assets/BoxList.png';
import trash from '../assets/trash.png';
import arrowLeft from '../assets/arrow-left.png';
import downArrow from '../assets/arrow-head-down.png';

import LogoBox from '../assets/LogoBox.svg';
import Box from '../assets/Box.svg';
import TrashIcon from '../assets/Trash.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const Paquetes = () => {
	const isWeb = Platform.OS === 'web';
	return (
		<View
			className="bg-verde w-full h-full flex-col items-center  flex"
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
		>
			<Header />
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 26 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ fontSize: scaledSize(18) }} // py-1
					className="text-lg flex justify-center items-center font-sairaBold text-texto"
				>
					PAQUETES
				</Text>
				<View // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					{isWeb ? (
						<Image
							source={arrowLeft}
							style={{ width: scaledSize(15), height: scaledSize(14) }}
							resizeMode="cover"
						/>
					) : (
						<ArrowLeft width={scaledSize(15)} height={scaledSize(14)} />
					)}
				</View>
			</View>
			<View
				style={{ height: 442 * HScale, marginTop: 10 * HScale }}
				className="w-full flex rounded-t-xl bg-white"
			>
				<View
					style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-t-xl items-center justify-between bg-violeta"
				>
					<Text
						className="text-sm font-robotoBold text-texto text-center"
						style={{ fontSize: scaledSize(14) }}
					>
						ENERO
					</Text>
					<View className="flex flex-row items-center">
						<Text className="font-roboto text-texto" style={{ fontSize: scaledSize(14) }}>
							mie
						</Text>
						<Text className="font-robotoBold text-texto" style={{ fontSize: scaledSize(14) }}>
							{' '}
							/ 03
						</Text>
					</View>
				</View>
				<Text
					style={{
						paddingHorizontal: 16 * WScale,
						paddingTop: 10 * HScale,
						paddingBottom: 5 * HScale,
						fontSize: scaledSize(12),
					}}
					className=" text-texto font-robotoMedium"
				>
					58 Paquetes entregados
				</Text>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View className="h-[1] w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 300 * HScale, paddingHorizontal: 16 * WScale }}
					className="flex flex-col items-center justify-between"
				>
					<View
						className="flex flex-row justify-between items-center w-full"
						style={{ height: 70 * HScale }}
					>
						<View
							style={{ width: 150 * WScale, gap: WScale * 12 }}
							className="flex flex-row justify-start items-center" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{isWeb ? (
									<Image
										style={{ width: 36 * WScale, height: 36 * HScale }}
										resizeMode="cover"
										source={BoxList}
									/>
								) : (
									<Box width={36 * WScale} height={36 * HScale} />
								)}
							</View>
							<View className="flex justify-center w-full">
								<Text
									className="font-robotoMedium text-texto"
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								>
									#0B438
								</Text>
								<Text className="text-texto font-roboto" style={{ fontSize: scaledSize(12) }}>
									Av. Castillo 1356,
								</Text>
								<Text
									className="text-texto font-roboto"
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								>
									CABA
								</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								{isWeb ? (
									<Image
										resizeMode="stretch"
										style={{ height: 20 * HScale, width: 32 * WScale }}
										source={trash}
									/>
								) : (
									<TrashIcon height={20 * HScale} width={32 * WScale} />
								)}
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						className="flex flex-row justify-between items-center w-full"
						style={{ height: 70 * HScale }}
					>
						<View
							style={{ width: 150 * WScale, gap: WScale * 12 }}
							className="flex flex-row justify-start items-center" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{isWeb ? (
									<Image
										style={{ width: 36 * WScale, height: 36 * HScale }}
										resizeMode="cover"
										source={BoxList}
									/>
								) : (
									<Box width={36 * WScale} height={36 * HScale} />
								)}
							</View>
							<View className="flex justify-center w-full">
								<Text
									className="font-robotoMedium text-texto"
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								>
									#0B438
								</Text>
								<Text className="text-texto font-roboto" style={{ fontSize: scaledSize(12) }}>
									Av. Castillo 1356,
								</Text>
								<Text
									className="text-texto font-roboto"
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								>
									CABA
								</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								{isWeb ? (
									<Image
										resizeMode="stretch"
										style={{ height: 20 * HScale, width: 32 * WScale }}
										source={trash}
									/>
								) : (
									<TrashIcon height={20 * HScale} width={32 * WScale} />
								)}
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						className="flex flex-row justify-between items-center w-full"
						style={{ height: 70 * HScale }}
					>
						<View
							style={{ width: 150 * WScale, gap: WScale * 12 }}
							className="flex flex-row justify-start items-center" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{isWeb ? (
									<Image
										style={{ width: 36 * WScale, height: 36 * HScale }}
										resizeMode="cover"
										source={BoxList}
									/>
								) : (
									<Box width={36 * WScale} height={36 * HScale} />
								)}
							</View>
							<View className="flex justify-center w-full">
								<Text
									className="font-robotoMedium text-texto"
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								>
									#0B438
								</Text>
								<Text className="text-texto font-roboto" style={{ fontSize: scaledSize(12) }}>
									Av. Castillo 1356,
								</Text>
								<Text
									className="text-texto font-roboto"
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								>
									CABA
								</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								{isWeb ? (
									<Image
										resizeMode="stretch"
										style={{ height: 20 * HScale, width: 32 * WScale }}
										source={trash}
									/>
								) : (
									<TrashIcon height={20 * HScale} width={32 * WScale} />
								)}
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						className="flex flex-row justify-between items-center w-full"
						style={{ height: 70 * HScale }}
					>
						<View
							style={{ width: 150 * WScale, gap: WScale * 12 }}
							className="flex flex-row justify-start items-center" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{isWeb ? (
									<Image
										style={{ width: 36 * WScale, height: 36 * HScale }}
										resizeMode="cover"
										source={BoxList}
									/>
								) : (
									<Box width={36 * WScale} height={36 * HScale} />
								)}
							</View>
							<View className="flex justify-center w-full">
								<Text
									className="font-robotoMedium text-texto"
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								>
									#0B438
								</Text>
								<Text className="text-texto font-roboto" style={{ fontSize: scaledSize(12) }}>
									Av. Castillo 1356,
								</Text>
								<Text
									className="text-texto font-roboto"
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								>
									CABA
								</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								{isWeb ? (
									<Image
										resizeMode="stretch"
										style={{ height: 20 * HScale, width: 32 * WScale }}
										source={trash}
									/>
								) : (
									<TrashIcon height={20 * HScale} width={32 * WScale} />
								)}
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						className="flex flex-row justify-between items-center w-full"
						style={{ height: 70 * HScale }}
					>
						<View
							style={{ width: 150 * WScale, gap: WScale * 12 }}
							className="flex flex-row justify-start items-center" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{isWeb ? (
									<Image
										style={{ width: 36 * WScale, height: 36 * HScale }}
										resizeMode="cover"
										source={BoxList}
									/>
								) : (
									<Box width={36 * WScale} height={36 * HScale} />
								)}
							</View>
							<View className="flex justify-center w-full">
								<Text
									className="font-robotoMedium text-texto"
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								>
									#0B438
								</Text>
								<Text className="text-texto font-roboto" style={{ fontSize: scaledSize(12) }}>
									Av. Castillo 1356,
								</Text>
								<Text
									className="text-texto font-roboto"
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								>
									CABA
								</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								{isWeb ? (
									<Image
										resizeMode="stretch"
										style={{ height: 20 * HScale, width: 32 * WScale }}
										source={trash}
									/>
								) : (
									<TrashIcon height={20 * HScale} width={32 * WScale} />
								)}
							</Pressable>
						</View>
					</View>
				</View>
			</View>
			<View style={{ height: 1 * HScale }} className="w-full bg-gray-300 z-10" />
			<View
				style={{ height: 50 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white z-10"
			>
				{isWeb ? (
					<Image source={downArrow} />
				) : (
					<ArrowHeadDown height={12 * HScale} width={80.69 * WScale} />
				)}
			</View>
		</View>
	);
};

export default Paquetes;
