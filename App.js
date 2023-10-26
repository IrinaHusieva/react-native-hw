import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import LoginScreen from './src/Screens/AuthPages/LoginScreen';
import RegistrationScreen from './src/Screens/AuthPages/RegistrationScreen';
import Home from './src/Screens/MainPages/Home';
import CreatePostsScreen from './src/Screens/MainPages/CreatePostsScreen';
import ProfileScreen from './src/Screens/MainPages/ProfileScreen';
import PostsScreen from './src/Screens/MainPages/PostsScreen';
import MapScreen from './src/Screens/MainPages/MapScreen';
import CommentsScreen from './src/Screens/MainPages/CommentsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="CreatePostsScreen"
          options={{ headerShown: true }}
          component={CreatePostsScreen}
        />
        <Stack.Screen name="PostsScreen" component={PostsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}