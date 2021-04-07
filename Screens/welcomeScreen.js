import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import homeScreen from './homeScreen';
//import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';


const welcomeScreen = ({ navigation }) => {
  //Splash Config
  setTimeout(()=> {
    navigation.replace('Home');
  },1500);
  
    return (
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["orange","white","orange"]}
        style={styles.background}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
      
      />
     <Image
        style={{width:300, height:100}}
        source={{
          uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        }}
      />
       {/*onPress={() => navigation.navigate("Home")} */} 

      

     </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    
  },

  background:{
    position:'absolute',
    flex:1,
    left:0,
    right:0,
    height:900,
    

  },
  
});
	

export default welcomeScreen
