import { View, Text, Image, Dimensions, Platform, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import downarrow from '../assets/arrow-head-down.png';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Header from '../components/Header';
import List from '../components/List';
import { NavigationProp } from '@react-navigation/native';
import Title from '../components/Title';
import { login, store } from '../state/user';
import { es } from 'date-fns/locale';
import { handleDeliverymanDelivery, handleTotalDeliveryman } from '../services/reports.service';
import { format } from 'date-fns';
import { handleUserId } from '../services/user.service';

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

const Repartidores = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const [dropdown, setDropdown] = useState(false);
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	type ListItemUsers = {
		email: string;
		id: string;
		lastname: string;
		name: string;
		roles: string[];
		photoUrl: string;
		percentage: { percentage: number };
	};

	type idsObj = {
		userId: string;
		state: string;
	};

	const [dayFormat, setDayFormat] = useState<Date | string>();
	let user = store.getState();
	let date = store.getState().date;
	const [repartidores, setRepartidores] = useState<ListItemUsers[]>([]);

	useEffect(() => {
		let year = date.slice(0, 4);
		let month = date.slice(5, 7);
		let day = date.slice(8, 10);
		let newDate = new Date(parseInt(year), parseInt(month), parseInt(day));
		store.dispatch(
			login({
				...user,
				date: date,
				roles: user.roles,
				indexNavigation: navigation.getState().index,
			})
		);
		setDayFormat(format(newDate, 'EEE LLLL', { locale: es }));
		handleTotalDeliveryman(year.toString(), month.toString(), day.toString())
			.then((res) => {
				if (res) {
					const userPromises = res.map((user: idsObj) => handleUserId(user.userId));
					return Promise.all(userPromises);
				} else {
					setRepartidores([]);
					return null;
				}
			})
			.then((userDetailsArray) => {
				if (userDetailsArray) {
					userDetailsArray.map((user: ListItemUsers) => {
						user.roles[0] === 'repartidor' &&
							handleDeliverymanDelivery(year, month, day, user.id).then((percentage) => {
								user = { ...user, percentage };
								setRepartidores((prevState) => [...prevState, user]);
							});
					});
				}
			})
			.catch((error) => {
				console.error('Error al obtener detalles de los usuarios:', error);
			});
	}, [date]);

	const handleArrow = () => {
		dropdown ? setDropdown(false) : setDropdown(true);
	};

	const renderItemsUsers = ({ item }: { item: ListItemUsers }) => {
		if (!item) {
			console.error('El ítem en el índice proporcionado es undefined');
			return null;
		}
		return (
			<View>
				<View
					style={{ height: 101 * HScale, padding: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<List
						column1="circleProgress"
						circleValue={item.percentage.percentage}
						column2="string"
						content2String={`${item.name}`}
						column3="img"
						content3={item.photoUrl}
						navigation={navigation}
						idPackage={item.id}
					/>
				</View>
				<View className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
			</View>
		);
	};

	const keyExtractorUsers = (_: ListItemUsers, index: number) => `item-${index}`;
	return (
		<ScrollView style={{ paddingVertical: 6 * HScale }} className="w-full h-full bg-verde">
			<View
				className="bg-verde w-full h-full flex-col items-center  flex"
				style={{ paddingHorizontal: 30 * WScale }}
			>
				<Header navigation={navigation} />
				<View
					style={{
						height: 40 * HScale,
						paddingHorizontal: 16 * WScale,
						marginTop: 28 * HScale,
					}}
					className="bg-amarilloVerdoso w-full flex-row items-center justify-between flex rounded-xl"
				>
					<View
						style={{ paddingVertical: 4 * HScale }}
						className="flex justify-center items-center w-full"
					>
						<Title
							content="REPARTIDORES"
							arrow="left"
							navigate={RouteName.HomeGestionarPedido}
							size={18}
							navigation={navigation}
						/>
					</View>
				</View>
				<View
					style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale, marginTop: 10 * HScale }}
					className="bg-violeta flex-row flex w-full justify-between items-center rounded-t-xl"
				>
					<Text
						style={{ fontSize: scaledSize(14) }}
						className=" font-robotoBold text-texto flex align-middle"
					>
						{dayFormat?.toString().slice(4).toUpperCase()}
					</Text>
					<View style={{ gap: 4 * WScale }} className="flex flex-row items-center">
						<Text style={{ fontSize: scaledSize(14) }} className="font-roboto">
							{dayFormat?.toString().slice(0, 3)}
						</Text>
						<Text style={{ fontSize: scaledSize(14) }} className="font-robotoBold">
							/ 03
						</Text>
					</View>
				</View>
				<View style={{ minHeight: 405 * HScale }} className="bg-blanco flex justify-evenly w-full">
					{repartidores ? (
						dropdown ? (
							repartidores?.map((item, index) => (
								<View key={keyExtractorUsers(item, index)} style={{ height: 101 * HScale }}>
									{renderItemsUsers({ item })}
								</View>
							))
						) : (
							repartidores?.slice(0, 4).map((item, index) => (
								<View key={keyExtractorUsers(item, index)} style={{ height: 101 * HScale }}>
									{renderItemsUsers({ item })}
								</View>
							))
						)
					) : (
						<Text>No se encontraron repartidores para la fecha.</Text>
					)}
				</View>
				<View className="w-full h-[0.5] bg-gray-300" />
				<Pressable
					onPress={handleArrow}
					style={{ height: 47.5 * HScale }}
					className="w-full flex justify-center items-center rounded-b-xl mb-6 bg-white"
				>
					{dropdown ? (
						isWeb ? (
							<Image source={downarrow} className="rotate-180" />
						) : (
							<ArrowHeadDown width={scaledSize(20)} className="rotate-180" />
						)
					) : isWeb ? (
						<Image source={downarrow} />
					) : (
						<ArrowHeadDown width={scaledSize(20)} />
					)}
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default Repartidores;
