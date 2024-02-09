import { View, Text, Button, Pressable, Image, Dimensions, Platform } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';


import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import downarrow from '../assets/arrow-head-down.png';
import CircleProgress from '../components/CircleProgress';

import LogoBox from '../assets/LogoBox.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import GreenCircle from '../assets/GreenCircle.svg';
import GrayCircle from '../assets/GrayCircle.svg';
import BlackCircle from '../assets/BlackCircle.svg';
import Header from '../components/Header';
import List from '../components/List';
import { NavigationProp } from '@react-navigation/native';

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

type RootStackParamList = {
	HomeIniciarJornada: undefined;
	ObtenerPaquetes: undefined;
	CreateAccount: undefined;
	Login: undefined;
	RepartoEnCurso: undefined
	// backOffice
	LoginAdmin: undefined;
	HomeGestionarPedido: undefined;
	Repartidores: undefined;
	Paquetes: undefined;
	AddPackage: undefined;
	PerfilRepartidor: undefined;
};

type Props = {
	navigation: NavigationProp<RootStackParamList>;
}

const Repartidores = ({ navigation }: Props ) => {
	const isWeb = Platform.OS === 'web';

	return (
		<View
			className="bg-verde w-full h-full flex-col items-center  flex"
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
		>
			<Header navigation={navigation}/>
			<View
				style={{
					height: 40 * HScale,
					paddingHorizontal: 16 * WScale,
					marginTop: 28 * HScale,
				}}
				className="bg-amarilloVerdoso w-full flex-row items-center justify-between flex rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(18) }}
					className=" flex justify-center items-center font-sairaBold text-texto"
				>
					REPARTIDORES
				</Text>
				<View
					style={{ width: 13 * WScale, height: 40 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center "
				>
					{isWeb ? (
						<Image source={leftArrow} />
					) : (
						<ArrowLeft width={13 * WScale} height={40 * HScale} />
					)}
				</View>
			</View>
			<View
				style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale, marginTop: 10 * HScale }} // px-4 mt-[10] h-[35]
				className="bg-violeta flex-row flex w-full justify-between items-center rounded-t-xl"
			>
				<Text
					style={{ fontSize: scaledSize(14) }}
					className=" font-robotoBold text-texto flex align-middle"
				>
					ENERO
				</Text>
				<View style={{ gap: 4 * WScale }} className="flex flex-row items-center">
					<Text style={{ fontSize: scaledSize(14) }} className="font-roboto">
						mie
					</Text>
					<Text style={{ fontSize: scaledSize(14) }} className="font-robotoBold">
						/ 03
					</Text>
				</View>
			</View>
			<View
				style={{ height: 407 * HScale }} // h-[407]
				className="bg-blanco flex justify-evenly w-full"
			>
				<View
					style={{
						marginVertical: 12 * HScale,
						paddingTop: 2 * HScale,
						paddingHorizontal: 16 * WScale
					}}
				>
					<List
						column1="circleProgress"
						circleValue={52}
						column2="stringsImg"
						content2String="Javier Trombetta, green"
						column3="img"
						content3="https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I"
						navigation={navigation}
					/>
				</View>
				<View className="w-full h-[0.5] bg-gray-300" />
				<View style={{ marginVertical: 12 * HScale, paddingHorizontal: 16 * WScale }}>
					<List
						column1="circleProgress"
						circleValue={100}
						column2="stringsImg"
						content2String="Boris Manzano, black"
						column3="img"
						content3="https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&"
						navigation={navigation}
					/>
				</View>
				<View className="w-full h-[0.7] bg-gray-300" />
				<View style={{ marginVertical: 12 * HScale, paddingHorizontal: 16 * WScale }}>
					<List
						column1="circleProgress"
						circleValue={80}
						column2="stringsImg"
						content2String="Javier Colodro, green"
						column3="img"
						content3="https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc"
						navigation={navigation}
					/>
				</View>
				<View className="w-full h-[1] bg-gray-300" />
				<View style={{ marginVertical: 12 * HScale, paddingHorizontal: 16 * WScale }}>
					<List
						column1="circleProgress"
						circleValue={0}
						column2="stringsImg"
						content2String="Lucas Glave, gray"
						column3="img"
						content3="https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw"
						navigation={navigation}
					/>
				</View>
			</View>
			<View className="w-full h-[0.5] bg-gray-300" />
			<View
				style={{ height: 47.5 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white"
			>
				{isWeb ? (
					<Image className="" source={downarrow} />
				) : (
					<ArrowHeadDown width={scaledSize(20)} />
				)}
			</View>
		</View>
	);
};

export default Repartidores;
