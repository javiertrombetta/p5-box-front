import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, Dimensions, Platform, VirtualizedList } from 'react-native';
import Header from '../components/Header';
import { NavigationProp } from '@react-navigation/native';
import { fakePending, fakeHistory } from './fakeData';

import downarrow from '../assets/arrow-head-down.png';

import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Button from '../components/Button';
import List from '../components/List';
import { handleDelivered } from '../services/package.service';
import { handleMePackages } from '../services/user.service';
import { useSelector } from 'react-redux';
import { store } from '../state/user';

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

const HomeIniciarJornada = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	const [packagesDelivered, setPackagesDelivered] = useState([]);
	const [packagesPending, setPackagesPending] = useState([]);
	type User = {
		back: string;
	};
	let user = useSelector((state) => state) as User;
	useEffect(() => {
		handleDelivered().then((data) => data && setPackagesDelivered(data));
		handleMePackages().then((data) => data && setPackagesPending(data));
		console.log('cambio', store.getState().back);
	}, [packagesPending.length, packagesDelivered.length, store.getState().back]);

	type ListItemPending = {
		deliveryAddress: string;
		state: string;
		_id: string;
	};

	const renderItemsPendientes = ({ item, index }: { item: ListItemPending; index: number }) => {
		const id = '#' + item._id.slice(0, 5).toUpperCase() + '...';
		const deliveryAddressSlice = item.deliveryAddress.slice(0, -4);
		const deliveryAddress1 =
			deliveryAddressSlice.length > 17
				? deliveryAddressSlice.slice(0, 20) + '...'
				: deliveryAddressSlice;
		const deliveryAddress2 = item.deliveryAddress.slice(-3);
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

	const keyExtractorPending = (_: ListItemPending, index: number) => `item-${index}`;

	type ListItemHistory = {
		deliveryAddress: string;
		_id: string;
	};

	const renderItemsHistory = ({ item, index }: { item: ListItemHistory; index: number }) => {
		const id = '#' + item._id.slice(0, 5).toUpperCase() + '...';
		const deliveryAddressSlice = item.deliveryAddress.slice(0, -4);
		const deliveryAddress1 =
			deliveryAddressSlice.length > 17
				? deliveryAddressSlice.slice(0, 20) + '...'
				: deliveryAddressSlice;
		const deliveryAddress2 = item.deliveryAddress.slice(-3);
		return (
			<View>
				<View
					style={{ height: 74 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<List
						column1="svg"
						column2="stringsCol"
						content2String={`${id}, ${deliveryAddress1}, ${deliveryAddress2}`}
						column3="svgStringButton"
						content3="entregado"
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

	const keyExtractorHistory = (_: ListItemHistory, index: number) => `item-${index}`;

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 188 * HScale, marginTop: 28 * HScale }}
				className="w-full flex flex-col rounded-xl justify-start align-middle bg-white"
			>
				<View
					style={{ height: 43 * HScale, paddingHorizontal: 16 * WScale }}
					className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
				>
					<Text
						style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(14) }}
						className="flex justify-center items-center font-sairaBold text-texto"
					>
						REPARTOS PENDIENTES
					</Text>
					<View
						style={{ paddingVertical: 8 * HScale }}
						className="flex justify-center items-center"
					>
						<Pressable>
							{isWeb ? <Image source={downarrow} /> : <ArrowHeadDown width={scaledSize(14)} />}
						</Pressable>
					</View>
				</View>
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
			</View>

			<View
				style={{ height: 293 * HScale, marginTop: 10 * HScale }}
				className="w-full justify-start flex rounded-xl bg-white"
			>
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"
				>
					<Text style={{ fontSize: scaledSize(14) }} className="font-sairaBold text-texto">
						HISTORIAL DE REPARTOS
					</Text>
					<Pressable>
						{isWeb ? <Image source={downarrow} /> : <ArrowHeadDown width={scaledSize(14)} />}
					</Pressable>
				</View>
				<Text
					style={{
						paddingVertical: 8 * HScale,
						paddingHorizontal: 16 * WScale,
						fontSize: scaledSize(12),
					}}
					className="font-robotoMedium text-texto"
				>
					{`${packagesDelivered.length} paquetes entregados`}
				</Text>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
				{packagesDelivered.length > 0 ? (
					<VirtualizedList
						className="w-full"
						data={packagesDelivered}
						renderItem={renderItemsHistory}
						keyExtractor={keyExtractorHistory}
						getItemCount={() => packagesDelivered.length}
						getItem={(data, index) => data[index]}
					/>
				) : (
					<Text className="text-center text-texto mt-2">No tienes paquetes entregados.</Text>
				)}
			</View>
			<View style={{ marginTop: 24 * HScale }} className="flex justify-center items-center">
				<Button
					content="OBTENER PAQUETES"
					height={28}
					width={270}
					spec="texto"
					navigation={navigation}
					navigate={RouteName.ObtenerPaquetes}
				/>
			</View>
		</View>
	);
};

export default HomeIniciarJornada;
