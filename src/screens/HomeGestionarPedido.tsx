import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import CircleProgress from '../components/CircleProgress';

import box from '../assets/box.png';
import boxRight from '../assets/boxRight.png';
import boxLeft from '../assets/boxLeft.png';
import vectorSuma from '../assets/vectorSuma.png';
import arrowDown from '../assets/arrow-head-down.png';
import personas from '../assets/Group 37396.png';

import LogoBox from '../assets/LogoBox.svg';
import ArrowRightBox from '../assets/ArrowRightBox.svg';
import ArrowLeftBox from '../assets/ArrowLeftBox.svg';
import Sum from '../assets/Sum.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import IconsPeople from '../assets/IconsPeople.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const HomeGestionarPedido = () => {
	return (
		<View
			style={{ paddingHorizontal: 32 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 6 * HScale }}
				className="w-full flex flex-row justify-between items-center"
			>
				{/* <Image
					source={box}
					style={{ height: 30 * HScale, width: 80.69 * WScale }}
					resizeMode="contain"
				/> */}
				<LogoBox height={30 * HScale} width={80.69 * WScale} />
				<Pressable
					style={{
						width: 109 * WScale,
						height: 26 * HScale,
						marginTop: 8 * HScale,
						borderRadius: 8,
					}} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border border-texto text-texto"
				>
					<Text style={{ fontSize: scaledSize(12) }} className="text-center font-roboto">
						CERRAR SESION
					</Text>
				</Pressable>
			</View>
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }}
				className="bg-amarilloVerdoso w-full flex-row items-center justify-center flex rounded-xl"
			>
				<Text
					style={{fontSize: scaledSize(18) }}
					className="text-lg flex justify-center items-center font-sairaBold text-texto"
				>
					GESTIONAR PEDIDOS
				</Text>
			</View>
			<View
				style={{ height: 96 * HScale, marginTop: 10 * HScale }}
				className="w-full flex flex-row rounded-xl items-center justify-around align-middle bg-white"
			>
				<View className="w-[30%] flex items-center justify-center">
					<Image
						style={{ width: scaledSize(60), height: scaledSize(60) }}
						resizeMode="cover"
						className="rounded-xl"
						source={{
							uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
						}}
					/>
				</View>
				<View className="w-[70%]">
					<Text
						style={{ fontSize: scaledSize(14) }}
						className="text-start  text-texto font-robotoBold"
					>
						¡Hola Admin!
					</Text>
					<Text style={{ fontSize: scaledSize(14) }} className="text-start text-texto font-roboto">
						Estos son los pedidos del dia
					</Text>
				</View>
			</View>

			{/*style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale, marginTop: 10 * HScale }} // px-4 mt-[10] h-[35]
				className="bg-violeta flex-row flex w-full justify-between items-center rounded-t-xl"  */}
			{/* 	<View className="w-full h-[30] flex rounded-t-xl justify-center bg-violeta"> */}
			<View style={{ height: 84 * HScale, marginTop: 10 }} className="w-full flex justify-center">
				<View
					style={{ height: 30 * HScale, paddingHorizontal: 16 * WScale }} // px-4 mt-[10] h-[35]
					className="bg-violeta flex-row flex w-full justify-between items-center rounded-t-xl"
				>
					<Text
						style={{ fontSize: scaledSize(14) }}
						className="font-robotoBold text-texto flex align-middle"
					>
						ENERO
					</Text>
				</View>
				<View
					style={{ height: 54 * HScale }}
					className="w-full flex flex-row rounded-b-xl items-center justify-evenly bg-white"
				>
					{/* <Image style={{ width: scaledSize(19), height: scaledSize(21) }} source={boxLeft} /> */}
					<ArrowLeftBox height={scaledSize(21)} width={scaledSize(19)} />
					<View
						style={{ width: 34 * WScale, height: 34 * HScale }}
						className="rounded-md flex items-center justify-center"
					>
						<Text style={{ fontSize: scaledSize(12) }} className="font-saira flex text-end">
							lun
						</Text>
						<Text
							style={{ marginTop: -8 * HScale }}
							className="font-sairaBold flex items-start justify-start text-start"
						>
							01
						</Text>
					</View>
					<View
						style={{ width: 34 * WScale, height: 34 * HScale }}
						className="rounded-md flex items-center justify-center"
					>
						<Text style={{ fontSize: scaledSize(12) }} className="font-saira flex text-end">
							mar
						</Text>
						<Text
							style={{ marginTop: -8 * HScale }}
							className="font-sairaBold flex items-start justify-start text-start"
						>
							02
						</Text>
					</View>
					<View
						style={{ width: 38 * WScale, height: 38 * HScale }}
						className="rounded-md bg-amarilloVerdoso flex justify-center items-center"
					>
						<Text style={{ fontSize: scaledSize(12) }} className="font-saira flex text-end">
							mie
						</Text>
						<Text
							style={{ marginTop: -8 * HScale }}
							className="font-sairaBold flex items-start justify-start text-start"
						>
							03
						</Text>
					</View>
					<View
						style={{ width: 34 * WScale, height: 34 * HScale }}
						className="rounded-md flex items-center justify-center"
					>
						<Text
							style={{ fontSize: scaledSize(12) }}
							className="font-saira  flex text-end opacity-50"
						>
							jue
						</Text>
						<Text
							style={{ marginTop: -8 * HScale }}
							className="font-sairaBold flex items-start justify-start text-start opacity-50"
						>
							04
						</Text>
					</View>
					<View
						style={{ width: 34 * WScale, height: 34 * HScale }}
						className="rounded-md  flex items-center justify-center"
					>
						<Text
							style={{ fontSize: scaledSize(12) }}
							className="font-saira flex text-end opacity-50"
						>
							vie
						</Text>
						<Text
							style={{ marginTop: -8 * HScale }}
							className="font-sairaBold flex items-start justify-start text-start opacity-50"
						>
							05
						</Text>
					</View>
					{/* <Image style={{ width: scaledSize(19), height: scaledSize(21) }} source={boxRight} /> */}
					<ArrowRightBox height={scaledSize(21)} width={scaledSize(19)} />
				</View>
			</View>
			{/* style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex justify-between rounded-xl" */}
			{/* className="w-full h-[43] flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"> */}
			<View
				style={{ height: 248 * HScale, width: 300 * WScale, marginTop: 10 * HScale }}
				className="w-full flex rounded-xl bg-white"
			>
				<View
					style={{ height: 43 * HScale }}
					className="w-full  flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"
				>
					<Text style={{ fontSize: scaledSize(14) }} className="ml-5 font-sairaBold text-texto">
						DETALLES
					</Text>
					<View className="flex flex-row items-center justify-center gap-2">
						<Text style={{ fontSize: scaledSize(12) }} className="font-saira text-texto">
							03/01/23
						</Text>
						<Pressable style={{ marginRight: 20 }}>
							{/* <Image style={{ height: 8 * HScale, width: 14 * WScale }} source={arrowDown} /> */}
							<ArrowHeadDown height={8 * HScale} width={14 * WScale} />
						</Pressable>
					</View>
				</View>
				<View
					style={{ height: 192 * HScale }}
					className="flex flex-col  justify-evenly align-middle"
				>
					<View style={{ height: 125 }} className="flex flex-row justify-evenly px-4 items-center">
						<View className="flex justify-center">
							<CircleProgress value={20} radius={scaledSize(38)} />
						</View>
						<View
							style={{ height: 40 * HScale, marginRight: 35 * WScale }}
							className="flex justify-center align-middle"
						>
							<Text
								style={{ paddingLeft: 15, fontSize: scaledSize(14) }}
								className="font-robotoBold"
							>
								Repartidores
							</Text>
							<Text
								style={{ paddingLeft: 15, fontSize: scaledSize(12), marginTop: 1 }}
								className="font-roboto"
							>
								2/10 Habilitados
							</Text>
							{/* <Image
								source={personas}
								style={{ height: scaledSize(25), width: scaledSize(45), marginTop: 1 * HScale }}
							/> */}
							<IconsPeople
								height={scaledSize(25)}
								width={scaledSize(45)}
								marginTop={10 * HScale}
								left={15 * HScale}
							/>
						</View>
						<View className="flex justify-center">
							<Pressable
								style={{ height: 26 * HScale, width: 56 * WScale, borderRadius: 8 }}
								className="flex flex-row justify-center items-center border bg-texto"
							>
								<Text
									style={{ fontSize: scaledSize(12) }}
									className="text-center text-amarilloVerdoso"
								>
									VER
								</Text>
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 * HScale }} className="w-[89%] bg-gray-300" />
					</View>
					<View className="flex flex-row justify-around">
						<View className="flex justify-center">
							<CircleProgress value={80} />
						</View>
						<View
							style={{ height: 40 * HScale, marginRight: 25 * WScale, marginVertical: 15 * HScale }}
							className="flex justify-center"
						>
							<Text className="font-robotoBold">Paquetes</Text>
							<Text style={{ marginTop: 1 }} className="font-roboto">
								16/20 Habilitados
							</Text>
							<Image
								source={personas}
								style={{ height: scaledSize(25), width: scaledSize(45), marginTop: 1 * HScale }}
							/>
						</View>
						<View className="flex justify-center">
							<Pressable
								style={{ height: 26 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-center items-center border rounded-xl bg-texto"
							>
								<Text
									style={{ fontSize: scaledSize(12) }}
									className="text-center text-amarilloVerdoso"
								>
									VER
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
			<Pressable
				style={{ height: 30 * HScale, width: 265 * WScale, marginTop: 15, borderRadius: 8 }}
				className="flex flex-row justify-center items-center align-middle border bg-texto"
			>
				<Text
					style={{ fontSize: scaledSize(12) }}
					className="text-center mr-2 text-amarilloVerdoso"
				>
					NUEVO PAQUETE
				</Text>
				{/* <Image style={{ height: 12 * HScale, width: 12 * WScale }} source={vectorSuma} /> */}
				<Sum height={ 12 * HScale } width={12 * WScale} />
			</Pressable>
		</View>
	);
};

export default HomeGestionarPedido;
