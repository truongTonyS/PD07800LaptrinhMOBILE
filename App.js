import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Lab1a2 from './src/lab1/lab1-2';
import Lab1a1 from './src/lab1/lab1-1';
import Lab1a3 from './src/lab1/lab1-3';
import Main from './src/Lab2/Main';
import Lab3a1 from './src/lab3/Ex1';






export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Main></Main>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
