
import Keymatrix from './Keymatrix';
import msgeprepare from './msgeprepare';


const encryption = (key,enctext) => {
   var b=Keymatrix(key.toUpperCase().split(" ").join(""));
   var i,j;
  
    var m,n;
    var x;
    var prime_key=[];
    prime_key=msgeprepare(enctext.split(" ").join(""));
    var key1,key2;
    var encrypttext=[];
    var found=0;
    var stopall=0;
    var trackcol,trackrow;
    var rval1,rval2,roval1,roval2;
    var cval1,cval2,coval1,coval2;
    var crvalue_i,crvalue_j;
    var i_value;
    for(x=0;x<prime_key.length;x+=1)
    {
    found=0;
     key1=prime_key[x];
    
     key2=prime_key[x+=1];
  
     for(i=0;i<5;i++)
     {
         for(j=0;j<5;j++)
         {
            if(b[i][j]==key1)
            {
               trackcol=j;
               trackrow=i;
               rval1=j;
               roval1=++rval1;
               cval1=i;
               coval1=++cval1;
               
               if(roval1>4)
               {
                   roval1=0;
               }
               if(coval1>4)
               {
                   coval1=0;
               }
               
               for(j=0;j<5;j++)
               {
                   if(b[i][j]==key2)
                   {
                       found=1;//found in row
                       rval2=j;
                       roval2=++rval2;
                       i_value=i;
                       if(roval2>4)
                       {
                           roval2=0;
                       }
                       break;
                   }
               }
             break;
              
            }
            
         }
         
     }
    if(found==0)
       {
           j=trackcol;
           for(i=0;i<5;i++)
           {
               if(b[i][j]==key2)
               {
                   found=2;
                   cval2=i;
                   coval2=++cval2;
                   if(coval2>4)
                   {
                       coval2=0;
                   }
                   break;
               }
           }
           
       }
      var ekey1,ekey2;
      if(found==1)
      {
          ekey1=b[i_value][roval1];
          ekey2=b[i_value][roval2];
          
      }
      else if(found==2)
      {
       
          ekey1=b[coval1][trackcol];
          ekey2=b[coval2][trackcol];
          
      }
      else
      {
        
        for(m=0;m<5;m++)
          {
            stopall=0;
              for(n=0;n<5;n++)
              {
                
                  if(b[m][n]==key2)
                  {
                    
                      crvalue_i=m;
                      crvalue_j=n;
                      stopall=1;
                      break;
                  }
              }
              if(stopall==1)
                  break;
           }
          ekey1=b[trackrow][crvalue_j];
          ekey2=b[crvalue_i][trackcol];
         
     }

        encrypttext.push(ekey1,ekey2);
        
    }
    return encrypttext;
}

export default encryption