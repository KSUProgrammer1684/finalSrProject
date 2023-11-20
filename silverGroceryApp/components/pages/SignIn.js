//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image, KeyboardAvoidingView, Platform } from "react-native";
//Import Use Naviagation Hook
import { useNavigation } from '@react-navigation/native';

//CREATE SignIn function
function SignIn() {
  //CREATE the user state for the group name input
  const [groupNameText, onChangeGroupText] = React.useState("");
  //CREATE the state for the user name input
  const [userNameText, onChangeUserText] = React.useState("");
  //CREATE the state for the password input
  const [passwordText, onChangePasswordText] = React.useState("");

  //CREATE the page navigation hook to track navigation state
  const pageNavigation = useNavigation();

  //RETURN the content
  return (
    //WHEN Keybaord is open - IF the platform is ios add padding behavior, if not add height behavior
    <KeyboardAvoidingView keyboardVerticalOffset={250} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* Image Logo for page */}
      <Image style={styles.logoStyle} source={{ uri: "https://cdn.pixabay.com/photo/2013/07/13/13/40/penguin-161356_1280.png" }} />
      {/* Container for form */}
      <View style={styles.formStyles}>
        {/* TEXT for the Group Name */}
        <Text style={styles.formTextStyles}>Group Name *</Text>
        {/* INPUT for the Group Name */}
        <TextInput style={styles.input} onChangeText={onChangeGroupText} value={groupNameText} />
        {/* TEXT for the User Name */}
        <Text style={styles.formTextStyles}>User Name *</Text>
        {/* INPUT for the User Name */}
        <TextInput style={styles.input} onChangeText={onChangeUserText} value={userNameText} />
        {/* TEXT for the Password */}
        <Text style={styles.formTextStyles}>Password *</Text>
        {/* INPUT for the Password */}
        <TextInput style={styles.input} onChangeText={onChangePasswordText} value={passwordText} secureTextEntry />
        {/* END form container */}
      </View>
      {/* BUTTONS container*/}
      <View style={styles.passLogButtons}>
        {/* BUTTON to go to the forgot password page */}
        <Button title="FORGOT PASSWORD" color='#0f3d3d' onPress={() => pageNavigation.navigate("ForgotPage")} />
        {/* VIEW element to add space between buttons */}
        <View style={styles.spaceStyle}></View>
        {/* BUTTON to sign in and go to the list page */}
        <Button title="SIGN IN" color='#0f3d3d' onPress={() => pageNavigation.navigate("ListPage")} />
        {/* END button container */}
      </View>
      {/* END the content container */}
    </KeyboardAvoidingView>
    //END return
  );
  //END SignIn Function
}

//CREATE styles
const styles = StyleSheet.create({
    //Start Container Styles
    container: {
        //Flex to Screen
        flex: 1,
        //Background color
        backgroundColor: '#d6f5f5',
        //Centers whole ele
        alignItems: 'center',
        //Centers children
        justifyContent: 'center',
        //END Container Style
    },
    headingStyle: {
       flexDirection: "row",
       bottom: 40,
    },
    headingTextStyles: {
      //Color for the text
        color: '#0f3d3d',
        //Text size
        fontSize: 40,
        //Font family stye
        
    },
    formTextStyles: {
        //Color for the text
        color: '#0f3d3d',
        //Text size
        fontSize: 18,
        //Font family stye
        fontFamily: 'arial',
    },
    input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    passLogButtons: {
      flexDirection: "row",
      top: 40,
    },
    spaceStyle: {
        //Width of space
        width: 20,
        //Height of space
        height: 20,
    },
    //END Styles
});

//EXPORT Landing
export default SignIn;