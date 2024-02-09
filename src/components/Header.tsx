import { View, Text, Pressable, Dimensions, Platform, Image } from 'react-native';
import React from 'react';
import LogoBox from '../assets/LogoBox.svg';
import box from '../assets/box.png';
import Button from './Button';
import { NavigationProp } from '@react-navigation/native';

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
}
  

const Header = ({ navigation }: Props) => {
	const client = false; // cambiar por pedido rol
	const isWeb = Platform.OS === 'web';
	const handleNavigate = ()  => {
		client ? navigation.navigate('HomeIniciarJornada') : navigation.navigate('HomeGestionarPedido')
	}

	return (
		<View
			style={{ marginTop: 6 * HScale }}
			className="w-full flex flex-row justify-between items-center"
		>
			<Pressable onPress={handleNavigate}>
				{isWeb ? (
					<Image
						source={box}
						style={{ height: scaledSize(30), width: scaledSize(80.69) }}
						resizeMode="contain"
					/>
				) : (
					<LogoBox height={30 * HScale} width={80.69 * WScale} />
				)}
			</Pressable>
			<View
				style={{
					marginTop: 6 * HScale,
				}}
			>
				<Button content="CERRAR SESION" height={26} width={109} spec="blanco" navigate={client ? "CreateAccount" : "LoginAdmin"} navigation={navigation}/>
			</View>
		</View>
	);
};

export default Header;
