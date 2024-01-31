import { View, Text, Button, Pressable, Image, Dimensions, Switch } from 'react-native';
import React, { useState } from 'react';
import box from '../assets/box.png';
import arrowLeft from '../assets/arrow-left.png';
import downArrow from '../assets/arrow-head-down.png';
import buttonTrue from '../assets/buttonTrue.png';

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const ObtenerPaquetes = () => {
	// const [isEnabled, setIsEnabled] = useState(false);
	// const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
					style={{ width: 109 * WScale, height: 26 * HScale, marginTop: 8 * HScale, borderRadius: 8 }} //w-[109] h-[26]
					className="flex justify-center items-center align-middle border border-texto text-texto"
				>
					<Text className="text-center" style={{ fontSize: scaledSize(12) }}>CERRAR SESION</Text>
				</Pressable>
			</View>
			<View
				style={{ height: 40 * HScale, paddingHorizontal: 20 * WScale, marginTop: 28 * HScale }} // h-[40] mt-[28] px-4
				className="bg-amarilloVerdoso w-full flex-row flex items-center justify-between rounded-xl"
			>
				<Text
					style={{ fontSize: scaledSize(18) }} // py-1
					className="flex justify-center items-center font-sairaBold text-texto"
				>
					OBTENER PAQUETES
				</Text>
				<View
					style={{ width: 13 * WScale, height: 15 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center"
				>
					<Image source={arrowLeft} />
				</View>
			</View>
			<View
				style={{ height: 409 * HScale, marginTop: 10 * HScale }}
				className="w-full flex rounded-t-xl bg-white"
			>
				<View
					style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale }}
					className="w-full flex flex-row rounded-t-xl items-center justify-center bg-violeta"
				>
					<Text className="font-robotoMedium text-texto text-center" style={{ fontSize: scaledSize(12) }}>
						¿Cuántos paquetes repartirás hoy?
					</Text>
				</View>
				<View
					style={{
						height: 374 * HScale,
						paddingVertical: 12 * HScale,
					}}
					className="flex flex-col items-center justify-around"
				>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<Image
								style={{ width: 19 * WScale, height: 19 * WScale }}
								resizeMode="contain"
								source={buttonTrue}
							/>
						</View>
						<View>
							<Text className="flex justify-center items-center font-roboto text-texto" style={{ fontSize: scaledSize(12) }}>Amenabar 2356, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<Image
								style={{ width: 19 * WScale, height: 19 * WScale }}
								resizeMode="contain"
								source={buttonTrue}
							/>
						</View>
						<View>
							<Text style={{ fontSize: scaledSize(12) }}>Av Carabobo y Rivadavia, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<Image
								style={{ width: 19 * WScale, height: 19 * WScale }}
								resizeMode="contain"
								source={buttonTrue}
							/>
						</View>
						<View>
							<Text>Melian 1242, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<View
								style={{ width: 19 * WScale, height: 19 * WScale }}
								className="border border-gray-300 rounded-full"
							/>
						</View>
						<View>
							<Text>Castillo 670, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<View
								style={{ width: 19 * WScale, height: 19 * WScale }}
								className="border border-gray-300 rounded-full"
							/>
						</View>
						<View>
							<Text>Gorriti 4595, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<View
								style={{ width: 19 * WScale, height: 19 * WScale }}
								className="border border-gray-300 rounded-full"
							/>
						</View>
						<View>
							<Text>Av. Gral Mosconi 1056, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<View
								style={{ width: 19 * WScale, height: 19 * WScale }}
								className="border border-gray-300 rounded-full"
							/>
						</View>
						<View>
							<Text>Tacuari 1797, CABA</Text>
						</View>
					</View>

					<View style={{ paddingVertical: 8 * HScale }} className="flex w-full items-center">
						<View style={{ height: 1 }} className="w-full bg-gray-300" />
					</View>
					<View
						style={{ paddingHorizontal: 16 * WScale }}
						className="flex flex-row justify-start items-center w-full gap-2"
					>
						{/* {
                            isEnabled ? <Pressable style={{width: 19 * WScale, height: 19 * HScale}}/>
                            : <Pressable style={{width: 19 * WScale, height: 19 * HScale}}></Pressable>
                        } */}
						<View className="flex items-center justify-start">
							<View
								style={{ width: 19 * WScale, height: 19 * WScale }}
								className="border border-gray-300 rounded-full"
							/>
						</View>
						<View>
							<Text>Av. Gaona 1284, CABA</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={{ height: 1 * HScale }} className="w-full bg-gray-300 z-10" />
			<View
				style={{ height: 41 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white z-10"
			>
				<Image source={downArrow} />
			</View>
			<Pressable
				style={{ height: 28 * HScale, width: 270 * WScale, marginTop: 16 * HScale, borderRadius: 8  }}
				className=" flex flex-row justify-center items-center align-middle border bg-texto"
			>
				<Text
					style={{ marginRight: 8 * WScale }}
					className="text-center text-amarilloVerdoso font-roboto"
				>
					INICIAR JORNADA
				</Text>
			</Pressable>
		</View>
	);
};

export default ObtenerPaquetes;
