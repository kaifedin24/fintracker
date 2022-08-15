import { View, Text, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LastFetch from '../components/LastFetch'
import { TailwindProvider } from 'tailwindcss-react-native'
import WidgetRow from '../components/WidgetRow';
import TransactionBlock from '../components/TransactionBlock'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <Header title="Your Wallet" subtitle="Welcome back" />
            <ScrollView className="bg-fin-offwhite h-full">
                <WidgetRow/>
                <TransactionBlock/>
            </ScrollView>
        </View>
    </SafeAreaView>

  )
}

export default HomeScreen