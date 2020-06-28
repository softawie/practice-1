import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

 function _3() {

  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count !== 0 ? count : null}</Text>
      </View>

      <TouchableHighlight style={styles.button} onPress={increaseCounter}>
        <Text style={{fontSize:20}}> +  </Text>
      </TouchableHighlight>


    </View>
  );
}

export default _3

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10 ,
      marginBottom:50
    },
    countText: {
      color: "#FF00FF" ,
      fontSize:20
    }
  });
  