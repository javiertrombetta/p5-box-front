import React, { useState } from 'react';
import { View, Text, Pressable, Image, TextInput, Dimensions, Platform } from 'react-native';

import leftArrow from '../assets/arrow-left.png';
import box from '../assets/box.png';
import arrowHeadDown from '../assets/arrow-head-down.png';

import ArrowLeft from '../assets/ArrowLeft.svg';
import LogoBox from '../assets/LogoBox.svg';
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const AddPackage = () => {
	const [text, setText] = useState('');
	const isWeb = Platform.OS === 'web';

	return (
		<View
			className="bg-verde w-full h-full flex-col items-center  flex"
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 6 * HScale }}
		>
			<Header />
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
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
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-gray-400"></View>

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
					className="flex flex-row items-center border border-gray-400 rounded justify-between "
				>
					<Text style={{ left: 15 * WScale }} className="text-center font-roboto text-gray-500">
						00/00/00
					</Text>
					<Pressable style={{ right: 10 * WScale }} className="relative">
						<View
							style={{ width: 26 * WScale, height: 18 * HScale }}
							className="justify-center items-center border rounded border-texto"
						>
							{isWeb ? <Image source={ArrowHeadDown} /> : <ArrowHeadDown width={16 * WScale} />}
						</View>
					</Pressable>
				</View>
			</View>
			<Pressable
				style={{
					height: 28 * HScale,
					width: 270 * WScale,
					marginTop: 16 * HScale,
					borderRadius: 8,
				}}
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
