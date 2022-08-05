import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const TagScreen = () => {
  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Text>TagScreen</Text>
    </View>
  )
}

export default TagScreen