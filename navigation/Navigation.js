import { StyleSheet, Text, View,Keyboard,LayoutAnimation } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainPage from './screens/MainPage'
import SecondaryPage from './screens/SecondaryPage'
import { BlurView } from '@react-native-community/blur'
const Tab=createBottomTabNavigator();
const mainpage='Playfair Cipher';
const secondarypage='Caesar Cipher';

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        //Whenever keyboard did show make it don't visible
        LayoutAnimation.spring(); 
        setVisible(false);
    },6500);
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      LayoutAnimation.spring(); 
        setVisible(true);
    },1500);
  },[]);
  return (

  <Tab.Navigator
    initialRouteName={mainpage}
    screenOptions={{
      // tabBarActiveTintColor:'#F89300',
      // tabBarInactiveTintColor:'grey',
      
      tabBarStyle:{
        backgroundColor:'white',
        bottom:20,
        left: 25,
        right: 25,
        height:'7.2%',
        borderRadius: 30,
        elevation: 5,
        display:visible?'flex':'none',
        position: 'absolute',
        borderColor:'grey',
      }
    }}>
      
  <Tab.Screen name={mainpage} component={MainPage} options={{
          tabBarLabel:({focused})=> (focused?<Text style={{fontWeight: 'bold',color:'#F89300',fontSize:12,marginBottom:'5%'}}>playfair</Text>:<Text style={{color:'grey',fontSize:12,marginBottom:'5%'}}>playfair</Text>),
          tabBarIcon: ({size,focused}) => (
            <MaterialCommunityIcons name="home" color={focused?'#F89300':'grey'} size={size} style={{marginTop:'3%'}}/>
          ),
          headerStyle:{
            backgroundColor:'#23262F',
          },
          headerTintColor:'white',
          headerShadowVisible:false
        }}/>
  <Tab.Screen name={secondarypage} component={SecondaryPage}  options={{
           tabBarLabel:({focused})=> (focused?<Text style={{fontWeight: 'bold',color:'#F89300',fontSize:12,marginBottom:'5%'}}>caesar</Text>:<Text style={{color:'grey',fontSize:12,marginBottom:'5%'}}>caesar</Text>),
          tabBarIcon: ({size,focused}) => (
            <MaterialCommunityIcons name="home" color={focused?'#F89300':'grey'} size={size} style={{marginTop:'3%'}}/>
          ),
          headerStyle:{
            backgroundColor:'#23262F',
          },
          headerTintColor:'white',
          headerShadowVisible:false
        }}/>
  </Tab.Navigator>

  )
}

export default Navigation

const styles = StyleSheet.create({})