import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import React from 'react'
import { Colors } from './Colors';

export default function Button({
    title,
    type,
    onPress
}) {
  return (
    <TouchableOpacity style={[styles.button, {
        backgroundColor: 
            type == "top" 
            ? Colors.btnDarK 
            : type == "right" 
            ? Colors.btnRight
            : Colors.btnLight,
            onPress: Function
    },
]} 
    onPress={onPress}>
      <Text style={[styles.numberButton, { color: type === 'number' ? Colors.black : Colors.white }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        height: 70,
        width: 70,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.btnDarK
    },
    numberButton : {
     fontSize: 34
    }
})