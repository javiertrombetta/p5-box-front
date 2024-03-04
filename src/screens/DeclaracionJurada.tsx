import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Platform, Pressable, Text, View } from 'react-native';
import Header from '../components/Header';

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
				style={{ height: 188 * HScale, marginTop: 28 * HScale }}
				className="w-full flex flex-col rounded-xl items-start justify-start align-middle bg-white"
			>
				<View
					style={{ height: 43 * HScale, paddingHorizontal: 16 * WScale }}
					className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
				>
					<Text
						style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(14) }}
						className="flex justify-center items-center font-sairaBold text-texto"
					>
						DECLARACION JURADA
					</Text>
				</View>
			</View>
		</View>
	);
};

export default DeclaracionJurada;
