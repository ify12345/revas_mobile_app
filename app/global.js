import { Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';



const Global = () => {



  return (
   <SafeAreaView>
    <View style={styles.container}>
        <Image
           style={styles.image}
           source={require('../assets/global.png')}
        />
      <View style={styles.textContainer}>
        <Text style={styles.first}>Global trading platform for recycled plastic</Text>
        <Text style={styles.secondtext}>We enable buyers and sell to efficiently trade recycled plastics with confidence, bringing increased opportunity for both party.</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    flexDirection: 'column',
    gap: 25,
    justifyContent: "space-between",
  },
  image: {
    width: 390,
    height: 365,
    resizeMode: 'cover',
  },
  textContainer:{
    fontSize: 20,
    textAlign: "center",
    justifyContent:"center",
    flexDirection: 'column',
    gap: 13,
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 100,
  },
  first:{
    fontWeight: 900,
    fontSize: 28,
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    marginHorizontal:"auto"
  },
  secondtext:{
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    color: "#3B383E",
    fontWeight: '500'
    
  },
  button: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 50,
    width: "90%",
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
});

export default Global;
