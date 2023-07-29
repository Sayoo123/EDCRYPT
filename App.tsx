
import { StyleSheet, View } from 'react-native';
import VideoComponent from './VideoComponent';
import MainPage from './navigation/screens/MainPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './navigation/Navigation';
const Stack = createNativeStackNavigator();
const Homepage = () =>{
        return (
  
               <NavigationContainer>
                <Stack.Navigator >
                <Stack.Screen name="SplashScreen" options={{ headerShown: false }} >
                    {(props) => <VideoComponent{...props} />}
                </Stack.Screen>
                <Stack.Screen name="Navigate" component={Navigation} options={{ headerShown: false }} />
                </Stack.Navigator>
                </NavigationContainer>
            
        );
      
}

export default Homepage;


