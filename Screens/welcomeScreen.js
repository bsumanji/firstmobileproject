import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import homeScreen from './homeScreen';



const welcomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
      
      <Image
        style={{width:300, height:100}}
        source={{
          uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        }}
        onPress={() => navigation.navigate("Home")}

      />
      
    </View>

      
        
    )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    
  }
  
});
	

export default welcomeScreen
