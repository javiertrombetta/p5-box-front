import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import HomeGestionarPedido from "./src/components/HomeGestionarPedido";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-full h-full">
      <HomeGestionarPedido/>
      <StatusBar style="auto" />
    </View>
  );
}
