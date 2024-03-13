import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, Dimensions, Pressable } from 'react-native';
import ArrowLeft from '../assets/ArrowLeft.svg';
import buenos from '../assets/buenos.png';
import Header from '../components/Header';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';
import { login, store } from '../state/user';
import PackageDetail from '../components/PackageDetail';

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

function RepartoEnCurso({ navigation }: Props) {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
	let user2 = store.getState();
	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<Header navigation={navigation} />
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 20 * WScale, marginTop: 28 * HScale }}
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(18) }}
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					{user2.back ? `REPARTO ${user2.back.toUpperCase()}` : 'REPARTO DISPONIBLE'}
				</Text>
				<Pressable
					onPress={() => {
						store.dispatch(login({ ...user2, back: undefined, packageSelect: undefined }));
						navigation.navigate(RouteName.HomeIniciarJornada);
					}}
					style={{ width: 13 * WScale, height: 40 * HScale, paddingVertical: 8 * HScale }}
					className="flex justify-center items-center"
				>
					<ArrowLeft width={scaledSize(14)} />
				</Pressable>
			</View>

			<View
				style={{ marginTop: 10 * HScale }}
				className="flex items-center justify-center rounded-xl overflow-hidden"
			>
				<ImageBackground
					style={{ height: 396 * HScale, width: 300 * WScale }}
					className="flex items-center justify-end"
					resizeMode="cover"
					source={buenos}
				>
					<View style={{ paddingVertical: 16 * HScale }}>
						<PackageDetail />
					</View>
				</ImageBackground>
			</View>
			{user2.back === 'en curso' ? (
				<>
					<View
						style={{
							height: 30 * HScale,
							width: 270 * WScale,
							marginTop: 24 * HScale,
						}}
					>
						<Button
							content="FINALIZAR"
							action="putFinalizar"
							id={user2.packageSelect}
							width={270}
							height={30}
							spec="texto"
							navigation={navigation}
							navigate={RouteName.HomeIniciarJornada}
						/>
					</View>
					<View
						style={{
							height: 30 * HScale,
							width: 270 * WScale,
							marginTop: 10 * HScale,
						}}
					>
						<Button
							content="CANCELAR ENTREGA"
							action="postCancelPackage"
							id={user2.packageSelect}
							width={270}
							height={30}
							spec="blanco"
							navigation={navigation}
							navigate={RouteName.HomeIniciarJornada}
						/>
					</View>
				</>
			) : (
				<View
					style={{
						height: 30 * HScale,
						width: 270 * WScale,
						marginTop: 24 * HScale,
					}}
				>
					<Button
						content="VOLVER"
						width={270}
						height={30}
						spec="texto"
						navigation={navigation}
						navigate={
							user2.back === 'pendiente' || user2.back === 'entregado'
								? RouteName.HomeIniciarJornada
								: RouteName.ObtenerPaquetes
						}
					/>
				</View>
			)}
		</View>
	);
}

export default RepartoEnCurso;
