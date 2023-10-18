
import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Navigation from "./src/navigation/navigation";

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
      <Navigation />
      <StatusBar style="auto" />
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
