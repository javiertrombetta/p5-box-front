import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Platform, Pressable, Text, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Title from '../components/Title';
import CircleCheckbox from '../components/CircleCheckbox';
import { Circle } from 'react-native-svg';

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
	PerfilRepartidor = 'PerfilRepartidor',
	DeclaracionJurada = 'DeclaracionJurada',
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const DeclaracionJurada = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 188 * HScale }}
				className="w-full flex flex-col rounded-xl justify-start align-middle items-center"
			>
				<View style={{ height: 40 * HScale, marginTop: 28 * HScale, width: '100%' }}>
					<Title
						content={'DECLARACIÓN JURADA'}
						size={18}
						navigate={RouteName.HomeGestionarPedido}
						navigation={navigation}
					/>
				</View>

				{/* PRIMER CUADRADO BLANCO */}
				<View
					style={{
						marginTop: 10 * HScale,
						height: 118 * HScale,
						paddingVertical: 10 * HScale,
						paddingHorizontal: 10 * WScale,
					}}
					className="w-full flex flex-col rounded-xl justify-between bg-white"
				>
					<View
						style={{
							height: 14 * HScale,
							width: 71 * WScale,
						}}
						className="bg-violeta rounded-2xl flex items-center relative"
					>
						<Text
							style={{ height: 75 * HScale, fontSize: scaledSize(10) }}
							className="absolute top-[-2]"
						>
							Requerido*
						</Text>
					</View>

					<View style={{ paddingHorizontal: 15 * WScale }}>
						<Text
							style={{ fontSize: scaledSize(14) }}
							className="font-robotoMedium text-texto text-center"
						>
							¿Ha consumido bebidas alcohólicas en las ultimas 12 horas?
						</Text>
					</View>
					<View style={{ paddingHorizontal: 10 * WScale }}>
						<View style={{ height: 1 }} className="bg-gray-400 w-full" />
					</View>

					<View className="flex flex-row justify-center" style={{ gap: 30 * WScale }}>
						<CircleCheckbox />
					</View>
				</View>

				{/* SEGUNDO CUADRADO BLANCO */}
				<View
					style={{
						marginTop: 10 * HScale,
						height: 153 * HScale,
						paddingVertical: 10 * HScale,
						paddingHorizontal: 10 * WScale,
					}}
					className="w-full flex flex-col rounded-xl justify-between bg-white"
				>
					<View
						style={{
							height: 14 * HScale,
							width: 71 * WScale,
						}}
						className="bg-violeta rounded-2xl flex items-center relative"
					>
						<Text
							style={{ height: 75 * HScale, fontSize: scaledSize(10) }}
							className="absolute top-[-2]"
						>
							Requerido*
						</Text>
					</View>

					<View style={{ paddingHorizontal: 15 * WScale }}>
						<Text
							style={{ fontSize: scaledSize(14) }}
							className="font-robotoMedium text-texto text-center"
						>
							¿Usted esta haciendo uso de algún tipo de medicamento psicoactivo?
						</Text>

						<Text
							style={{ fontSize: scaledSize(10), marginTop: 5 * HScale }}
							className="font-robotoMedium text-texto text-center"
						>
							por ejemplo tranquizantes, antigripales, antialérgicos o para insomnio
						</Text>
					</View>

					<View style={{ paddingHorizontal: 10 * WScale }}>
						<View style={{ height: 1 }} className="bg-gray-400 w-full" />
					</View>

					<View className="flex flex-row justify-center" style={{ gap: 30 * WScale }}>
						<CircleCheckbox />
					</View>
				</View>

				{/* TERCER CUADRADO BLANCO */}
				<View
					style={{
						marginTop: 10 * HScale,
						height: 133 * HScale,
						paddingVertical: 10 * HScale,
						paddingHorizontal: 10 * WScale,
					}}
					className="w-full flex flex-col rounded-xl justify-between bg-white"
				>
					<View
						style={{
							height: 14 * HScale,
							width: 71 * WScale,
						}}
						className="bg-violeta rounded-2xl flex items-center relative"
					>
						<Text
							style={{ height: 75 * HScale, fontSize: scaledSize(10) }}
							className="absolute top-[-2]"
						>
							Requerido*
						</Text>
					</View>

					<View style={{ paddingHorizontal: 15 * WScale }}>
						<Text
							style={{ fontSize: scaledSize(14) }}
							className="font-robotoMedium text-texto text-center"
						>
							¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga?
						</Text>
					</View>
					<View style={{ paddingHorizontal: 10 * WScale }}>
						<View style={{ height: 1 }} className="bg-gray-400 w-full" />
					</View>
					<View className="flex flex-row justify-center" style={{ gap: 30 * WScale }}>
						<CircleCheckbox />
					</View>
				</View>

				<View
					style={{
						height: 30 * HScale,
						width: 270 * WScale,
						marginTop: 36 * HScale,
					}}
				>
					<Button
						content="CONTINUAR"
						width={270}
						height={30}
						spec="texto"
						navigation={navigation}
						navigate={RouteName.HomeIniciarJornada}
					/>
				</View>
			</View>
		</View>
	);
};

export default DeclaracionJurada;
