import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const PerfilRepartidor = () => {
  return (
    <View className="w-full bg-verde h-full flex flex-col items-center">
        <View className="w-[300] h-50 flex flex-row mt-3 justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="30" viewBox="0 0 81 30" fill="none">
                <path d="M23.7449 13.667C23.5154 12.9774 23.213 12.3692 22.8379 11.8425C22.4628 11.3158 22.0261 10.8652 21.5334 10.4959C21.0407 10.1267 20.52 9.82263 19.9769 9.58914C19.4338 9.35566 18.8851 9.1819 18.3364 9.0733C17.7877 8.96471 17.2614 8.90498 16.7687 8.90498H5.22937V0H0V22.876C0 23.7448 0.111978 24.5321 0.341533 25.2271C0.571088 25.9222 0.873427 26.5357 1.25415 27.0624C1.63488 27.5891 2.07719 28.0398 2.5699 28.4091C3.0682 28.7783 3.5833 29.0824 4.12639 29.3158C4.66948 29.5493 5.21817 29.7231 5.76687 29.8317C6.31556 29.9403 6.84185 30 7.33456 30H16.7631C17.6589 30 18.4652 29.8914 19.1762 29.6688C19.8873 29.4462 20.5144 29.1529 21.0575 28.7837C21.6006 28.4145 22.0653 27.9855 22.446 27.5077C22.8267 27.0244 23.1402 26.5249 23.381 25.9982C23.6218 25.4715 23.8009 24.9448 23.9129 24.4072C24.0249 23.8751 24.0865 23.3647 24.0865 22.8869V16.0235C24.0865 15.1548 23.9745 14.3729 23.7449 13.6833V13.667ZM18.8571 22.8706C18.8571 23.4842 18.6723 23.9783 18.3028 24.3529C17.9333 24.7276 17.4238 24.9176 16.7631 24.9176H7.33456C6.72988 24.9176 6.23158 24.733 5.82846 24.3638C5.42533 23.9946 5.22377 23.495 5.22377 22.8706V13.9765H16.7631C17.379 13.9765 17.8829 14.1557 18.2692 14.514C18.6555 14.8724 18.8515 15.3665 18.8515 16.0072V22.8706H18.8571Z" fill="#24424D"/>
                <path d="M51.7859 22.698C51.7859 23.5885 51.6739 24.3955 51.4444 25.1079C51.2149 25.8203 50.9127 26.4492 50.5376 26.9891C50.1626 27.5289 49.726 27.9909 49.2334 28.3693C48.7352 28.7478 48.2202 29.0594 47.6772 29.2988C47.1343 29.5381 46.5857 29.7162 46.026 29.8275C45.4718 29.9388 44.9456 30 44.4474 30H35.0211C34.299 30 33.5041 29.872 32.6477 29.6216C31.7913 29.3711 30.9964 28.9537 30.2631 28.3749C29.5298 27.7961 28.9253 27.0447 28.4327 26.1153C27.9401 25.1914 27.6994 24.056 27.6994 22.7091V15.6742C27.6994 14.3441 27.9457 13.2142 28.4327 12.2848C28.9197 11.3609 29.5298 10.604 30.2631 10.0252C30.9964 9.44635 31.7857 9.02893 32.6477 8.77848C33.5041 8.52803 34.2934 8.40002 35.0211 8.40002H44.4474C45.7853 8.40002 46.9272 8.63934 47.862 9.11798C48.8024 9.59662 49.558 10.2033 50.1346 10.9268C50.7111 11.6559 51.131 12.4406 51.3885 13.2977C51.6515 14.1493 51.7803 14.9451 51.7803 15.6742V22.7091L51.7859 22.698ZM46.5577 15.7021C46.5577 14.9841 46.3786 14.4498 46.0148 14.1047C45.6509 13.7597 45.1303 13.5871 44.4474 13.5871H35.0603C34.3606 13.5871 33.8344 13.7652 33.4705 14.1159C33.1067 14.4665 32.9276 14.9841 32.9276 15.6631V22.698C32.9276 23.377 33.1067 23.8946 33.4705 24.2564C33.8344 24.6181 34.3606 24.7962 35.0603 24.7962H44.4474C45.1583 24.7962 45.6845 24.6181 46.0372 24.2564C46.3842 23.8946 46.5577 23.377 46.5577 22.698V15.7021Z" fill="#24424D"/>
                <path d="M79.4789 8.40002L69.9014 18.5909L80.6897 30H73.3452L66.2463 22.4681L59.1475 30H51.7859L62.5513 18.552L53.0138 8.40559H60.3182L66.2064 14.6581L72.1345 8.40559H79.4789V8.40002Z" fill="#24424D"/>
            </svg>
            <Pressable className="w-28 h-7 flex justify-center items-center align-middle border rounded-xl mt-1 border-texto text-texto">
                <Text className="text-center text-xs">CERRAR SESION</Text>
            </Pressable>
        </View>
        <View className="bg-amarilloVerdoso w-[300] h-[40] flex-row flex justify-between mt-[28] rounded-xl">
            <Text className="mx-4 text-lg flex justify-center items-center py-1 font-sairaBold text-texto">GESTIONAR PEDIDOS</Text>
            <View className="py-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="15" viewBox="0 0 15 13" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0366 7.35815C14.5807 7.29356 15 6.88545 15 6.39162C15 5.85291 14.501 5.41619 13.8854 5.41619L3.90271 5.41619L7.6712 1.85182L7.78193 1.73048C8.11426 1.30686 8.07879 0.704673 7.67464 0.319076C7.23007 -0.10508 6.50774 -0.106542 6.06127 0.315812L0.335864 5.732L0.224835 5.85371C-0.108248 6.27866 -0.0712385 6.88289 0.335864 7.268L6.06127 12.6842L6.18946 12.7889C6.63678 13.1028 7.27048 13.0665 7.67464 12.6809L7.78482 12.5591C8.11525 12.1342 8.07708 11.5321 7.6712 11.1482L3.67578 7.36706L13.8854 7.36706L14.0366 7.35815Z" fill="#24424D"/>
                </svg>
            </View>
            
        </View>
        <View className="w-[300] h-24 flex flex-row rounded-xl items-center justify-around align-middle mt-[10] bg-white">
            <View className="w-1/3 px-2 flex items-center justify-center">
                <Image className="w-[60] h-[60] rounded-xl" source={{uri:'https://cdn.conmebol.com/wp-content/uploads/2023/11/000_APW2000052520938-1024x879.jpg'}}/>
            </View>
            <View className="w-1/3">
                <Text className="text-start text-sm font-medium text-texto">Palermo</Text>
                <View>
                    
                </View>
                {/* <Text className="w-[67] h-[15] text-center font-roboto text-texto rounded-sm bg-verde" style={{fontSize:"10px"}}>HABILITADO</Text> */}
            </View>
            <View className="w-1/3 flex items-end px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                    <rect width="35" height="19" rx="9.5" fill="#24424D"/>
                    <circle cx="25.5" cy="9.5" r="7.5" fill="#CEF169"/>
                </svg>
            </View>
        </View>
        <View className="w-[300] h-12 flex justify-center rounded-xl mt-[10] bg-amarilloVerdoso">
            <View className="w-[300] h-12 flex flex-row rounded-t-xl items-center justify-between">
                <View>
                    <Text className="text-sm ml-5 h-3 font-sairaBold text-texto">REPARTOS PENDIENTES</Text>
                    <Text className="text-sm ml-5 h-3 mb-2 font-saira text-texto">sin repartos</Text>
                </View>
                <Pressable className="mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path d="M0.33213 13.6564C-0.0716676 13.2411 -0.107106 12.5926 0.224929 12.1364L0.335563 12.0057L5.24422 7.0014L0.335563 1.99427C-0.0699586 1.58077 -0.108095 0.932423 0.22204 0.47477L0.332129 0.34362C0.735927 -0.0716381 1.36907 -0.110689 1.816 0.227372L1.94407 0.340105L7.66444 6.17292C8.07118 6.58766 8.10816 7.23837 7.77537 7.69601L7.66444 7.82708L1.94407 13.6599C1.498 14.1147 0.776307 14.1132 0.33213 13.6564Z" fill="#24424D"/>
                    </svg>
                </Pressable>
            </View>
        </View>
        <View className="w-[300] h-[282] flex rounded-t-xl mt-[10] bg-white">
            <View className="w-[300] h-10 flex flex-row rounded-xl items-center justify-between bg-amarilloVerdoso">
                <Text className="text-sm ml-5 font-sairaBold text-texto">HISTORIAL DE REPARTOS</Text>
                <Pressable className="mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M0.34362 0.33213C0.758879 -0.0716676 1.40739 -0.107106 1.8636 0.224929L1.99427 0.335563L6.9986 5.24423L12.0057 0.335563C12.4192 -0.069958 13.0676 -0.108094 13.5252 0.222041L13.6564 0.33213C14.0716 0.735928 14.1107 1.36908 13.7726 1.816L13.6599 1.94407L7.82708 7.66444C7.41234 8.07118 6.76163 8.10816 6.30399 7.77537L6.17292 7.66444L0.340105 1.94407C-0.114738 1.498 -0.113164 0.776307 0.34362 0.33213Z" fill="#24424D"/>
                    </svg>
                </Pressable>
            </View>
            <Text className="ml-6 py-2 font-semibold">58 Paquetes entregados</Text>
            <View className="flex w-full pb-1 items-center">
                <View className='h-[1] w-10/12 bg-gray-300'/>
            </View>
            <View className="flex flex-col h-48 justify-between items-center">
                <View className="flex flex-row justify-evenly items-center w-full">
                    <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M29.9812 15.6C29.9368 14.0267 29.7872 13.0237 29.2831 12.1677C28.5662 10.9503 27.2752 10.2728 24.6932 8.91782L22.2933 7.65836C20.1865 6.55279 19.1331 6 18 6C16.8669 6 15.8135 6.55279 13.7067 7.65836L11.3068 8.91782C8.72475 10.2728 7.43375 10.9503 6.71688 12.1677C6 13.3851 6 14.9 6 17.9298V18.0702C6 21.1 6 22.6149 6.71688 23.8323C7.43375 25.0497 8.72475 25.7272 11.3068 27.0822L13.7067 28.3416C15.8135 29.4472 16.8669 30 18 30C19.1331 30 20.1865 29.4472 22.2933 28.3416L24.6932 27.0822C27.2752 25.7272 28.5662 25.0497 29.2831 23.8323C29.7872 22.9763 29.9368 21.9733 29.9812 20.4" stroke="#24424D" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M28.8 12.6L24 15M18 18L7.19995 12.6M18 18V29.4M18 18C18 18 21.2911 16.3544 23.4 15.3C23.6343 15.1828 24 15 24 15M24 15V19.2M24 15L12.6 9" stroke="#24424D" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </View>
                    <View className="flex justify-center">
                        <Text className="font-semibold">#0H167</Text>
                        <Text>Av. Boca,</Text>
                        <Text>CABA</Text>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <View className="w-[88] h-[15] flex flex-row justify-evenly items-center rounded-md bg-gray-200">
                            <View className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#24424D"/>
                                </svg>
                            </View>
                            <Text style={{fontSize:10.5}}>ENTREGADO</Text>
                        </View>
                        <Pressable className="flex flex-row h-6 w-14 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
                                <path d="M13.6692 4.47368C13.9357 3.61512 14.6547 3 15.4999 3C16.3451 3 17.0641 3.61512 17.3306 4.47368" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M21 5.94739H10" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M19.9217 7.78943L19.6241 12.873C19.5096 14.8292 19.4523 15.8074 18.8926 16.4037C18.3329 17 17.4721 17 15.7504 17H15.25C13.5283 17 12.6674 17 12.1077 16.4037C11.548 15.8074 11.4907 14.8292 11.3762 12.873L11.0786 7.78943" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M13.8823 9.63159L14.2059 13.3158" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M17.1177 9.63159L16.7942 13.3158" stroke="#24424D" stroke-linecap="round"/>
                                <rect x="0.5" y="0.5" width="30" height="19" rx="4.5" stroke="#24424D"/>
                            </svg>
                        </Pressable>
                    </View>
                </View>
                <View className="flex w-full items-center">
                    <View className='h-[1] w-10/12 bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-evenly items-center w-full">
                    <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M29.9812 15.6C29.9368 14.0267 29.7872 13.0237 29.2831 12.1677C28.5662 10.9503 27.2752 10.2728 24.6932 8.91782L22.2933 7.65836C20.1865 6.55279 19.1331 6 18 6C16.8669 6 15.8135 6.55279 13.7067 7.65836L11.3068 8.91782C8.72475 10.2728 7.43375 10.9503 6.71688 12.1677C6 13.3851 6 14.9 6 17.9298V18.0702C6 21.1 6 22.6149 6.71688 23.8323C7.43375 25.0497 8.72475 25.7272 11.3068 27.0822L13.7067 28.3416C15.8135 29.4472 16.8669 30 18 30C19.1331 30 20.1865 29.4472 22.2933 28.3416L24.6932 27.0822C27.2752 25.7272 28.5662 25.0497 29.2831 23.8323C29.7872 22.9763 29.9368 21.9733 29.9812 20.4" stroke="#24424D" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M28.8 12.6L24 15M18 18L7.19995 12.6M18 18V29.4M18 18C18 18 21.2911 16.3544 23.4 15.3C23.6343 15.1828 24 15 24 15M24 15V19.2M24 15L12.6 9" stroke="#24424D" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </View>
                    <View className="flex justify-center">
                        <Text className="font-semibold">#0H167</Text>
                        <Text>Av. Boca,</Text>
                        <Text>CABA</Text>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <View className="w-[88] h-[15] flex flex-row justify-evenly items-center rounded-md bg-gray-200">
                            <View className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#24424D"/>
                                </svg>
                            </View>
                            <Text style={{fontSize:10.5}}>ENTREGADO</Text>
                        </View>
                        <Pressable className="flex flex-row h-6 w-14 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
                                <path d="M13.6692 4.47368C13.9357 3.61512 14.6547 3 15.4999 3C16.3451 3 17.0641 3.61512 17.3306 4.47368" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M21 5.94739H10" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M19.9217 7.78943L19.6241 12.873C19.5096 14.8292 19.4523 15.8074 18.8926 16.4037C18.3329 17 17.4721 17 15.7504 17H15.25C13.5283 17 12.6674 17 12.1077 16.4037C11.548 15.8074 11.4907 14.8292 11.3762 12.873L11.0786 7.78943" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M13.8823 9.63159L14.2059 13.3158" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M17.1177 9.63159L16.7942 13.3158" stroke="#24424D" stroke-linecap="round"/>
                                <rect x="0.5" y="0.5" width="30" height="19" rx="4.5" stroke="#24424D"/>
                            </svg>
                        </Pressable>
                    </View>
                </View>
                <View className="flex w-full items-center">
                    <View className='h-[1] w-10/12 bg-gray-300'/>
                </View>
                <View className="flex flex-row justify-evenly items-center w-full">
                    <View className="w-[45] h-[45] rounded-xl bg-violeta flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M29.9812 15.6C29.9368 14.0267 29.7872 13.0237 29.2831 12.1677C28.5662 10.9503 27.2752 10.2728 24.6932 8.91782L22.2933 7.65836C20.1865 6.55279 19.1331 6 18 6C16.8669 6 15.8135 6.55279 13.7067 7.65836L11.3068 8.91782C8.72475 10.2728 7.43375 10.9503 6.71688 12.1677C6 13.3851 6 14.9 6 17.9298V18.0702C6 21.1 6 22.6149 6.71688 23.8323C7.43375 25.0497 8.72475 25.7272 11.3068 27.0822L13.7067 28.3416C15.8135 29.4472 16.8669 30 18 30C19.1331 30 20.1865 29.4472 22.2933 28.3416L24.6932 27.0822C27.2752 25.7272 28.5662 25.0497 29.2831 23.8323C29.7872 22.9763 29.9368 21.9733 29.9812 20.4" stroke="#24424D" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M28.8 12.6L24 15M18 18L7.19995 12.6M18 18V29.4M18 18C18 18 21.2911 16.3544 23.4 15.3C23.6343 15.1828 24 15 24 15M24 15V19.2M24 15L12.6 9" stroke="#24424D" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </View>
                    <View className="flex justify-center">
                        <Text className="font-semibold">#0H167</Text>
                        <Text>Av. Boca,</Text>
                        <Text>CABA</Text>
                    </View>
                    <View className="flex flex-col items-end justify-center gap-1">
                        <View className="w-[88] h-[15] flex flex-row justify-evenly items-center rounded-md bg-gray-200">
                            <View className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#24424D"/>
                                </svg>
                            </View>
                            <Text style={{fontSize:10.5}}>ENTREGADO</Text>
                        </View>
                        <Pressable className="flex flex-row h-6 w-14 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
                                <path d="M13.6692 4.47368C13.9357 3.61512 14.6547 3 15.4999 3C16.3451 3 17.0641 3.61512 17.3306 4.47368" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M21 5.94739H10" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M19.9217 7.78943L19.6241 12.873C19.5096 14.8292 19.4523 15.8074 18.8926 16.4037C18.3329 17 17.4721 17 15.7504 17H15.25C13.5283 17 12.6674 17 12.1077 16.4037C11.548 15.8074 11.4907 14.8292 11.3762 12.873L11.0786 7.78943" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M13.8823 9.63159L14.2059 13.3158" stroke="#24424D" stroke-linecap="round"/>
                                <path d="M17.1177 9.63159L16.7942 13.3158" stroke="#24424D" stroke-linecap="round"/>
                                <rect x="0.5" y="0.5" width="30" height="19" rx="4.5" stroke="#24424D"/>
                            </svg>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
        <View className='h-[1] w-[300] bg-gray-300'/>
        <View className="w-[300] h-[50] flex justify-center items-center rounded-b-xl bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                <path d="M2 2L12 10L22 2" stroke="#24424D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </View>
    </View>
  )
}

export default PerfilRepartidor