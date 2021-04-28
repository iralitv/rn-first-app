import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";

import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback activeOpacity={0.7} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
      borderRadius: 25,
      overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
