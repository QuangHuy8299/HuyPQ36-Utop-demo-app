import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HistorySpending } from "../../data/historyData";
import Title from "../../components/Menu/Title";

export default function HistoryPoints() {
  const renderItem = ({ item }) => (
    <Pressable key={item.id}>
      <Title>{item.title}</Title>
    </Pressable>
  );
  return (
    <FlatList
      data={HistorySpending}
      renderItem={renderItem}
      keyExtractor={({ item, index }) => index}
    />
  );
}

const styles = StyleSheet.create({});
