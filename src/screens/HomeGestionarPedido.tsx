import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import ArrowRightBox from '../assets/ArrowRightBox.svg';
import ArrowLeftBox from '../assets/ArrowLeftBox.svg';
import Header from '../components/Header';
import Button from '../components/Button';
import List from '../components/List';
import Title from '../components/Title';
import { NavigationProp } from '@react-navigation/native';
import Card from '../components/Card';
import WeeklyDatePicker from '../components/WeeklyDatePicker';

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
	ForgotPassword = "ForgotPassword",
	NewPassword = 'NewPassword',
}

type Props = {
	navigation: NavigationProp<RootStackParamList>;
};

const HomeGestionarPedido = ({ navigation }: Props) => {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleSelect = (date: Date) => {
		setSelectedDate(date);
	};
	useEffect(() => {
		console.log(selectedDate);
	}, [selectedDate]);

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View style={{ height: 40 * HScale, marginTop: 28 * HScale, width: '100%' }}>
				<Title
					content={'GESTIONAR PEDIDOS'}
					size={18}
					navigate={RouteName.HomeGestionarPedido}
					navigation={navigation}
				/>
			</View>

			<View
				style={{ height: 96 * HScale, marginTop: 10 * HScale }}
				className="w-full flex flex-row rounded-xl items-center justify-around align-middle bg-white"
			>
				<View className="w-[30%] flex items-center justify-center">
					<Image
						style={{ width: scaledSize(60), height: scaledSize(60) }}
						resizeMode="cover"
						className="rounded-xl"
						source={{
							uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
						}}
					/>
				</View>
				<View className="w-[70%]">
					<Text
						style={{ fontSize: scaledSize(14) }}
						className="text-start  text-texto font-robotoBold"
					>
						¡Hola Admin!
					</Text>
					<Text style={{ fontSize: scaledSize(14) }} className="text-start text-texto font-roboto">
						Estos son los pedidos del dia
					</Text>
				</View>
			</View>
			<Card header={'violet, FEBRERO, 14, true,'} heightC={84} heightT={30} dropdown={false}>
				<WeeklyDatePicker handleSelect={handleSelect} />
			</Card>
			<View
				style={{ height: 248 * HScale, marginTop: 10 * HScale }}
				className="w-full flex rounded-xl bg-white"
			>
				<View style={{ height: 40 * HScale, width: '100%' }}>
					<Title
						content={'DETALLES'}
						arrow={'down'}
						date={true}
						size={14}
						navigate={RouteName.HomeGestionarPedido}
						navigation={navigation}
					/>
				</View>
				<View
					style={{ height: 192 * HScale }}
					className="flex flex-col justify-evenly align-middle"
				>
					<View style={{ height: 100 * HScale, paddingHorizontal: 16 * WScale }}>
						<List
							column1="circleProgress"
							circleValue={20}
							column2="stringsImg"
							content2String="Repartidores, 2/10 Habilitados"
							column3="buttonVer"
							content3="repartidores"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-[89%] bg-gray-300" />
					</View>
					<View style={{ height: 100 * HScale, paddingHorizontal: 16 * WScale }}>
						<List
							column1="circleProgress"
							circleValue={80}
							column2="stringsImg"
							content2String="Paquetes, 16/20 Repartidos"
							column3="buttonVer"
							content3="paquetes"
							navigation={navigation}
						/>
					</View>
				</View>
			</View>
			<View
				style={{
					marginTop: 15 * HScale,
				}}
			>
				<Button
					spec="texto"
					content="NUEVO PAQUETE"
					svg={true}
					navigation={navigation}
					navigate={RouteName.AddPackage}
					height={30}
					width={265}
				/>
			</View>
		</View>
	);
};

export default HomeGestionarPedido;
