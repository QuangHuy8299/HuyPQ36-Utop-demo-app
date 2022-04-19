import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FooterHistory() {
  return (
    <View style={styles.containerFooter}>
      <Text>Đã hết giao dịch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFooter: {
    padding: 50,
  },
});
