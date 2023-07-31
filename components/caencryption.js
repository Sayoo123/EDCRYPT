import { View, Text } from 'react-native'
import React from 'react'

const caencryption = (text,s) => {
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i].toUpperCase();
        let ch =  String.fromCharCode((char.charCodeAt(0) + (s-65)) % 26 + 65);
            result += ch;
    
        
       
    }
    return result;
}

export default caencryption