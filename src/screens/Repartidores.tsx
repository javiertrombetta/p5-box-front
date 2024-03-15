import { View, Text, Image, Dimensions, Platform, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { fakeUsers } from './fakeData';

import downarrow from '../assets/arrow-head-down.png';

import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Header from '../components/Header';
import List from '../components/List';
import { NavigationProp } from '@react-navigation/native';
import Title from '../components/Title';

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

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

	type ListItemUsers = {
		[key: string]: {
			circleValue: number;
			username: string;
			img: string;
		};
	};

	interface RenderItemsUsersProps {
		item: ListItemUsers;
		index: number;
	}

	const handleArrow = () => {
		dropdown ? setDropdown(false) : setDropdown(true);
	};

	const renderItemsUsers = ({ item, index }: RenderItemsUsersProps) => {
		const itemKey = Object.keys(fakeUsers())[index];
		let deliveryState = '';
		const data = item[itemKey];
		data.circleValue === 0
			? (deliveryState = 'gray')
			: data.circleValue === 100
			? (deliveryState = 'black')
			: (deliveryState = 'green');
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
						circleValue={data.circleValue}
						column2="stringsImg"
						content2String={`${data.username}, ${deliveryState}`}
						column3="img"
						content3={data.img}
						navigation={navigation}
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
						ENERO
					</Text>
					<View style={{ gap: 4 * WScale }} className="flex flex-row items-center">
						<Text style={{ fontSize: scaledSize(14) }} className="font-roboto">
							mie
						</Text>
						<Text style={{ fontSize: scaledSize(14) }} className="font-robotoBold">
							/ 03
						</Text>
					</View>
				</View>
				<View style={{ minHeight: 405 * HScale }} className="bg-blanco flex justify-evenly w-full">
					{dropdown
						? fakeUsers().map((item, index) => (
								<View
									key={keyExtractorUsers(item, index)}
									style={{
										height: 101 * HScale,
									}}
								>
									{renderItemsUsers({ item, index })}
								</View>
						  ))
						: fakeUsers()
								.slice(0, 4)
								.map((item, index) => (
									<View
										key={keyExtractorUsers(item, index)}
										style={{
											height: 101 * HScale,
										}}
									>
										{renderItemsUsers({ item, index })}
									</View>
								))}
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
