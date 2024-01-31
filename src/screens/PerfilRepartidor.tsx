import { View, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Box from '../assets/Box.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import ArrowRight from '../assets/Arrow-right.svg';
import Paquetes from '../assets/Paquetes.svg';
import Entregado from '../assets/Entregado.svg';
import Tachito from '../assets/Tachito.svg';
import BotonActivado from '../assets/BotonActivado.svg';
import SmallDownArrow from '../assets/SmallFlechaAbajo.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const PerfilRepartidor = () => {
	return (
		<View
			style={{ paddingHorizontal: 32 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 6 * HScale }}
				className="w-full flex flex-row justify-between items-center"
			>
				{/* <Image
					source={box}
					style={{ height: scaledSize(30), width: scaledSize(80.69) }}
					resizeMode="contain"
				/> */}
				<Box height={30 * HScale} width={80.69 * WScale} />
				<Pressable
					style={{ width: 109 * WScale, height: 26 * HScale, marginTop: 8 * HScale }} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border rounded-xl border-texto text-texto"
				>
					<Text style={{ fontSize: scaledSize(12) }} className="text-center">
						CERRAR SESION
					</Text>
				</Pressable>
			</View>
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(18) }} // py-1
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					GESTIONAR PEDIDOS
				</Text>
				<View
					style={{ paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					{/* style={{ width: 13 * WScale, height: 15 * HScale, */}
					{/* <Image source={leftArrow} /> */}
					<ArrowLeft height={15 * HScale} width={13 * WScale} />
				</View>
			</View>
			<View
				style={{ height: 90 * HScale, marginTop: 10 * HScale, paddingHorizontal: 16 * WScale }} // h-24 mt-[10]
				className="w-full flex flex-row rounded-xl items-center justify-between align-middle bg-white"
			>
				<View style={{ gap: 12 * WScale }} className="flex flex-row items-center justify-start">
					<View className="flex items-center justify-center">
						<Image
							style={{ width: scaledSize(60), height: scaledSize(60) }}
							resizeMode="cover"
							className="rounded-xl"
							source={{
								uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
							}}
						/>
					</View>
					<View className="flex justify-center">
						<Text
							style={{ fontSize: scaledSize(14) }}
							className="text-start font-robotoBold text-texto"
						>
							Palermo
						</Text>
						<Text
							style={{
								fontSize: scaledSize(10),
								paddingHorizontal: 1 * WScale,
								paddingVertical: 2 * HScale,
								width: 68 * WScale,
								height: 16 * HScale,
							}}
							className="flex items-center justify-center text-center font-robotoMedium text-texto rounded-md bg-verde"
						>
							HABILITADO
						</Text>
					</View>
				</View>
				<View className="flex items-end">
					<BotonActivado width={35 * WScale} hieght={21 * HScale} />
					{/* <Image source={boton} /> */}
				</View>
			</View>
			<View
				style={{ height: 48 * HScale, marginTop: 10 * HScale }}
				className="w-full flex justify-center rounded-xl bg-amarilloVerdoso"
			>
				<View
					style={{ paddingHorizontal: 16 * WScale, height: 48 * HScale }}
					className="w-full flex flex-row rounded-t-xl items-center justify-between"
				>
					<View className="flex flex-col items-start justify-center">
						<Text style={{ fontSize: scaledSize(14) }} className="font-sairaBold text-texto">
							REPARTOS PENDIENTES
						</Text>
						<Text
							style={{ fontSize: scaledSize(12) }}
							className="mt-[-5] text-texto font-sairaMedium"
						>
							sin repartos
						</Text>
					</View>
					<Pressable style={{ width: scaledSize(8), height: scaledSize(12) }}>
						<ArrowRight height={14 * HScale} width={8 * WScale} />
						{/* <Image source={rightarrow} /> */}
					</Pressable>
				</View>
			</View>
			<View
				style={{ height: 282 * HScale, marginTop: 10 * HScale }}
				className="w-full justify-start flex rounded-t-xl bg-white"
			>
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"
				>
					<Text style={{ fontSize: scaledSize(14) }} className="font-sairaBold text-texto">
						HISTORIAL DE REPARTOS
					</Text>
					<Pressable>
						<SmallDownArrow height={8 * HScale} width={14 * WScale} />
						{/* <Image source={downarrow} /> */}
					</Pressable>
				</View>
				<View
					style={{
						paddingHorizontal: 16 * WScale,
						height: 35 * HScale,
					}}
					className="flex justify-center"
				>
					<Text
						style={{
							fontSize: scaledSize(12),
						}}
						className="text-texto font-robotoMedium"
					>
						58 Paquetes entregados
					</Text>
				</View>

				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 0.5 }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 192 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-col justify-start items-center"
				>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<View style={{ gap: 12 * WScale }} className="flex flex-row justify-start items-center">
							<View
								style={{ width: scaledSize(45), height: scaledSize(45) }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{/* <Image source={boxlist} /> */}
								<Paquetes height={36 * HScale} width={36 * WScale} />
							</View>
							<View className="flex justify-center">
								<Text
									style={{ fontSize: scaledSize(12), marginBottom: -2 * HScale }}
									className="font-robotoBold text-texto"
								>
									#0B438
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -1.5 * HScale }}
									className="text-texto font-roboto"
								>
									Castillo 1356
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -2 * HScale }}
									className="text-texto font-roboto"
								>
									CABA
								</Text>
							</View>
						</View>
						<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Entregado />
									{/* <Image source={deshabilitado} className="flex items-center" /> */}
								</View>
								<Text style={{ fontSize: 10.5 * WScale }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								<Tachito height={20 * HScale} width={31 * HScale} />
								{/* <Image source={tachito} /> */}
							</Pressable>
						</View>
					</View>
					<View style={{ paddingRight: 16 * WScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<View style={{ gap: 12 * WScale }} className="flex flex-row justify-start items-center">
							<View
								style={{ width: scaledSize(45), height: scaledSize(45) }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Paquetes height={36 * HScale} width={36 * WScale} />
							</View>
							<View className="flex justify-center">
								<Text
									style={{ fontSize: scaledSize(12), marginBottom: -2 * HScale }}
									className="font-robotoBold text-texto"
								>
									#0H167
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -1.5 * HScale }}
									className="text-texto font-roboto"
								>
									Av.Rivadavia
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -2 * HScale }}
									className="text-texto font-roboto"
								>
									CABA
								</Text>
							</View>
						</View>
						<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Entregado />
									{/* <Image source={deshabilitado} className="flex items-center" /> */}
								</View>
								<Text style={{ fontSize: 10.5 * WScale }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								<Tachito height={20 * HScale} width={31 * HScale} />
								{/* <Image source={tachito} /> */}
							</Pressable>
						</View>
					</View>
					<View style={{ paddingRight: 16 * WScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<View style={{ gap: 12 * WScale }} className="flex flex-row justify-start items-center">
							<View
								style={{ width: scaledSize(45), height: scaledSize(45) }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Paquetes height={36 * HScale} width={36 * WScale} />
							</View>
							<View className="flex justify-center">
								<Text
									style={{ fontSize: scaledSize(12), marginBottom: -2 * HScale }}
									className="font-robotoBold text-texto"
								>
									#0A903
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -1.5 * HScale }}
									className="text-texto font-roboto"
								>
									Las Heras 5678
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -2 * HScale }}
									className="text-texto font-roboto"
								>
									CABA
								</Text>
							</View>
						</View>
						<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Entregado />
									{/* <Image source={deshabilitado} className="flex items-center" /> */}
								</View>
								<Text style={{ fontSize: 10.5 * WScale }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								<Tachito height={20 * HScale} width={31 * HScale} />
							</Pressable>
						</View>
					</View>
				</View>
			</View>
			<View style={{ position: 'relative', height: 1 }} className="w-full bg-gray-300">
				<LinearGradient
					colors={['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 1)']}
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						height: 50 * HScale,
						top: -50 * HScale,
					}}
					start={{ x: 0.5, y: 0.0 }}
					end={{ x: 0.5, y: 1.0 }}
				/>
			</View>
			<View
				style={{ height: 48 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-blanco z-10"
			>
				<ArrowHeadDown height={12 * HScale} width={24 * WScale} />
			</View>
		</View>
	);
};

export default PerfilRepartidor;
