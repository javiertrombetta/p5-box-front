import React from 'react';
import { View, ImageBackground, Text, Dimensions, Pressable } from 'react-native';
import ArrowLeft from '../assets/ArrowLeft.svg';
import buenos from '../assets/buenos.png';
import Header from '../components/Header';
import Button from '../components/Button';
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
	DeclaracionJurada = 'DeclaracionJurada',
	ForgotPassword = 'ForgotPassword',
	NewPassword = 'NewPassword',
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

// NAVIGATION ADMIN

function RepartoEnCurso({ navigation }: Props) {
	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 20 * WScale, marginTop: 28 * HScale }}
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(18) }}
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					REPARTO EN CURSO
				</Text>
				<Pressable
					onPress={() => navigation.navigate(RouteName.HomeIniciarJornada)}
					style={{ width: 13 * WScale, height: 40 * HScale, paddingVertical: 8 * HScale }}
					className="flex justify-center items-center"
				>
					<ArrowLeft width={scaledSize(14)} />
				</Pressable>
			</View>

			<View
				style={{ marginTop: 10 * HScale }}
				className="flex items-center justify-center rounded-xl overflow-hidden"
			>
				<ImageBackground
					style={{ height: 396 * HScale, width: 300 * WScale }}
					className="flex items-center justify-end"
					resizeMode="cover"
					source={buenos}
				>
					<View style={{ paddingVertical: 16 * HScale }}>
						<View
							style={{
								height: 75 * HScale,
								width: 270 * WScale,
								padding: 16 * WScale,
							}}
							className="bg-violeta object-cover justify-center items-start rounded-2xl"
						>
							<View style={{ gap: 4 * WScale }} className="flex flex-row">
								<Text
									style={{ fontSize: scaledSize(12) }}
									className="font-robotoBold text-texto text-center"
								>
									Destino:
								</Text>
								<Text
									style={{ fontSize: scaledSize(12) }}
									className="font-roboto text-texto text-center"
								>
									Amenabar 2100, CABA
								</Text>
							</View>
							<View style={{ gap: 4 * WScale }} className="flex flex-row">
								<Text style={{ fontSize: scaledSize(12) }} className="font-robotoBold text-texto">
									Número de paquete:
								</Text>
								<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
									#0A235
								</Text>
							</View>
							<View style={{ gap: 4 * WScale }} className="flex flex-row">
								<Text style={{ fontSize: scaledSize(12) }} className="font-robotoBold text-texto">
									Recibe:
								</Text>
								<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
									David Rodriguez
								</Text>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>

			<View
				style={{
					height: 30 * HScale,
					width: 270 * WScale,
					marginTop: 24 * HScale,
				}}
			>
				<Button
					content="FINALIZAR"
					width={270}
					height={30}
					spec="texto"
					navigation={navigation}
					navigate={RouteName.HomeIniciarJornada}
				/>
			</View>
			<View
				style={{
					height: 30 * HScale,
					width: 270 * WScale,
					marginTop: 10 * HScale,
				}}
			>
				<Button
					content="CANCELAR ENTREGA"
					width={270}
					height={30}
					spec="blanco"
					navigation={navigation}
					navigate={RouteName.HomeIniciarJornada}
				/>
			</View>
		</View>
	);
}

export default RepartoEnCurso;
