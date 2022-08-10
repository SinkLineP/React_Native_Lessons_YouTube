import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.box} onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: '#83c458',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%',
  },
  text: {
    textAlign: "center",
  },
  time: {
    textAlign: "right",
    color: "gray",
    top: 15,
    left: 10
  }
});