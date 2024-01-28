import { View, Text, Pressable, Image, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import leftArrow from '../assets/arrow-left.png';
import box from '../assets/box.png';
import ArrowHeadDown from '../assets/arrow-head-down.png';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const AddPackage = () => {
	const [text, setText] = useState('');
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
				style={{ height: 40 * HScale, paddingHorizontal: 16 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale }} // py-1
					className="text-lg flex justify-center items-center font-sairaBold text-texto"
				>
					AGREGAR PAQUETES
				</Text>
				<View
					style={{ width: 13 * WScale, height: 15 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					<Image source={leftArrow} />
				</View>
			</View>

			<View
				style={{ height: 450 * HScale, marginTop: 10 * HScale }}
				className="w-full items-center rounded-xl bg-blanco"
			>
				<TextInput
					style={{ height: 24 * HScale, width: 260 * WScale, marginTop: 35 * HScale }}
					className=" text-texto font-roboto"
					placeholder="Dirección"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{ height: 24 * HScale, width: 260 * WScale, marginTop: 21 * HScale }}
					className=" text-texto font-roboto"
					placeholder="Nombre de quien recibe"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{ height: 24 * HScale, width: 260 * WScale, marginTop: 21 * HScale }}
					className=" text-texto font-roboto"
					placeholder="Peso del paquete (Kg)"
					onChangeText={(newText) => setText(newText)}
					defaultValue={text}
				/>
				<View style={{ width: 260 * WScale, height: 1 }} className="bg-texto"></View>

				<TextInput
					style={{ height: 24 * HScale, width: 260 * WScale, marginTop: 55 * HScale }}
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
							<Image source={ArrowHeadDown} />
						</View>
					</Pressable>
				</View>
			</View>
			<Pressable
				style={{ height: 28 * HScale, width: 270 * WScale, marginTop: 16 * HScale }}
				className=" flex flex-row justify-center items-center align-middle border rounded-xl bg-texto"
			>
				<Text
					style={{ marginRight: 8 * WScale }}
					className="text-center text-amarilloVerdoso text-xs font-roboto"
				>
					AGREGAR
				</Text>
			</Pressable>
		</View>
	);
};

export default AddPackage;
