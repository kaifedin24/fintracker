import React from 'react';
const axios = require('axios');
import { Text, View, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
  // const sendCSV = async (csvFile) => {
  //   const formData = new FormData();
  //   formData.append('csv', {
  //     name: csvFile.name,
  //     uri: csvFile.uri,
  //     type: csvFile.type
  //   })
  //   axios.post('http://localhost:4000/upload', {
  //     name: Pascal,
  //     age: 22
  //   })
  // }
  const selectCSV = async () => {
    try {
      // const pickerResult = await DocumentPicker.pickSingle({
      //   presentationStyle: 'fullScreen',
      //   // type: DocumentPicker.types.csv
      // })
      // pickerResult.
      // sendCSV(pickerResult);
    } catch (e) {
      handleError(e)
    }
  }

  const user = {
    'name': 'Pascal',
    'age': '22'
  }

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
      {/* <Button
        title="Upload CSV"
        onPress={selectCSV}
      /> */}
      <Button
        title="Test Purpose tt"
        onPress={() => {
          alert('This works');
          axios.post('http://10.0.2.2:4000/upload', user)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("Es funktioniert nicht");
          });
        }}
      />
    </View>
  );
}

export default App;