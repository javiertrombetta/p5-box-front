import { View, Text, Dimensions, Pressable, ScrollView, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';

import downArrow from '../assets/arrow-head-down.png';

import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';

import Header from '../components/Header';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';
import List from '../components/List';
import { handleAvailable } from '../services/package.service';
import { Image } from 'react-native';

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

const ObtenerPaquetes = ({ navigation }: Props) => {
	const isWeb = Platform.OS === 'web';
	const [dropdown, setDropdown] = useState(false);
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;
	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	const [packages, setPackages] = useState([]);

	useEffect(() => {
		handleAvailable().then((data) => setPackages(data));
	}, []);

	type ListItemPackage = {
		[key: string]: string;
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

		const lastItem: boolean = index === 7;

		return (
			<>
				<View style={{ paddingHorizontal: 16 * WScale, minHeight: 45 * HScale }}>
					<List
						column1="buttonCheck"
						column2="stringsRow"
						content2String={item.deliveryAddress}
						column3="none"
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
		<ScrollView className="bg-verde w-full h-full">
			<View
				className="bg-verde w-full h-full flex-col items-center  flex"
				style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
			>
				<Header navigation={navigation} />
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 20 * WScale, marginTop: 28 * HScale }}
					className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
				>
					<Text
						style={{ fontSize: scaledSize(18) }}
						className="flex justify-center items-center font-sairaBold text-texto"
					>
						OBTENER PAQUETES
					</Text>
					<Pressable
						onPress={() => navigation.navigate(RouteName.HomeIniciarJornada)}
						style={{ paddingVertical: 8 * HScale }}
						className="flex justify-center items-center"
					>
						<ArrowLeft width={scaledSize(14)} />
					</Pressable>
				</View>
				<View
					style={{ minHeight: 409 * HScale, marginTop: 10 * HScale }}
					className="w-full flex rounded-t-xl bg-white"
				>
					<View
						style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
						className="w-full flex flex-row rounded-t-xl items-center justify-center bg-violeta"
					>
						<Text
							className="font-robotoMedium text-texto text-center"
							style={{ fontSize: scaledSize(12) }}
						>
							¿Cuántos paquetes repartirás hoy?
						</Text>
					</View>
					<View
						style={
							!dropdown
								? {
										height: 374 * HScale,
								  }
								: { minHeight: 374 * HScale }
						}
						className="flex flex-col items-start justify-start w-full"
					>
						{dropdown
							? packages.map((item, index) => (
									<View
										key={keyExtractorPackage(item, index)}
										style={{
											height: 45 * HScale,
											width: '100%',
										}}
									>
										{renderItemsUsers({ item, index })}
									</View>
							  ))
							: packages.slice(0, 8).map((item, index) => (
									<View
										key={keyExtractorPackage(item, index)}
										style={{
											height: 45 * HScale,
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
				<View
					style={{
						marginTop: 10 * HScale,
					}}
				>
					<Button
						content="INICIAR JORNADA"
						width={270}
						height={30}
						spec="texto"
						navigation={navigation}
						navigate={RouteName.DeclaracionJurada}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default ObtenerPaquetes;
