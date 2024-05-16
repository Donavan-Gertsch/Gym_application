import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

function App() {
  const [benchText, setBenchText] = useState<string>('');
  const [squatText, setSquatText] = useState<string>('');
  const [deadliftText, setDeadliftText] = useState<string>('');

  const handleBenchChange = (text: string) => {
    setBenchText(text);
  };
  const handleSquatChange = (text: string) => {
    setSquatText(text);
  };
  const handleDeadliftChange = (text: string) => {
    setDeadliftText(text);
  };
  const handleSubmit = () => {
    // Do something with the inputText, such as storing it in a database, passing it to another component, etc.
    console.log('User input:', benchText);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 20, paddingBottom: 20}}>How much can you lift?</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Bench Press Max"
        onChangeText={handleBenchChange}
        value={benchText}
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Squat Max"
        onChangeText={handleSquatChange}
        value={squatText}
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Deadlift Max"
        onChangeText={handleDeadliftChange}
        value={deadliftText}
      />            
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default App;
