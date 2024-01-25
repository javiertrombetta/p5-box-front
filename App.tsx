import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useFonts } from "expo-font";
import CircleProgress from "./src/components/CircleProgress";

import Login from "./src/screens/Login";
import HomeGestionarPedido from "./src/screens/HomeGestionarPedido";
import PerfilRepartidor from "./src/screens/PerfilRepartidor";
import Repartidores from "./src/screens/Repartidores";
import Paquetes from "./src/screens/Paquetes";
import AddPackage from "./src/screens/AddPackage";


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [loaded] = useFonts({
    SairaRegular: require("./src/assets/fonts/Saira-Regular.ttf"),
    SairaBold: require("./src/assets/fonts/Saira-Bold.ttf"),
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),    
    RobotoLight: require("./src/assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <View className="w-full h-full">
      {/* <Login /> */}
      {/* <HomeGestionarPedido/> */}
      <Repartidores />
      {/* <Paquetes/> */}
      {/* <AddPackage /> */}
      {/* <PerfilRepartidor/> */}
      <StatusBar style="auto" />
    </View>
  );
}