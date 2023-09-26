
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import PostsScreen from "./src/screens/PostsScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
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