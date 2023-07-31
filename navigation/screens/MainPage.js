import React, { useState,useEffect } from 'react';
import {View,StyleSheet,Text, TextInput, Button, SafeAreaView, Touchable, TouchableOpacity,BackHandler} from 'react-native';
import { Madoka } from 'react-native-textinput-effects';
import encryption from '../../components/encryption';
import decryption from '../../components/decryption';
const MainPage = ({navigation}) => {
  const[key,setkey]= useState("");
  const[cipherkey,setcipherkey]= useState("");
  const[msg,setmsg]=useState("");
  const[enctext,setenctext]=useState("");
  const[ciphertext,setciphtext]=useState("");
  const[plaintext,setplaintext]=useState("");
  const[focus,isFocused]=useState(false);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

    function focushandler(i){
      isFocused(i);}
    
    function blurhandler(){
      isFocused(0);}

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
    onFocus={()=>focushandler(1)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==1?'#F89300':'grey'}]}
    onChangeText={(val)=>setenctext(val)}
    placeholderTextColor="#444547"
    />
    <TextInput
    placeholder='Enter Key'
    onFocus={()=>focushandler(2)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==2?'#F89300':'grey'}]}
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
    onFocus={()=>focushandler(3)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==3?'#F89300':'grey'}]}
    onChangeText={(val)=>setciphtext(val)}
    placeholderTextColor="#444547"
    />
    <TextInput
    placeholder='Enter Key'
    onFocus={()=>focushandler(4)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==4?'#F89300':'grey'}]}
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
    width :250,
    margin:10,
    borderBottomWidth:1,
    color:'white'
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
