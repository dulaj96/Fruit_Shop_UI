import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FruitCard = ({ fruit }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <View
            style={{ height: 330, borderRadius: 40, backgroundColor: fruit.color(1) }}
            className='mx-4'
        >
            <View className='flex-row justify-end'>
                <TouchableOpacity
                    onPress={() => setIsFavourite(!isFavourite)}
                    className='mr-4 mt-4 p-2 rounded-2xl'
                    style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                >
                    <MaterialCommunityIcons name='heart' size={25} color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </View>
            <View
                className='flex-row justify-center'
                style={{
                    shadowColor: fruit.shadow,
                    shadowRadius: 40,
                    shadowOffset: { width: 0, height: 50 },
                    shadowOpacity: 0.6
                }}
            >
                <Image source={fruit.image} style={{ height: 210, width: 210 }} />
            </View>
            <View className='ml-6'>
                <Text className='font-bold text-xl text-neutral-700 '>
                    {fruit.name}
                </Text>
                <Text className='font-bold text-lg text-neutral-700 tracking-wide'>
                    ${fruit.price}
                </Text>
            </View>
        </View>
    )
}

export default FruitCard