import React from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={
        {
          title: "Главная",
          headerStyle: {
            backgroundColor: "#ef4f4f",
            height: 80,
          },
          headerTitleStyle: {
            paddingLeft: "39%",
            color: "white"
          }
        }
      } />
      <Stack.Screen name="FullInfo" component={FullInfo} options={
        {
          title: "Статья",
          headerStyle: {
            backgroundColor: "#65b065",
            height: 80,
          },
          headerTitleStyle: {
            paddingLeft: "29%",
            color: "white"
          }
        }
      } />
    </Stack.Navigator>
  </NavigationContainer>
}
