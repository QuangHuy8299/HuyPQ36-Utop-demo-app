import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Title from "../Menu/Title";

export default function VoucherItem({ item }) {
  return (
    <Pressable key={item.id} style={styles.container}>
      <View style={styles.iconSection}>
        <MaterialCommunityIcons
          name="cash-register"
          size={36}
          color="#2B8AFF"
        />
      </View>
      <View style={styles.contentSection}>
        <Title>{item.title}</Title>
        <Text
          style={
            new Date() >= item.expiry ? styles.textSuccess : styles.textError
          }
        >
          Hết hạn: {item.expiry}
        </Text>
        <Text style={styles.textOrange}>Xem</Text>
      </View>
      <View style={styles.buttonSection}></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  iconSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentSection: {
    flex: 8,
    marginLeft: 5,
  },
  buttonSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  textSuccess: {
    color: "green",
  },
  textError: {
    color: "red",
    marginVertical: 8,
  },
  textOrange: {
    color: "orange",
    marginBottom: 6,
  },
});
