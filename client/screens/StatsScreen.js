import {  View, Text, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const StatsScreen = () => {
  return (
    <SafeAreaView>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <Header title="Your Stats" subtitle="Good Luck" />
            <ScrollView className="bg-fin-offwhite h-full">
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default StatsScreen