import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Pressable style={styles.btn} onPress={()=> navigation.navigate('Auth')}>
        <Text>Button</Text>
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:100,
        height:50,
        borderColor:"blue",
        borderWidth:2
    }
})




export default Profile