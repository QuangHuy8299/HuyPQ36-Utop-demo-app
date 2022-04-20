import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "./Title";

export default function LoginMetod() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && (
        <View style={[styles.switchSection, styles.platformIos]}>
          <Title>Kết nối Apple ID</Title>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      )}
      <View style={styles.switchSection}>
        <Title>Kết nối Facebook</Title>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 6,
  },
  switchSection: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
  },
  platformIos: {
    borderBottomWidth: 1,
    borderColor: "#e5e3e3",
  },
});
