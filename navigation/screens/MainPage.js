import React, { useState,useEffect } from 'react';
import {View,StyleSheet,Text, TextInput, Button, SafeAreaView, Touchable, TouchableOpacity,BackHandler} from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome'
import encryption from '../../components/encryption';
import decryption from '../../components/decryption';
const MainPage = ({navigation}) => {
  const[key,setkey]= useState("");
  const[cipherkey,setcipherkey]= useState("");
  const[msg,setmsg]=useState("");
  const[enctext,setenctext]=useState("");
  const[ciphertext,setciphtext]=useState("");
  const[plaintext,setplaintext]=useState("");
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])
 function OnPressHanlder()
 {
  ciphermsg=encryption(key,enctext);
  setmsg(ciphermsg)
 }
 function OnPressHanldercipher()
 {
  plaintextrec=decryption(cipherkey,ciphertext.toUpperCase());
  setplaintext(plaintextrec)
 }
    return(
  <SafeAreaView style={styles.container}>
     <TextInput
    placeholder='Enter PlainText'
    onFocus={this.handleFocus}
    onBlur={this.handleBlur}
    style={styles.TextInput}
    onChangeText={(val)=>setenctext(val)}
    placeholderTextColor="#444547"
    />
    <TextInput
    placeholder='Enter Key'
    onFocus={this.handleFocus}
    onBlur={this.handleBlur}
    style={styles.TextInput}
    onChangeText={(val)=>setkey(val)}
    placeholderTextColor="#444547"
    />
    <TouchableOpacity
    style={styles.button}
    onPress={OnPressHanlder}
    >
      <Text style={styles.input}>Encrypt</Text>
    </TouchableOpacity>
    <Text style={styles.value}>{msg}</Text>
    <TextInput
    placeholder='Enter CipherText'
    style={styles.TextInput}
    onChangeText={(val)=>setciphtext(val)}
    placeholderTextColor="#444547"
    />
    <TextInput
    placeholder='Enter Key'
    style={styles.TextInput}
    onChangeText={(val)=>setcipherkey(val)}
    placeholderTextColor="#444547"
    />
     <TouchableOpacity
    style={styles.button}
    onPress={OnPressHanldercipher}
    >
      <Text style={styles.input}>Decrypt</Text>
    </TouchableOpacity>
    <Text style={styles.value}>{plaintext}</Text>
  </SafeAreaView>

  
  );
  
};
const styles = StyleSheet.create({
  value:{
    color:'white'
  },
  input:{
    color:'white'
  },
  container:{
    flex:1,
    backgroundColor:'#23262F',
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:'18%'
  },
  TextInput:{
    borderBottomWidth:1,
    padding:10,
    paddingBottom:5,
    width :250,
    margin:10,
    color:'white',
   borderBottomColor:'grey'
   },
 button:{
  borderRadius:5,
  alignItems: 'center',
  width:150,
  padding:9,
  backgroundColor: '#F89300',
  margin:8
 },

}) 
 
export default MainPage;
