import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import UtopPoint from "./UtopPoint";
import Funtions from "./Funtions";
import SearchSection from "./SearchSection";
import ModalLocation from "./ModalLocation";

const HeaderHomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.header}>
      <View>
        <ModalLocation handleShowModal={handleShowModal} modalVisible={modalVisible}/>
        <SearchSection handleShowModal={handleShowModal} />
        <Funtions />
        <UtopPoint />
      </View>
    </SafeAreaView>
  );
};

export default HeaderHomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
  },
});
