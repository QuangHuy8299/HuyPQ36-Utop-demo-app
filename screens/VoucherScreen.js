import React from "react";
import { Text, View, StyleSheet } from "react-native";

const VoucherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>VoucherScreen</Text>
    </View>
  );
};

export default VoucherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
