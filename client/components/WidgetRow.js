import { View, Text, Pressable, ScrollView , Image} from 'react-native'
import React from 'react'
import Widget from './Widget'
import { CloudUploadIcon } from 'react-native-heroicons/solid'


const WidgetRow = ( props ) => {
  return (
    <View className="flex flex-row justify-around items-center">
      <Widget title="Upload CSV" img={
        <CloudUploadIcon
          color="black"
          style={{height: 25, width: 25}}
        />}
      />
      <Widget title="Fetch Paypal" img={
        <Image
          source={require("../assets/paypallogo.png")}
          style={{ height: 25, width: 25}}
        />}
      />
      <Widget title="Add Manually"/>
  </View>
  )
}

export default WidgetRow