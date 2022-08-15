import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Widget = ({title, img}) => {
  return (
    <TouchableOpacity className="bg-white rounded-lg h-24 w-24 justify-center items-center">
            {img}
            <Text className="text-center text-xs">{title}</Text>
    </TouchableOpacity>
  )
}

export default Widget