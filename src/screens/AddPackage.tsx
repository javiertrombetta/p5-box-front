import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Pressable, Image, TextInput, Dimensions, Platform } from 'react-native';
// lo agregue todo junto
import DateTimePicker from '@react-native-community/datetimepicker';
//
import { DatePickerModal } from 'react-native-paper-dates';
import leftArrow from '../assets/arrow-left.png';
import arrowHeadDown from '../assets/arrow-head-down.png';
import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Header from '../components/Header';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';
import { format } from 'date-fns';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

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
type PropParams = {
	date: Date;
};

const AddPackage = ({ navigation }: Props) => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);

	const onDismissSingle = React.useCallback(() => {
		setOpen(false);
	}, [open]);

	const onConfirmSingle = React.useCallback(
		(params: any) => {
			setOpen(false);
			setDate(params.date);
		},
		[open, setDate]
	);
	let deliveryDate = date.toString();

	useEffect(() => {
		deliveryDate = format(date, 'yyyy/MM/dd').toString();
		console.log(deliveryDate, 'dateeee');
	}, [date]);

	const [data, setData] = useState({
		deliveryAddress: '',
		deliveryFullname: '',
		deliveryWeight: '',
	});

	const handleInputChange = (field: keyof typeof data, value: string) => {
		setData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const isWeb = Platform.OS === 'web';

	const handleCalendario = () => {
		setOpen(!open);
	};

	// const handleCalendarValue = (e: DateTimePickerEvent) => {
	// 	setDate(date);
	// };

	return (
		<View
			className="bg-verde w-full h-full flex-col items-center  flex"
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }}
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ fontSize: scaledSize(18), paddingVertical: 4 * HScale }}
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					AGREGAR PAQUETES
				</Text>
				<View style={{ paddingVertical: 8 * HScale }} className="flex justify-center items-center">
					{isWeb ? (
						<Image source={leftArrow} />
					) : (
						<ArrowLeft width={13 * WScale} height={15 * HScale} />
					)}
				</View>
			</View>

			<View
				style={{ height: 450 * HScale, marginTop: 10 * HScale }}
				className="w-full items-center rounded-xl bg-blanco"
			>
				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 35 * HScale,
						fontSize: scaledSize(15),
					}}
					className=" text-texto font-roboto"
					placeholder="Dirección"
					onChangeText={(newText) => handleInputChange('deliveryAddress', newText)}
					defaultValue={data.deliveryAddress}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-gray-400"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 21 * HScale,
						fontSize: scaledSize(15),
					}}
					className=" text-texto font-roboto"
					placeholder="Nombre de quien recibe"
					onChangeText={(newText) => handleInputChange('deliveryFullname', newText)}
					defaultValue={data.deliveryFullname}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-gray-400"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 21 * HScale,
						fontSize: scaledSize(15),
					}}
					className=" text-texto font-roboto"
					placeholder="Peso del paquete (Kg)"
					onChangeText={(newText) => handleInputChange('deliveryWeight', newText)}
					defaultValue={data.deliveryWeight}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-gray-400"></View>

				<Text
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 55 * HScale,
						fontSize: scaledSize(15),
					}}
					className="relative  text-texto font-roboto"
				>
					Fecha de entrega
				</Text>
				<View
					style={{ width: 270 * WScale, height: 35 * HScale }}
					className="flex flex-row items-center border border-gray-400 rounded justify-between "
				>
					<Text style={{ left: 15 * WScale }} className="text-center font-roboto text-gray-500">
						{format(date, 'dd/MM/yy')}
					</Text>
					<Pressable onPress={handleCalendario} style={{ right: 10 * WScale }} className="relative">
						<View
							style={{ width: 26 * WScale, height: 18 * HScale }}
							className="justify-center items-center border rounded border-texto"
						>
							{isWeb ? <Image source={arrowHeadDown} /> : <ArrowHeadDown width={16 * WScale} />}
						</View>
					</Pressable>
				</View>
				{/* {open && <DateTimePicker mode="date" display="spinner" value={date} />} */}
				<DatePickerModal
					locale="es"
					mode="single"
					visible={open}
					date={date}
					onDismiss={onDismissSingle}
					onConfirm={onConfirmSingle}
				/>
			</View>
			<View
				style={{
					height: 28 * HScale,
					width: 270 * WScale,
					marginTop: 16 * HScale,
				}}
			>
				<Button
					action="postAgregar"
					data={{ ...data, date }}
					spec="texto"
					height={28}
					width={270}
					content="AGREGAR"
					navigation={navigation}
					navigate={RouteName.HomeGestionarPedido}
				/>
			</View>
		</View>
	);
};

export default AddPackage;
