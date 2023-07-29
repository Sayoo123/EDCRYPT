import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainPage from './screens/MainPage'
import SecondaryPage from './screens/SecondaryPage'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const Tab=createBottomTabNavigator();
const mainpage='Playfair Cipher'
const secondarypage='Caesar Cipher'
const Navigation = () => {
  return (

  <Tab.Navigator
    initialRouteName={mainpage}
    screenOptions={{
      tabBarActiveTintColor:'#F89300',
      tabBarInactiveTintColor:'grey',
      tabBarStyle:{
        backgroundColor:'#23262F',
      }
    }}>
  <Tab.Screen name={mainpage} component={MainPage} options={{
          tabBarLabel: 'Playfair',
          tabBarIcon: ({size,focused}) => (
            <MaterialCommunityIcons name="home" color={focused?'#F89300':'grey'} size={size} />
          ),
          headerStyle:{
            backgroundColor:'#23262F',
          },
          headerTintColor:'#F89300',
          headerShadowVisible:false
        }}/>
  <Tab.Screen name={secondarypage} component={SecondaryPage}  options={{
          tabBarLabel: 'Playfair',
          tabBarIcon: ({size,focused}) => (
            <MaterialCommunityIcons name="home" color={focused?'#F89300':'grey'} size={size} />
          ),
          headerStyle:{
            backgroundColor:'#23262F',
          },
          headerTintColor:'#F89300',
          headerShadowVisible:false
        }}/>
  </Tab.Navigator>

  )
}

export default Navigation

const styles = StyleSheet.create({})