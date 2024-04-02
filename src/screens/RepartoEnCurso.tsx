import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Pressable, Platform } from 'react-native';
import ArrowLeft from '../assets/ArrowLeft.svg';
import Header from '../components/Header';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';
import { login, store } from '../state/user';
import PackageDetail from '../components/PackageDetail';
import Constants from 'expo-constants';

import { getRouteData } from '../services/location.service';

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

interface Route {
	legs: Leg[];
	distanceMeters: number;
	duration: string;
	staticDuration: string;
	polyline: Polyline;
	description: string;
	viewport: {
		low: LatLng;
		high: LatLng;
	};
	localizedValues: {
		distance: TextValue;
		duration: TextValue;
		staticDuration: TextValue;
	};
	routeToken: string;
	routeLabels: string[];
}

interface Leg {
	distanceMeters: number;
	duration: string;
	staticDuration: string;
	polyline: Polyline;
	startLocation: Location;
	endLocation: Location;
	steps: Step[];
	localizedValues: {
		distance: TextValue;
		duration: TextValue;
		staticDuration: TextValue;
	};
}

interface Polyline {
	encodedPolyline: string;
}

interface Location {
	latLng: LatLng;
}

interface LatLng {
	latitude: number;
	longitude: number;
}

interface Step {
	distanceMeters: number;
	staticDuration: string;
	polyline: Polyline;
	startLocation: Location;
	endLocation: Location;
	navigationInstruction: NavigationInstruction;
	localizedValues: {
		distance: TextValue;
		staticDuration: TextValue;
	};
	travelMode: string;
}

interface NavigationInstruction {
	maneuver: string;
	instructions: string;
}

interface TextValue {
	text: string;
}


function RepartoEnCurso({ navigation }: Props) {
	const { width, height } = Dimensions.get('window');
	const WScale = width / 360;
	const HScale = height / 640;

	const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

	let MapView: any,
		Marker: any,
		MapViewDirections: any,
		LoadScript: any,
		Polyline: any,
		GoogleMap: any,
		useJsApiLoader: any;
	if (Platform.OS === 'android' || Platform.OS === 'ios') {
		MapView = require('react-native-maps').default;
		Marker = require('react-native-maps').Marker;
		MapViewDirections = require('react-native-maps-directions').default;
	} else if (Platform.OS === 'web') {
		GoogleMap = require('@react-google-maps/api').GoogleMap;
		useJsApiLoader = require('@react-google-maps/api').useJsApiLoader;
		MapViewDirections = require('@react-google-maps/api').default;
		LoadScript = require('@react-google-maps/api').LoadScript;
		Polyline = require('@react-google-maps/api').Polyline;
		Marker = require('@react-google-maps/api').Marker;
	}

	const [route, setRoute] = useState<Route | null>(null);
	const containerStyle = { width: '100%', height: '100%' };
	const pkgId = '3ad96bdd-d0d4-46d7-b17c-aedf62a9c065';

	let user2 = store.getState();	

	useEffect(() => {		
		const fetchAndSetRouteData = async () => {
			try {
				const routeData = await getRouteData(pkgId);
				setRoute(routeData);
			} catch (error) {
				console.error('Error al obtener la ruta.', error);
			}
		};
		fetchAndSetRouteData();
	}, []);

	const { isLoaded } =
		Platform.OS === 'web'
			? useJsApiLoader({
					id: 'google-map-script',
					googleMapsApiKey: Constants.expoConfig?.extra?.googleMapsApiKey,
			  })
			: { isLoaded: true };

	const renderMap = () => {
		if (!isLoaded || !route) {
			return <Text>Cargando mapa y datos de la ruta...</Text>;
		}

		const originLatLng = route.legs[0].startLocation.latLng;
		const destinationLatLng = route.legs[route.legs.length - 1].endLocation.latLng;

		const origin = {
			lat: +originLatLng.latitude,
			lng: +originLatLng.longitude,
		};

		const destination = {
			lat: +destinationLatLng.latitude,
			lng: +destinationLatLng.longitude,
		};
		if (Platform.OS === 'web') {
			if (!origin || !destination) return <Text>Datos de ruta incompletos...</Text>;
			const waypoints = route.legs.slice(1, -1).map((leg) => leg.startLocation.latLng);

			return (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={origin}
					zoom={14}	
				>
					<Marker position={origin} title="Salida" />
					<Marker position={destination} title="Llegada" />
					{/* <MapViewDirections
						origin={origin}
						destination={destination}
						apikey={Constants.expoConfig?.extra?.googleMapsApiKey}
						strokeWidth={3}
						strokeColor="hotpink"
						// onReady={(result: any) => {
						// 	console.log(`Distance: ${result.distance} km`);
						// 	console.log(`Duration: ${result.duration} min`);
						// }}
					/> */}					
				</GoogleMap>
			);
		} else {
			return (
				<MapView
					initialRegion={{
						latitude: originLatLng.latitude,
						longitude: originLatLng.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					<Marker position={{ origin }} />
				</MapView>
			);
		}
	};

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
				<View
					style={{
						height: 396 * HScale,
						width: 300 * WScale,
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{renderMap()}
					<View
						style={{
							position: 'absolute',
							bottom: 10,
							paddingVertical: 16 * HScale,
							marginLeft: 10 * WScale,
							alignSelf: 'flex-start',
						}}
					>
						<PackageDetail />
					</View>
				</View>
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