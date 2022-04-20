import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function MenuItem({ item, navigation }) {
  return (
    <Pressable
      style={styles.containerMenuItem}
      onPress={() => navigation.navigate(item.name)}
    >
      <View style={styles.containerMenuItem_icon}>
        <Ionicons
          name={item.icon}
          color={item.color}
          size={20}
          style={{ marginRight: 5 }}
        />
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <View>
        <Text>{`>`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerMenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    paddingVertical: 16,
    marginVertical: 6,
    borderRadius: 8,
  },
  containerMenuItem_icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  text:{
    fontWeight: "600"
  }
});
