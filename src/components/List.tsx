import { View, Text, Dimensions, Image, Pressable, Platform } from 'react-native';
import React from 'react';
import CircleProgress from './CircleProgress';

import boxList from '../assets/BoxList.png';
import trash from '../assets/trash.png';
import boxRight from '../assets/boxRight.png';
import boxLeft from '../assets/boxLeft.png';
import vectorSuma from '../assets/vectorSuma.png';
import arrowDown from '../assets/arrow-head-down.png';
import personas from '../assets/Group 37396.png';
import buttonTrue from '../assets/buttonTrue.png';
import enCurso from '../assets/EllipseGreen.png';
import pendiente from '../assets/EllipseOrange.png';


import GreenCircle from '../assets/GreenCircle.svg';
import GrayCircle from '../assets/GrayCircle.svg';
import EllipseGreen from '../assets/EllipseGreen.svg';
import EllipseOrange from '../assets/EllipseOrange.svg';
import BlackCircle from '../assets/BlackCircle.svg';
import TrashIcon from '../assets/Trash.svg';
import Box from '../assets/Box.svg';
import Entregado from '../assets/Entregado.svg';
import ArrowRightBox from '../assets/ArrowRightBox.svg';
import ArrowLeftBox from '../assets/ArrowLeftBox.svg';
import Sum from '../assets/Sum.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import IconsPeople from '../assets/IconsPeople.svg';
import Header from '../components/Header';
import Button from '../components/Button';
import ButtonTrue from '../assets/ButtonTrue.svg';

interface listProps {
	column1: string;
	circleValue?: number;
	column2: string;
	content2String: string;
	column3: string;
	content3?: string;
}

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const List = ({ column1, circleValue, column2, content2String, column3, content3 }: listProps) => {
	const isWeb = Platform.OS === 'web';
	const arrayColumn2: string[] = content2String.split(', ');

	return (
		<View
			style={{ height: '100%', width: '100%' }}
			className="flex flex-row justify-between items-center"
		>
			<View className="flex justify-start items-center flex-row">
				{/* COLUMNA UNO */}
				<View className="flex justify-center">
					{column1 === 'circleProgress' && circleValue !== undefined && (
						<CircleProgress value={circleValue} radius={scaledSize(38)} />
					)}
					{column1 === 'svg' && isWeb && (
						<View
							style={{ width: scaledSize(45), height: scaledSize(45) }}
							className="rounded-xl bg-violeta flex items-center justify-center"
						>
							<Image
								style={{ width: 36 * WScale, height: 36 * HScale }}
								resizeMode="cover"
								source={boxList}
							/>
						</View>
					)}
					{column1 === 'svg' && !isWeb && (
						<View
							style={{ width: scaledSize(45), height: scaledSize(45) }}
							className="rounded-xl bg-violeta flex items-center justify-center"
						>
							<Box height={30 * HScale} width={80.69 * WScale} />
						</View>
						)}
					{column1 === 'button' && isWeb && (
						<Image
							style={{ width: 19 * WScale, height: 19 * WScale }}
							resizeMode="contain"
							source={buttonTrue}
						/>
					)}
					{column1 === 'button' && !isWeb && (
						<ButtonTrue height={19 * HScale} width={19 * WScale} />
					)}
				</View>

				{/* COLUMNA DOS */}

				<View
					style={{ height: 40 * HScale, paddingLeft: 12 * WScale }}
					className="flex justify-center align-middle"
				>
					{column2 === 'strings' && (
						<View>
							<Text
								style={{ fontSize: scaledSize(14), marginBottom: -2 }}
								className="font-robotoBold text-texto"
							>
								{arrayColumn2[0]}
							</Text>
							{arrayColumn2[2] ? (
								<Text
									style={{ fontSize: scaledSize(12), marginTop: 1 }}
									className="font-roboto text-texto"
								>
									{arrayColumn2[1]},
								</Text>
							) : (
								<Text
									style={{ fontSize: scaledSize(12), marginTop: 1 }}
									className="font-roboto text-texto"
								>
									{arrayColumn2[1]}
								</Text>
							)}
							{arrayColumn2[2] && (
								<Text
									style={{ fontSize: scaledSize(12), marginTop: -2 }}
									className="font-roboto text-texto"
								>
									{arrayColumn2[2]}
								</Text>
							)}
						</View>
					)}
					{column2 === 'string' && (
						<View>
							<Text
								className="flex justify-center items-center font-roboto text-texto"
								style={{ fontSize: scaledSize(12) }}
							>
								{content2String}
							</Text>
						</View>
					)}
					{column2 === 'stringsImg' &&
						(arrayColumn2[1] === 'green' ||
						arrayColumn2[1] === 'gray' ||
						arrayColumn2[1] === 'black' ? (
							<View
								style={{ gap: 4 * HScale }} // gap-1
								className="flex flex-col items-start justify-center"
							>
								<Text
									style={{ fontSize: scaledSize(14) }} // h-[15]
									className="text-left items-center flex font-robotoBold text-texto"
								>
									{arrayColumn2[0]}
								</Text>
								<View>
									{arrayColumn2[1] === 'green' && (
										<View
											style={{ height: 15 * HScale, width: 68 * WScale }}
											className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
										>
											<View>
												<GreenCircle height={7 * HScale} width={7 * WScale} />
											</View>
											<View className="flex items-center justify-center ">
												<Text
													className="text-texto font-robotoBold"
													style={{ fontSize: scaledSize(10) }}
												>
													EN CURSO
												</Text>
											</View>
										</View>
									)}
									{arrayColumn2[1] === 'gray' && (
										<View
											style={{ height: 15 * HScale, width: 96 * WScale }}
											className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
										>
											<View>
												<GrayCircle height={7 * HScale} width={7 * WScale} />
											</View>
											<View className="flex items-center justify-center ">
												<Text
													className="text-texto font-robotoBold"
													style={{ fontSize: scaledSize(10) }}
												>
													DESHABILITADO
												</Text>
											</View>
										</View>
									)}
									{arrayColumn2[1] === 'black' && (
										<View
											style={{ height: 15 * HScale, width: 78 * WScale }}
											className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
										>
											<View>
												<BlackCircle height={7 * HScale} width={7 * WScale} />
											</View>
											<View className="flex items-center justify-center ">
												<Text
													className="text-texto font-robotoBold"
													style={{ fontSize: scaledSize(10) }}
												>
													ENTREGADO
												</Text>
											</View>
										</View>
									)}
								</View>
							</View>
						) : (
							<View>
								<Text style={{ fontSize: scaledSize(14) }} className="font-robotoBold">
									{arrayColumn2[0]}
								</Text>
								<Text style={{ fontSize: scaledSize(12), marginTop: 1 }} className="font-roboto">
									{arrayColumn2[1]}
								</Text>
								<Image
									source={personas}
									style={{
										height: scaledSize(25),
										width: scaledSize(45),
										marginTop: 1 * HScale,
									}}
								/>
							</View>
						))}
				</View>
			</View>

			{/* COLUMNA TRES */}

			<View
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				className="flex justify-end"
			>
				{column3 === 'img' && (
					<View
						style={{
							width: 40 * WScale,
							height: 40 * WScale,
							borderRadius: (40 * WScale) / 2,
							overflow: 'hidden',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						className="flex justify-end"
					>
						<Image
							style={{ width: 40 * WScale, height: '100%' }}
							resizeMode="cover"
							source={{ uri: content3 }}
						/>
					</View>
				)}
				{column3 === 'buttonVer' && (
					<View style={{ height: 26 * HScale, width: 52 * WScale }}>
						<Button spec="texto" content="VER" borderR={10} />
					</View>
				)}
				{column3 === 'svgTrash' && (
					<Pressable
						style={{ height: 24 * HScale, width: 56 * WScale }}
						className="flex flex-row justify-end items-center"
					>
						{isWeb ? (
							<Image
								resizeMode="stretch"
								style={{ height: 20 * HScale, width: 32 * WScale }}
								source={trash}
							/>
						) : (
							<TrashIcon height={20 * HScale} width={32 * WScale} />
						)}
					</Pressable>
				)}
				{column3 === 'svgStringButton' && (
					<View>
						{content3 === 'entregadoTrash' && (
						<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
							<View
							style={{ width: 88 * WScale, height: 15 * HScale }}
							className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
							>
								<View className="flex flex-row justify-center">
									<Entregado />
								</View>
								<Text style={{ fontSize: scaledSize(10) }}>ENTREGADO</Text>
							</View>
							<Pressable
								style={{ height: 24 * HScale, width: 56 * WScale }}
								className="flex flex-row justify-start items-center"
							>
								{isWeb ? (
								<Image
									resizeMode="stretch"
									style={{ height: 20 * HScale, width: 32 * WScale }}
									source={trash}
								/>
								) : (
									<TrashIcon height={20 * HScale} width={32 * WScale} />
								)}
								</Pressable>
							</View>
						)}
						{content3 === 'entregado' && (
							<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
								<View
								style={{ width: 88 * WScale, height: 15 * HScale }}
								className="flex flex-row justify-evenly items-center rounded-l-md bg-gray-200"
								>
									<View className="flex flex-row justify-center">
										<Entregado />
									</View>
									<Text style={{ fontSize: scaledSize(10) }}>ENTREGADO</Text>
								</View>
								<View
									style={{ height: 24 * HScale, width: 56 * WScale }}
									className="flex flex-row justify-start items-center"
								>
								</View>
							</View>
						)}
						{content3 === 'enCursoTrash' && (
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
											<Image
											resizeMode="stretch"
											style={{ height: 20 * HScale, width: 32 * WScale }}
											source={trash}
										/>
										) : (
											<TrashIcon height={20 * HScale} width={32 * WScale} />
										)}
									</Pressable>
								</View>
							</View>

							
						)}
						{content3 === 'pendienteIniciar' && (
							<View style={{ gap: 12 * HScale }} className="flex flex-col items-end justify-end">
								<View
									style={{ minWidth: 83 * WScale, height: 15 * HScale }}
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
									<View
										style={{
											height: scaledSize(20),
											width: scaledSize(62),
										}}
									>
										<Button content="INICIAR" spec="blanco" borderR={4} />
									</View>
								</View>
							</View>
						)}
						
						
					</View>
				)}
			</View>
		</View>
	);
};

export default List;
