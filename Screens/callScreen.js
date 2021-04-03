import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const callScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <Text>No Calls Set!</Text>
        </View>
    )
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

export default callScreen
