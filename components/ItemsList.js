import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
// import { data } from "../data/data";
import CardItem from "./CardItem";

const ItemsList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getPosts();
    return () => {};
  }, [pageCurrent]);

  const getPosts = async () => {
    fetch(
      `https://raw.githubusercontent.com/QuangHuy8299/dbjson/master/db.json`,
      {
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        // setPosts(posts.concat(resJson));
        // setIsLoading(false);
        console.log(resJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderFooter = () => {
    return isLoading ? (
      <View>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

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

  const handleLoadMore = () => {
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      ListFooterComponent={renderFooter}
      onEndReachedThreshold={0.25}
      onEndReached={handleLoadMore}
    />
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
  },
});
