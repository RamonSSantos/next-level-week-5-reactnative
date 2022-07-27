import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

import Colors from "../styles/colors";
import Fonts from "../styles/fonts";
import wateringImage from "../assets/watering.png";

export default function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil {"\n"}
        </Text>
        <Image
          source={wateringImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Não esqueça mais de regas suas plantas. Nós cuidamos de lembrar sempre
          que precisar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.heading,
    marginTop: 30,
    fontFamily: Fonts.heading,
    lineHeight: 34,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
    color: Colors.heading,
    fontFamily: Fonts.text,
  },
  button: {
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 20,
    height: 40,
    width: 46,
  },
  buttonIcon: {
    fontSize: 28,
    color: Colors.white,
  },
});
