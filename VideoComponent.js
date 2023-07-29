
import Video from 'react-native-video'
import { View,BackHandler,Text} from 'react-native'
import React,{useEffect} from 'react'
import lightvideo from './components/splashscreen.mp4'
const VideoComponent=({navigation})=> {
                setTimeout(() => {
                        navigation.navigate('Navigate');
                }, 3000);
                
        
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',width:null,height:null}}>
               <Video source={lightvideo}
                     style={{position: 'absolute',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             backgroundColor:'black'
                            }}
                             muted={true}
                             repeat={false}
                             resizeMode="cover"     />
                             
               {/*<Image style={{ width: windowSize.width, height: windowSize.height}} source={require('./images/splash.png')}></Image>*/} 
            </View>
        );
    
};
export default VideoComponent;