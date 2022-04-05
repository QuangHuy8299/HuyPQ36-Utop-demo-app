import React, { useCallback, useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import ItemsList from "../components/ItemsList";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fecf33" }}>
        <Header />
      </View>
      <FlatList
        data={[]}
        keyExtractor={(item, index) => `key-${index}`}
        ListHeaderComponent={() => (
          <View>
            <FeaturesSection />
          </View>
        )}
        ListFooterComponent={() => <ItemsList navigation={navigation} />}
        renderItem={({ item, index }) => console.log("huy")}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default HomeScreen;
