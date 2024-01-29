import { View, Text, Image, TextInput, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import backgroundI from "../assets/fondoLogin.jpg";
import logo from "../assets/logo.png";
import closeEye from "../assets/Eye.png";

const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

const LoginAdmin = () => {
  const [text, setText] = useState("");

  return (
    <View className="flex flex-col w-full h-full justify-center items-center">
      <Image source={backgroundI} className="w-full h-full" />
      <View style={{ top: 205 * HScale, left: 30 * WScale, width: 300 * WScale, height: 266 * HScale }} className="absolute flex rounded-2xl bg-verde">
        <TextInput
          style={{ top: 66 * HScale, left: 15 * WScale, height: 24 * HScale, width: 270 * WScale, fontSize: scaledSize(12) }}
          className="text-texto font-roboto absolute"
          placeholder="Email@contraseña.com"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TextInput
          style={{ top: 111 * HScale, left: 15 * WScale, height: 24 * HScale, width: 270 * WScale, fontSize: scaledSize(14) }}
          className="text-texto font-roboto absolute"
          placeholder="**********"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Image style={{ top: 108 * HScale, left: 255 * WScale, width: scaledSize(20), height: scaledSize(20)  }} className="absolute" source={closeEye} />
        <View style={{ top: 93 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 * HScale }} className="absolute bg-texto"></View>
        <View style={{ top: 135 * HScale, left: 15 * WScale, width: 270 * WScale, height: 1 * HScale }} className="absolute bg-texto"></View>
        <Pressable style={{ top: 175 * HScale, left: 15 * WScale, height: 30 * HScale, width: 270 * WScale }} className="absolute flex flex-row justify-center items-center align-middle border rounded-xl bg-texto">
          <Text style={{ marginRight: 8 * WScale, fontSize: scaledSize(12) }} className="text-center font-roboto text-amarilloVerdoso text-xs">
            INGRESAR
          </Text>
        </Pressable>
        <Pressable style={{ top: 220 * HScale }} className=" justify-center items-center align-middle">
          <Text
            className="font-roboto text-texto"
            style={{ textDecorationLine: "underline", fontSize: scaledSize(12) }}
          >
            Olvidé mi contraseña
          </Text>
        </Pressable>
      </View>
      <View style={{ top: 170 * HScale, left: 30 * WScale, width: 204 * WScale, height: 69 * HScale }} className="absolute rounded-t-2xl rounded-r-2xl bg-amarilloVerdoso flex-row justify-center items-center">
        <Image style={{ width: scaledSize(184), height: scaledSize(49)}} resizeMode="contain" source={logo} />          
      </View>     
    </View>
  );
};

export default LoginAdmin;
