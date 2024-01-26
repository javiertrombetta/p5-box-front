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

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const PerfilRepartidor = () => {
	return (
		<View
			style={{ paddingHorizontal: 32 * WScale, paddingTop: 8 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 12 * HScale }}
				className="w-full h-50 flex flex-row mt-3 justify-between items-center"
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
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale }} // py-1
					className="text-lg flex justify-center items-center font-sairaBold text-texto"
				>
					GESTIONAR PEDIDOS
				</Text>
				<View
					style={{ width: 13 * WScale, height: 15 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					<Image source={leftArrow} />
				</View>
			</View>
			<View
				style={{ height: 96 * HScale, marginTop: 10 * HScale, paddingHorizontal: 16 * WScale }} // h-24 mt-[10]
				className="w-full flex flex-row rounded-xl items-center justify-between align-middle bg-white"
			>
				<View style={{ gap: 12 * WScale }} className="flex flex-row items-center justify-start">
					<View className="flex items-center justify-center">
						<Image
							style={{ width: 60 * WScale, height: 60 * HScale }}
							className="rounded-xl"
							source={{
								uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
							}}
						/>
					</View>
					<View className="">
						<Text className="text-start text-sm font-medium text-texto">Palermo</Text>
						<Text
							style={{ fontSize: 10, width: 67 * WScale, height: 15 * HScale }}
							className="w-[67] h-[15] text-center text-xs font-roboto text-texto rounded-sm bg-verde"
						>
							HABILITADO
						</Text>
					</View>
				</View>
				<View className=" flex items-end">
					<Image source={boton} />
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
					<View>
						<Text style={{ height: 12 * HScale }} className="text-sm font-sairaBold text-texto">
							REPARTOS PENDIENTES
						</Text>
						<Text
							style={{ height: 12 * HScale, marginBottom: 8 * HScale }}
							className="text-sm h-3 mb-2 font-saira text-texto"
						>
							sin repartos
						</Text>
					</View>
					<Pressable>
						<Image source={rightarrow} />
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
			<View style={{ height: 1 * HScale }} className="w-full bg-gray-300 z-10" />
			<View
				style={{ height: 50 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white z-10"
			>
				<Image source={downarrow} />
			</View>
		</View>
	);
};

export default PerfilRepartidor;
