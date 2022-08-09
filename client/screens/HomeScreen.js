import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LastFetch from '../components/LastFetch'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <Header />
            <ScrollView className="bg-gray-700 h-full">
                <LastFetch />
            </ScrollView>
        </View>
    </SafeAreaView>

  )
}

export default HomeScreen