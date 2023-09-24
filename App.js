// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { RegistrationScreen } from './Screens/RegistrationScreen';

// export default function App() {
//   return (
//     <View >
//       <RegistrationScreen/>   
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
// });
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import PostsScreen from "./Screens/PostsScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      <RegistrationScreen/>
      {/* <PostsScreen/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;