import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UtopPoint = () => {
  return (
    <View style={styles.container}>
      <Text>Điểm Utop của bạn</Text>
      <Text style={styles.utopText}>999</Text>
    </View>
  );
};

export default UtopPoint;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 16,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  utopText: {
    color: "red",
    fontWeight: "700",
  },
});
