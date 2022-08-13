import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from "../styles/style";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Form from "./Form";

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate("FullInfo");
  }

  const [news, setNews] = useState([
    {name: "Sword Art Online", anons: "Kirito", full: "Kirito kill Administrator!", key: "1", img: 'https://images.alphacoders.com/656/thumb-1920-656740.jpg'},
    {name: "Tokyo Ghoul", anons: "Kanaki Ken", full: "Kill BOSS!!!!", key: "2", img: 'https://images.hdqwalls.com/download/tokyo-ghoul-kaneki-ken-5k-hi-1920x1200.jpg'},
    {name: "Magic Fight", anons: "Itadori Izuku", full: "Sukuna in Itadori", key: "3", img: 'https://wallpaper.dog/large/20500627.png'},
  ])

  const [isModal, setIsModal] = useState(false);

  const addArticle = (article) => {
    article.key = Math.random().toString();
    setNews((list) => {
      return [
        article,
        ...list
      ]
    })
    setIsModal(false);
  }

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <Modal visible={isModal}>
        <View>
          <Ionicons name="close" size={34} color="red" style={styles.iconClose} onPress={() => setIsModal(false)}/>
          <View style={styles.formBox}>
            <Text style={[styles.title, styles.header]}>Форма добавления статей</Text>
            <Form addArticle={addArticle}/>
          </View>
        </View>
      </Modal>
      <Entypo name="circle-with-plus" size={34} color="green" style={styles.iconAdd} onPress={() => setIsModal(true)}/>
      <FlatList data={news} renderItem={({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("FullInfo", item)}>
          <Image style={gStyle.articlePreview} blurRadius={1} source={{uri: item.img}}/>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.anons}>{item.anons}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30
  },
  item: {
    width: "100%",
    marginBottom: 30
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747"
  },
  anons: {
    fontWeight: "normal",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747"
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "right",
    paddingRight: 10,
    paddingTop: 10,
  },
  formBox: {
    marginTop: "30%"
  }
});
