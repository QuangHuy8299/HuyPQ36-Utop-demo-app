import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ItemHistory({ item }) {
  return (
    <Pressable style={styles.itemHistory}>
      <View style={styles.iconStart}>
        <FontAwesome5 name="file-invoice-dollar" size={38} color="#fecf33" />
      </View>
      <View style={styles.contentItem}>
        <Text>{item.title}</Text>
        <Text style={styles.dateTime}>
          {item.date} - {item.time}
        </Text>
        <View style={styles.footerItemHistory}>
          {item.status ? (
            <Text style={styles.textSuccess}>Hoàn thành</Text>
          ) : (
            <Text style={styles.textFail}>Đã hủy</Text>
          )}
          <View>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconEnd}>
        <Text style={styles.payment}>{`> `}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemHistory: {
    paddingVertical: 16,
    paddingLeft: 16,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  iconStart: {
    flex: 1,
    marginRight: 10,
  },
  dateTime: {
    opacity: 0.3,
    marginVertical: 2,
  },
  textSuccess: {
    color: "#7fff7f",
  },
  textFail: {
    opacity: 0.5,
  },
  iconEnd: {
    flex: 1,
    alignItems: "center",
  },
  payment: {
    fontSize: 15,
    color: "#000"
  },
  contentItem: {
    flex: 6,
  },
  footerItemHistory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
