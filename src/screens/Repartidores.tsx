import { View, Text, Button, Pressable, Image } from 'react-native';
import React from 'react';
import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import deshabilitado from '../assets/deshabilitado.png';
import habilitado from '../assets/habilitado.png';
import downarrow from '../assets/arrow-head-down.png';
import CircleProgress from '../components/CircleProgress';

const Repartidores = () => {
	return (
		<View className="bg-verde w-full h-full flex-col items-center  flex py-2 px-4">
			<View className="w-[300] h-50 flex flex-row mt-3 justify-between align-middle items-center">
				<Image className="h-[30] w-[80.69]" source={box} />
				<Pressable className="w-[109] h-[26] flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
					<Text className="text-center text-xs">CERRAR SESION</Text>
				</Pressable>
			</View>
			<View className="bg-amarilloVerdoso w-[300] h-[40] flex-row flex justify-between mt-[28] px-4 rounded-xl">
				<Text className="mx-0 text-lg flex justify-center items-center py-1 font-sairaBold text-texto">
					REPARTIDORES
				</Text>
				<View className="w-[13] h-[40] py-2 flex justify-center items-center">
					<Image source={leftArrow} />
				</View>
			</View>
			<View className="bg-violeta flex-row flex w-[300] h-[35] justify-between items-center px-4 mt-[10] rounded-t-xl">
				<Text className="text-sm font-robotoBold text-texto flex align-middle">ENERO</Text>
				<View className="flex flex-row items-center">
					<Text className="font-roboto">mie</Text>
					<Text className="font-robotoBold"> / 03</Text>
				</View>
			</View>
			<View className="bg-blanco flex justify-between h-[407] w-[300]">
				<View className="flex-row flex justify-between my-3 px-4">
					<View className="flex flex-row gap-3 justify-center items-center">
						<View className="w-1/3 items-center flex">
							<CircleProgress value={36} />
						</View>
						<View className="flex flex-col items-start justify-center gap-1">
							<Text className="h-[15] text-left items-center flex font-robotoBold text-texto">
								Javier Trombetta
							</Text>
							<View className="h-[15] w-[78] flex flex-row items-center justify-evenly bg-gray-300 rounded-md">
								<View>
									<Image source={deshabilitado} />
								</View>
								<View className="flex items-center justify-center mb-[1]">
									<Text style={{ fontSize: 10 }}>ENTREGADO</Text>
								</View>
							</View>
						</View>
					</View>
					<View className="items-end justify-center flex">
						<Image
							className={'w-10 h-10 rounded-full'}
							source={{
								uri: 'https://media.licdn.com/dms/image/C4D03AQHrxjH4W8NPaQ/profile-displayphoto-shrink_100_100/0/1595166426988?e=1711584000&v=beta&t=JvYqCohzV0C4YBalxd1OrjXzkdphr-fEAlf1R_yaB2I',
							}}
						/>
					</View>
				</View>
				<View className="w-[300] h-[0.5] bg-gray-300" />
				<View className="flex-row flex justify-between my-3 px-4">
					<View className="flex flex-row gap-3 justify-center items-center">
						<View className="w-1/3 items-center flex">
							<CircleProgress value={48} />
						</View>
						<View className="flex flex-col items-start justify-center gap-1">
							<Text className="h-[15] text-left items-center flex font-robotoBold text-texto">
								Javier Colodro
							</Text>
							<View className="h-[15] w-[68] flex flex-row items-center justify-evenly bg-gray-300 rounded-md">
								<View>
									<Image source={habilitado} />
								</View>
								<View className="flex items-center justify-center mb-[1]">
									<Text style={{ fontSize: 10 }}>EN CURSO</Text>
								</View>
							</View>
						</View>
					</View>
					<View className="items-end justify-center flex">
						<Image
							className={'w-10 h-10 rounded-full'}
							source={{
								uri: 'https://media.licdn.com/dms/image/C4D03AQGdOefz2XaJIA/profile-displayphoto-shrink_100_100/0/1612753310949?e=1711584000&v=beta&t=HW9EJnZysnYHEbMwD2B_XZgzcvt6RI5owIDOtCBwWUc',
							}}
						/>
					</View>
				</View>
				<View className="w-[300] h-[0.5] bg-gray-300" />
				<View className="flex-row flex justify-between my-3 px-4">
					<View className="flex flex-row gap-3 justify-center items-center">
						<View className="w-1/3 items-center flex">
							<CircleProgress value={86} />
						</View>
						<View className="flex flex-col items-start justify-center gap-1">
							<Text className="h-[15] text-left items-center flex font-robotoBold text-texto">
								Boris Manzano
							</Text>
							<View className="h-[15] w-[96] flex flex-row items-center justify-evenly bg-gray-300 rounded-md">
								<View>
									<Image source={deshabilitado} />
								</View>
								<View className="flex items-center justify-center mb-[1]">
									<Text style={{ fontSize: 10 }}>DESHABILITADO</Text>
								</View>
							</View>
						</View>
					</View>
					<View className="items-end justify-center flex">
						<Image
							className={'w-10 h-10 rounded-full'}
							source={{
								uri: 'https://cdn.discordapp.com/attachments/1153431672264597585/1197245225677107240/imagen_cv.jpg?ex=65c3cb01&is=65b15601&hm=1ef0e9a4d50b227820aedff86a7fc4f32298be71609da5b8caed50a49d4ef5d3&',
							}}
						/>
					</View>
				</View>
				<View className="w-[300] h-[0.5] bg-gray-300" />
				<View className="flex-row flex justify-between my-3 px-4">
					<View className="flex flex-row gap-3 justify-center items-center">
						<View className="w-1/3 items-center flex">
							<CircleProgress value={56} />
						</View>
						<View className="flex flex-col items-start justify-center gap-1">
							<Text className="h-[15] text-left items-center flex font-robotoBold text-texto">
								Lucas Glave
							</Text>
							<View className="h-[15] w-[68] flex flex-row items-center justify-evenly bg-gray-300 rounded-md">
								<View>
									<Image source={habilitado} />
								</View>
								<View className="flex items-center justify-center mb-[1]">
									<Text style={{ fontSize: 10 }}>EN CURSO</Text>
								</View>
							</View>
						</View>
					</View>
					<View className="items-end justify-center flex">
						<Image
							className={'w-10 h-10 rounded-full'}
							source={{
								uri: 'https://media.licdn.com/dms/image/D4D03AQHbMGou_Pxf1w/profile-displayphoto-shrink_200_200/0/1679951269315?e=1711584000&v=beta&t=tmxoWJKRET9g3XGq5W_-y1HScfPezAPCwXJwrbheKFw',
							}}
						/>
					</View>
				</View>
			</View>
			<View className="w-[300] h-[0.5] bg-gray-300" />
			<View className="w-[300] h-[47.5] flex justify-center items-center rounded-b-xl bg-white">
				<Image className="" source={downarrow} />
			</View>
		</View>
	);
};

export default Repartidores;
