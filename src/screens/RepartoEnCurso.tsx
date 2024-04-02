import React, { useRef, useEffect, useState } from 'react';
import {
	View,
	Text,
	Dimensions,
	Pressable,
	Platform,
	Button as RNButton,
	TouchableOpacity,
} from 'react-native';
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
		useJsApiLoader: any,
		DirectionsService: any,
		DirectionsRenderer: any;
	if (Platform.OS === 'android' || Platform.OS === 'ios') {
		MapView = require('react-native-maps').default;
		Marker = require('react-native-maps').Marker;
		MapViewDirections = require('react-native-maps-directions').default;
	} else if (Platform.OS === 'web') {
		LoadScript = require('@react-google-maps/api').LoadScript;
		useJsApiLoader = require('@react-google-maps/api').useJsApiLoader;
		GoogleMap = require('@react-google-maps/api').GoogleMap;
		MapView = require('@react-google-maps/api').default;
		MapViewDirections = require('react-native-maps-directions').default;
		Polyline = require('@react-google-maps/api').Polyline;
		Marker = require('@react-google-maps/api').Marker;
		DirectionsService = require('@react-google-maps/api').DirectionsService;
		DirectionsRenderer = require('@react-google-maps/api').DirectionsRenderer;
	}

	const [route, setRoute] = useState<Route | null>(null);
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [estimatedArrivalTime, setEstimatedArrivalTime] = useState('');
	const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(
		null
	);

	const mapRef = useRef<any>(null);

	const containerStyle = { width: '100%', height: '100%' };
	const pkgId = '3ad96bdd-d0d4-46d7-b17c-aedf62a9c065';

	let user2 = store.getState();

	const calculateRoute = async () => {
		if (origin && destination) {
			const DirectionsService = new google.maps.DirectionsService();
			DirectionsService.route(
				{
					origin: origin,
					destination: destination,
					travelMode: google.maps.TravelMode.DRIVING,
					avoidTolls: true,
					drivingOptions: {
						departureTime: new Date(Date.now() + 10000),
						trafficModel: google.maps.TrafficModel.BEST_GUESS,
					},
				},
				(result, status) => {
					if (status === google.maps.DirectionsStatus.OK && result !== null) {
						setDirectionsResponse(result);
						const leg = result.routes[0].legs[0];
						if (leg.duration) {
							const durationInSeconds = leg.duration.value;
							const arrivalDate = new Date(Date.now() + durationInSeconds * 1000);
							const arrivalTime = arrivalDate.toLocaleTimeString([], {
								hour: '2-digit',
								minute: '2-digit',
							});
							setEstimatedArrivalTime(arrivalTime);
						}
					} else {
						console.error(`Error al obtener la ruta: ${status}`);
					}
				}
			);
		}
	};

	useEffect(() => {
		async function fetchRouteData() {
			try {
				const data = await getRouteData(pkgId);
				setRoute(data);
				if (data) {
					setOrigin(
						`${data.legs[0].startLocation.latLng.latitude},${data.legs[0].startLocation.latLng.longitude}`
					);
					setDestination(
						`${data.legs[data.legs.length - 1].endLocation.latLng.latitude},${
							data.legs[data.legs.length - 1].endLocation.latLng.longitude
						}`
					);
				}
			} catch (error) {
				console.error('Hubo un error al obtener la ruta:', error);
			}
		}
		fetchRouteData();
	}, []);

	useEffect(() => {
		if (directionsResponse && mapRef.current) {
			const bounds = new window.google.maps.LatLngBounds();
			bounds.extend(
				new window.google.maps.LatLng(directionsResponse.routes[0].legs[0].start_location)
			);
			bounds.extend(
				new window.google.maps.LatLng(directionsResponse.routes[0].legs[0].end_location)
			);

			mapRef.current.fitBounds(bounds);
		}
	}, [directionsResponse, mapRef]);

	useEffect(() => {
		if (origin && destination) {
			calculateRoute();
		}
	}, [origin, destination]);

	useEffect(() => {
		if (
			directionsResponse &&
			directionsResponse.routes[0] &&
			directionsResponse.routes[0].legs[0]
		) {
			const leg = directionsResponse.routes[0].legs[0];
			if (leg.duration) {
				const durationInSeconds = leg.duration.value;
				const arrivalDate = new Date(Date.now() + durationInSeconds * 1000);
				const arrivalTime = arrivalDate.toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
				});
				setEstimatedArrivalTime(arrivalTime);
			}
		}
	}, [directionsResponse]);

	const { isLoaded } =
		Platform.OS === 'web'
			? useJsApiLoader({
					id: 'google-map-script',
					googleMapsApiKey: Constants.expoConfig?.extra?.googleMapsApiKey,
			  })
			: { isLoaded: true };

	const renderMap = () => {
		if (!isLoaded || !route) {
			return (
				<View
					style={{
						height: 396 * HScale,
						width: 300 * WScale,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#f0f0f0',
						borderRadius: 15,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							paddingVertical: 20,
						}}
					>
						Cargando mapa y datos de la ruta...
					</Text>
				</View>
			);
		}

		let distanceText = 'Calculando...';
		let durationText = 'Calculando...';

		if (
			directionsResponse &&
			directionsResponse.routes[0] &&
			directionsResponse.routes[0].legs[0]
		) {
			const leg = directionsResponse.routes[0].legs[0];
			if (leg.distance) {
				distanceText = leg.distance.text;
			}
			if (leg.duration) {
				durationText = leg.duration.text;
			}
		}

		const originLatLng = route.legs[0].startLocation.latLng;
		const destinationLatLng = route.legs[route.legs.length - 1].endLocation.latLng;

		if (!originLatLng || !destinationLatLng) return <Text>Datos de ruta incompletos...</Text>;

		const origin = {
			lat: +originLatLng.latitude,
			lng: +originLatLng.longitude,
		};

		const destination = {
			lat: +destinationLatLng.latitude,
			lng: +destinationLatLng.longitude,
		};

		return (
			<View
				style={{
					height: 396 * HScale,
					width: 300 * WScale,
					position: 'relative',
					borderRadius: 15,
					overflow: 'hidden',
				}}
			>
				{Platform.OS === 'web' ? (
					<GoogleMap
						mapContainerStyle={containerStyle}
						onLoad={(map: any) => (mapRef.current = map)}
						center={origin}
						zoom={14}
						options={{
							mapTypeControl: false, 
							streetViewControl: false,
							fullscreenControl: false,							
						}}
					>
						<Marker position={origin} title="Salida" />
						<Marker position={destination} title="Llegada" />
						{directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
					</GoogleMap>
				) : (
					<MapView
						style={{ flex: 1 }}
						initialRegion={{
							latitude: originLatLng.latitude,
							longitude: originLatLng.longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
					>
						<Marker coordinate={origin} title="Salida" />
						<Marker coordinate={destination} title="Llegada" />
					</MapView>
				)}
				{directionsResponse && (
					<View
						style={{
							position: 'absolute',
							width: 132 * WScale,
							height: 55 * HScale,
							top: 11,
							right: 11,
							backgroundColor: 'rgba(255, 255, 255, 1)',
							padding: 8,
							borderRadius: 2,
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.25,
							shadowRadius: 3.84,
							elevation: 5,
						}}
					>
						<View>
							<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
								Distancia: <Text className="font-robotoBold text-texto">{distanceText}</Text>
							</Text>
							<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
								Duración: <Text className="font-robotoBold text-texto">{durationText}</Text>
							</Text>
							<Text style={{ fontSize: scaledSize(12) }} className="font-roboto text-texto">
								Hora estimada:{' '}
								<Text className="font-robotoBold text-texto">{estimatedArrivalTime}</Text>
							</Text>
						</View>
					</View>
				)}
				<View
					style={{
						position: 'absolute',
						width: 40 * WScale,
						height: 40 * HScale,
						top: 230,
						right: 10,
						alignSelf: 'center',
						backgroundColor: '#fff',
						borderRadius: 2,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 1,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 2,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TouchableOpacity
						onPress={() => {
							calculateRoute();
						}}
						style={{
							width: '100%',
							height: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 2,
						}}
					>
						<Text
							style={{
								color: '#007BFF',
								fontWeight: 'bold',
								fontSize: scaledSize(22),
							}}
						>
							↺
						</Text>
					</TouchableOpacity>
				</View>
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
		);
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
				style={{
					marginTop: 10 * HScale,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						height: 396 * HScale,
						width: 300 * WScale,
						position: 'relative',
					}}
				>
					{renderMap()}
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
