import { View, Text, SafeAreaView, StatusBar, Button, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import * as DocumentPicker from 'expo-document-picker'
const axios = require('axios').default;

const UpdateFinancesScreen = () => {

  const chooseFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: 'text/csv'
      });

      if (res.type === "cancel") throw res.type;

      const formData = new FormData();
      formData.append('csvFile',{
        uri: res.uri,
        type: res.mimeType,
        name: res.name
      })
      axios.post('http://192.168.178.135:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    }
    catch {
      console.log("User did not pick a document.");
    }
  }

  return (
    <SafeAreaView>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <View className="bg-fin-offwhite">
                  <View className="flex items-center mt-6">
                    <Text className="text-4xl font-bold text-center text-white">Upload a new CSV</Text>
                    <Pressable onPress={chooseFile} className="bg-blue-500 rounded-md h-8 w-32 flex items-center justify-center mt-4">
                      <Text className="text-white font-bold">UPLOAD</Text>
                    </Pressable>
                  </View>
                  <View className="flex items-center mt-12">
                    <Text className="text-4xl font-bold text-center text-white">Update using PayPal</Text>
                  </View>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default UpdateFinancesScreen