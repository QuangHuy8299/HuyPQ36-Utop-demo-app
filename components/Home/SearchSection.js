import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/EvilIcons";

export default function SearchSection({ handleShowModal }) {
  return (
    <View style={styles.headerAbove}>
      <Pressable onPress={handleShowModal} style={styles.dropDown}>
        <View style={styles.innerHeader}>
          <Icon2 name="location" size={20} />
          <Text style={styles.dropDownText}>Hanoi</Text>
        </View>
      </Pressable>
      <View style={styles.searchSection}>
        <Icon
          name="ios-search"
          style={styles.iconSearch}
          size={20}
          color="#000"
        />
        <TextInput style={styles.input} placeholder="Nhập để tìm kiếm..." />
      </View>
      <View style={styles.notification}>
        <Icon name="notifications-outline" size={20} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerAbove: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchSection: {
    flex: 4,
    alignItems: "center",
    padding: 2,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  dropDown: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
  iconSearch: {
    marginLeft: 4,
  },
  notification: {
    flex: 1,
    alignItems: "center",
  },
});
