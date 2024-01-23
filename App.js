import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import HomeGestionarPedido from "./src/components/HomeGestionarPedido";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-400">
      <Text>Open up App.js to start working on your app!</Text>
      <HomeGestionarPedido/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
