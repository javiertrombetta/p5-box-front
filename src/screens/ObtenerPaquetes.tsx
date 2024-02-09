import { View, Text, Pressable, Image, Dimensions, Switch } from 'react-native';
import React, { useState } from 'react';

import box from '../assets/box.png';
import arrowLeft from '../assets/arrow-left.png';
import downArrow from '../assets/arrow-head-down.png';
import buttonTrue from '../assets/buttonTrue.png';

import LogoBox from '../assets/LogoBox.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import ButtonTrue from '../assets/ButtonTrue.svg';

import Header from '../components/Header';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';
import List from '../components/List';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

type RootStackParamList = {
    [key in RouteName]: undefined;
};

enum RouteName {
	HomeIniciarJornada = 'HomeIniciarJornada',
	ObtenerPaquetes = 'ObtenerPaquetes',
	CreateAccount = 'CreateAccount',
	Login = 'Login',
	RepartoEnCurso = 'RepartoEnCurso',
	LoginAdmin = 'LoginAdmin',
	HomeGestionarPedido = 'HomeGestionarPedido',
	Repartidores = 'Repartidores',
	Paquetes = 'Paquetes',
	AddPackage = 'AddPackage',
	PerfilRepartidor = 'PerfilRepartidor'
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const ObtenerPaquetes = ({ navigation }: Props) => {
	return (
		<View
			className="bg-verde w-full h-full flex-col items-center  flex"
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 20 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ fontSize: scaledSize(18) }} // py-1
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					OBTENER PAQUETES
				</Text>
				<View
					style={{ paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					{/* <Image source={arrowLeft} /> */}
					<ArrowLeft width={scaledSize(14)} />
				</View>
			</View>
			<View
				style={{ height: 409 * HScale, marginTop: 10 * HScale }}
				className="w-full flex rounded-t-xl bg-white"
			>
				<View
					style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-t-xl items-center justify-center bg-violeta"
				>
					<Text
						className="font-robotoMedium text-texto text-center"
						style={{ fontSize: scaledSize(12) }}
					>
						¿Cuántos paquetes repartirás hoy?
					</Text>
				</View>
				<View
					style={{
						height: 374 * HScale,
						paddingVertical: 4 * HScale,
					}}
					className="flex flex-col items-start justify-between"
				>
					<View style={{paddingHorizontal: 16 * WScale}}>
						<List
							column1="buttonTrue"
							column2="stringsRow"
							content2String="Amenabar 2356, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale}}>
						<List
							column1="buttonTrue"
							column2="stringsRow"
							content2String="Av Carabobo y Rivadavia, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale, height: 40 * HScale}}>
						<List
							column1="buttonTrue"
							column2="stringsRow"
							content2String="Melian 1242, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale, height: 40 * HScale}}>
						<List
							column1="buttonFalse"
							column2="stringsRow"
							content2String="Castillo 670, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale, height: 40 * HScale}}>
						<List
							column1="buttonFalse"
							column2="stringsRow"
							content2String="Gorriti 4595, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale, height: 40 * HScale}}>
						<List
							column1="buttonFalse"
							column2="stringsRow"
							content2String="Av. Gral. Mosconi 1056, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale, height: 40 * HScale}}>
						<List
							column1="buttonFalse"
							column2="stringsRow"
							content2String="Tacuarí 1797, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{paddingHorizontal: 16 * WScale, height: 40 * HScale}}>
						<List
							column1="buttonFalse"
							column2="stringsRow"
							content2String="Av. Gaona 1284, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
				</View>
			</View>
			<View style={{ height: 1 * HScale }} className="w-full bg-gray-300 z-10" />
			<View
				style={{ height: 41 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white z-10"
			>
				<ArrowHeadDown height={19 * HScale} width={24 * WScale} />
			</View>
			<View
				style={{
					marginTop: 10 * HScale,
				}}
			>
				<Button
					content="INICIAR JORNADA"
					width={270}
					height={30}
					spec="texto"
					navigation={navigation}
					navigate={RouteName.HomeIniciarJornada}
				/>
			</View>
		</View>
	);
};

export default ObtenerPaquetes;
