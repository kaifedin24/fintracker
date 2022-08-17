import {  View, Text, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import UntaggedTransAlert from '../components/UntaggedTransAlert'
import { useFocusEffect } from '@react-navigation/native'
import TagComponent from '../components/TagComponent'
import { ChevronDownIcon } from 'react-native-heroicons/solid'

const TagScreen = () => {

  //Keeps Track of the number of Tagged Transactions
  const [untaggedTrans, setUntaggedTrans] = useState(0);
  const [nameSortActive, setNameSortActive] = useState("#2DD4B6");
  const [countSortActive, setCountSortActive] = useState("#939393");

  //useFocusEffect Hook runs each time
  //the TagScreen is being navigated to
  useFocusEffect(
    React.useCallback(() => {
      //Make API Calls
    }, [])
  )

  //Returns the number of untagged Transactions
  const untaggedTransCount = () => {
    return 4;
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

            <View className=" mt-5 flex-row ml-4 w-52 justify-between">
              <View className="flex-row">
                <Text className="text-fin-grey">TAG NAME</Text>
                <ChevronDownIcon onPress={() =>  {setNameSortActive("#2DD4B6"); setCountSortActive("#939393")}} size={20} color={nameSortActive} />
              </View>
              <View className="flex-row">
                <Text className="text-fin-grey">TAG COUNT</Text>
                <ChevronDownIcon onPress={() =>  {setNameSortActive("#939393"); setCountSortActive("#2DD4B6")}} size={20} color={countSortActive} />
              </View>
            </View>

            <View className="flex items-center">
                <TagComponent tagName="Groceries" tagCount={3}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default TagScreen