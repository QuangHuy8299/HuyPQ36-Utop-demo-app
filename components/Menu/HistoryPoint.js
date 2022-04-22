import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Title from "./Title";

export default function HistoryPoint({ item }) {
  const displayIcon = item.point.includes("+");

  return (
    <Pressable key={item.id} style={styles.container}>
      <View style={styles.iconSection}>
        {displayIcon ? (
          <MaterialIcons name="payment" size={36} color="#FEEB75" />
        ) : (
          <MaterialCommunityIcons
            name="cash-register"
            size={36}
            color="#2B8AFF"
          />
        )}
      </View>
      <View style={styles.contentSection}>
        <Title>{item.title}</Title>
        <Text style={styles.price}>{item.point} Utop</Text>
        <View style={styles.contentSectionDateTime}>
          <Text style={[styles.date, styles.text]}>{item.date}</Text>
          <Text style={[styles.time, styles.text]}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Title>{">"}</Title>
      </View>
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
    padding: 10,
    flex: 1,
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
  contentSectionDateTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 12,
    marginVertical: 4,
  },
  text: {
    opacity: 0.7,
    fontSize: 10,
  },
  time: {
    marginLeft: 20,
  },
});
