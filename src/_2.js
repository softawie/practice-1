
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput , Button,TouchableOpacity} from 'react-native';

const lightImage =  require('../images/1light.png')

const darkImage =  require('../images/1dark.png')

function _2 () {

const [lightOn , setLightOn] = useState(false)
    

  const changeImage = ()=>{
        setLightOn(!lightOn)   
   }


    return (
      <View style={{justifyContent:'center',alignItems:'center' ,backgroundColor:'black',flex:1} }>
        <View style={ {} }>
          <TouchableOpacity
            style={ {} }
            onPress={changeImage}>
   
          <Image source={   
            lightOn === true  ?  lightImage : darkImage }
           style={{ width: 200 , height: 200}}
           />
  

          </TouchableOpacity>
        </View>
      </View>
    );
  }


export default _2
