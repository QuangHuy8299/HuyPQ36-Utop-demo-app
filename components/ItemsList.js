import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import CardItem from "./CardItem";

const ItemsList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

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
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      style={styles.container}
      ListFooterComponent={renderFooter}
      onEndReachedThreshold={0.5}
      onEndReached={handleLoadMore}
      removeClippedSubviews={true}
    />
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
  },
  loader: {
    marginTop: 10,
    alignItems: "center",
  },
});
