import {StyleSheet, Text, SafeAreaView, StatusBar, View, Platform} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.box}>
        <Text>Hello</Text>
      </View>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const simpleStyle = {backgroundColor: "green", color: "yellow"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    backgroundColor: '#efc51e',
    width: '50%',
    height: 150,
    opacity: 0.9,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "dotted",
    position: "absolute",
    top: Platform.OS === "ios" ? 150 : 30,
    left: 150
  }
});
