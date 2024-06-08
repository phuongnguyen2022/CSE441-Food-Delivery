import React from 'react';
import ViewScreen from './screens/View';
import Add from './screens/AddFood';
import Update from './screens/UpdateFood';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewTasks">
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="AddFood" component={Add} />
        <Stack.Screen name="UpdateFood" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
