import { View, Text,SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import caencryption from '../../components/caencryption';
import cadecryption from '../../components/cadecryption';

const SecondaryPage = ({navigation}) => {
  const[msg,setmsg]=useState("");
  const[numforen,setnumforen]=useState("");
  const[resultforen,setresultforen]=useState("");
  const[resultforde,setresultforde]=useState("");
  const[focus,isFocused]=useState(false);
  function onPress1(){
    res=cadecryption(msg,numforen);
    setresultforde(res);
  }
  function onPress(){
    res=caencryption(msg,numforen);
    setresultforen(res)
  }
  function focushandler(i){
    isFocused(i);}
  
  function blurhandler(){
    isFocused(0);}
  return (
    <SafeAreaView style={styles.container}>
     <TextInput
    placeholder='Enter PlainText'
    onFocus={()=>focushandler(1)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==1?'#F89300':'grey'}]}
    onChangeText={(val)=>setmsg(val)}
    placeholderTextColor="#444547"
    />
    <TextInput
    placeholder='Enter Key'
    keyboardType = 'numeric'
    onChangeText={(val)=>setnumforen(val)}
    onFocus={()=>focushandler(2)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==2?'#F89300':'grey'}]}
    placeholderTextColor="#444547"
    
    />
    <TouchableOpacity
    onPress={onPress}
    style={styles.button}
    >
    <Text style={styles.input}>Encrypt</Text>
    </TouchableOpacity>
    <Text style={styles.value}>{resultforen}</Text>
    <TextInput
    placeholder='Enter CipherText'
    onFocus={()=>focushandler(3)}
    onBlur={()=>blurhandler()}
    style={[styles.TextInput,{borderBottomColor:focus==3?'#F89300':'grey'}]}
    onChangeText={(val)=>setmsg(val)}
    placeholderTextColor="#444547"
    />
    <TextInput
    placeholder='Enter Key'
    onFocus={()=>focushandler(4)}
    onBlur={()=>blurhandler()}
    keyboardType = 'numeric'
    style={[styles.TextInput,{borderBottomColor:focus==4?'#F89300':'grey'}]}
    onChangeText={(val)=>setnumforen(val)}
    placeholderTextColor="#444547"
    />
     <TouchableOpacity
    style={styles.button}
    onPress={onPress1}
    >
      <Text style={styles.input}>Decrypt</Text>
    </TouchableOpacity>
    <Text style={styles.value}>{resultforde}</Text>
  </SafeAreaView>
  )
}
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

export default SecondaryPage