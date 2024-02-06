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
import Header from '../components/Header';
import Button from '../components/Button';
import List from '../components/List';
import Title from '../components/Title';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const HomeGestionarPedido = () => {
	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header />
			<View style={{ height: 40 * HScale, marginTop: 28 * HScale, width: '100%' }}>
				<Title content={'GESTIONAR PEDIDOS'} />
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
					<ArrowRightBox height={scaledSize(21)} width={scaledSize(19)} />
				</View>
			</View>
			<View
				style={{ height: 248 * HScale, marginTop: 10 * HScale }}
				className="w-full flex rounded-xl bg-white"
			>
				<View style={{ height: 40 * HScale, width: '100%' }}>
					<Title content={'DETALLES'} arrow={'down'} date={true} />
				</View>
				<View
					style={{ height: 192 * HScale }}
					className="flex flex-col justify-evenly align-middle"
				>
					<View style={{ height: 100 * HScale, paddingHorizontal: 16 * WScale }}>
						<List
							column1="circleProgress"
							circleValue={20}
							column2="stringsImg"
							content2String="Repartidores, 2/10 Habilitados"
							column3="buttonVer"
							content3=""
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-[89%] bg-gray-300" />
					</View>
					<View style={{ height: 100 * HScale, paddingHorizontal: 16 * WScale }}>
						<List
							column1="circleProgress"
							circleValue={80}
							column2="stringsImg"
							content2String="Paquetes, 16/20 Repartidos"
							column3="buttonVer"
							content3=""
						/>
					</View>
				</View>
			</View>
			<View
				style={{
					height: 30 * HScale,
					width: 265 * WScale,
					marginTop: 15 * HScale,
				}}
			>
				<Button spec="texto" content="NUEVO PAQUETE" svg={true} />
			</View>
		</View>
	);
};

export default HomeGestionarPedido;
