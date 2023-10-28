import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme/Index';
import StarRating from 'react-native-star-rating';

const ProductScreen = (props) => {
  let fruit = props.route.params;
  const navigation = useNavigation();

  return (
    <View className='flex-1' style={{ backgroundColor: fruit.color }}>
      <StatusBar backgroundColor={fruit.color} barStyle='dark-content' />
      <SafeAreaView>
        <View className='flex-row justify-start items-center'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='mx-4 my-3 border border-gray-50 rounded-xl'
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <Icon name='chevron-back' size={30} color={'white'} />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-5 pb-10'>
          <Image source={fruit.image} style={{ height: 290, width: 290 }} />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className='flex-1 bg-white px-4 space-y-3'
      >
        <Text
          style={{ color: themeColors.text }}
          className='mt-8 font-bold text-2xl'
        >
          {fruit.name}
        </Text>
        <View className='flex-row justify-between mb-3'>
          <Text className='text-gray-500 font-semibold'>{fruit.desc}</Text>
          <Text className='text-gray-500 font-semibold'>
            sold <Text className='text-gray-800 font-extrabold'>290</Text>
          </Text>
        </View>
        <StarRating
          disabled={true}
          starSize={18}
          containerStyle={{ width: 120 }}
          maxStars={5}
          rating={fruit.stars}
          emptyStarColor="lightgray"
          // emptyStar={require('../assets/images/emptyStar.png')}
          fullStar={require('../assets/images/fullStar.png')}
        />
        <View style={{ height: 165 }}>
          <Text style={{ color: themeColors.text }} className='tracking-wider py-3'>
            Fruits are delicious and nutritious plant products that come in a wide variety of shapes, sizes, colors, and flavors. They are the mature ovaries of flowering plants and typically contain seeds. Fruits are nature's way of enticing animals to help disperse these seeds, ensuring the plant's survival. They are rich sources of essential vitamins, minerals, fiber, and antioxidants, making them a vital part of a healthy diet.
          </Text>
        </View>
        <View className='flex-row justify-between items-center'>
          <Text className='text-3xl text-neutral-700'>$ {fruit.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CartScreen')}
            className='flex-1 p-3 rounded-2xl ml-10'
            style={{ backgroundColor: fruit.color }}
          >
            <Text className='text-center text-white text-xl font-bold'>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductScreen