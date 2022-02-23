import React from 'react';
import axios from 'axios';
import { Text, View, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
  const sendCSV = async (csvFile) => {
    const formData = new FormData();
    formData.append('csv', {
      name: csvFile.name,
      uri: csvFile.uri,
      type: csvFile.type
    })
    axios.post('http://localhost:4000/upload', formData)
  }
  const selectCSV = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        // type: DocumentPicker.types.csv
      })
      pickerResult.
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