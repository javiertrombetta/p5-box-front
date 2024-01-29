import { View, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import circulo from '../assets/circuloUno.png';
import deshabilitado from '../assets/deshabilitado.png';
import habilitado from '../assets/habilitado.png';
import downarrow from '../assets/arrow-head-down.png';
import boton from '../assets/Group 37375.png';
import rightarrow from '../assets/arrow-right.png';
import boxlist from '../assets/BoxList.png';
import tachito from '../assets/trash.png';
import enCurso from '../assets/EllipseGreen.png';
import pendiente from '../assets/EllipseOrange.png';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const HomeIniciarJornada = () => {
	return (
		<View
			style={{ paddingHorizontal: 32 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 6 * HScale }}
				className="w-full flex flex-row justify-between items-center"
			>
				<Image
					source={box}
					style={{ height: 30 * HScale, width: 80.69 * WScale }}
					resizeMode="contain"
				/>
				<Pressable
					style={{ width: 109 * WScale, height: 26 * HScale, marginTop: 8 * HScale }} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border rounded-xl border-texto text-texto"
				>
					<Text className="text-center text-xs">CERRAR SESION</Text>
				</Pressable>
			</View>
			<View
				style={{ height: 188 * HScale, marginTop: 28 * HScale }} // h-24 mt-[10]
				className="w-full flex flex-col rounded-xl items-start justify-start align-middle bg-white"
			>
				<View
					style={{ height: 43 * HScale, paddingHorizontal: 16 * WScale }} // h-[40] mt-[28] px-4
					className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
				>
					<Text
						style={{ paddingVertical: 4 * HScale }} // py-1
						className="text-lg flex justify-center items-center font-sairaBold text-texto"
					>
						REPARTOS PENDIENTES
					</Text>
					<View
						style={{ width: 13 * WScale, height: 15 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
						className="flex justify-center items-center"
					>
						<Image source={leftArrow} />
					</View>
				</View>
				<View
					style={{ paddingVertical: 8 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<View style={{ gap: 12 * WScale }} className="flex flex-row  justify-start items-center">
						<View
							style={{ width: 45 * WScale, height: 45 * HScale }}
							className="rounded-xl bg-violeta flex items-center justify-center"
						>
							<Image source={boxlist} />
						</View>
						<View className="flex justify-center">
							<Text className="font-semibold text-xs text-texto">#0H167</Text>
							<Text className="text-xs text-texto">Av. Arriba,</Text>
							<Text className="text-xs text-texto">CABA</Text>
						</View>
					</View>
					<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
						<View
							style={{ width: 88 * WScale, height: 15 * HScale }}
							className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
						>
							<View className="flex flex-row justify-center">
								<Image source={enCurso} className="flex items-center" />
							</View>
							<Text style={{ fontSize: 10.5 }}>EN CURSO</Text>
						</View>
						<Pressable
							style={{ height: 24 * HScale, width: 56 * WScale }}
							className="flex flex-row justify-start items-center"
						>
							<Image source={tachito} />
						</Pressable>
					</View>
				</View>
				<View
					style={{ paddingVertical: 4 * HScale, paddingHorizontal: 16 * WScale }}
					className="flex w-full items-center"
				>
					<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ paddingVertical: 8 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<View style={{ gap: 12 * WScale }} className="flex flex-row  justify-start items-center">
						<View
							style={{ width: 45 * WScale, height: 45 * HScale }}
							className="rounded-xl bg-violeta flex items-center justify-center"
						>
							<Image source={boxlist} />
						</View>
						<View className="flex justify-center">
							<Text className="font-semibold text-xs text-texto">#0H167</Text>
							<Text className="text-xs text-texto">Av. Arriba,</Text>
							<Text className="text-xs text-texto">CABA</Text>
						</View>
					</View>
					<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
						<View
							style={{ width: 88 * WScale, height: 15 * HScale }}
							className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
						>
							<View className="flex flex-row justify-center">
								<Image source={pendiente} className="flex items-center" />
							</View>
							<Text style={{ fontSize: 10.5 }}>PENDIENTE</Text>
						</View>
						<Pressable
							style={{ height: 24 * HScale, width: 56 * WScale }}
							className="flex flex-row justify-start items-center"
						>
							<Image source={tachito} />
						</Pressable>
					</View>
				</View>
			</View>

			<View
				style={{ height: 283 * HScale, marginTop: 10 * HScale }}
				className="w-full justify-start flex rounded-xl bg-white"
			>
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"
				>
					<Text className="text-sm font-sairaBold text-texto">HISTORIAL DE REPARTOS</Text>
					<Pressable>
						<Image source={downarrow} />
					</Pressable>
				</View>
				<Text
					style={{ paddingVertical: 8 * HScale, paddingHorizontal: 16 * WScale }}
					className="text-xs font-semibold"
				>
					58 Paquetes entregados
				</Text>
				<View
					style={{ paddingBottom: 4 * HScale, paddingHorizontal: 16 * WScale }}
					className="flex w-full items-center"
				>
					<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 192 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-col justify-around items-center"
				>
					<View
						style={{ paddingVertical: 8 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<View
							style={{ gap: 12 * WScale }}
							className="flex flex-row  justify-start items-center"
						>
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image source={boxlist} />
							</View>
							<View className="flex justify-center">
								<Text className="font-semibold text-xs text-texto">#0H167</Text>
								<Text className="text-xs text-texto">Av. Arriba,</Text>
								<Text className="text-xs text-texto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Image source={deshabilitado} className="flex items-center" />
								</View>
								<Text style={{ fontSize: 10.5 }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								<Image source={tachito} />
							</Pressable>
						</View>
					</View>
					<View
						style={{ paddingVertical: 4 * HScale, paddingRight: 16 * WScale }}
						className="flex w-full items-center"
					>
						<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
					</View>
					<View className="flex flex-row justify-between py-2 items-center w-full">
						<View style={{ gap: 12 * WScale }} className="flex flex-row justify-start items-center">
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image source={boxlist} />
							</View>
							<View className="flex justify-center">
								<Text className="font-semibold text-xs text-texto">#0H167</Text>
								<Text className="text-xs text-texto">Av. Medio,</Text>
								<Text className="text-xs text-texto">CABA</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-end gap-3">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Image source={deshabilitado} className="flex items-center" />
								</View>
								<Text style={{ fontSize: 10.5 }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								<Image source={tachito} />
							</Pressable>
						</View>
					</View>
					<View
						style={{ paddingVertical: 4 * HScale, paddingRight: 16 * WScale }}
						className="flex w-full items-center"
					>
						<View style={{ height: 1 * HScale }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingTop: 8 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<View style={{ gap: 12 * WScale }} className="flex flex-row justify-start items-center">
							<View
								style={{ width: 45 * WScale, height: 45 * HScale }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								<Image source={boxlist} />
							</View>
							<View className="flex justify-center">
								<Text className="font-semibold text-xs text-texto">#0H167</Text>
								<Text className="text-xs text-texto">Av. Abajo,</Text>
								<Text className="text-xs text-texto">CABA</Text>
							</View>
						</View>
						<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Image source={deshabilitado} className="flex items-center" />
								</View>
								<Text style={{ fontSize: 10.5 }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								<Image source={tachito} />
							</Pressable>
						</View>
					</View>
				</View>
			</View>
			<View style={{ marginTop: 10 * HScale }} className="flex justify-center items-center">
				<Pressable
					style={{ height: 28 * HScale, width: 270 * WScale }}
					className=" flex flex-row justify-center items-center align-middle border rounded-xl bg-texto"
				>
					<Text
						style={{ marginRight: 8 * WScale }}
						className="text-center text-amarilloVerdoso text-xs font-roboto"
					>
						OBTENER PAQUETES
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default HomeIniciarJornada;
