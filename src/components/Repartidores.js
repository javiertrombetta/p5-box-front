import { View, Text, Button, Pressable, Image } from "react-native";
import Svg from "react-native-svg";
import React from "react";

const Repartidores = () => {
  return (
    <View className="bg-verde w-full h-full flex-col items-center justify-center flex py-2 px-4">
      <View className="w-full h-50 flex flex-row mt-3 justify-around content-center align-middle items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="81" height="30" viewBox="0 0 81 30" fill="none">
              <path d="M23.7449 13.667C23.5154 12.9774 23.213 12.3692 22.8379 11.8425C22.4628 11.3158 22.0261 10.8652 21.5334 10.4959C21.0407 10.1267 20.52 9.82263 19.9769 9.58914C19.4338 9.35566 18.8851 9.1819 18.3364 9.0733C17.7877 8.96471 17.2614 8.90498 16.7687 8.90498H5.22937V0H0V22.876C0 23.7448 0.111978 24.5321 0.341533 25.2271C0.571088 25.9222 0.873427 26.5357 1.25415 27.0624C1.63488 27.5891 2.07719 28.0398 2.5699 28.4091C3.0682 28.7783 3.5833 29.0824 4.12639 29.3158C4.66948 29.5493 5.21817 29.7231 5.76687 29.8317C6.31556 29.9403 6.84185 30 7.33456 30H16.7631C17.6589 30 18.4652 29.8914 19.1762 29.6688C19.8873 29.4462 20.5144 29.1529 21.0575 28.7837C21.6006 28.4145 22.0653 27.9855 22.446 27.5077C22.8267 27.0244 23.1402 26.5249 23.381 25.9982C23.6218 25.4715 23.8009 24.9448 23.9129 24.4072C24.0249 23.8751 24.0865 23.3647 24.0865 22.8869V16.0235C24.0865 15.1548 23.9745 14.3729 23.7449 13.6833V13.667ZM18.8571 22.8706C18.8571 23.4842 18.6723 23.9783 18.3028 24.3529C17.9333 24.7276 17.4238 24.9176 16.7631 24.9176H7.33456C6.72988 24.9176 6.23158 24.733 5.82846 24.3638C5.42533 23.9946 5.22377 23.495 5.22377 22.8706V13.9765H16.7631C17.379 13.9765 17.8829 14.1557 18.2692 14.514C18.6555 14.8724 18.8515 15.3665 18.8515 16.0072V22.8706H18.8571Z" fill="#24424D"/>
              <path d="M51.7859 22.698C51.7859 23.5885 51.6739 24.3955 51.4444 25.1079C51.2149 25.8203 50.9127 26.4492 50.5376 26.9891C50.1626 27.5289 49.726 27.9909 49.2334 28.3693C48.7352 28.7478 48.2202 29.0594 47.6772 29.2988C47.1343 29.5381 46.5857 29.7162 46.026 29.8275C45.4718 29.9388 44.9456 30 44.4474 30H35.0211C34.299 30 33.5041 29.872 32.6477 29.6216C31.7913 29.3711 30.9964 28.9537 30.2631 28.3749C29.5298 27.7961 28.9253 27.0447 28.4327 26.1153C27.9401 25.1914 27.6994 24.056 27.6994 22.7091V15.6742C27.6994 14.3441 27.9457 13.2142 28.4327 12.2848C28.9197 11.3609 29.5298 10.604 30.2631 10.0252C30.9964 9.44635 31.7857 9.02893 32.6477 8.77848C33.5041 8.52803 34.2934 8.40002 35.0211 8.40002H44.4474C45.7853 8.40002 46.9272 8.63934 47.862 9.11798C48.8024 9.59662 49.558 10.2033 50.1346 10.9268C50.7111 11.6559 51.131 12.4406 51.3885 13.2977C51.6515 14.1493 51.7803 14.9451 51.7803 15.6742V22.7091L51.7859 22.698ZM46.5577 15.7021C46.5577 14.9841 46.3786 14.4498 46.0148 14.1047C45.6509 13.7597 45.1303 13.5871 44.4474 13.5871H35.0603C34.3606 13.5871 33.8344 13.7652 33.4705 14.1159C33.1067 14.4665 32.9276 14.9841 32.9276 15.6631V22.698C32.9276 23.377 33.1067 23.8946 33.4705 24.2564C33.8344 24.6181 34.3606 24.7962 35.0603 24.7962H44.4474C45.1583 24.7962 45.6845 24.6181 46.0372 24.2564C46.3842 23.8946 46.5577 23.377 46.5577 22.698V15.7021Z" fill="#24424D"/>
              <path d="M79.4789 8.40002L69.9014 18.5909L80.6897 30H73.3452L66.2463 22.4681L59.1475 30H51.7859L62.5513 18.552L53.0138 8.40559H60.3182L66.2064 14.6581L72.1345 8.40559H79.4789V8.40002Z" fill="#24424D"/>
          </svg>
          <Pressable className="w-28 h-7 flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
              <Text className="text-center text-xs">CERRAR SESION</Text>
          </Pressable>
      </View>
      <View className="bg-amarilloVerdoso w-[300] flex-row flex justify-between py-2 mt-3 mx-2 rounded-xl">
        <Text className="mx-4 text-lg py-1 font-bold">REPARTIDORES</Text>
        <View className="py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="15"
            viewBox="0 0 15 13"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0366 7.35815C14.5807 7.29356 15 6.88545 15 6.39162C15 5.85291 14.501 5.41619 13.8854 5.41619L3.90271 5.41619L7.6712 1.85182L7.78193 1.73048C8.11426 1.30686 8.07879 0.704673 7.67464 0.319076C7.23007 -0.10508 6.50774 -0.106542 6.06127 0.315812L0.335864 5.732L0.224835 5.85371C-0.108248 6.27866 -0.0712385 6.88289 0.335864 7.268L6.06127 12.6842L6.18946 12.7889C6.63678 13.1028 7.27048 13.0665 7.67464 12.6809L7.78482 12.5591C8.11525 12.1342 8.07708 11.5321 7.6712 11.1482L3.67578 7.36706L13.8854 7.36706L14.0366 7.35815Z"
              fill="#24424D"
            />
          </svg>
        </View>
      </View>
      <View className="bg-violeta flex-row flex justify-between py-2 mt-3 mx-2 rounded-t-xl">
        <Text className="text-sm mx-4">ENERO</Text>
        <Text className="mx-4 text-sm">Mie /03</Text>
      </View>

      <View className=" bg-blanco h-[455] rounded-b-xl py-2 mx-2 ">
        <View className="flex-row flex justify-between my-3">
          <View className="w-1/3 items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                d="M3 35.5C3 17.5507 17.5507 3 35.5 3C53.4493 3.00001 68 17.5508 68 35.5C68 53.4493 53.4493 68 35.5 68C17.5507 68 2.99999 53.4492 3 35.5Z"
                stroke="#EBECEF"
                stroke-width="6"
              />
            </svg>
          </View>
          <Text className="text-left w-1/3 items-center flex">Javi</Text>
          <View className="w-1/3 items-center flex">
            <Image
              className={"w-10 h-10 rounded-full mt-4 mr-3"}
              source={{
                uri: "https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg",
              }}
            />
          </View>
        </View>
        <View className="w-[300] h-[0.5] bg-gray-300" />
        <View className="flex-row flex justify-between my-3">
          <View className="w-1/3 items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                d="M3 35.5C3 17.5507 17.5507 3 35.5 3C53.4493 3.00001 68 17.5508 68 35.5C68 53.4493 53.4493 68 35.5 68C17.5507 68 2.99999 53.4492 3 35.5Z"
                stroke="#EBECEF"
                stroke-width="6"
              />
            </svg>
          </View>
          <Text className="text-left w-1/3 items-center flex">Javi</Text>
          <View className="w-1/3 items-center flex">
            <Image
              className={"w-10 h-10 rounded-full mt-4 mr-3"}
              source={{
                uri: "https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg",
              }}
            />
          </View>
        </View>
        <View className="w-[300] h-[0.5] bg-gray-300" />
        <View className="flex-row flex justify-between my-3">
          {/* 4-persona */}
          <View className="w-1/3 items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                d="M3 35.5C3 17.5507 17.5507 3 35.5 3C53.4493 3.00001 68 17.5508 68 35.5C68 53.4493 53.4493 68 35.5 68C17.5507 68 2.99999 53.4492 3 35.5Z"
                stroke="#EBECEF"
                stroke-width="6"
              />
            </svg>
          </View>
          <Text className="text-left w-1/3 items-center flex">Javi</Text>
          <View className="w-1/3 items-center flex">
            <Image
              className={"w-10 h-10 rounded-full mt-4 mr-3"}
              source={{
                uri: "https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg",
              }}
            />
          </View>
        </View>
        <View className="w-[300] h-[0.5] bg-gray-300" />
        <View className="flex-row flex justify-between my-3">
          <View className="w-1/3 items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                d="M3 35.5C3 17.5507 17.5507 3 35.5 3C53.4493 3.00001 68 17.5508 68 35.5C68 53.4493 53.4493 68 35.5 68C17.5507 68 2.99999 53.4492 3 35.5Z"
                stroke="#EBECEF"
                stroke-width="6"
              />
            </svg>
          </View>
          <Text className="text-center w-1/3 items-center flex">Javi</Text>
          <View className="w-1/3 items-center flex">
            <Image
              className={"w-10 h-10 rounded-full mt-4 mr-3"}
              source={{
                uri: "https://images.ecestaticos.com/RdK_LRX7lZcsXjxn5MU3tpzYnEo=/0x0:991x684/992x685/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd63%2Faf3%2F56a%2Fd63af356aa9a1edf14110f781ae9296f.jpg",
              }}
            />
          </View>
        </View>
        <View className="w-full h-[0.5] bg-gray-300" />
        <View className="flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="70"
            viewBox="0 0 24 12"
            fill="none"
          >
            <path
              d="M2 2L12 10L22 2"
              stroke="#24424D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </View>
      </View>
    </View>
  );
};

export default Repartidores;
