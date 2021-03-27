import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import homeScreen from './Screens/homeScreen';
import welcomeScreen from './Screens/welcomeScreen';



function LogoTitle() {
  return (
    <View >
    
    <Image
      style={styles.container}
      source={{
          uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        }}
    />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent:'true'}}>
        <Stack.Screen
          name="Welcome"
          component={welcomeScreen}
          
        />
        <Stack.Screen name ="Home" component={homeScreen} 
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    height:10,
    width:60,
  },

  background:{
    position:'absolute',

    left:0,
    right:0,
    height:600,

  },
  
});

export default App;
