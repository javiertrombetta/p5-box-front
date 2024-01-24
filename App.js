import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import HomeGestionarPedido from "./src/components/HomeGestionarPedido";
import PerfilRepartidor from "./src/components/PerfilRepartidor";
import Repartidores from "./src/components/Repartidores";
import Login from "./src/components/Login";
import Paquetes from "./src/components/Paquetes";
import AddPackage from "./src/components/AddPackage";
import { useFonts } from "expo-font";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [loaded] = useFonts({
    SairaRegular: require("./assets/fonts/Saira-Regular.ttf"),
    SairaBold: require("./assets/fonts/Saira-Bold.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <View className="w-full h-full">
      {/* <Login /> */}
      {/* <HomeGestionarPedido/> */}
      {/* <Repartidores /> */}
      {/* <Paquetes/> */}
      {/* <AddPackage /> */}
      <PerfilRepartidor/>
      <StatusBar style="auto" />
    </View>
  );
}
