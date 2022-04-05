import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { features } from "../data/features";
import SliderSection from "./SliderSection";

const images = [
  "https://cf.shopee.vn/file/0a8799fd696b4b7884fec39a784cb04b_xxhdpi",
  "https://cf.shopee.vn/file/dc707090d7f1659158eaa0d79723431e_xxhdpi",
  "https://cf.shopee.vn/file/f0588af6f7a900369b5d91251c3c7272_xxhdpi",
  "https://cf.shopee.vn/file/e68c38bdf3de0aecf23c6ee4afdd65ec_xxhdpi",
];

const numColumns = Math.ceil(features.length / 2);

const renderItem = ({ item }) => {
  return (
    <View style={styles.feature}>
      <Icon name={item.icon} size={40} />
      <Text style={{ fontSize: 12 }}>{item.title}</Text>
    </View>
  );
};

const FeaturesSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.features}>
        <FlatList
          numColumns={numColumns}
          data={features}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
      <View>
        <SliderSection images={images} minimusWidth={20} top={0} left={10} />
      </View>
    </View>
  );
};

export default FeaturesSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
  },
  features: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  feature: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});
