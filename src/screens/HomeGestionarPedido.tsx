import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import CircleProgress from '../components/CircleProgress'
import box from "../assets/box.png";
import boxRight from "../assets/boxRight.png";
import boxLeft from "../assets/boxLeft.png";
import Svg from "react-native-svg"
import React from 'react'

const HomeGestionarPedido = () => {
    
  return (
    <View className="w-full bg-verde h-full flex flex-col items-center">
        <View className="w-[300] h-50 flex flex-row mt-3 justify-between items-center">
            <Image className="h-[30] w-[80.69]" source={box} />
            <Pressable className="w-28 h-7 flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
                <Text className="text-center text-xs">CERRAR SESION</Text>
            </Pressable>
        </View>
        <View className="w-[300] h-10 flex rounded-xl justify-center mt-[28] bg-amarilloVerdoso">
            <Text className="text-center text-lg font-extrabold text-texto font-sairaBold">GESTIONAR PEDIDOS</Text>
        </View>
        <View className="w-[300] h-24 flex flex-row rounded-xl items-center justify-around align-middle mt-[10] bg-white">
            <View className="w-[30%] flex items-center justify-center">
                <Image className="w-[60] h-[60] rounded-xl" source={{uri:'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg'}}/>
            </View>
            <View className="w-[70%]">
                <Text className="text-start text-sm text-texto font-robotoBold">¡Hola Admin!</Text>
                <Text className="text-start text-sm text-texto font-roboto">Estos son los pedidos del dia</Text>
            </View>
        </View>
        <View className="w-[300] h-[84] flex justify-center mt-[10]">
            <View className="w-[300] h-[30] flex rounded-t-xl justify-center bg-violeta">
                <Text className="text-sm mx-5 font-robotoBold text-texto flex align-middle">ENERO</Text>
            </View>
            <View className="w-[300] h-[54] flex flex-row rounded-b-xl items-center justify-evenly bg-white">
                <Image className='w-[19] h-[20]' source={boxLeft}/>
                <View className="rounded-md w-[34] h-[34] flex items-center">
                    <Text className="font-saira text-xs flex text-end">lun</Text>
                    <Text className="font-sairaBold flex items-start justify-start text-start">01</Text>
                </View>
                <View className="rounded-md w-[34] h-[34] flex items-center">
                    <Text className="font-saira text-xs flex text-end">mar</Text>
                    <Text className="font-sairaBold flex items-start justify-start text-start">02</Text>
                </View>
                <View className="rounded-md bg-amarilloVerdoso w-[34] h-[34] flex items-center">
                    <Text className="font-saira text-xs flex text-end">mie</Text>
                    <Text className="font-sairaBold flex items-start justify-start text-start">03</Text>
                </View>
                <View className="rounded-md w-[34] h-[34] flex items-center">
                    <Text className="font-saira text-xs flex text-end opacity-50">jue</Text>
                    <Text className="font-sairaBold flex items-start justify-start text-start opacity-50">04</Text>
                </View>
                <View className="rounded-md w-[34] h-[34] flex items-center">
                    <Text className="font-saira text-xs flex text-end opacity-50">vie</Text>
                    <Text className="font-sairaBold flex items-start justify-start text-start opacity-50">05</Text>
                </View>
                <Image className='w-[19] h-[20]' source={boxRight}/>
            </View>
        </View>
        <View className="w-[300] h-[248] flex rounded-xl mt-[10] bg-white">
            <View className="w-[300] h-[43] flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso">
                <Text className="text-sm ml-5 font-bold text-texto">DETALLES</Text>
                <View className="flex flex-row items-center justify-center gap-2">
                    <Text className="font-saira text-texto">03/01/23</Text>
                    <Pressable className="mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                            <path d="M0.34362 0.33213C0.758879 -0.0716676 1.40739 -0.107106 1.8636 0.224929L1.99427 0.335563L6.9986 5.24423L12.0057 0.335563C12.4192 -0.069958 13.0676 -0.108094 13.5252 0.222041L13.6564 0.33213C14.0716 0.735928 14.1107 1.36908 13.7726 1.816L13.6599 1.94407L7.82708 7.66444C7.41234 8.07118 6.76163 8.10816 6.30399 7.77537L6.17292 7.66444L0.340105 1.94407C-0.114738 1.498 -0.113164 0.776307 0.34362 0.33213Z" fill="#24424D"/>
                        </svg>
                    </Pressable>
                </View>
                
            </View>

            <View className="flex flex-col h-48 justify-evenly align-middle">
                <View className="flex flex-row justify-around">
                    <View className="flex justify-center">
                        <CircleProgress value={10} />
                    </View>
                    <View className="flex justify-center">
                        <Text className="font-robotoBold">Repartidores</Text>
                        <Text className="font-roboto">2/10 Habilitados</Text>
                    </View>
                    <View className="flex justify-center">
                        <Pressable className="flex flex-row h-6 w-14 justify-center items-center border rounded-xl bg-texto">
                            <Text className="text-center text-amarilloVerdoso text-xs">VER</Text>
                        </Pressable>
                    </View>
                </View>
                <View className="flex w-full items-center">
                    <View className='h-[1] w-[89%] bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-around">
                    <View className="flex justify-center">
                        <CircleProgress value={80}/>
                    </View>
                    <View className="flex justify-center">
                        <Text className="font-robotoBold">Paquetes</Text>
                        <Text className="font-roboto">16/20 Habilitados</Text>
                    </View>
                    <View className="flex justify-center">
                        <Pressable className="flex flex-row h-6 w-14 justify-center items-center border rounded-xl bg-texto">
                            <Text className="text-center text-amarilloVerdoso text-xs">VER</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            
        </View>
        <Pressable className="flex flex-row h-7 w-64 mt-[15] justify-center items-center align-middle border rounded-xl bg-texto">
            <Text className="text-center mr-2 text-amarilloVerdoso text-xs">NUEVO PAQUETE</Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7.00005L7 7.00005M7 7.00005L1 7.00005M7 7.00005L7 1M7 7.00005L7 13" stroke="#CEF169" strokeLinecap="round"/>
            </svg>
        </Pressable>
    </View>
  )
}

export default HomeGestionarPedido