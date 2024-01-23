import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import Repartidores from "./src/components/Repartidores";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-full h-screen">
      <Repartidores />
      <StatusBar style="auto" />
    </View>
  );
}
