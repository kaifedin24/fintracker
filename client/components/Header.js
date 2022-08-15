import { View, Text } from 'react-native'
import React from 'react'
import { CogIcon, UserIcon } from 'react-native-heroicons/solid'
import { TailwindProvider } from 'tailwindcss-react-native';

const Header = ({title, subtitle}) => {
  return (
            <View className="h-18 flex flex-row items-center justify-between bg-fin-offwhite">
                <View className="flex ml-5 mt-8">
                    <Text className="font-bold text-black text-3xl">{title}</Text>
                    <Text className="font-bold text-lg text-fin-grey">{subtitle}</Text>
                </View>
                <View className="mr-2">
                    <CogIcon size={24} color="black" />
                </View>
            </View>
  )
}

export default Header