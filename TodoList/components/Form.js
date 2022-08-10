import React, {useState} from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу..."/>
      <Button color="green" title="Добавить задачу" onPress={() => addHandler(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  }
});