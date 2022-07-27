import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import BaseButton from "../components/BaseButton";
import Colors from "../styles/colors";
import Fonts from "../styles/fonts";

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit() {
    navigation.navigate("Confirmation");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
              <Text style={styles.emoji}>😊️</Text>
            </View>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: Colors.green },
              ]}
              placeholder="Digite o seu nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <View style={styles.footer}>
              <BaseButton title="Confirmar" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: Colors.heading,
    fontFamily: Fonts.heading,
    marginTop: 20,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    color: Colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});
