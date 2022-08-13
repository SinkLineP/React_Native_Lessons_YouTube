import React from "react";
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Image style={gStyle.articlePreview} blurRadius={1} source={{uri: route.params.img}}/>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontWeight: "normal",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#a60a0a"
  },
  header: {
    marginBottom: 25,
    fontSize: 25
  },
});
