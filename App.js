import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import Packages from "./src/components/Packages";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-full h-screen">
      <Packages />
      <StatusBar style="auto" />
    </View>
  );
}
