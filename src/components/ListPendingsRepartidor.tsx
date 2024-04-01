import {
	View,
	Text,
	Dimensions,
	Pressable,
	Platform,
	Animated,
	Easing,
	VirtualizedList,
} from 'react-native';

import React, { useEffect, useRef, useState } from 'react';
import List from '../components/List';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';
import { login, store } from '../state/user';
import { handleMePackages } from '../services/user.service';
import { handleDelivered } from '../services/package.service';
import { useSelector } from 'react-redux';

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

const ListPendingsRepartidor = ({ navigation }: Props) => {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	let user = store.getState();
	const [packagesDelivered, setPackagesDelivered] = useState([]);
	const [packagesPending, setPackagesPending] = useState([]);

	type User = {
		back: string;
	};
	let user1 = useSelector((state) => state) as User;

	useEffect(() => {
		handleDelivered().then((data) => data && setPackagesDelivered(data));
		handleMePackages().then((data) => data && setPackagesPending(data));
		console.log(store.getState().back);
	}, [packagesPending.length, packagesDelivered.length, store.getState().back, user1.back]);

	useEffect(() => {
		console.log(store.getState().back);
		store.dispatch(login({ ...user, back: undefined }));
	}, [user.back === `cancel`]);

	type ListItemPackage = {
		deliveryAddress: string;
		address: string;
		state: string;
		_id: string;
	};

	interface RenderItemsUsersProps {
		item: ListItemPackage;
		index: number;
	}

	const heightAnim = useRef(new Animated.Value(40)).current;
	const [dropdownTitle, setDropdownTitle] = useState(true);

	const handleDropdown = () => {
		setDropdownTitle(!dropdownTitle);
	};

	const [showContent, setShowContent] = useState(false);

	const toggleDropdown = () => {
		let toValue = dropdownTitle ? 188 : 43;
		Animated.timing(heightAnim, {
			toValue,
			duration: 300,
			easing: Easing.ease,
			useNativeDriver: false,
		}).start(() => {
			setShowContent(dropdownTitle);
		});
	};
	useEffect(() => {
		toggleDropdown();
	}, [dropdownTitle]);
	useEffect(() => {
		if (dropdownTitle) {
			const timer = setTimeout(() => {
				setShowContent(true);
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [dropdownTitle]);
	const renderItemsPendientes = ({ item, index }: RenderItemsUsersProps) => {
		if (!item) {
			console.error('El ítem en el índice proporcionado es undefined');
			return null;
		}

		const lastItem: boolean = index === 3;

		const id = '#' + item._id.slice(0, 5).toUpperCase() + '...';
		const deliveryAddressSlice = item.deliveryAddress
			? item.deliveryAddress.slice(0, -4)
			: item.address.slice(0, -4);
		const deliveryAddress1 =
			deliveryAddressSlice.length > 17
				? deliveryAddressSlice.slice(0, 20) + '...'
				: deliveryAddressSlice;
		const deliveryAddress2 = item.deliveryAddress
			? item.deliveryAddress.slice(-3)
			: item.address.slice(-3);

		return (
			<View>
				<View
					style={{ height: 72 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<List
						column1="svg"
						column2="stringsCol"
						content2String={`${id}, ${deliveryAddress1}, ${deliveryAddress2}`}
						column3="svgStringButton"
						content3={item.state}
						idPackage={`${item._id}`}
						navigation={navigation}
					/>
				</View>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
			</View>
		);
	};
	const keyExtractorPending = (_: ListItemPackage, index: number) => `item-${index}`;
	return (
		<>
			<Animated.View
				style={{
					marginTop: 28,
					height: heightAnim,
					overflow: 'hidden',
					borderBottomRightRadius: 12,
					borderBottomLeftRadius: 12,
				}}
				className="w-full justify-start flex rounded-t-xl bg-white"
			>
				<Pressable onPress={handleDropdown} style={{ height: 43 * HScale, width: '100%' }}>
					<Title
						content={'REPARTOS PENDIENTES'}
						arrow={dropdownTitle ? 'down' : 'right'}
						size={14}
						navigation={navigation}
						navigate={RouteName.HomeIniciarJornada}
					/>
				</Pressable>
				{showContent && dropdownTitle && (
					<>
						{packagesPending.length > 0 ? (
							<VirtualizedList
								className="w-full"
								data={packagesPending}
								renderItem={renderItemsPendientes}
								keyExtractor={keyExtractorPending}
								getItemCount={() => packagesPending.length}
								getItem={(data, index) => data[index]}
							/>
						) : (
							<Text className="text-center text-texto mt-2">No tienes paquetes pendientes.</Text>
						)}
					</>
				)}
			</Animated.View>
		</>
	);
};

export default ListPendingsRepartidor;
