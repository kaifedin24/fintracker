import { View, Text } from 'react-native'
import React from 'react'
import Transaction from './Transaction'
import { TailwindProvider } from 'tailwindcss-react-native'
import { ArrowRightIcon, ArrowSmRightIcon } from 'react-native-heroicons/solid'

const TransactionBlock = () => {
  return (
      <View className="mt-10">
        <View className="ml-5 flex flex-row justify-between">
            <Text className="text-lg font-bold">Transaction</Text>
            <View className="mr-2">
                <ArrowRightIcon color="black"/>
            </View>
        </View>
        <View className="mt-3">
            <Transaction name="Spotify" category="Entertainment" amount="5" type="cost"/>
            <Transaction name="Job" category="Income" amount="150" type="profit"/>
            <Transaction name="REWE" category="" amount="10" type="cost"/>
            <Transaction name="Vino e Spaghetti" category="Restaurant" amount="10" type="cost"/>
        </View>

        <View className ="flex flex-row justify-center mt-2">
          <Text className ="font-bold text-[16px]"> Show All Transactions</Text>
        </View>
        

      </View>
    
  )
}

export default TransactionBlock