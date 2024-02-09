import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import Header from '../components/Header';
import { NavigationProp } from '@react-navigation/native';

import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import entregado from '../assets/entregado.png';
import downarrow from '../assets/arrow-head-down.png';
import boxlist from '../assets/BoxList.png';
import tachito from '../assets/trash.png';
import enCurso from '../assets/EllipseGreen.png';
import pendiente from '../assets/EllipseOrange.png';

import LogoBox from '../assets/LogoBox.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import Entregado from '../assets/Entregado.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Box from '../assets/Box.svg';
import Trash from '../assets/Trash.svg';
import EllipseGreen from '../assets/EllipseGreen.svg';
import EllipseOrange from '../assets/EllipseOrange.svg';
import Button from '../components/Button';
import List from '../components/List';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

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
};

const HomeIniciarJornada = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 188 * HScale, marginTop: 28 * HScale }} // h-24 mt-[10]
				className="w-full flex flex-col rounded-xl items-start justify-start align-middle bg-white"
			>
				<View
					style={{ height: 43 * HScale, paddingHorizontal: 16 * WScale }} // h-[40] mt-[28] px-4
					className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
				>
					<Text
						style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(14) }} // py-1
						className="flex justify-center items-center font-sairaBold text-texto"
					>
						REPARTOS PENDIENTES
					</Text>
					<View
						style={{ paddingVertical: 8 * HScale }}
						className="flex justify-center items-center"
					>
						<ArrowLeft width={13 * WScale} height={15 * HScale} />
					</View>
				</View>
				<View
					style={{ height: 70 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<List
						column1="svg"
						column2="stringsCol"
						content2String="#0H167, Amenabar 2356, CABA"
						column3="svgStringButton"
						content3="enCursoTrash"
						navigation={navigation}
					/>
				</View>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 70 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<List
						column1="svg"
						column2="stringsCol"
						content2String="#0H167, Amenabar 2356, CABA"
						column3="svgStringButton"
						content3="pendienteIniciar"
						navigation={navigation}
					/>
				</View>
			</View>

			<View
				style={{ height: 293 * HScale, marginTop: 10 * HScale }}
				className="w-full justify-start flex rounded-xl bg-white"
			>
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"
				>
					<Text style={{ fontSize: scaledSize(14) }} className="font-sairaBold text-texto">
						HISTORIAL DE REPARTOS
					</Text>
					<Pressable>
						{isWeb ? <Image source={downarrow} /> : <ArrowHeadDown width={scaledSize(14)} />}
					</Pressable>
				</View>
				<Text
					style={{
						paddingVertical: 8 * HScale,
						paddingHorizontal: 16 * WScale,
						fontSize: scaledSize(12),
					}}
					className="font-robotoMedium text-texto"
				>
					58 Paquetes entregados
				</Text>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 210 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-col justify-around items-center"
				>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<List
							column1="svg"
							column2="stringsCol"
							content2String="#0B438, Castillo 1356, CABA"
							column3="svgStringButton"
							content3="entregado"
							navigation={navigation}
						/>
					</View>
					<View style={{ paddingRight: 16 * WScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<List
							column1="svg"
							column2="stringsCol"
							content2String="#0H167, Av. Carabobo y Rivadavia, CABA"
							column3="svgStringButton"
							content3="entregado"
							navigation={navigation}
						/>
					</View>
					<View style={{ paddingRight: 16 * WScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<List
							column1="svg"
							column2="stringsCol"
							content2String="#0A903, Las Heras 5678, CABA"
							column3="svgStringButton"
							content3="entregado"
							navigation={navigation}
						/>
					</View>
				</View>
			</View>
			<View style={{ marginTop: 24 * HScale }} className="flex justify-center items-center">
				<Button
					content="OBTENER PAQUETES"
					height={28}
					width={270}
					spec="texto"
					navigation={navigation}
					navigate="ObtenerPaquetes"
				/>
			</View>
		</View>
	);
};

export default HomeIniciarJornada;
