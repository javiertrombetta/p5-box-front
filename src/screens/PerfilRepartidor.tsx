import { View, Text, Pressable, Image } from 'react-native';
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

const PerfilRepartidor = () => {
	return (
		<View className="w-full bg-verde h-full flex flex-col items-center">
			<View className="w-[300] h-50 flex flex-row mt-3 justify-between items-center">
				<Image className="h-[30] w-[80.69]" source={box} />
				<Pressable className="w-28 h-7 flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
					<Text className="text-center text-xs">CERRAR SESION</Text>
				</Pressable>
			</View>
			<View className="bg-amarilloVerdoso w-[300] h-[40] flex-row flex justify-between mt-[28] rounded-xl">
				<Text className="mx-4 text-lg flex justify-center items-center py-1 font-sairaBold text-texto">
					GESTIONAR PEDIDOS
				</Text>
				<View className=" w-[35] h-[40] py-2  flex justify-center items-center">
					<Image source={leftArrow} />
				</View>
			</View>
			<View className="w-[300] h-24 flex flex-row rounded-xl items-center justify-around align-middle mt-[10] bg-white">
				<View className="w-1/3 px-2 flex items-center justify-center">
					<Image
						className="w-[60] h-[60] rounded-xl"
						source={{
							uri: 'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg',
						}}
					/>
				</View>
				<View className="w-1/3">
					<Text className="text-start text-sm font-medium text-texto">Palermo</Text>
					<View></View>
					{/* <Text className="w-[67] h-[15] text-center font-roboto text-texto rounded-sm bg-verde" style={{fontSize:"10px"}}>HABILITADO</Text> */}
				</View>
				<View className="w-1/3 flex items-end px-2">
					<Image source={boton} />
				</View>
			</View>
			<View className="w-[300] h-12 flex justify-center rounded-xl mt-[10] bg-amarilloVerdoso">
				<View className="w-[300] h-12 flex flex-row rounded-t-xl items-center justify-between">
					<View>
						<Text className="text-sm ml-5 h-3 font-sairaBold text-texto">
							REPARTOS PENDIENTESsss
						</Text>
						<Text className="text-sm ml-5 h-3 mb-2 font-saira text-texto">sin repartos</Text>
					</View>
					<Pressable className="mr-5">
						<Image source={rightarrow} />
					</Pressable>
				</View>
			</View>
			<View className="w-[300] h-[282] flex rounded-t-xl mt-[10] bg-white">
				<View className="w-[300] h-10 flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso">
					<Text className="text-sm ml-5 font-sairaBold text-texto">HISTORIAL DE REPARTOS</Text>
					<Pressable className="mr-5">
						<Image source={downarrow} />
					</Pressable>
				</View>
				<Text className="ml-6 py-2 font-semibold">58 Paquetes entregados</Text>
				<View className="flex w-full pb-1 items-center">
					<View className="h-[1] w-10/12 bg-gray-300" />
				</View>
				<View className="flex flex-col h-48 justify-between items-center">
					<View className="flex flex-row justify-evenly items-center w-full">
						<View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
							<Image source={boxlist} />
						</View>
						<View className="flex justify-center">
							<Text className="font-semibold">#0H167</Text>
							<Text>Av. Boca,</Text>
							<Text>CABA</Text>
						</View>
						<View className="flex flex-col items-end justify-center gap-1">
							<View className="w-[88] h-[15] flex flex-row justify-evenly items-center rounded-md bg-gray-200">
								<View className="flex flex-row items-center">
									<Image source={deshabilitado} />
								</View>
								<Text style={{ fontSize: 10.5 }}>ENTREGADO</Text>
							</View>
							<Pressable className="flex flex-row h-6 w-14 justify-center items-center">
								<Image source={tachito} />
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View className="h-[1] w-10/12 bg-gray-300" />
					</View>
					<View className="flex flex-row justify-evenly items-center w-full">
						<View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
							<Image source={boxlist} />
						</View>
						<View className="flex justify-center">
							<Text className="font-semibold">#0H167</Text>
							<Text>Av. Boca,</Text>
							<Text>CABA</Text>
						</View>
						<View className="flex flex-col items-end justify-center gap-1">
							<View className="w-[88] h-[15] flex flex-row justify-evenly items-center rounded-md bg-gray-200">
								<View className="flex flex-row items-center">
									<Image source={deshabilitado} />
								</View>
								<Text style={{ fontSize: 10.5 }}>ENTREGADO</Text>
							</View>
							<Pressable className="flex flex-row h-6 w-14 justify-center items-center">
								<Image source={tachito} />
							</Pressable>
						</View>
					</View>
					<View className="flex w-full items-center">
						<View className="h-[1] w-10/12 bg-gray-300" />
					</View>
					<View className="flex flex-row justify-evenly items-center w-full">
						<View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
							<Image source={boxlist} />
						</View>
						<View className="flex justify-center">
							<Text className="font-semibold">#0H167</Text>
							<Text>Av. Boca,</Text>
							<Text>CABA</Text>
						</View>

						<View className="flex flex-col items-end justify-center gap-1">
							<View className="w-[88] h-[15] flex flex-row justify-evenly items-center rounded-md bg-gray-200">
								<View className="flex flex-row items-center">
									<Image source={deshabilitado} />
								</View>
								<Text style={{ fontSize: 10.5 }}>ENTREGADO</Text>
							</View>
							<Pressable className="flex flex-row h-6 w-14 justify-center items-center">
								<Image source={tachito} />
							</Pressable>
						</View>
					</View>
				</View>
			</View>
			<View className="h-[1] w-[300] bg-gray-300" />
			<View className="w-[300] h-[50] flex justify-center items-center rounded-b-xl bg-white">
				<Image source={downarrow} />
			</View>
		</View>
	);
};

export default PerfilRepartidor;
