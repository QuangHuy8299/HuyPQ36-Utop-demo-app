import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FilterButtonSection({
  children,
  chosed,
  handlePressed,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, chosed && styles.pressed]}
      onPress={() => handlePressed(children)}
    >
      <Text style={chosed ? styles.textPressed : styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    minWidth: 105,
    borderColor: "#ccc",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#FFECCA",
    borderColor: "#fecf33",
  },
  text: { color: "black" },
  textPressed: {
    color: "#fecf33",
  },
});
