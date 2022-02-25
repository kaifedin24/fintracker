import React from 'react';
const axios = require('axios');
import { Text, View, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
  //Actual Upload Part
  const sendCSV = async (csvFile) => {
    const formData = new FormData();
    formData.append('user-csv-file', csvFile.uri);
  }
  //Picking the CSV Part
  const selectCSV = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: DocumentPicker.types.csv
      })
      sendCSV(pickerResult);
    } catch (e) {
      handleError(e)
    }
  }

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
      <Button
        title="Upload CSV"
        onPress={selectCSV}
      />
    </View>
  );
}

export default App;