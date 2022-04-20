import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Title from "./Title";

export default function Input({ label, value, style }) {
  return (
    <View style={style}>
      <Title>{label}</Title>
      <TextInput value={value} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    opacity: 0.7,
    paddingTop: 16,
    paddingBottom: 4,
  },
});
