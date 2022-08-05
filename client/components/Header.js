import { View, Text } from 'react-native'
import React from 'react'
import { UserIcon } from 'react-native-heroicons/solid'

const Header = () => {
  return (
            <View className="h-12 flex flex-row items-center justify-between bg-gray-800">
                <View className="flex ml-2 p-1">
                    <Text className="text-gray-100 -mb-1">Welcome back,</Text>
                    <Text className="font-bold text-lg text-blue-500 -mt-1">Pascal</Text>
                </View>
                <View className="p-1 mr-2">
                    <UserIcon size={20} color="#3B82F6" />
                </View>
            </View>
  )
}

export default Header