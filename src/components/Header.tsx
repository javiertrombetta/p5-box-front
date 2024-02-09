import { View, Text, Pressable, Dimensions, Platform, Image } from 'react-native';
import React from 'react';
import LogoBox from '../assets/LogoBox.svg';
import box from '../assets/box.png';
import Button from './Button';
import { NavigationProp } from '@react-navigation/native';
import HomeGestionarPedido from '../screens/HomeGestionarPedido';

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
}
  

const Header = ({ navigation }: Props) => {
	const client = false;
	const isWeb = Platform.OS === 'web';
	const handleNavigate = ()  => {
		client ? navigation.navigate(RouteName.HomeIniciarJornada) : navigation.navigate(RouteName.HomeGestionarPedido)
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
				<Button content="CERRAR SESION" height={26} width={109} spec="blanco" navigate={client ? RouteName.Login : RouteName.LoginAdmin} navigation={navigation}/>
			</View>
		</View>
	);
};

export default Header;
