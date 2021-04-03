import { useLayoutEffect } from "react";
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import {AntDesign } from "@expo/vector-icons";



function HomeScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function DeviceScreen() {

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Commected Devices</Text>
  </View>
);
}


function TShootScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Text>Troubleshoot</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Text>Settings!</Text>
    </View>
  );
}

function WifiAnalyzerScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Text>Wifi Analyzer</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const homeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTintColor: "Black",
        
        headerRight: () => (
        <View style = {{ marginRight : 20, flexDirection:"row-reverse", justifyContent: "space-between", width:120}}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name ="bells" size ={24} color = "#0c4da2" onClick={() => navigation.navigate("Notification")}/>            
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name ="message1" size={24} color ="#0c4da2" onClick={() => navigation.navigate("Chat")}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name ="customerservice" size={24} color ="#0c4da2" onClick={() => navigation.navigate("Call")}/>
          </TouchableOpacity>
         
        </View>
      ),
              
      });
    }, []);

    return (
    <NavigationContainer independent={true}>  
      <Tab.Navigator activeBackgroundColor = "#902f59" activeTintColor = "#0c4da2" inactiveBackgroundColor = "#0c4da2" inactiveTintColor="#902f59" >
        <Tab.Screen name="Home" component={HomeScreen} 
          options = {{
            tabBarLabel : '',
            tabBarIcon : () => (
              <AntDesign name = "home" size={24} color ="#0c4da2" />
            )
          }}
        />

        <Tab.Screen name = "Devices" component={DeviceScreen} 
          options = {{
            tabBarLabel : '',
            tabBarIcon : () => (
              <AntDesign name = "mobile1" size={24} color ="#0c4da2" />
            )
          }} 
        />

        <Tab.Screen name="Wifi" component={WifiAnalyzerScreen} 
          options = {{
            tabBarLabel : '',
            tabBarIcon : () => (
              <AntDesign name = "wifi" size={24} color ="#0c4da2" />
            )
          }} 
        />

        <Tab.Screen name="TShoot" component={TShootScreen} 
          options = {{
            tabBarLabel : '',
            tabBarIcon : () => (
              <AntDesign name = "tool" size={24} color ="#0c4da2" />
            )
          }} 
        />

        <Tab.Screen name="Settings" component={SettingsScreen} 
          options = {{
            tabBarLabel : '',
            flexDirection:"column",
            tabBarIcon : () => (
              <AntDesign name = "setting" size={24} color ="#0c4da2"/>
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
       
    );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    
  },

  background:{
    position:'absolute',

    left:0,
    right:0,
    height:600,

  },
  
});

export default homeScreen