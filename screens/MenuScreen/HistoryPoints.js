import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { HistorySpending } from "../../data/historyData";
import HistoryPoint from "../../components/Menu/HistoryPoint";

export default function HistoryPoints() {
  return (
    <FlatList
      data={HistorySpending}
      renderItem={({ item }) => <HistoryPoint item={item} />}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#e5e3e3",
  },
});
