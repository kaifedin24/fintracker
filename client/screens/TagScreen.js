import {  View, Text, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import UntaggedTransAlert from '../components/UntaggedTransAlert'
import { useFocusEffect } from '@react-navigation/native'

const TagScreen = () => {

  //Keeps Track of the number of Tagged Transactions
  const [untaggedTrans, setUntaggedTrans] = useState(0);

  //useFocusEffect Hook runs each time
  //the TagScreen is being navigated to
  useFocusEffect(
    React.useCallback(() => {
      //Make API Calls
    }, [])
  )

  //Returns the number of untagged Transactions
  const untaggedTransCount = () => {
    return 6;
  }


  return (
    <SafeAreaView>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="bg-fin-offwhite">
            <Header title="Your Tags" subtitle="TagTagTag" />

            {/* //If Number is smaller than a certain threshold, */}
            {/* //dont' display the untagged Transaction Alert */}
            <View className="flex items-center mt-5">
              { untaggedTransCount() > 5 ? <UntaggedTransAlert untaggedCount={untaggedTrans} /> : <></>}
            </View>

            <ScrollView className="h-full">
              
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default TagScreen