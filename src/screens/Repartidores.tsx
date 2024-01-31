import { View, Text, Button, Pressable, Image, Dimensions, Platform } from 'react-native';
import React, { useEffect } from 'react';
import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import entregado from '../assets/entregado.png';
import habilitado from '../assets/habilitado.png';
import downarrow from '../assets/arrow-head-down.png';
import CircleProgress from '../components/CircleProgress';
import GreenCircle from '../assets/GreenCircle.svg';
import GrayCircle from '../assets/GrayCircle.svg';
import BlackCircle from '../assets/BlackCircle.svg';

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));
const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const Repartidores = () => {
	return (
		<View
			className="bg-verde w-full h-full flex-col items-center  flex"
			style={{ paddingHorizontal: 30 * WScale, paddingVertical: 8 * HScale }}
		>
			<View
				className="w-full flex flex-row justify-between align-middle items-center"
				style={{ marginTop: 12 * HScale }}
			>
				{/* <Image source={box} style={{ height: 30, width: 80.69 }} /> */}
				<Image
					source={box}
					style={{ height: 30 * HScale, width: 80.69 * WScale }}
					resizeMode="contain"
				/>
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
				style={{
					height: 40 * HScale,
					paddingHorizontal: 16 * WScale,
					marginTop: 28 * HScale,
				}}
				className="bg-amarilloVerdoso w-full flex-row items-center justify-between flex rounded-xl"
			>
				<Text
					style={{ paddingVertical: 4 * HScale, fontSize: scaledSize(18) }}
					className=" flex justify-center items-center font-sairaBold text-texto"
				>
					REPARTIDORES
				</Text>
				<View
					style={{ width: 13 * WScale, height: 40 * HScale, paddingVertical: 8 * HScale }} // w-[13] h-[40] py-2
					className="flex justify-center items-center "
				>
					<Image source={leftArrow} />
				</View>
			</View>
			<View
				style={{ height: 35 * HScale, paddingHorizontal: 16 * WScale, marginTop: 10 * HScale }} // px-4 mt-[10] h-[35]
				className="bg-violeta flex-row flex w-full justify-between items-center rounded-t-xl"
			>
				<Text
					style={{ fontSize: scaledSize(14) }}
					className=" font-robotoBold text-texto flex align-middle"
				>
					ENERO
				</Text>
				<View style={{ gap: 1 * WScale }} className="flex flex-row items-center">
					<Text style={{ fontSize: scaledSize(14) }} className="font-roboto">
						mie
					</Text>
					<Text style={{ fontSize: scaledSize(14) }} className="font-robotoBold">
						/ 03
					</Text>
				</View>
			</View>
			<View
				style={{ height: 407 * HScale }} // h-[407]
				className="bg-blanco flex justify-evenly w-full"
			>
				<View
					style={{
						marginVertical: 12 * HScale,
						paddingTop: 2 * HScale,
						paddingHorizontal: 16 * WScale,
					}} // my-3 px-4
					className="flex-row flex justify-between items-center"
				>
					<View
						style={{ gap: 12 * WScale }} // gap-3
						className="flex flex-row justify-center items-center"
					>
						<View style={{ width: 71 * WScale }} className="items-center flex">
							<CircleProgress value={52} />
						</View>
						<View
							style={{ gap: 4 * HScale }} // gap-1
							className="flex flex-col items-start justify-center"
						>
							<Text
								style={{ height: 15 * HScale, fontSize: scaledSize(14) }} // h-[15]
								className="text-left items-center flex font-robotoBold text-texto"
							>
								Javier Trombetta
							</Text>
							<View
								style={{ height: 15 * HScale, width: 68 * WScale }} // w-[78] h-[15]
								className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
							>
								<View className="flex items-center justify-center align-middle ">
									<GreenCircle height={7 * HScale} width={7 * WScale} />
								</View>
								<View className="flex items-center justify-center align-middle ">
									<Text className="text-texto font-robotoBold" style={{ fontSize: scaledSize(10) }}>
										EN CURSO
									</Text>
								</View>
							</View>
						</View>
					</View>
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
					>
						<Image //w-10 h-10
							style={{ width: 40 * WScale, height: '100%' }}
							resizeMode="cover"
							source={{
								uri: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
							}}
						/>
					</View>
				</View>
				<View className="w-full h-[0.5] bg-gray-300" />
				<View
					style={{ marginVertical: 12 * HScale, paddingHorizontal: 16 * WScale }} // my-3 px-4
					className="flex-row flex justify-between items-center"
				>
					<View
						style={{ gap: 12 * WScale }} // gap-3
						className="flex flex-row justify-center items-center"
					>
						<View style={{ width: 71 * WScale }} className="items-center flex">
							<CircleProgress value={100} />
						</View>
						<View
							style={{ gap: 4 * HScale }} // gap-1
							className="flex flex-col items-start justify-center"
						>
							<Text
								style={{ height: 15 * HScale, fontSize: scaledSize(14) }} // h-[15]
								className="text-left items-center flex font-robotoBold text-texto"
							>
								Boris Manzano
							</Text>
							<View
								style={{ height: 15 * HScale, width: 78 * WScale }} // w-[78] h-[15]
								className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
							>
								<View>
									<BlackCircle height={7 * HScale} width={7 * WScale} />
								</View>
								<View className="flex items-center justify-center ">
									<Text className="text-texto font-robotoBold" style={{ fontSize: scaledSize(10) }}>
										ENTREGADO
									</Text>
								</View>
							</View>
						</View>
					</View>
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
					>
						<Image //w-10 h-10
							style={{ width: 40 * WScale, height: '100%' }}
							resizeMode="cover"
							source={{
								uri: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
							}}
						/>
					</View>
				</View>
				<View className="w-full h-[0.5] bg-gray-300" />
				<View
					style={{ marginVertical: 12 * HScale, paddingHorizontal: 16 * WScale }} // my-3 px-4
					className="flex-row flex justify-between items-center"
				>
					<View
						style={{ gap: 12 * WScale }} // gap-3
						className="flex flex-row justify-center items-center"
					>
						<View style={{ width: 71 * WScale }} className=" items-center flex">
							<CircleProgress value={80} />
						</View>
						<View
							style={{ gap: 4 * HScale }} // gap-1
							className="flex flex-col items-start justify-center"
						>
							<Text
								style={{ height: 15 * HScale, fontSize: scaledSize(14) }} // h-[15]
								className="text-left items-center flex font-robotoBold text-texto"
							>
								Javier Colodro
							</Text>
							<View
								style={{ height: 15 * HScale, width: 68 * WScale }} // w-[78] h-[15]
								className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
							>
								<View>
									<GreenCircle height={7 * HScale} width={7 * WScale} />
								</View>
								<View className="flex items-center justify-center ">
									<Text className="text-texto font-robotoBold" style={{ fontSize: scaledSize(10) }}>
										EN CURSO
									</Text>
								</View>
							</View>
						</View>
					</View>
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
					>
						<Image //w-10 h-10
							style={{ width: 40 * WScale, height: '100%' }}
							resizeMode="cover"
							source={{
								uri: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
							}}
						/>
					</View>
				</View>
				<View className="w-full h-[0.5] bg-gray-300" />
				<View
					style={{ marginVertical: 12 * HScale, paddingHorizontal: 16 * WScale }} // my-3 px-4
					className="flex-row flex justify-between items-center"
				>
					<View
						style={{ gap: 12 * WScale }} // gap-3
						className="flex flex-row justify-center items-center"
					>
						<View style={{ width: 71 * WScale }} className=" items-center flex">
							<CircleProgress value={100} />
						</View>
						<View
							style={{ gap: 4 * HScale }} // gap-1
							className="flex flex-col items-start justify-center"
						>
							<Text
								style={{ height: 15 * HScale, fontSize: scaledSize(14) }} // h-[15]
								className="text-left items-center flex font-robotoBold text-texto"
							>
								Lucas Glave
							</Text>
							<View
								style={{ height: 15 * HScale, width: 96 * WScale }} // w-[78] h-[15]
								className="flex flex-row items-center justify-evenly bg-gray-300 rounded-md"
							>
								<View>
									<GrayCircle height={7 * HScale} width={7 * WScale} />
								</View>
								<View className="flex items-center justify-center ">
									<Text className="text-texto font-robotoBold" style={{ fontSize: scaledSize(10) }}>
										DESHABILITADO
									</Text>
								</View>
							</View>
						</View>
					</View>
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
					>
						<Image //w-10 h-10
							style={{ width: 40 * WScale, height: '100%' }}
							resizeMode="cover"
							source={{
								uri: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
							}}
						/>
					</View>
				</View>
			</View>
			<View className="w-full h-[0.5] bg-gray-300" />
			<View
				style={{ height: 47.5 * HScale }}
				className="w-full flex justify-center items-center rounded-b-xl bg-white"
			>
				<Image className="" source={downarrow} />
			</View>
		</View>
	);
};

export default Repartidores;
