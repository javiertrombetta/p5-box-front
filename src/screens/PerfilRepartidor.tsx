import { View, Text, Image, Dimensions, ScrollView, Platform } from 'react-native';
import { Switch } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import BotonActivado from '../assets/BotonActivado.svg';
import Header from '../components/Header';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';
import { store } from '../state/user';
import { handleToggleState, handleUserId } from '../services/user.service';
import ListRepartosAdmin from '../components/ListRepartosAdmin';
import ListPendingsAdmin from '../components/ListPendingsAdmin';
import Toast from 'react-native-toast-message';
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
type messageObj = {
	message: '';
};

const PerfilRepartidor = ({ navigation }: Props) => {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	const userId = store.getState().userSelected;
	const [user, setUser] = useState({
		name: '',
		photoUrl: '',
		id: '',
	});

	const showToast = (res: messageObj) => {
		Toast.show({
			type: 'success',
			text1: `${res.message}`,
		});
	};

	const [isSwitchOn, setIsSwitchOn] = React.useState(true);
	const onToggleSwitch = () => {
		setIsSwitchOn(!isSwitchOn);
		handleToggleState(user.id).then((res) => showToast(res));
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await handleUserId(userId);
				setUser(userData);
				console.log(userData);
			} catch (error) {
				console.error('Error al obtener los datos del usuario:', error);
			}
		};
		fetchData();
	}, [userId]);

	return (
		<ScrollView
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col"
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
								uri: `${user.photoUrl}`,
							}}
						/>
					</View>
					<View className="flex justify-center">
						<Text
							style={{ fontSize: scaledSize(14) }}
							className="text-start font-robotoBold text-texto"
						>
							{user?.name}
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
					<Switch color={'#CEF169'} value={isSwitchOn} onValueChange={onToggleSwitch} />
				</View>
			</View>
			<ListPendingsAdmin navigation={navigation} />
			<ListRepartosAdmin navigation={navigation} />
		</ScrollView>
	);
};

export default PerfilRepartidor;
