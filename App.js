import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import welcomeScreen from './Screens/welcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from './Screens/homeScreen';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();


const standardColor = {
  headerStyle: { backgroundColor: "blue"}
  
};


export default function App() {

  return (

    
    <NavigationContainer>{/* Rest of your app code */}      
       <Stack.Navigator screenOptions ={standardColor}>
          <Stack.Screen name ="Welcome" component={welcomeScreen} />
          <Stack.Screen name ="Home" component={homeScreen} />
       </Stack.Navigator>
       
    </NavigationContainer>

    
  );
}




