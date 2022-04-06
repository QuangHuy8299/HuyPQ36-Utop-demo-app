import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const CardItem = ({ title, logo, banner, navigation }) => {
  return (
    <View style={styles.containerCard}>
      <Pressable
        onPress={() =>
          navigation.navigate("Detail", {
            title: title,
            banner: banner,
          })
        }
      >
        <View style={styles.containerCard_header}>
          <Image source={{ uri: logo }} style={styles.tinyLogo} />
          <View style={styles.containerCard_headerTitle}>
            <Text style={{ fontWeight: "600" }}>{title}</Text>
            <Text style={styles.containerCard_headerTitle_text}>
              Ăn gì hôm nay...Chốt đơn ngay!
            </Text>
          </View>
        </View>
        <View style={styles.banner}>
          <Image source={{ uri: banner }} style={styles.banner1} />
          <View style={styles.banner2}>
            <Image style={styles.banner2_child} source={{ uri: banner }} />
            <Image style={styles.banner2_child} source={{ uri: banner }} />
          </View>
        </View>
      </Pressable>
      <View style={styles.viewMore}>
        <Text style={styles.viewMore_text}>Xem tất cả các cửa hàng {`>`} </Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  containerCard_header: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  banner: {
    flexDirection: "row",
    marginTop: 15,
    height: 100,
  },
  banner1: {
    flex: 2,
    borderRadius: 8,
    marginRight: 4,
    alignItems: "center",
  },
  banner2: {
    flex: 1,
    justifyContent: "space-between",
  },
  banner2_child: {
    height: 48,
    borderRadius: 8,
  },
  viewMore: {
    marginTop: 6,
  },
  viewMore_text: {
    fontSize: 12,
  },
  containerCard_headerTitle_text: {
    fontSize: 12,
    marginTop: 10,
  },
});
