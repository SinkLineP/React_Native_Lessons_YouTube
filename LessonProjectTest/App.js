import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={[styles.box, {backgroundColor: "yellow"}]}/>
      <View style={[styles.box, {backgroundColor: "red", height: 200, alignSelf: "flex-start"}]}/>
      <View style={[styles.box, {backgroundColor: "green"}]}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  box : {
    width: 100,
    height: 100,
  }
});
