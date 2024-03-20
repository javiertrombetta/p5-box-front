import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, Platform, Pressable, ScrollView } from 'react-native';
import { fakeHistory } from './fakeData';
import { es } from 'date-fns/locale';
import downArrow from '../assets/arrow-head-down.png';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Header from '../components/Header';
import List from '../components/List';
import { NavigationProp } from '@react-navigation/native';
import Title from '../components/Title';
import { store } from '../state/user';
import { format } from 'date-fns';
import { handlePackagesDelivered } from '../services/reports.service';

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

const Paquetes = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	const [dropdown, setDropdown] = useState(false);
	let date = store.getState().date;
	const [dayFormat, setDayFormat] = useState<Date | string>();
	const [paquetes, setPaquetes] = useState<ListItemPackage[]>([]);
	const [month, setMonth] = useState<string>();
	type ListItemPackage = {
		[key: string]: string;
	};

	interface RenderItemsUsersProps {
		item: ListItemPackage;
		index: number;
	}

	useEffect(() => {
		let year = date.slice(0, 4);
		let month = date.slice(5, 7);
		setMonth(month);
		let day = date.slice(8, 10);
		let newDate = new Date(parseInt(year), parseInt(month), parseInt(day));
		setDayFormat(format(newDate, 'EEE LLLL', { locale: es }));
		handlePackagesDelivered(year.toString(), month.toString(), day.toString())
			.then((packages) => {
				setPaquetes(packages);
			})
			.catch((error) => {
				console.error('Error al obtener los paquetes de los usuarios:', error);
			});
	}, [date]);

	const handleArrow = () => {
		dropdown ? setDropdown(false) : setDropdown(true);
	};

	const renderItemsUsers = ({ item, index }: RenderItemsUsersProps) => {
		if (!item) {
			console.error('El ítem en el índice proporcionado es undefined');
			return null;
		}

		const lastItem: boolean = index === 4;
		const id = '#' + item._id.slice(0, 5).toUpperCase() + '...';
		const deliveryAddressSlice = item.deliveryAddress.slice(0, -4);
		const deliveryAddress1 =
			deliveryAddressSlice.length > 17
				? deliveryAddressSlice.slice(0, 20) + '...'
				: deliveryAddressSlice;
		const deliveryAddress2 = item.deliveryAddress.slice(-3);

		return (
			<View style={{ paddingLeft: 16 * WScale }}>
				<View
					style={{ minHeight: 70 * HScale }}
					className="flex flex-row justify-between items-center w-full"
				>
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
			</View>
		);
	};

	const keyExtractorPackage = (_: ListItemPackage, index: number) => `item-${index}`;
	return (
		<ScrollView className="w-full h-full bg-verde">
			<View
				className="bg-verde w-full h-full flex-col items-center flex"
				style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
			>
				<Header navigation={navigation} />
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 26 * HScale }}
					className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
				>
					<View
						style={{ paddingVertical: 4 * HScale }}
						className="flex justify-center items-center w-full"
					>
						<Title
							content="PAQUETES"
							arrow="left"
							navigate={RouteName.HomeGestionarPedido}
							size={18}
							navigation={navigation}
						/>
					</View>
				</View>
				<View
					style={{ minHeight: 442 * HScale, marginTop: 10 * HScale }}
					className="w-full flex rounded-t-xl bg-white"
				>
					<View
						style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
						className="w-full flex flex-row rounded-t-xl items-center justify-between bg-violeta"
					>
						<Text
							className="text-sm font-robotoBold text-texto text-center"
							style={{ fontSize: scaledSize(14) }}
						>
							{dayFormat?.toString().slice(4).toUpperCase()}
						</Text>
						<View className="flex flex-row items-center gap-1">
							<Text className="font-roboto text-texto" style={{ fontSize: scaledSize(14) }}>
								{dayFormat?.toString().slice(0, 3)}
							</Text>
							<Text className="font-robotoBold text-texto" style={{ fontSize: scaledSize(14) }}>
								/ {month}
							</Text>
						</View>
					</View>
					<Text
						style={{
							paddingHorizontal: 16 * WScale,
							paddingTop: 10 * HScale,
							paddingBottom: 5 * HScale,
							fontSize: scaledSize(12),
						}}
						className=" text-texto font-robotoMedium"
					>
						{paquetes.length} Paquetes entregados
					</Text>
					<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
						<View className="h-[1] w-full bg-gray-300" />
					</View>
					<View
						style={{ minHeight: 350 * HScale }}
						className="flex flex-col items-center justify-between w-full"
					>
						{dropdown
							? paquetes.map((item, index) => (
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
							: paquetes.slice(0, 5).map((item, index) => (
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
				<View style={{ height: 1 * HScale }} className="w-full bg-gray-300 z-10" />
				<Pressable
					onPress={handleArrow}
					style={{ height: 47.5 * HScale }}
					className="w-full flex justify-center items-center rounded-b-xl mb-6 bg-white"
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
			</View>
		</ScrollView>
	);
};

export default Paquetes;
