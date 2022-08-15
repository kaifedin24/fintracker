import { View, Text, TouchableOpacity, Image } from 'react-native'
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'

const Widget = ({title, logo, img}) => {
  return (
    <TouchableOpacity className="bg-white rounded-lg h-20 w-20">
        <View >
            <Text>{title}</Text>
            
        </View>
    </TouchableOpacity>
  )
}

export default Widget