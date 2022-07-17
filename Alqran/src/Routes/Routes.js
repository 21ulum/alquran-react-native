import { Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="AL-QURAN-BAHRUL ULUM" component={Home} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default Routes
