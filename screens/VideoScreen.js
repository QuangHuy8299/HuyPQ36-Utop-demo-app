import React from "react";
import { Text, View, StyleSheet } from "react-native";

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>VideoScreen</Text>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
