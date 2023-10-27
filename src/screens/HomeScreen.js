import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { themeColors } from '../theme/Index';
import { categories, featuredFruits } from '../constants/Index';
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';

const HomeScreen = () => {
  const [activeCat, setActiveCat] = useState('Oranges');

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />
      {/* top bar */}
      <View className='flex-row justify-between items-center mx-4 mt-2'>
        <FontAwesome name='bars' size={25} color='black' />
        <TouchableOpacity className='p-2 rounded-full bg-orange-100'>
          <MaterialIcons name='shopping-cart' size={25} color='orange' />
        </TouchableOpacity>
      </View>

      {/* categories */}
      <View className='mt-4'>
        <Text
          style={{ color: themeColors.text }}
          className='text-2xl font-medium tracking-widest mx-4'
        >
          Seasonal
        </Text>
        <Text
          style={{ color: themeColors.text }}
          className='text-3xl font-medium tracking-widest mx-4 mt-1'
        >
          Fruites And Vegetables
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='mt-8 px-4'
        >
          {
            categories.map((cat, index) => {
              let isActive = cat == activeCat;
              let textClass = `text-xl ${isActive ? ' font-bold' : ''}`;

              return (
                <TouchableOpacity
                  onPress={() => setActiveCat(cat)}
                  key={index}
                  className='mr-8 relative'
                >
                  <Text style={{ color: themeColors.text }} className={textClass}>{cat}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      {/* fruit carousel */}
      <View className='mt-8'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            featuredFruits.map((fruit, index) => {
              return(
                <FruitCard fruit={fruit} key={index}/>
              )
            })
          }
        </ScrollView>
      </View>

      {/* hot sales */}
      <View className='mt-8 mx-4 space-y-1'>
        <Text style={{color: themeColors.text}} className='font-bold text-xl'>
          Hot Sales
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{overflow: 'hidden'}}
        >
          {
            [...featuredFruits].reverse().map((fruit, index) => {
             return(
              <FruitCardSales fruit={fruit} key={index}/>
             )
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen