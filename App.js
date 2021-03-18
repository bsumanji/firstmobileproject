import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import displayScreen from './Screens/displayScreen';
import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}
      <Stack.Screen name ="display" component={displayScreen} />
      
    

       <View style={styles.container}>
         <Text>k Chha Suman Ji ? </Text>
         <StatusBar style="auto" />
       </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
