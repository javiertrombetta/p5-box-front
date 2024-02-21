import { View, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';

import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';

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
	PerfilRepartidor = 'PerfilRepartidor',
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
				style={{ height: 40 * HScale, paddingHorizontal: 20 * WScale, marginTop: 28 * HScale }}
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ fontSize: scaledSize(18) }}
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					OBTENER PAQUETES
				</Text>
				<Pressable
					onPress={() => navigation.navigate(RouteName.HomeIniciarJornada)}
					style={{ paddingVertical: 8 * HScale }}
					className="flex justify-center items-center"
				>
					<ArrowLeft width={scaledSize(14)} />
				</Pressable>
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
					<View style={{ paddingHorizontal: 16 * WScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Amenabar 2356, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Av Carabobo y Rivadavia, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale, height: 40 * HScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Melian 1242, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale, height: 40 * HScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Castillo 670, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale, height: 40 * HScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Gorriti 4595, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale, height: 40 * HScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Av. Gral. Mosconi 1056, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale, height: 40 * HScale }}>
						<List
							column1="buttonCheck"
							column2="stringsRow"
							content2String="Tacuarí 1797, CABA"
							column3="none"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View style={{ paddingHorizontal: 16 * WScale, height: 40 * HScale }}>
						<List
							column1="buttonCheck"
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
