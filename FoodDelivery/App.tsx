import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet, View} from 'react-native';
import MapView, {UrlTile} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Restaurant, OrderDelivery} from './screens';
import Tabs from './navigation/tab';
import GoogleMapScreen from './screens/googleMap';
const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
{
  /* return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'HomeTabs'}>
        <Stack.Screen name="HomeTabs" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default App;
