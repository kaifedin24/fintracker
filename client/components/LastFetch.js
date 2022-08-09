import { View, Text, Pressable } from 'react-native'
import React from 'react'

const LastFetch = ( props ) => {

  return (
    <View className="mt-12">
      <Text className="text-4xl font-bold text-center text-white">It has been 21 days since your last transaction fetch.</Text>
      <View className="flex flex-row mt-4 justify-center">
        <Text className="text-gray-400 text-center">Fetch your latest transactions in the finance screen</Text>
      </View>
    </View>
  )
}

export default LastFetch