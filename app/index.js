import { View, Text, ScrollView } from "react-native";
import New from "./global";
import { SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Global from "./global";
import Plastic from "./plasticbales";
import Sustainable from "./sustainable";


const Home = ()=>{
    const router = useRouter() 
    return(
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
           <ScrollView>
           <Stack.Screen options={{
              headerTitle: "",
              headerShadowVisible: false,
            
          }} 
          />
          <View>
             <Global/>
             <Plastic/>
             <Sustainable/>
          </View>
           </ScrollView>     
       </SafeAreaView>
    )
}
export default Home;