import { Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';



const Plastic = () => {



  return (
   <SafeAreaView>
    <View style={styles.container}>
        <Image
           style={styles.image}
           source={require('../assets/plasticbales.png')}
        />
      <View style={styles.textContainer}>
        <Text style={styles.first}>Plastic Bales</Text>
        <Text style={styles.secondtext}>Bales trading on the RPX are primarily any whole polyethylene terephthalate (PET)bottle with a screws-neck top that contains</Text>
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
    fontWeight: '600',
    fontSize: 24,
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

export default Plastic;
