import { View, Text, Image, Dimensions, ScrollView, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import downArrow from '../assets/arrow-head-down.png';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import BotonActivado from '../assets/BotonActivado.svg';
import Header from '../components/Header';
import List from '../components/List';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';
import { store } from '../state/user';
import { handleUserId, handleUserPackage } from '../services/user.service';

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

const PerfilRepartidor = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const [dropdown, setDropdown] = useState(false);
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	const userId = store.getState().userSelected;
	const [user, setUser] = useState({
		id: '',
		name: '',
		lastname: '',
		email: '',
		photoUrl: '',
		packages: [],
	});
	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await handleUserId(userId);
				const userPackages = await handleUserPackage(userId);
				const updatedUser = { ...userData, packages: userPackages };
				setUser(updatedUser);
			} catch (error) {
				console.error('Error al obtener los datos del usuario:', error);
			}
		};
		fetchData();
	}, [userId]);
	type ListItemPackage = {
		deliveryAddress: string;
		state: string;
		_id: string;
	};

	interface RenderItemsUsersProps {
		item: ListItemPackage;
		index: number;
	}

	const handleArrow = () => {
		dropdown ? setDropdown(false) : setDropdown(true);
	};
	const renderItemsUsers = ({ item, index }: RenderItemsUsersProps) => {
		if (!item) {
			console.error('El ítem en el índice proporcionado es undefined');
			return null;
		}

		const lastItem: boolean = index === 3;

		const id = '#' + item._id.slice(0, 5).toUpperCase() + '...';
		const deliveryAddressSlice = item.deliveryAddress.slice(0, -4);
		const deliveryAddress1 =
			deliveryAddressSlice.length > 17
				? deliveryAddressSlice.slice(0, 20) + '...'
				: deliveryAddressSlice;
		const deliveryAddress2 = item.deliveryAddress.slice(-3);

		return (
			<>
				<View style={{ minHeight: 70 * HScale }}>
					<List
						column1="svg"
						column2="stringsCol"
						content2String={`${id}, ${deliveryAddress1}, ${deliveryAddress2}`}
						column3="svgStringButton"
						content3="entregado"
						navigation={navigation}
					/>
				</View>
				{!dropdown && !lastItem && (
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
				)}
				{dropdown && (
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
				)}
			</>
		);
	};
	const keyExtractorPackage = (_: ListItemPackage, index: number) => `item-${index}`;
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
								uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
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
				style={{ minHeight: 282 * HScale, marginTop: 10 * HScale }}
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
					style={{ minHeight: 192 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-col justify-start items-center"
				>
					{dropdown
						? user.packages.map((item, index) => (
								<View
									key={keyExtractorPackage(item, index)}
									style={{
										height: 70 * HScale,
										width: '100%',
									}}
								>
									{renderItemsUsers({ item, index })}
								</View>
						  ))
						: user.packages.slice(0, 3).map((item, index) => (
								<View
									key={keyExtractorPackage(item, index)}
									style={{
										height: 70 * HScale,
										width: '100%',
									}}
								>
									{renderItemsUsers({ item, index })}
								</View>
						  ))}
				</View>
			</View>
			{!dropdown && (
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
			)}

			<Pressable
				onPress={handleArrow}
				style={{ height: 47.5 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white"
			>
				{dropdown ? (
					isWeb ? (
						<Image source={downArrow} className="rotate-180" />
					) : (
						<ArrowHeadDown width={scaledSize(20)} className="rotate-180" />
					)
				) : isWeb ? (
					<Image source={downArrow} />
				) : (
					<ArrowHeadDown width={scaledSize(20)} />
				)}
			</Pressable>
		</ScrollView>
	);
};

export default PerfilRepartidor;
