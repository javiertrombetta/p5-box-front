import { View, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import BotonActivado from '../assets/BotonActivado.svg';
import Header from '../components/Header';
import List from '../components/List';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';

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
	PerfilRepartidor = 'PerfilRepartidor',
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const PerfilRepartidor = ({ navigation }: Props) => {
	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View style={{ height: 40 * HScale, marginTop: 28 * HScale, width: '100%' }}>
				<Title
					content={'GESTIONAR PEDIDOS'}
					arrow={'left'}
					navigate={RouteName.Repartidores}
					size={18}
					navigation={navigation}
				/>
			</View>
			<View
				style={{ height: 90 * HScale, marginTop: 10 * HScale, paddingHorizontal: 16 * WScale }}
				className="w-full flex flex-row rounded-xl items-center justify-between align-middle bg-white"
			>
				<View style={{ gap: 12 * WScale }} className="flex flex-row items-center justify-start">
					<View className="flex items-center justify-center">
						<Image
							style={{ width: scaledSize(60), height: scaledSize(60) }}
							resizeMode="cover"
							className="rounded-xl"
							source={{
								uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
							}}
						/>
					</View>
					<View className="flex justify-center">
						<Text
							style={{ fontSize: scaledSize(14) }}
							className="text-start font-robotoBold text-texto"
						>
							Palermo
						</Text>
						<Text
							style={{
								fontSize: scaledSize(8),
								paddingHorizontal: 1 * WScale,
								paddingVertical: 2 * HScale,
								width: 68 * WScale,
								height: 16 * HScale,
							}}
							className="flex items-center justify-center text-center font-robotoMedium text-texto rounded-md bg-verde"
						>
							HABILITADO
						</Text>
					</View>
				</View>
				<View className="flex items-end">
					<BotonActivado width={35 * WScale} hieght={21 * HScale} />
				</View>
			</View>
			<View style={{ height: 48 * HScale, marginTop: 10 * HScale, width: '100%' }}>
				<Title
					content={'REPARTOS PENDIENTES'}
					details={'sin repartos'}
					arrow={'right'}
					size={14}
					navigation={navigation}
					navigate={RouteName.PerfilRepartidor}
				/>
			</View>
			<View
				style={{ height: 282 * HScale, marginTop: 10 * HScale }}
				className="w-full justify-start flex rounded-t-xl bg-white"
			>
				<View style={{ height: 40 * HScale, width: '100%' }}>
					<Title
						content={'HISTORIAL DE REPARTOS'}
						arrow={'down'}
						size={14}
						navigation={navigation}
						navigate={RouteName.PerfilRepartidor}
					/>
				</View>
				<View
					style={{
						paddingHorizontal: 16 * WScale,
						height: 35 * HScale,
					}}
					className="flex justify-center"
				>
					<Text
						style={{
							fontSize: scaledSize(12),
						}}
						className="text-texto font-robotoMedium"
					>
						58 Paquetes entregados
					</Text>
				</View>

				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 0.5 }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 192 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-col justify-start items-center"
				>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<List
							column1="svg"
							column2="stringsCol"
							content2String="#0A903, Las Heras 5678, CABA"
							column3="svgStringButton"
							content3="entregadoTrash"
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
							content3="entregadoTrash"
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
							content3="entregadoTrash"
							navigation={navigation}
						/>
					</View>
				</View>
			</View>
			<View style={{ position: 'relative', height: 1 }} className="w-full bg-gray-300">
				<LinearGradient
					colors={['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 1)']}
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						height: 50 * HScale,
						top: -50 * HScale,
					}}
					start={{ x: 0.5, y: 0.0 }}
					end={{ x: 0.5, y: 1.0 }}
				/>
			</View>
			<View
				style={{ height: 48 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-blanco z-10"
			>
				<ArrowHeadDown height={12 * HScale} width={24 * WScale} />
			</View>
		</View>
	);
};

export default PerfilRepartidor;
