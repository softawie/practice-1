import React from 'react';
import { View, Text, Image, ScrollView, TextInput , Button} from 'react-native';



 function _0() {
  return (
    <View style={{justifyContent:'center' , alignItems:'center',flex:1}}>
      <Text> !!مرحبابكم</Text>
      <Text>جعية البر  ترحب بكم</Text>

      <View>
        <Image source={require('../images/alber.jpeg')} 
               style={{ width: 200 , height: 200}} />
      </View>

      <TextInput
        style={{
          height: 40,
          width:180,
          borderColor: 'gray',
          borderWidth: 1,
          margin:10 ,
          textAlign:'right'
        }}

        placeholder="الايميل"
        keyboardType='email-address'
        autoCapitalize='none'

      />

     <TextInput
        style={{
          height: 40,
          width:180,
          borderColor: 'gray',
          borderWidth: 1,
          margin:10 ,
          textAlign:'right'
        }}
        placeholder="الاسم"
        autoCapitalize='none'
        visible-password='no'

      />
    
    <View  style={{marginTop:20}}>

    <Button
          title="التسجيل"
          onPress = { ()=>{ alert('من فضلك قم بتعبئة الايميل والرمز السري')  }  } 
          color="red"
          />
    </View>

    </View>

 
  );
}


export default _0 