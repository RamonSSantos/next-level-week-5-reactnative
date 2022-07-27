import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import BaseButton from "../components/BaseButton";
import Colors from "../styles/colors";
import Fonts from "../styles/fonts";

export default function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄️</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <BaseButton title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 38,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.heading,
    textAlign: "center",
    color: Colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: Fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingHorizontal: 30,
    color: Colors.heading,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
