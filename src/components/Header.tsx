import { View, Text, Pressable, Dimensions, Platform, Image } from 'react-native';
// import { router, Link } from 'expo-router';
import React from 'react';
import LogoBox from '../assets/LogoBox.svg';
import box from '../assets/box.png';
import Button from './Button';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

type RootStackParamList = {
	HomeIniciarJornada: undefined;
	ObtenerPaquetes: undefined;
};

// type Props = NativeStackScreenProps<RootStackParamList, 'HomeIniciarJornada', 'Repartidores'>;
type Props = {
	navigation: NavigationProp<RootStackParamList>;
}
  

const Header = ({ navigation }: Props) => {

	const isWeb = Platform.OS === 'web';

	return (
		<View
			style={{ marginTop: 6 * HScale }}
			className="w-full flex flex-row justify-between items-center"
		>
			<Pressable onPress={() => navigation.navigate('HomeIniciarJornada')}>
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
					width: 109 * WScale,
					height: 26 * HScale,
					marginTop: 6 * HScale,
				}}
			>
				<Button content="CERRAR SESION" spec="blanco" navigate=''/>
			</View>
		</View>
	);
};

export default Header;
