import { View, Text, Button, Pressable, Image } from "react-native";
import React from "react";
import box from "../assets/box.png";
import BoxList from "../assets/BoxList.png";
import trash from "../assets/trash.png";
import arrowLeft from "../assets/arrow-left.png"
import downArrow from "../assets/arrow-head-down.png"

const Paquetes = () => {
  return (
    <View className="bg-verde w-full h-full items-center flex-col flex py-2 px-4">
      <View className="flex-row w-[300] mt-[12] justify-items-start flex justify-between">
        <Image className="h-[30] w-[80.69]" source={box} />
        <Pressable className="w-28 h-7 flex justify-center items-center align-middle border rounded-xl border-black text-black mt-1">
          <Text className="text-center text-xs">CERRAR SESIÓN</Text>
        </Pressable>
      </View>
      <View className="bg-amarilloVerdoso flex-row flex justify-between px-4 mt-5 rounded-xl w-[300] h-[40]">
        <Text className="text-lg py-1 font-bold">PAQUETES</Text>
            <View className="flex justify-center">
                <Image className="h-[13] w-[15]" source={arrowLeft} />
            </View>
        </View>
        <View className="w-[300] h-[442] flex rounded-t-xl mt-4 bg-white">
            <View className="w-[300] h-10 flex flex-row rounded-t-xl items-center px-4 justify-between bg-violeta">
                <Text className="text-sm font-bold text-texto text-center">ENERO</Text>
                <View className="flex flex-row items-center">
                    <Text>mie</Text>
                    <Text className="font-bold"> / 03</Text>
                </View>
            </View>
            <Text className="px-4 py-2 font-semibold">58 Paquetes entregados</Text>
            <View className="flex w-full pb-2 px-4 items-center">
                <View className='h-[1] w-full bg-gray-300'/>
            </View>
            <View className="flex flex-col h-[310] px-4 items-center justify-between">

                <View className="flex flex-row justify-between items-center w-full">
                    <View className="flex flex-row justify-start items-center gap-5 h-[75] w-[150]">
                        <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                            <Image className="h-[36] w-[36]" source={BoxList} />
                        </View>
                        <View className="flex justify-center w-full">
                            <Text className="font-semibold text-texto text-xs">#0B438</Text>
                            <Text className="text-texto text-xs">Av. Castillo 1356,</Text>
                            <Text className="text-texto text-xs">CABA</Text>
                        </View>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <Pressable className="flex flex-row h-6 w-14 justify-end items-center">
                            <Image className="h-[20] w-[31]" source={trash} />
                        </Pressable>
                    </View>
                </View>
                
                <View className="flex w-full py-2 items-center">
                    <View className='h-[1] w-full bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-between items-center w-full">
                    <View className="flex flex-row justify-start items-center gap-5 h-[75] w-[150]">
                        <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                            <Image className="h-[36] w-[36]" source={BoxList} />
                        </View>
                        <View className="flex justify-center w-full">
                            <Text className="font-semibold text-texto text-xs">#0H167</Text>
                            <Text className="text-texto text-xs">Av. Carabobo y Rivadavia,</Text>
                            <Text className="text-texto text-xs">CABA</Text>
                        </View>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <Pressable className="flex flex-row h-6 w-14 justify-end items-center">
                            <Image className="h-[20] w-[31]" source={trash} />
                        </Pressable>
                    </View>
                </View>
                <View className="flex w-full py-2 items-center">
                    <View className='h-[1] w-full bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-between items-center w-full">
                    <View className="flex flex-row justify-start items-center gap-5 h-[75] w-[150]">
                        <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                            <Image className="h-[36] w-[36]" source={BoxList} />
                        </View>
                        <View className="flex justify-center w-full">
                            <Text className="font-semibold text-texto text-xs">#0A903</Text>
                            <Text className="text-texto text-xs">Av. Las Heras 5678,</Text>
                            <Text className="text-texto text-xs">CABA</Text>
                        </View>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <Pressable className="flex flex-row h-6 w-14 justify-end items-center">
                            <Image className="h-[20] w-[31]" source={trash} />
                        </Pressable>
                    </View>
                </View>
                <View className="flex w-full py-2 items-center">
                    <View className='h-[1] w-full bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-between items-center w-full">
                    <View className="flex flex-row justify-start items-center gap-5 h-[75] w-[150]">
                        <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                            <Image className="h-[36] w-[36]" source={BoxList} />
                        </View>
                        <View className="flex justify-center w-full">
                            <Text className="font-semibold text-texto text-xs">#0A235</Text>
                            <Text className="text-texto text-xs">Av. Amenabar 2356,</Text>
                            <Text className="text-texto text-xs">CABA</Text>
                        </View>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <Pressable className="flex flex-row h-6 w-14 justify-end items-center">
                            <Image className="h-[20] w-[31]" source={trash} />
                        </Pressable>
                    </View>
                </View>
                <View className="flex w-full py-2 items-center">
                    <View className='h-[1] w-full bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-between items-center w-full">
                    <View className="flex flex-row justify-start items-center gap-5 h-[75] w-[150]">
                        <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                            <Image className="h-[36] w-[36]" source={BoxList} />
                        </View>
                        <View className="flex justify-center w-full">
                            <Text className="font-semibold text-texto text-xs">#0G370</Text>
                            <Text className="text-texto text-xs">Av. Heredia 785,</Text>
                            <Text className="text-texto text-xs">CABA</Text>
                        </View>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <Pressable className="flex flex-row h-6 w-14 justify-end items-center">
                            <Image className="h-[20] w-[31]" source={trash} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
        <View className='h-[0.5] w-[300] bg-gray-300'/>
        <View className="w-[300] h-[47.5] flex justify-center items-center rounded-b-xl bg-white">
            <Image source={downArrow} />
        </View>
    </View>
  );
};

export default Paquetes;
