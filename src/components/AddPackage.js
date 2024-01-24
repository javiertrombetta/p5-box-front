import { View, Text, Pressable, Image, TextInput } from "react-native";
import React, { useState } from "react";
import ArrowLeft from "../../assets/arrow-left.png";
import Box from "../../assets/box.png";
import ArrowHeadDown from "../../assets/arrow-head-down.png";

const AddPackage = () => {
  const [text, setText] = useState("");

  return (
    <View className="w-full bg-verde h-full flex flex-col items-center">
      <View className="w-full h-50 flex flex-row mt-3 justify-around content-center align-middle space-x-[50] items-center">
        <Image className="w-[80] h-[30]" source={Box} />
        <Pressable className="w-28 h-7 flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
          <Text className="text-center text-xs">CERRAR SESION</Text>
        </Pressable>
      </View>
      <View className="w-[300] h-10 flex flex-row items-center rounded-xl mt-6 bg-amarilloVerdoso">
        <Text className=" left-[15] text-center text-lg font-extrabold text-texto">
          AGREGAR PAQUETES
        </Text>
        <Image className="absolute left-[265]" source={ArrowLeft} />
      </View>

      <View className="w-[300] h-[450] items-center rounded-xl mt-[10] bg-blanco">
        <TextInput
          className=" text-texto h-[24] w-[260] mt-[35] "
          placeholder="Dirección"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <View className=" w-[260] h-[1] bg-texto"></View>

        <TextInput
          className=" text-texto h-[24] w-[260] mt-[21]"
          placeholder="Nombre de quien recibe"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <View className=" w-[260] h-[1] bg-texto"></View>

        <TextInput
          className=" text-texto h-[24] w-[260] mt-[21]"
          placeholder="Peso del paquete (Kg)"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <View className=" w-[260] h-[1] bg-texto"></View>

        <TextInput
          className="relative  text-texto h-[24] w-[260] mt-[55]"
          placeholder="Fecha de entrega"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <View className="flex flex-row w-[270] h-[35] items-center border border-texto rounded justify-between ">
          <Text className=" left-[15] text-center text-texto">00/00/00</Text>
          <Pressable className="relative right-[10]">
            <View className="justify-center items-center w-[26] h-[18] border border-texto rounded">
              <Image source={ArrowHeadDown} />
            </View>
          </Pressable>
        </View>
      </View>
      <Pressable className=" flex flex-row h-7 w-[270] mt-4 justify-center items-center align-middle border rounded-xl bg-texto">
        <Text className="text-center mr-2 text-amarilloVerdoso text-xs">
          AGREGAR
        </Text>
      </Pressable>
    </View>
  );
};

export default AddPackage;
