import React, { useState } from 'react';
import { View, Text, Pressable, Image, TextInput, Dimensions, Platform } from 'react-native';

import leftArrow from '../assets/arrow-left.png';
import box from '../assets/box.png';
import arrowHeadDown from '../assets/arrow-head-down.png';

import ArrowLeft from '../assets/ArrowLeft.svg';
import LogoBox from '../assets/LogoBox.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const AddPackage = () => {
	const [text, setText] = useState('');
	const isWeb = Platform.OS === 'web';

	return (
		<View
			style={{ paddingHorizontal: 32 * WScale, paddingTop: 6 * HScale }}
			className="w-full bg-verde h-full flex flex-col items-center"
		>
			<View
				style={{ marginTop: 6 * HScale }}
				className="w-full flex flex-row justify-between items-center"
			>
				{isWeb ? (
					<Image
						source={box}
						style={{ height: 30 * HScale, width: 80.69 * WScale }}
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
					}} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border border-texto text-texto"
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
					style={{ fontSize: scaledSize(18), paddingVertical: 4 * HScale }} // py-1
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					AGREGAR PAQUETES
				</Text>
				<View
					style={{ paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 21 * HScale,
						fontSize: scaledSize(15),
					}}
					className=" text-texto font-roboto"
					placeholder="Nombre de quien recibe"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 21 * HScale,
						fontSize: scaledSize(15),
					}}
					className=" text-texto font-roboto"
					placeholder="Peso del paquete (Kg)"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{
						height: 24 * HScale,
						width: 260 * WScale,
						marginTop: 55 * HScale,
						fontSize: scaledSize(15),
					}}
					className="relative  text-texto font-roboto"
					placeholder="Fecha de entrega"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View
					style={{ width: 270 * WScale, height: 35 * HScale }}
					className="flex flex-row items-center border border-texto rounded justify-between "
				>
					<Text style={{ left: 15 * WScale }} className="text-center text-texto font-roboto">
						00/00/00
					</Text>
					<Pressable style={{ right: 10 * WScale }} className="relative">
						<View
							style={{ width: 26 * WScale, height: 18 * HScale }}
							className="justify-center items-center border border-texto rounded"
						>
							{isWeb ? <Image source={ArrowHeadDown} /> : <ArrowHeadDown width={16 * WScale} />}
						</View>
					</Pressable>
				</View>
			</View>
			<Pressable
				style={{ height: 28 * HScale, width: 270 * WScale, marginTop: 16 * HScale, borderRadius:8 }}
				className=" flex flex-row justify-center items-center align-middle border bg-texto"
			>
				<Text
					style={{ fontSize: scaledSize(12), marginRight: 8 * WScale }}
					className="text-center text-amarilloVerdoso font-roboto"
				>
					AGREGAR
				</Text>
			</Pressable>
		</View>
	);
};

export default AddPackage;
