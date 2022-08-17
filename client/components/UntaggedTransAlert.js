import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UntaggedTransAlert({ untaggedCount }) {




  return (
    <View className="h-32 w-72 bg-white rounded-sm items-center justify-around">
      <View className="flex-row">
        <Text className="text-lg font-light text-center">You currently have
        <Text className="font-bold text-fin-red"> {untaggedCount} </Text>
        untagged Transactions.</Text>
      </View>
      <TouchableOpacity className="bg-fin-red w-24 h-6 rounded-md flex items-center justify-center">
        <Text className="text-fin-white font-bold">Resolve</Text>
      </TouchableOpacity>
    </View>
  )
} 