import React, { useCallback, useState, useEffect } from "react";
import {
  FlatList,
  RefreshControl,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import CardItem from "../components/Home/CardItem";
import HeaderHomeScreen from "../components/Home/HeaderHomeScreen";
import FeaturesSection from "../components/Home/FeaturesSection";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  });

  useEffect(() => {
    setIsLoading(true);
    getPosts();
  }, [pageCurrent]);

  const getPosts = async () => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${pageCurrent}`
    )
      .then((res) => res.json())
      .then((resJson) => {
        setPosts(posts.concat(resJson));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="small" color="#000000" />
      </View>
    ) : null;
  };

  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}
      logo={item.thumbnailUrl}
      banner={item.url}
      navigation={navigation}
    />
  );

  const handleLoadMore = () => {
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fecf33" }}>
        <HeaderHomeScreen />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `key-${index}`}
        ListHeaderComponent={() => <FeaturesSection />}
        ListFooterComponent={renderFooter}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loader: {
    marginTop: 10,
    alignItems: "center",
  },
});
