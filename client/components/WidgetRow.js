import { View, Text, Pressable, ScrollView } from 'react-native'
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import React from 'react'
import Widget from './Widget'
import { TailwindProvider } from 'tailwindcss-react-native'



const WidgetRow = ( props ) => {

  return (
    <View className="flex flex-row ml-5">
      <Widget title="Upload CSV" logo ="CloudUploadIcon"/>
      <Widget title="Fetch Paypal" img = "../assets/paypallogo.png"/>
      <Widget title="Add Manually"/>
  </View>
  )
}

export default WidgetRow