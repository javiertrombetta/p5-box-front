import { View, Text, Dimensions, Pressable } from 'react-native'
import React, { ReactNode } from 'react'
import ArrowHeadDown from '../assets/ArrowHeadDown.svg';


const { width, height } = Dimensions.get('window');
const WScale = width / 360;
const HScale = height / 640;

const scaledSize = (size: number) => Math.ceil(size * Math.min(WScale, HScale));

interface cardProps {
	header: string;
	contentHeader?: string;
	dropdown: string;
    height: number;
    children: ReactNode;
}

const Card = ({header, contentHeader, dropdown, height, children}: cardProps) => {
    // const arrayHeader: Array<string | number> = header.split(', ');
    const arrayDropdown: Array<string | number> = dropdown.split(', ');

    return (
        <View style={{height: height * HScale, width: '100%', marginTop: 10 * HScale}} className="w-full items-center justify-start rounded-xl bg-blanco">
            {/* {arrayHeader[0] === 'violet' && (

            )}
            {arrayHeader[0] === 'green' && (

            )}
            {arrayHeader[0] === 'none' && (

            )} */}
            <View className='flex items-center'>{children}</View>
            {arrayDropdown[0] === 'true' && (
                <Pressable style={{height: arrayDropdown[1] as number}} className='w-full flex justify-center items-center rounded-b-xl bg-white z-10'>
                    <ArrowHeadDown height={19 * HScale} width={24 * WScale} />
                </Pressable>
            )}
        </View>
    )
}

export default Card