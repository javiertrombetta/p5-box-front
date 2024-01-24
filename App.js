import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import HomeGestionarPedido from "./src/components/HomeGestionarPedido";
import PerfilRepartidor from "./src/components/PerfilRepartidor";
import Repartidores from "./src/components/Repartidores";
import Login from "./src/components/Login";
import Paquetes from "./src/components/Paquetes";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-full h-full">
      {/* <Login /> */}
      {/* <HomeGestionarPedido/> */}
      {/* <PerfilRepartidor/> */}
      {/* <Repartidores /> */}
      {/* <Paquetes/> */}
      <StatusBar style="auto" />
    </View>
  );
}
