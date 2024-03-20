import { View, Text, Image, Dimensions, Pressable, Platform, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import downArrow from '../assets/arrow-head-down.png';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import List from '../components/List';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';
import { store } from '../state/user';
import { handleUserId, handleUserPackage } from '../services/user.service';
import { handlePackagesDeliveredUser } from '../services/reports.service';

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

const ListPendingsAdmin = ({ navigation }: Props) => {
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
		packagesPendings: [],
		packagesDelivered: [],
	});
	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await handleUserId(userId);
				const userPackages = (await handleUserPackage(userId)) as ListItemPackage[];
				const packagesPendings = userPackages.filter((pack) => pack.state === 'pendiente');
				const updatedUser = {
					...userData,
					packagesPendings: packagesPendings,
				};
				setUser(updatedUser);
			} catch (error) {
				console.error('Error al obtener los datos del usuario:', error);
			}
		};
		fetchData();
	}, [userId]);

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
	const [dropdownTitle, setDropdownTitle] = useState(false);

	const handleDropdown = () => {
		setDropdownTitle(!dropdownTitle);
		dropdown && setDropdown(false);
	};

	const [showContent, setShowContent] = useState(false);

	const toggleDropdown = () => {
		let medida = 35 + 70 * user.packagesPendings.length;
		let toValue = dropdown
			? dropdownTitle
				? medida
				: 40 // dont care
			: user.packagesPendings.length >= 4
			? dropdownTitle
				? 282
				: 40
			: dropdownTitle
			? medida
			: 40;
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
			<>
				<View style={{ minHeight: 70 * HScale }}>
					<List
						column1="svg"
						column2="stringsCol"
						content2String={`${id}, ${deliveryAddress1}, ${deliveryAddress2}`}
						column3="svgStringButton"
						content3="none"
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
		<>
			<Animated.View
				style={
					dropdownTitle && user.packagesPendings.length >= 4
						? {
								marginTop: 10,
								minHeight: heightAnim,
								overflow: 'hidden',
						  }
						: {
								marginTop: 10,
								minHeight: heightAnim,
								overflow: 'hidden',
								borderBottomRightRadius: 12,
								borderBottomLeftRadius: 12,
						  }
				}
				className="w-full justify-start flex rounded-t-xl bg-white"
			>
				<Pressable onPress={handleDropdown} style={{ height: 43 * HScale, width: '100%' }}>
					<Title
						content={'REPARTOS PENDIENTES'}
						arrow={dropdownTitle ? 'down' : 'right'}
						size={14}
						navigation={navigation}
						navigate={RouteName.PerfilRepartidor}
					/>
				</Pressable>
				{showContent && dropdownTitle && (
					<>
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
								{user.packagesPendings.length} Paquetes entregados
							</Text>
						</View>

						<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
							<View style={{ height: 0.5 }} className="w-full bg-gray-300" />
						</View>
						<View
							style={{ paddingLeft: 16 * WScale }}
							className="flex flex-col justify-start items-center"
						>
							{dropdown
								? user.packagesPendings.map((item, index) => (
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
								: user.packagesPendings.slice(0, 3).map((item, index) => (
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

						{!dropdown && dropdownTitle && user.packagesPendings.length >= 4 && (
							<View>
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
						<View style={{ position: 'relative', height: 1 }} className="w-full bg-gray-300" />
					</>
				)}
			</Animated.View>

			{dropdownTitle && showContent && user.packagesPendings.length >= 4 && (
				<Pressable
					onPress={handleArrow}
					style={{ height: 49 * HScale }}
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
			)}
		</>
	);
};

export default ListPendingsAdmin;
