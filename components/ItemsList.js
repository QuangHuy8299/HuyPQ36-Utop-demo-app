import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { data } from "../data/data";
import CardItem from "./CardItem";

const ItemsList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}
      logo={item.logo}
      banner={item.banner}
      subTitle={item.subTitle}
      address={item.address}
      navigation={navigation}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
  },
});
