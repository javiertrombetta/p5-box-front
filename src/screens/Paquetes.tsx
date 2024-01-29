import { View, Text, Button, Pressable, Image, Dimensions } from 'react-native';
import React from 'react';
import box from '../assets/box.png';
import BoxList from '../assets/BoxList.png';
import trash from '../assets/trash.png';
import arrowLeft from '../assets/arrow-left.png';
import downArrow from '../assets/arrow-head-down.png';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const Paquetes = () => {
	return (
		<View
			style={{ paddingHorizontal: 32 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 6 * HScale }}
				className="w-full flex flex-row justify-between items-center"
			>
				<Image
					source={box}
					style={{ height: 30 * HScale, width: 80.69 * WScale }}
					resizeMode="contain"
				/>
				<Pressable
					style={{ width: 109 * WScale, height: 26 * HScale, marginTop: 8 * HScale }} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border rounded-xl border-texto text-texto"
				>
					<Text className="text-center text-xs">CERRAR SESION</Text>
				</Pressable>
			</View>
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale }} // py-1
					className="text-lg flex justify-center items-center font-sairaBold text-texto"
				>
					PAQUETES
				</Text>
				<View
					style={{ width: 13 * WScale, height: 15 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					<Image source={arrowLeft} />
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
					<Text className="text-sm font-robotoBold text-texto text-center">ENERO</Text>
					<View className="flex flex-row items-center">
						<Text className="font-roboto text-texto">mie</Text>
						<Text className="font-robotoBold text-texto"> / 03</Text>
					</View>
				</View>
				<Text
					style={{ paddingHorizontal: 16 * WScale, paddingVertical: 8 * HScale }}
					className=" text-texto text-xs font-robotoMedium"
				>
					58 Paquetes entregados
				</Text>
				<View
					style={{ paddingHorizontal: 16 * WScale, paddingBottom: 8 * HScale }}
					className="flex w-full items-center"
				>
					<View className="h-[1] w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 310 * HScale, paddingHorizontal: 16 * WScale }}
					className="flex flex-col items-center justify-between"
				>
					<View className="flex flex-row justify-between items-center w-full">
						<View
							style={{ height: 75 * HScale, width: 150 * WScale }}
							className="flex flex-row justify-start items-center gap-5" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image
									style={{ width: 36 * WScale, height: 36 * HScale }}
									resizeMode="contain"
									source={BoxList}
								/>
							</View>
							<View className="flex justify-center w-full">
								<Text className="font-robotoMedium text-texto text-xs">#0B438</Text>
								<Text className="text-texto text-xs font-roboto">Av. Castillo 1356,</Text>
								<Text className="text-texto text-xs font-roboto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 4 * HScale }} className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								<Image
									resizeMode="contain"
									style={{ height: 20 * HScale, width: 31 * WScale }}
									source={trash}
								/>
							</Pressable>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
					</View>
					<View className="flex flex-row justify-between items-center w-full">
						<View
							style={{ height: 75 * HScale, width: 150 * WScale }}
							className="flex flex-row justify-start items-center gap-5" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image
									style={{ width: 36 * WScale, height: 36 * HScale }}
									resizeMode="contain"
									source={BoxList}
								/>
							</View>
							<View className="flex justify-center w-full">
								<Text className="font-robotoMedium text-texto text-xs">#0B438</Text>
								<Text className="text-texto text-xs font-roboto">Av. Castillo 1356,</Text>
								<Text className="text-texto text-xs font-roboto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 4 * HScale }} className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								<Image
									resizeMode="contain"
									style={{ height: 20 * HScale, width: 31 * WScale }}
									source={trash}
								/>
							</Pressable>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
					</View>
					<View className="flex flex-row justify-between items-center w-full">
						<View
							style={{ height: 75 * HScale, width: 150 * WScale }}
							className="flex flex-row justify-start items-center gap-5" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image
									style={{ width: 36 * WScale, height: 36 * HScale }}
									resizeMode="contain"
									source={BoxList}
								/>
							</View>
							<View className="flex justify-center w-full">
								<Text className="font-robotoMedium text-texto text-xs">#0B438</Text>
								<Text className="text-texto text-xs font-roboto">Av. Castillo 1356,</Text>
								<Text className="text-texto text-xs font-roboto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 4 * HScale }} className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								<Image
									resizeMode="contain"
									style={{ height: 20 * HScale, width: 31 * WScale }}
									source={trash}
								/>
							</Pressable>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
					</View>
					<View className="flex flex-row justify-between items-center w-full">
						<View
							style={{ height: 75 * HScale, width: 150 * WScale }}
							className="flex flex-row justify-start items-center gap-5" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image
									style={{ width: 36 * WScale, height: 36 * HScale }}
									resizeMode="contain"
									source={BoxList}
								/>
							</View>
							<View className="flex justify-center w-full">
								<Text className="font-robotoMedium text-texto text-xs">#0B438</Text>
								<Text className="text-texto text-xs font-roboto">Av. Castillo 1356,</Text>
								<Text className="text-texto text-xs font-roboto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 4 * HScale }} className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								<Image
									resizeMode="contain"
									style={{ height: 20 * HScale, width: 31 * WScale }}
									source={trash}
								/>
							</Pressable>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
					</View>
					<View className="flex flex-row justify-between items-center w-full">
						<View
							style={{ height: 75 * HScale, width: 150 * WScale }}
							className="flex flex-row justify-start items-center gap-5" // gap-5 h-[75] w-[150] VER ESTO
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image
									style={{ width: 36 * WScale, height: 36 * HScale }}
									resizeMode="contain"
									source={BoxList}
								/>
							</View>
							<View className="flex justify-center w-full">
								<Text className="font-robotoMedium text-texto text-xs">#0B438</Text>
								<Text className="text-texto text-xs font-roboto">Av. Castillo 1356,</Text>
								<Text className="text-texto text-xs font-roboto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 4 * HScale }} className="flex flex-col items-end justify-center">
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-end items-center"
							>
								<Image
									resizeMode="contain"
									style={{ height: 20 * HScale, width: 31 * WScale }}
									source={trash}
								/>
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
				<Image source={downArrow} />
			</View>
		</View>
	);
};

export default Paquetes;
