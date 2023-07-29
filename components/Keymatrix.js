import { View, Text } from 'react-native'
import React from 'react'
import Duplidel from './Duplidel';


const Keymatrix = (string) => {
    let arr=[];
    var key =  Duplidel(string.split(""),string.length);
    let keyarr=Array.from(key);
    let iterke=key.length;
    let iter=0;
    var i,j;
    let stop=false;
    var keyel=false;
    for(i=0;i<5;i++)
    {
        arr[i]=[];
        for(j=0;j<5;j++)
        {
            arr[i][j]=[];
        }
    }
    for(i=0;i<5;i++)
   {
    arr[i]=[ ];
    for(j=0;j<5;j++)
    {
        if(iterke>iter){
       arr[i][j]=keyarr[iter++];
        }
        else{
            stop=true;
            break;
        }
    }
   if(stop==true)
    break;
   }
   
   for(var m=0;m<26;m++)
   {
      keyel=false;
   for(var n=0;n<=iterke;n++)
   {
      if(String.fromCharCode(m+65)==keyarr[n])
      {
          keyel=true;
      }
   }
   if(keyel==false)
   {
       if(j<5&&i<5)
       {
           if(String.fromCharCode(m+65)!='J')
         {
             arr[i][j]=String.fromCharCode(m+65);
          ++j;
         }
          if(j===5)
          {
              i+=1;
              j=0;
          }
          
       }
       
   }
  }
   return arr;
  
}

export default Keymatrix;