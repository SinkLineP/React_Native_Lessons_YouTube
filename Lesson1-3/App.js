import {StyleSheet, Text, SafeAreaView, StatusBar, Button, Alert, Image, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  const handleTextPress = () => console.log("Test click text");
  const handleButtonPress = () => Alert.alert("Опрос", "Ты Хорош?", [
    {text: "Да", onPress: () => console.log("Yes Button")},
    {text: "Нет", onPress: () => console.log("No Button")},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Hello Artem, {'\n'}Hello Misha</Text>
      <Button title={'Info'} color="blue" onPress={handleButtonPress}/>
      {/*<Image source={require("./Images/anime01.jpg")}/>*/}
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image blurRadius={4} source={{
          width: 100,
          height: 100,
          uri: "https://i.pinimg.com/originals/af/1c/30/af1c30d6d881d9447dec06149f61d2f9.png"
        }}/>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'gray',
  }
});
