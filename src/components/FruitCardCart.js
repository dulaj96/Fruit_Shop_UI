import { View, Text, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { themeColors } from '../theme/Index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FruitCardCart = ({ fruit }) => {
    return (
        <View className='flex-row justify-start items-center space-x-7 mb-5'>
            <View className='ml-8'>
                <TouchableOpacity
                    className='flex-row -mb-10 -ml-8 shadow-lg z-20'
                >
                    <Image
                        source={fruit.image}
                        style={{
                            height: 75,
                            width: 75,
                            shadowColor: fruit.shadow,
                            overflow: 'visible',
                            shadowRadius: 15,
                            shadowOffset: { width: 0, height: 20 },
                            shadowOpacity: 0.4
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{ backgroundColor: fruit.color(0.4), height: 60, width: 80 }}
                    className='rounded-2xl flex justify-end items-center'
                >

                </View>
            </View>
            <View className='flex-1 space-y-1'>
                <Text
                    style={{ color: themeColors.text }}
                    className='text-base font-bold'
                >
                    {fruit.name}
                </Text>
                <Text className='text-yellow-500 font-extrabold'>
                    $ {fruit.price}
                </Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <TouchableOpacity className='bg-gray-300 p-1 rounded-lg'>
                    <MaterialCommunityIcons name='plus' size={15} color={'white'} />
                </TouchableOpacity>
                <Text style={{ color: themeColors.text }}>{fruit.qty}</Text>
                <TouchableOpacity className='bg-gray-300 p-1 rounded-lg'>
                    <MaterialCommunityIcons name='minus' size={15} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FruitCardCart