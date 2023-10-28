import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../theme/Index';
import { cartItems } from '../constants/Index';
import FruitCardCart from '../components/FruitCardCart';

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 flex  bg-white'>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />
      <View className='flex-row justify-start'>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className='mx-4 my-3 border border-gray-400 rounded-xl '
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
        >
          <Icon name='chevron-back' size={30} color={'gray'} />
        </TouchableOpacity>
      </View>
      <View className='mx-4'>
        <Text
          style={{ color: themeColors.text }}
          className='py-10 text-2xl'
        >
          Your <Text className='font-bold'>Cart</Text>
        </Text>
        <View>
          {
            cartItems.map((fruit, index) => {
              return (
                <FruitCardCart fruit={fruit} key={index} />
              )
            })
          }
        </View>

<View className='flex-row justify-end mb-5'>
  <Text 
  className='text-lg'
  style={{color: themeColors.text}}
  >
    Total Price: $ <Text className='text-yellow-500 font-bold'>150.00</Text>
  </Text>
</View>

        <View className='flex-row justify-center '>
          <TouchableOpacity
            className='bg-orange-500 p-4 rounded-xl '
            style={{ width: 150 }}
          >
            <Text className='text-xl text-center text-white font-bold'>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen