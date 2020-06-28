
import React , {Component}from 'react';
import { View, Text, Image, ScrollView, TextInput , Button,TouchableOpacity} from 'react-native';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
};
state = {
      flagImage:true
    };

    
    changeImage =() =>{

      this.setState({
         flagImage:!this.state.flagImage
       });
   
   }


render(){

    return (
      <View style={{justifyContent:'center',alignItems:'center' ,backgroundColor:'black',flex:1} }>
        <View style={ {} }>
          <TouchableOpacity
            style={ {} }
            onPress={ this.changeImage }>

          <Image source={ this.state.flagImage === true ?                  
                          require('../images/1dark.png') : 
                          require('../images/1light.png')}
           />

          </TouchableOpacity>
        </View>
      </View>
    );
  }




}

export default HomeScreen