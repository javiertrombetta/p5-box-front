import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Dimensions, Platform } from 'react-native';

import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import entregado from '../assets/entregado.png';
import downarrow from '../assets/arrow-head-down.png';
import boxlist from '../assets/BoxList.png';
import tachito from '../assets/trash.png';
import enCurso from '../assets/EllipseGreen.png';
import pendiente from '../assets/EllipseOrange.png';

import LogoBox from '../assets/LogoBox.svg';
import ArrowLeft from '../assets/ArrowLeft.svg';
import Entregado from '../assets/Entregado.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Box from '../assets/Box.svg';
import Trash from '../assets/Trash.svg';
import EllipseGreen from '../assets/EllipseGreen.svg';
import EllipseOrange from '../assets/EllipseOrange.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const HomeIniciarJornada = () => {

	const isWeb = Platform.OS === 'web';

	return (
		<View
			style={{ paddingHorizontal: 30 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 6 * HScale }}
				className="w-full flex flex-row justify-between items-center"
			>
				{isWeb ? (
					<Image
						source={box}
						style={{ height: scaledSize(30), width: scaledSize(80.69) }}
						resizeMode="contain"
					/>
				) : (
					<LogoBox height={30 * HScale} width={80.69 * WScale} />
				)}
				<Pressable
					style={{
						width: 109 * WScale,
						height: 26 * HScale,
						marginTop: 6 * HScale,
						borderRadius: 8,
						borderWidth: 0.5,
					}} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border border-texto text-texto"
				>
					<Text style={{ fontSize: scaledSize(12) }} className="text-center text-texto">
						CERRAR SESION
					</Text>
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
						style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(14) }} // py-1
						className="flex justify-center items-center font-sairaBold text-texto"
					>
						REPARTOS PENDIENTES
					</Text>
					<View
						style={{ paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
						className="flex justify-center items-center"
					>
						<ArrowLeft width={13 * WScale} height={15 * HScale} />
					</View>
				</View>
				<View
					style={{ height: 70 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<View style={{ gap: 12 * WScale }} className="flex flex-row  justify-start items-center">
						<View
							style={{ width: scaledSize(45), height: scaledSize(45) }}
							className="rounded-xl bg-violeta flex items-center justify-center"
						>
							{isWeb ? <Image source={boxlist} /> : <Box width={scaledSize(40)} />}
						</View>
						<View className="flex justify-center">
							<Text
								style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								className="font-semibold text-texto"
							>
								#0H167
							</Text>
							<Text style={{ fontSize: scaledSize(12) }} className="text-texto">
								Av. Arriba,
							</Text>
							<Text
								style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								className="text-texto"
							>
								CABA
							</Text>
						</View>
					</View>
					<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
						<View
							style={{ minWidth: 78 * WScale, height: 15 * HScale }}
							className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
						>
							<View className="flex flex-row justify-center">
								{isWeb ? (
									<Image source={enCurso} className="flex items-center" />
								) : (
									<EllipseGreen />
								)}
							</View>
							<Text className="font-robotoMedium text-texto" style={{ fontSize: scaledSize(10) }}>
								EN CURSO
							</Text>
						</View>
						<View style={{ paddingRight: 16 * WScale }}>
							<Pressable
								style={{ height: scaledSize(24), width: scaledSize(56) }}
								className="flex flex-row justify-end items-center"
							>
								{isWeb ? (
									<Image resizeMode="stretch" source={tachito} />
								) : (
									<Trash width={35 * WScale} />
								)}
							</Pressable>
						</View>
					</View>
				</View>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 70 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-row justify-between items-center w-full"
				>
					<View style={{ gap: 12 * WScale }} className="flex flex-row  justify-start items-center">
						<View
							style={{ width: scaledSize(45), height: scaledSize(45) }}
							className="rounded-xl bg-violeta flex items-center justify-center"
						>
							{isWeb ? <Image source={boxlist} /> : <Box width={scaledSize(40)} />}
						</View>
						<View className="flex justify-center">
							<Text
								style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
								className="font-semibold text-texto"
							>
								#0H167
							</Text>
							<Text style={{ fontSize: scaledSize(12) }} className="text-texto">
								Av. Arriba,
							</Text>
							<Text
								style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
								className="text-texto"
							>
								CABA
							</Text>
						</View>
					</View>
					<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
						<View
							style={{ width: 83 * WScale, height: 15 * HScale }}
							className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
						>
							<View className="flex flex-row justify-center">
								{isWeb ? (
									<Image source={pendiente} className="flex items-center" />
								) : (
									<EllipseOrange />
								)}
							</View>
							<Text className="font-robotoMedium text-texto" style={{ fontSize: scaledSize(10) }}>
								PENDIENTE
							</Text>
						</View>
						<View style={{ paddingRight: 16 * WScale }}>
							<Pressable
								style={{
									height: scaledSize(20),
									width: scaledSize(62),
									borderRadius: 4,
									borderWidth: 0.5,
								}}
								className="flex flex-row justify-center items-center border border-texto"
							>
								<Text style={{ fontSize: scaledSize(12) }} className="text-center font-roboto">
									INICIAR
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>

			<View
				style={{ height: 293 * HScale, marginTop: 10 * HScale }}
				className="w-full justify-start flex rounded-xl bg-white"
			>
				<View
					style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso"
				>
					<Text style={{ fontSize: scaledSize(14) }} className="font-sairaBold text-texto">
						HISTORIAL DE REPARTOS
					</Text>
					<Pressable>
						<Image source={downarrow} />
					</Pressable>
				</View>
				<Text
					style={{
						paddingVertical: 8 * HScale,
						paddingHorizontal: 16 * WScale,
						fontSize: scaledSize(12),
					}}
					className="font-robotoMedium text-texto"
				>
					58 Paquetes entregados
				</Text>
				<View style={{ paddingHorizontal: 16 * WScale }} className="flex w-full items-center">
					<View style={{ height: 1 }} className="w-full bg-gray-300" />
				</View>
				<View
					style={{ height: 210 * HScale, paddingLeft: 16 * WScale }}
					className="flex flex-col justify-around items-center"
				>
					<View
						style={{ height: 70 * HScale }}
						className="flex flex-row justify-between items-center w-full"
					>
						<View
							style={{ gap: 12 * WScale }}
							className="flex flex-row  justify-start items-center"
						>
							<View
								style={{ width: scaledSize(45), height: scaledSize(45) }}
								className="rounded-xl bg-violeta flex items-center justify-center"
							>
								{isWeb ? <Image source={boxlist} /> : <Box width={scaledSize(40)} />}
							</View>
							<View className="flex justify-center">
								<Text
									style={{ fontSize: scaledSize(12), marginBottom: -4 }}
									className="font-semibold text-texto"
								>
									#0H167
								</Text>
								<Text style={{ fontSize: scaledSize(12) }} className="text-texto">
									Av. Arriba,
								</Text>
								<Text style={{ fontSize: scaledSize(12), marginTop: -4 }} className="text-texto">
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
									<Entregado
										height={scaledSize(7)}
										width={scaledSize(7)}
										className="flex items-center"
									/>
								</View>
								<Text className="font-robotoMedium text-texto" style={{ fontSize: scaledSize(10) }}>
									ENTREGADO
								</Text>
							</View>
							<View style={{ paddingRight: 16 * WScale }}>
								<View
									style={{ height: scaledSize(24), width: scaledSize(56) }}
									className="flex flex-row justify-end items-center"
								>
									{/* <Image resizeMode="stretch" source={tachito} /> */}
								</View>
							</View>
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
								{isWeb ? <Image source={boxlist} /> : <Box width={scaledSize(40)} />}
							</View>
							<View className="flex justify-center">
								<Text
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
									className="font-semibold text-texto"
								>
									#0H167
								</Text>
								<Text style={{ fontSize: scaledSize(12) }} className="text-texto">
									Av. Arriba,
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
									className="text-texto"
								>
									CABA
								</Text>
							</View>
						</View>
						<View className="flex flex-col items-end justify-end gap-3">
							<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Entregado
										height={scaledSize(7)}
										width={scaledSize(7)}
										className="flex items-center"
									/>
								</View>
								<Text className="font-robotoMedium text-texto" style={{ fontSize: scaledSize(10) }}>
									ENTREGADO
								</Text>
							</View>
							<View style={{ paddingRight: 16 * WScale }}>
								<View
									style={{ height: scaledSize(24), width: scaledSize(56) }}
									className="flex flex-row justify-end items-center"
								>
									{/* <Image resizeMode="stretch" source={tachito} /> */}
								</View>
							</View>
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
								{isWeb ? <Image source={boxlist} /> : <Box width={scaledSize(40)} />}
							</View>
							<View className="flex justify-center">
								<Text
									style={{ fontSize: scaledSize(12), marginBottom: -4 * HScale }}
									className="font-semibold text-texto"
								>
									#0H167
								</Text>
								<Text style={{ fontSize: scaledSize(12) }} className="text-texto">
									Av. Arriba,
								</Text>
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -4 * HScale }}
									className="text-texto"
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
									<Entregado
										height={scaledSize(7)}
										width={scaledSize(7)}
										className="flex items-center"
									/>
								</View>
								<Text className="font-robotoMedium text-texto" style={{ fontSize: scaledSize(10) }}>
									ENTREGADO
								</Text>
							</View>
							<View style={{ paddingRight: 16 * WScale }}>
								<View
									style={{ height: scaledSize(24), width: scaledSize(56) }}
									className="flex flex-row justify-end items-center"
								>
									{/* <Image resizeMode="stretch" source={tachito} /> */}
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={{ marginTop: 29 * HScale }} className="flex justify-center items-center">
				<Pressable
					style={{ height: 28 * HScale, width: 270 * WScale, borderRadius: 8 }}
					className=" flex flex-row justify-center items-center align-middle bg-texto"
				>
					<Text
						style={{ marginRight: 8 * WScale, fontSize: scaledSize(12) }}
						className="text-center text-amarilloVerdoso font-roboto"
					>
						OBTENER PAQUETES
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default HomeIniciarJornada;
