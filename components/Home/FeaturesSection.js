import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { features } from "../../data/data";
import { imagesSlider } from "../../data/data";
import SliderSection from "./SliderSection";

const numColumns = Math.ceil(features.length / 2);

const renderItem = ({ item }) => {
  return (
    <View style={styles.feature}>
      <Icon name={item.icon} size={40} />
      <Text style={styles.title}>{item.title}</Text>
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
        <SliderSection
          images={imagesSlider}
          minimusWidth={20}
          top={0}
          left={10}
        />
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
  title: {
    fontSize: 12,
  },
});
