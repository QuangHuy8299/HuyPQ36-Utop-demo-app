import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TitleHistory({ title }) {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    marginTop: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});
