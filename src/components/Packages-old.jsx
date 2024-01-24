import React from "react";
import { View, Text, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Packages = () => {
  return (
   
    <View className="bg-[#80cf8b] flex-1 w-full h-640 overflow-hidden">       
      <View className="h-[6.25%] top-[10.94%] bottom-[82.81%] bg-[#cef169] w-300 -ml-150 absolute rounded-[15px] left-1/2" />
      <Text className="ml-[-130px] top-80 text-18 font-[Saira-Bold] text-left text-[#24424d] font-bold uppercase leading-20 left-1/2 absolute">
        paquetes
      </Text>
      <Image
        className="w-15 h-13"
        contentFit="cover"
        source={require("../assets/combined-shape.png")}
      />
      <Image
        className="h-[4.69%] w-[22.41%] top-[1.88%] right-[69.25%] bottom-[93.44%] left-[8.33%] max-w-full max-h-full overflow-hidden"
        contentFit="cover"
        source={require("../assets/group-37383.png")}
      />
      <View className="top-16 left-221 h-26 w-109 absolute">
        <View className="top-0 left-0 rounded-[10px] border border-[#24424d] h-26 w-109 absolute" />
        <Text className="top-0 left-[9.17%] leading-25 font-[Roboto-Regular] uppercase">cerrar sesión</Text>
      </View>
      <View className="h-[86.56%] bottom-[4.69%] bg-[#fefefe] rounded-[15px] top-[18.75%]" />
      <View className="h-[5.47%] bottom-[75.78%] rounded-tl-[15px] rounded-tr-[15px] bg-[#cec4f4]" />
      <View className="top-562 left-30 w-301 h-1 border-t border-[#24424d] absolute" />
      <Text className="left-50 leading-24 text-sm top-126 text-left text-[#24424d] uppercase absolute">enero</Text>
      <Text className="left-257 absolute" style={{ top: 126 }}>
        <Text className="font-[Roboto-Regular]">mie</Text>
        <Text className="uppercase"> / 03</Text>
      </Text>
      <Image
        className="h-[1.25%] -ml-10 top-[90.94%] bottom-[7.81%] w-20 max-h-full left-1/2 absolute"
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View className="absolute" style={{ top: 260, left: 45, width: 271, height: 1, borderTopWidth: 0.5, borderColor: Color.colorDarkslategray, borderStyle: "solid" }} />
      <View className="absolute" style={{ top: 400, left: 45, width: 271, height: 1, borderTopWidth: 0.5, borderColor: Color.colorDarkslategray, borderStyle: "solid" }} />
      <View className="absolute" style={{ top: 190, left: 45, width: 271, height: 1, borderTopWidth: 0.5, borderColor: Color.colorDarkslategray, borderStyle: "solid" }} />
      <View className="absolute" style={{ top: 330, left: 45, width: 271, height: 1, borderTopWidth: 0.5, borderColor: Color.colorDarkslategray, borderStyle: "solid" }} />
      <View className="absolute" style={{ top: 470, left: 45, width: 271, height: 1, borderTopWidth: 0.5, borderColor: Color.colorDarkslategray, borderStyle: "solid" }} />
      <Image
        className="w-45 h-[7.03%] max-h-full left-1/2 -ml-[135px] absolute"
        contentFit="cover"
        source={require("../assets/group-37412.png")}
        style={{ bottom: "60.94%", top: "32.03%" }}
      />
      <Text className="absolute font-[Roboto-Regular]" style={{ top: "34.38%", left: "27.78%" }}>
        Castillo 1356, CABA
      </Text>
      <Text className="absolute font-[Roboto-Regular]" style={{ top: "56.25%", left: "27.78%" }}>
        Las Heras 5678, CABA
      </Text>
      <Text className="absolute font-[Roboto-Regular]" style={{ top: "45.31%", left: "27.78%" }}>
        AV. Carabobo y Rivadavia, CABA
      </Text>
      <Text className="absolute" style={{ lineHeight: 15, top: "32.03%", left: "27.78%", fontSize: FontSize.size_xs, textAlign: "left", color: Color.colorDarkslategray }}>
        #0B438
      </Text>
      <Text className="absolute" style={{ lineHeight: 15, top: "53.91%", left: "27.78%", fontSize: FontSize.size_xs, textAlign: "left", color: Color.colorDarkslategray }}>
        #0A903
      </Text>
      <Text className="absolute font-bold" style={{ top: "42.97%", left: "27.78%" }}>
        #<Text className="font-normal">0H167</Text>
      </Text>
      <Text className="absolute font-[Roboto-Medium] text-[12px] font-medium leading-20" style={{ top: "25.78%", left: "12.5%" }}>
        58 paquetes entregados
      </Text>
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37399.png")}
        style={{ top: "34.06%", bottom: "62.81%", left: "77.5%", right: "13.89%", width: "8.61%", height: "3.13%" }}
      />
      {/* Resto de las imágenes y textos */}
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37412.png")}
        style={{ top: "42.97%", bottom: "50%", left: "50%", marginLeft: "-135px", width: 45, height: "7.03%" }}
      />
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37412.png")}
        style={{ top: "64.84%", bottom: "28.13%", left: "50%", marginLeft: "-135px", width: 45, height: "7.03%" }}
      />
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37412.png")}
        style={{ top: "53.91%", bottom: "39.06%", left: "50%", marginLeft: "-135px", width: 45, height: "7.03%" }}
      />
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37412.png")}
        style={{ top: "75.78%", bottom: "17.19%", left: "50%", marginLeft: "-135px", width: 45, height: "7.03%" }}
      />
      <Text className="absolute font-[Roboto-Regular]" style={{ top: "67.19%", left: "27.78%" }}>
        Amenabar 2356, CABA
      </Text>
      <Text className="absolute font-[Roboto-Regular]" style={{ top: "78.13%", left: "27.78%" }}>
        Heredia 785, CABA
      </Text>
      <Text className="absolute" style={{ lineHeight: 15, top: "64.84%", left: "27.78%", fontSize: FontSize.size_xs, textAlign: "left", color: Color.colorDarkslategray }}>
        #0A235
      </Text>
      <Text className="absolute" style={{ lineHeight: 15, top: "75.78%", left: "27.78%", fontSize: FontSize.size_xs, textAlign: "left", color: Color.colorDarkslategray }}>
        #0G370
      </Text>
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37399.png")}
        style={{ top: "45%", bottom: "51.88%", left: "77.5%", right: "13.89%", width: "8.61%", height: "3.13%" }}
      />
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37399.png")}
        style={{ top: "66.88%", bottom: "30%", left: "77.5%", right: "13.89%", width: "8.61%", height: "3.13%" }}
      />
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37399.png")}
        style={{ top: "55.94%", bottom: "40.94%", left: "77.5%", right: "13.89%", width: "8.61%", height: "3.13%" }}
      />
      <Image
        className="absolute"
        contentFit="cover"
        source={require("../assets/group-37399.png")}
        style={{ top: "77.81%", bottom: "19.06%", left: "77.5%", right: "13.89%", width: "8.61%", height: "3.13%" }}
      />
    </View>
  );
};

export default Packages;