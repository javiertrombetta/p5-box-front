import { View, Text, Button, Pressable, Image } from 'react-native';
import Svg from 'react-native-svg';
import React from 'react';
import box from '../assets/box.png';
import leftArrow from '../assets/arrow-left.png';
import circulo from '../assets/circuloUno.png';
import desahabilitado from '../assets/desahabilitado.png';
import habilitado from '../assets/habilitado.png';
import downarrow from '../assets/arrow-head-down.png';
import CircleProgress from '../components/CircleProgress';

const Repartidores = () => {
  return (
    <View className="bg-verde w-full h-full flex-col items-center  flex py-2 px-4">
      <View className="w-[300] h-50 flex flex-row mt-3 justify-between align-middle items-center">
        <Image className="h-[30] w-[80.69]" source={box} />
        {/* ya reemplace svg box */}
        <Pressable className="w-[109] h-[26] flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
          <Text className="text-center text-xs">CERRAR SESION</Text>
        </Pressable>
      </View>
      <View className="bg-amarilloVerdoso w-[300] h-[40] flex-row flex justify-between mt-[28] px-4 rounded-xl">
        <Text className="mx-0 text-lg flex justify-center items-center py-1 font-sairaBold text-texto">
          REPARTIDORES
        </Text>
        {/* CHEQUEAR MEDICA FLECHA */}
        <View className="w-[13] h-[40] py-2 flex justify-center items-center">
          <Image source={leftArrow} />
          {/* reemplace svg leftarrow */}
        </View>
      </View>
      <View className="bg-violeta flex-row flex w-[300] h-[35] justify-between items-center px-4 mt-[10] rounded-t-xl">
        <Text className="text-sm font-robotoBold text-texto flex align-middle">ENERO</Text>
        <View className="flex flex-row items-center">
          <Text className="font-roboto">mie</Text>
          <Text className="font-robotoBold"> / 03</Text>
        </View>
      </View>
      <View className="bg-blanco flex justify-between h-[407] w-[300] mx-2">
        <View className="flex-row flex justify-between my-3">
          {/* reemplace circulo */}
          <View className="w-1/3 items-center flex">
            <CircleProgress value={30} />
          </View>
          <View className="flex flex-col items-start justify-center gap-1">
            <Text className="h-[15]  text-left items-center flex font-robotoBold text-texto">
              Javitro
            </Text>
            <View className="h-[15] w-[96] flex flex-row items-center justify-around bg-gray-300 rounded-md">
              <View>
                {/* HACER PUNTO DESHABILITADO */}
                <Image source={desahabilitado} />
              </View>
              <Text style={{ fontSize: 10 }}>DESHABILITADO</Text>
            </View>
          </View>
          <View className="w-1/3 items-center flex">
            <Image
              className={'w-10 h-10 rounded-full mt-4 mr-3'}
              source={{
                uri: 'https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg',
              }}
            />
          </View>
        </View>
        <View className="w-[300] h-[0.5] bg-gray-300" />
        <View className="flex-row flex justify-between my-3">
          <View className="w-1/3 items-center flex">
            <CircleProgress value={50} />
          </View>
          <View className="flex flex-col items-start justify-center gap-1">
            <Text className="h-[15] w-[50] text-left  items-center flex font-robotoBold text-texto">
              Javice
            </Text>
            <View className="h-[15] w-[96]">
              <View className="h-[15] w-[68] flex flex-row items-center justify-around bg-gray-300 rounded-md">
                <View>
                  {/* HABILITADO */}
                  <Image source={habilitado} />
                </View>
                <Text style={{ fontSize: 10 }}>EN CURSO</Text>
              </View>
            </View>
          </View>

          <View className="w-1/3 items-center flex">
            <Image
              className={'w-10 h-10 rounded-full mt-4 mr-3'}
              source={{
                uri: 'https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg',
              }}
            />
          </View>
        </View>
        <View className="w-[300] h-[0.5] bg-gray-300" />

        {/* tercer people */}
        <View className="flex-row flex justify-between my-3">
          <View className="w-1/3 items-center flex">
            <CircleProgress value={80} />
          </View>
          <View className="flex flex-col items-start justify-center gap-1">
            <Text className="text-left h[15]  items-center flex font-robotoBold text-texto">
              Javitro
            </Text>
            <View className="h-[15] w-[96] flex flex-row items-center justify-start bg-gray-300 rounded-md">
              <View>
                <Image source={desahabilitado} />
              </View>
              <Text style={{ fontSize: 10 }}> DESHABILITADO</Text>
            </View>
          </View>

          <View className="w-1/3 items-center flex">
            <Image
              className={'w-10 h-10 rounded-full mt-4 mr-3'}
              source={{
                uri: 'https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg',
              }}
            />
          </View>
        </View>
        {/* cuarto people */}
        <View className="w-[300] h-[0.5] bg-gray-300" />
        <View className="flex-row flex justify-between my-3">
          <View className="w-1/3 items-center flex">
            <CircleProgress value={10} />
          </View>
          <View className="flex flex-col items-start justify-center gap-1">
            <Text className="text-left h-[15] items-center flex font-robotoBold text-texto">
              Javitro
            </Text>
            <View className="h-[15] w-[96] flex flex-row items-center justify-start bg-gray-300 rounded-md">
              <View>
                <Image source={desahabilitado} />
              </View>
              <Text style={{ fontSize: 10 }}> DESHABILITADO</Text>
            </View>
          </View>

          <View className="w-1/3 items-center flex">
            <Image
              className={'w-10 h-10 rounded-full mt-4 mr-3'}
              source={{
                uri: 'https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg',
              }}
            />
          </View>
        </View>
      </View>
      <View className="w-[300] h-[0.5] bg-gray-300" />
      <View className="w-[300] h-[47.5] flex justify-center items-center rounded-b-xl bg-white">
        <Image className="" source={downarrow} />
      </View>
    </View>
  );
};

export default Repartidores;
