import { View, Text } from 'react-native'
import React from 'react'
const msgeprepare = (info) => {
 let msg=info.toUpperCase();
let msgarray=Array.from(msg.toUpperCase());
for(i=0;i<msg.length;i+=2)
{
    if(msgarray[i]==msgarray[i+1])
    {
        msgarray.splice(i+1,0,"X");
    }
    
}
for(i=0;i<msg.length;i++)
{
    if(msgarray[i]=='J')
    {
      msgarray[i]='I';
    }
    
}
if(msgarray.length % 2!=0)
{
  msgarray.splice(msgarray.length + 1,0,"X");
}
  
  return msgarray;
}

export default msgeprepare