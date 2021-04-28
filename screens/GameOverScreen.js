import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  const [availableDeviceSize, setAvailableDeviceSize] = useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  });

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceSize({
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      });
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is over!</TitleText>
          <View
            style={{
              ...styles.imageContainer,
              ...{
                width: availableDeviceSize.height * 0.4,
                height: availableDeviceSize.height * 0.4,
                borderRadius: (availableDeviceSize.height * 0.4) / 2,
                marginVertical: availableDeviceSize.height / 40,
              },
            }}
          >
            <Image
              source={require("../assets/success.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              ...styles.resultContainer,
              ...{
                marginVertical: availableDeviceSize.height / 60,
              },
            }}
          >
            <BodyText
              style={{
                ...styles.resultText,
                ...{
                  fontSize: availableDeviceSize.height < 400 ? 16 : 20,
                },
              }}
            >
              Your phone needed{" "}
              <Text style={styles.hignlight}>{props.roundsNumber}</Text> rounds
              to guess the number{" "}
              <Text style={styles.hignlight}>{props.userNumber}</Text>.
            </BodyText>
          </View>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
  },
  hignlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
