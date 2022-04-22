import React from "react";
import { View, StyleSheet, SectionList } from "react-native";
import TitleHistory from "../../components/History/TitleHistory";
import MenuItem from "../../components/Menu/MenuItem";
import { MenuData } from "../../data/menuData";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={MenuData}
        renderItem={({ item }) => (
          <MenuItem item={item} navigation={navigation} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TitleHistory title={title} />
        )}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e3e3",
    paddingHorizontal: 6,
  },
});
