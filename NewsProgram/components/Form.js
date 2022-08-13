import React from "react";
import {StyleSheet, View, TextInput, Button } from 'react-native';
import { gStyle } from "../styles/style";
import { Formik } from "formik";
import ButtonTemplate from "./ButtonTemplate";

export default function Form({ addArticle }) {
  const defaultImage = "https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg";
  return (
    <View>
      <Formik initialValues={
        {
          name: "",
          anons: "",
          full: "",
          img: ""
        }
      } onSubmit={(values, action) => {
        addArticle(values);
        action.resetForm();
      }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Введите название"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Введите анонс"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Введите статью"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Укажите адрес фото"
              onChangeText={props.handleChange("img")}
            />
            <ButtonTemplate onPress={props.handleChange} title="Добавить" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    width: "80%",
    marginLeft: "10%",
    marginBottom: 5,
    paddingLeft: 10,
    height: 40
  },
  submit: {
    marginTop: 20,
  }
});
