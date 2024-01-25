import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import backgroundI from "../assets/fondoLogin.jpg";
import box from "../assets/box.png";
import vecLogo from "../assets/vec-logo.png";
import bgLogo from "../assets/bg-logo.png";
import closeEye from "../assets/Eye.png";

const Login = () => {
  const [text, setText] = useState("");

  return (
    <View className="flex flex-col w-full h-full justify-center items-center">
      <Image source={backgroundI} />
      <View className="absolute flex top-[205] left[30] w-[300] h-[275] rounded-2xl bg-verde ">
        <TextInput
          className=" text-texto font-roboto absolute top-[66] left-[15] h-[24] w-[270] "
          placeholder="Email@contraseña.com"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TextInput
          className=" text-texto font-roboto absolute top-[111] left-[15] h-[24] w-[270] "
          placeholder="**********"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Image className="absolute top-[108] left-[255] " source={closeEye} />
        <View className="absolute top-[90] left-[15] w-[270] h-[1] bg-texto"></View>
        <View className="absolute top-[135] left-[15] w-[270] h-[1] bg-texto"></View>
        <Pressable className="absolute left-[15] top-[160] flex flex-row h-[30] w-[270] mt-4 justify-center items-center align-middle border rounded-xl bg-texto">
          <Text className="text-center mr-2 font-roboto text-amarilloVerdoso text-xs">
            INGRESAR
          </Text>
        </Pressable>
        <Pressable className="top-[225] justify-center items-center align-middle">
          <Text
            className="font-roboto"
            style={{ textDecorationLine: "underline" }}
          >
            Olvidé mi contraseña
          </Text>
        </Pressable>
      </View>
      <View className="absolute top-[170] left-[30] rounded-t-2xl rounded-r-2xl w-[204] h-[69] bg-amarilloVerdoso">
        <Image className="absolute top-[10] right-[10] " source={box} />
        <Image className="absolute top-[10] left-[10] " source={bgLogo} />
        <Image className="absolute top-[15] left-[17] " source={vecLogo} />
      </View>
    </View>
  );
};

export default Login;
