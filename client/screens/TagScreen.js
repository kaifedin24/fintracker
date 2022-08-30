import {  View, Text, SafeAreaView, StatusBar, ScrollView, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import UntaggedTransAlert from '../components/UntaggedTransAlert'
import { useFocusEffect } from '@react-navigation/native'
import TagComponent from '../components/TagComponent'
import { ChevronDownIcon } from 'react-native-heroicons/solid'

const TagScreen = () => {

  //Keeps Track of the number of Tagged Transactions
  const [untaggedTrans, setUntaggedTrans] = useState(0);
  const [nameSortActive, setNameSortActive] = useState(true);
  const [sortedTags, setSortedTags] = useState([]);

  //Emulating the to be fetched Data
  let tags = ([
    {
      uid: "dsakj",
      name: "Groceries",
      count: 33,
      tags: ["REWE", "Edeka"]
    },
    {
      uid: "dasbhidaslkjbh",
      name: "Eating Out",
      count: 6,
      tags: ["McDonalds", "KFC"]
    },
    {
      uid: "po9873dashh",
      name: "Clothing",
      count: 8,
      tags: ["Zalando", "ASOS"]
    },
    {
      uid: "pteasd",
      name: "Electronics",
      count: 22,
      tags: ["Saturn", "Amazon"]
    }
    ]
  );

  //useFocusEffect Hook runs each time
  //the TagScreen is being navigated to
  useFocusEffect(
    React.useCallback(() => {
      //Make API Calls
      //Emulating fecthing the data
      setSortedTags(tags);
      setUntaggedTrans(6);
    }, [])
  );

  //Runs everytime the value of nameSortActive changes
  useEffect(() => {
    if (nameSortActive === true) setSortedTags(tags.sort((a, b) => a.name.localeCompare(b.name)));
    else setSortedTags(tags.sort((a, b) => {return b.count - a.count;}));
  }, [nameSortActive])

  return (
    <SafeAreaView>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }} className="bg-fin-offwhite">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header title="Your Tags" subtitle="TagTagTag" />
            <View className="flex items-center mt-5">
              { untaggedTrans > 5 ? <UntaggedTransAlert untaggedCount={untaggedTrans} /> : <></>}
            </View>
            <View className=" mt-5 flex-row ml-4 w-52 justify-between">
              <View className="flex-row">
                <Text className="text-fin-grey">TAG NAME</Text>
                <ChevronDownIcon onPress={() => {setNameSortActive(true)}} size={20} color={nameSortActive ? "#2DD4B6" : "#939393"} />
              </View>
              <View className="flex-row">
                <Text className="text-fin-grey">TAG COUNT</Text>
                <ChevronDownIcon onPress={() => setNameSortActive(false)} size={20} color={!nameSortActive ? "#2DD4B6" : "#939393"} />
              </View>
            </View>
            <View>
              {
              sortedTags.map(tag => (
                <TagComponent key={tag.uid} tagName={tag.name} tagCount={tag.count}/>
                ))
              }
            </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default TagScreen