import { Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';



const Sustainable = () => {



  return (
   <SafeAreaView>
    <View style={styles.container}>
        <Image
           style={styles.image}
           source={require('../assets/sustainable.png')}
        />
      <View style={styles.textContainer}>
        <Text style={styles.first}>Sustainable Global Hub for Recycled Plastics</Text>
        <Text style={styles.secondtext}>We are a global marketplace for recycled
            plastic, with a wide range of plastic 
            types and grades available</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
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
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    marginBottom: 100,
  },
  first:{
    fontWeight: '600',
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    width: "90%",
  },
  secondtext:{
    fontSize: 14,
    textAlign: "center",
    lineHeight: 19,
    color: "#3B383E",
    width: "100%",
    fontWeight: '400'
    
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

export default Sustainable;
