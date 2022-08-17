import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AdjustmentsIcon } from 'react-native-heroicons/solid'

const TagComponent = ({tagName, tagCount}) => {
  return (
    <View className="h-16 w-96 rounded-sm bg-fin-white mt-5 flex-row items-center justify-between ">
        <View className="flex-row items-center justify-around w-40 ml-2">
            <View className="h-4 w-12 rounded-lg bg-fin-green" />
            <Text>{tagName}</Text>
            <Text className="font-semibold">{tagCount}</Text>
        </View>
        <TouchableOpacity className="w-20 h-6 bg-fin-blue flex-row items-center justify-evenly rounded-sm mr-4">
            <AdjustmentsIcon size={20} color="white" />
            <Text className="text-fin-white font-bold">Edit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TagComponent