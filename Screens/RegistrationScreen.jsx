// import React, { useState,  useEffect } from "react";
// import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
// import Svg, { Rect, Circle, Path } from 'react-native-svg';

// export const RegistrationScreen = () => {
//   const styles = StyleSheet.create({
//     input: {
//       height: 50,
//       width: 343,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       borderColor: '#F6F6F6',
//       borderWidth: 1,
//     //   marginBottom: 10,
//           paddingHorizontal: 10,
//           fontSize: 16,
//       borderRadius: 10,
//       backgroundColor: '#F6F6F6',
//     },
//     showButtonText: {
//       color: '#1B4371',
//       fontSize: 16,
//     },
//     containerRegister: {
//       backgroundColor: '#ffffff',
//       height: 549,
//       width: '100%',
//       position: 'absolute',
//       bottom: 0,
//       borderTopLeftRadius: 25,
//       borderTopRightRadius: 25
//     },
//     h: {
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       color: '#212121',
//       textAlign: 'center',
//       fontSize: 30,
//       fontStyle: 'normal',
//       fontWeight: '500',
//       lineHeight: 36,
//       letterSpacing: 0.3,
//     },
//     btn: {
//       marginTop: 27,
//       backgroundColor: '#FF6C00',
//       width: 343,
//       paddingTop: 16,
//       paddingLeft: 32,
//       paddingBottom: 16,
//       paddingRight: 32,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       borderRadius: 100
//     },
//     txtBtn: {
//       textAlign: "center",
//       color: '#FFF',
//       fontSize: 16,
//     },
//     haveAcc: {
//       textAlign: 'center',
//     //   marginTop: 16,
//       color: '#1B4371',
//       fontSize: 16
//       },
//       passwordInputContainer: {
//       position: 'relative', 
//     },
    
//     showButton: {
//       position: 'absolute',
//       top: '25%', 
//       right: 35, 
//     },
//      wrapper: {
//     position: "relative",
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//        paddingBottom: 45,
    
//   },
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState('');
//   const [isKeyboardShowing, setIsKeyboardShowing] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   }
 

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => {
//         setIsKeyboardShowing(true);
//       }
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => {
//         setIsKeyboardShowing(false);
//       }
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   return (
//     <KeyboardAvoidingView
//             behavior={Platform.OS == "ios" ? "padding" : ""}
//           >
//             <View
//               style={
//                 isKeyboardShowing
//                   ? { ...styles.wrapper, paddingBottom: 0 }
//                   : styles.wrapper
//               }
//             >
  
//       <ImageBackground
//         source={require('../images/backgroundIMG.jpg')}
//         style={{ width: '100%', height: '100%' }}
//       >
//         <View style={styles.containerRegister}>
//           <View style={{ alignItems: 'center', marginTop: -60 }}>
//             <Svg width="132" height="120" viewBox="0 0 132 120" fill="none">
//               <Rect width="120" height="120" rx="16" fill="#F6F6F6" />
//               <Circle cx="119.5" cy="93.5" r="12" fill="white" stroke="#FF6C00" />
//               <Path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M120 87H119V93H113V94H119V100H120V94H126V93H120V87Z"
//                 fill="#FF6C00"
//               />
//             </Svg>
//           </View>
//           <View style={{ marginTop: 32 }}>
//             <Text style={styles.h}>Реєстрація</Text>
//             <View style={{ marginTop: 33, display: 'flex', gap: 16 }}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Логін"
//                 placeholderTextColor='#BDBDBD'
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Адреса електронної пошти"
//                 placeholderTextColor='#BDBDBD'
//               />
//               <View style={styles.passwordInputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   secureTextEntry={!showPassword}
//                   value={password}
//                   onChangeText={(text) => setPassword(text)}
//                   placeholder="Пароль"
//                   placeholderTextColor="#BDBDBD"
//                 />
//                 <TouchableOpacity onPress={toggleShowPassword} style={styles.showButton}>
//                   <Text style={styles.showButtonText}>{showPassword ? 'Приховати' : 'Показати'}</Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity style={styles.btn} >
//                 <Text style={styles.txtBtn}>Зареєструватися</Text>
//               </TouchableOpacity>
//               <Text style={styles.haveAcc}>Вже є акаунт? Увійти</Text>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//       </View>
//       </KeyboardAvoidingView>
//   );
// }
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../Components/input";
import CustomButton from "../Components/CustomButton";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardShowing, setIsKeyboardShowing] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const onRegistration = () => {
    setLogin("");
    setEmail("");
    setPassword("");
    console.log(`Login: ${login}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/backgroundIMG.jpg")}
          style={styles.bgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View
              style={
                isKeyboardShowing
                  ? { ...styles.wrapper, paddingBottom: 0 }
                  : styles.wrapper
              }
            >
              <View style={styles.userAvatar}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ position: "absolute", top: 81, left: 107 }}
                >
                  <Image source={require("../images/add.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.formWrapper}>
                <Input
                  placeholder="Логін"
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => {
                    setIsKeyboardShowing(true);
                    setIsLoginFocused(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShowing(false);
                    setIsLoginFocused(false);
                  }}
                  styleProps={
                    isLoginFocused && {
                      borderColor: "#FF6C00",
                      backgroundColor: "#fff",
                    }
                  }
                />
                <Input
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => {
                    setIsKeyboardShowing(true);
                    setIsEmailFocused(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShowing(false);
                    setIsEmailFocused(false);
                  }}
                  styleProps={
                    isEmailFocused && {
                      borderColor: "#FF6C00",
                      backgroundColor: "#fff",
                    }
                  }
                />
                <View style={{ position: "relative" }}>
                  <Input
                    placeholder="Пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={showPassword && true}
                    onFocus={() => {
                      setIsKeyboardShowing(true);
                      setIsPasswordFocused(true);
                    }}
                    onBlur={() => {
                      setIsKeyboardShowing(false);
                      setIsPasswordFocused(false);
                    }}
                    styleProps={{
                      ...(isPasswordFocused && {
                        borderColor: "#FF6C00",
                        backgroundColor: "#fff",
                      }),
                      ...(showPassword
                        ? { paddingRight: 100 }
                        : { paddingRight: 90 }),
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      position: "absolute",
                      right: 16,
                      top: 17,
                    }}
                    onPress={toggleShowPassword}
                  >
                    <Text
                      style={{
                        color: "#1B4371",
                        fontSize: 16,
                      }}
                    >
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                {!isKeyboardShowing && (
                  <CustomButton
                    text={"Зареєстуватися"}
                    styleProps={{ marginTop: 27 }}
                    onPress={onRegistration}
                  />
                )}
              </View>
              {!isKeyboardShowing && (
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.noAccountMessage}>
                    Вже є акаунт?&nbsp;
                    <Text>Увійти</Text>
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userAvatar: {
    position: "absolute",
    top: -60,
    left: 128,
    zIndex: 100,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrapper: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 45,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto-medium",
  },
  formWrapper: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  noAccountMessage: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    marginRight: 3,
  },
});

export default RegistrationScreen;