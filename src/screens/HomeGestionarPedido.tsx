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
import { login, store } from '../state/user';
import RepartidoresHabilitados from '../components/RepartidoresHabilitados';
import PaquetesRepartidos from '../components/PaquetesRepartidos';
import { format } from 'date-fns';
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

const HomeGestionarPedido = ({ navigation }: Props) => {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	let user = store.getState();

	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleSelect = (date: Date) => {
		console.log(date);
		setSelectedDate(date);
		date.toLocaleDateString('es-ES');
		let formattedDate = format(date, 'yyyy/MM/dd');
		console.log(formattedDate);
		store.dispatch(login({ ...user, date: formattedDate }));
	};

	useEffect(() => {
		store.dispatch(login({ ...user, date: format(selectedDate, 'yyyy/MM/dd') }));
		console.log(user);
	}, []);

	const [listRepartidores, setListRepartidores] = useState({
		circleValue: 0,
		cantidadHab: 0,
		cantidad: 0,
	});
	const [listPaquetes, setListPaquetes] = useState({
		circleValue: 0,
		cantidadEntregados: 0,
		cantidad: 0,
	});

	const setearRepartidores = (circleValue: number, cantidadHab: number, cantidad: number) => {
		setListRepartidores({ circleValue, cantidadHab, cantidad });
	};
	const setearPaquetes = (circleValue: number, cantidadEntregados: number, cantidad: number) => {
		setListPaquetes({ circleValue, cantidadEntregados, cantidad });
	};

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
						¡Hola {user.name}!
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
						currentDate={selectedDate}
					/>
				</View>
				<View
					style={{ height: 192 * HScale }}
					className="flex flex-col justify-evenly align-middle"
				>
					<View style={{ height: 100 * HScale, paddingHorizontal: 16 * WScale }}>
						<RepartidoresHabilitados
							setearRepartidores={setearRepartidores}
							selectedDate={selectedDate}
						/>
						<List
							column1="circleProgress"
							circleValue={listRepartidores.circleValue}
							column2="stringsImg"
							content2String={`Repartidores, ${listRepartidores.cantidadHab}/${listRepartidores.cantidad} Habilitados`}
							column3="buttonVer"
							content3="repartidores"
							navigation={navigation}
						/>
					</View>
					<View className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-[89%] bg-gray-300" />
					</View>
					<View style={{ height: 100 * HScale, paddingHorizontal: 16 * WScale }}>
						<PaquetesRepartidos setearPaquetes={setearPaquetes} selectedDate={selectedDate} />
						<List
							column1="circleProgress"
							circleValue={listPaquetes.circleValue}
							column2="stringsImg"
							content2String={`Paquetes, ${listPaquetes.cantidadEntregados}/${listPaquetes.cantidad} Repartidos`}
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
