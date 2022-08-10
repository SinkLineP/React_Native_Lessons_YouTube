import React, {useState} from "react";
import {StyleSheet, View, StatusBar, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([]);

  const addHandler = (text) => {
    if (text !== "") {
      setListOfItems((list) => {
        return [
          {text: text, key: Math.random().toString(36).substring(7)},
          ...list
        ]
      })
    }
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key !== key)
    })
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        {listOfItems.length === 0 ?
          <Text style={styles.info}>Создайте первую задачу, чтобы начать ваш продуктивный день...</Text>
        :
          <TouchableWithoutFeedback>
            <FlatList data={listOfItems} renderItem={({ item }) => (
              <ListItem el={item} deleteHandler={deleteHandler} />
            )}/>
          </TouchableWithoutFeedback>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    color: "gray",
    textAlign: "center",
    marginTop: "10%"
  }
});
