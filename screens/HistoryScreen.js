import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import FilterHistoryDate from "../components/History/FilterHistoryDate";
import FooterHistory from "../components/History/FooterHistory";
import ItemHistory from "../components/History/ItemHistory";
import TitleHistory from "../components/History/TitleHistory";
import { HistoryData } from "../data/historyData";

const HistoryScreen = () => {
  return (
    <View>
      <FilterHistoryDate />
      <SectionList
        stickySectionHeadersEnabled={false}
        style={styles.container}
        sections={HistoryData}
        renderItem={({ item }) => <ItemHistory item={item} />}
        renderSectionHeader={({ section: { date } }) => (
          <TitleHistory title={date} />
        )}
        ListFooterComponent={FooterHistory}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
