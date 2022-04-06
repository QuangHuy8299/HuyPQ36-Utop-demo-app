import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SliderSection from "../components/SliderSection";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/Ionicons";
import { imagesSlider } from "../data/data";

const DetailScreen = ({ route, navigation }) => {
  const { title, banner } = route.params;
  return (
    <View style={{ position: "relative" }}>
      <SliderSection images={imagesSlider} minimusWidth={0} bottom={0} />
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          backgroundColor: "#ccc",
          borderRadius: 50,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Icon1 name="arrow-back" size={20} />
        </Pressable>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.detailContent__title}>{title}</Text>
        <View style={styles.rateStar}>
          <Icon name="star-outlined" size={12} style={styles.iconStar} />
          <Icon name="star-outlined" size={12} style={styles.iconStar} />
          <Icon name="star-outlined" size={12} style={styles.iconStar} />
          <Icon name="star-outlined" size={12} style={styles.iconStar} />
          <Icon name="star-outlined" size={12} style={styles.iconStar} />
          <Text>5.0</Text>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}
        >
          <Text style={{ fontSize: 12, color: "#fba433", marginRight: 5 }}>
            Đang mở cửa
          </Text>
          <Text>|</Text>
          <Text style={{ fontSize: 12, marginLeft: 5 }}>08.00 - 18.30</Text>
        </View>
        <View style={styles.addressSection}>
          <View style={{ flex: 3 }}>
            <Text style={styles.addressSection_text}>
              Fville, Khu Công Nghệ Cao, Hòa Lạc, Thạch Thất, Hà Nội
            </Text>
            <Text style={{ color: "#ccc" }}>(0,96km)</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Icon name="address" size={20} style={styles.iconMap} />
            </View>
            <Icon name="phone" size={20} style={styles.iconMap} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  iconStar: {
    color: "#fba433",
    marginRight: 4,
  },
  detailContent: {
    margin: 10,
  },
  detailContent__title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  rateStar: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  iconMap: {
    color: "#fba433",
    height: 30,
    width: 30,
    textAlign: "center",
  },
});
