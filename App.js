import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Locationdetails from './src/screens/Locationdetails';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={HomeScreen} />
      <Stack.Screen name="details" component={Locationdetails} />
    </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default App;
