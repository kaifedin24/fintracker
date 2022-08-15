import { View, Text } from 'react-native'
import React from 'react'

const Transaction = ({name, category, amount, type}) => {

    let vz ="";
    let amountCol ="";

    if (type == "cost"){
        vz ="-";
        amountCol ="text-fin-red";
    }else{
        vz ="+";
        amountCol ="text-fin-green";
    };

    let categoryCol = "text-fin-grey";

    if(category ==""){
        category = "Tag is missing";
        categoryCol = "text-fin-red";

    }

  return (
    <View className="flex flex-row justify-between items-center mb-1 bg-white h-20">
            <View className="ml-5">
                <Text className="text-lg font-bold mb-3">{name}</Text>
                <Text className= {`text-md ${categoryCol}`}>{category}</Text>
            </View>
            <View className="flex mr-6">
                <Text className={`text-2xl font-semibold ${amountCol}`}>{vz}{amount}€</Text>
            </View>
    </View>
  )
}

export default Transaction