
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JournalScreen from './screens/JournalScreen';
import JournalEntryScreen from './screens/JournalEntryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Journal">
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="NewEntry" component={JournalEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
