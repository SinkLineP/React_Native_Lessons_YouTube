import {StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={simpleStyle}>Hello</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const simpleStyle = {backgroundColor: "green", color: "yellow"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
