import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from "./src/navigation/NavigationStack";
import {data} from "./src/data/data";
import ArticleScreen from "./src/screen/ArticleScreen";
import HomeScreen from "./src/screen/HomeScreen";


export default function App() {
    // console.log(data)
  return (
      <NavigationContainer>
          <NavigationStack/>
          <StatusBar style="auto" />
      </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
