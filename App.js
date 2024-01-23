import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import HomeGestionarPedido from "./src/components/HomeGestionarPedido";
import PerfilRepartidor from "./src/components/PerfilRepartidor";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-full h-full">
      {/* <HomeGestionarPedido/> */}
      <PerfilRepartidor/>
      <StatusBar style="auto" />
    </View>
  );
}
