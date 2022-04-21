import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

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
      <ModalLocation
        handleShowModal={handleShowModal}
        modalVisible={modalVisible}
      />
      <SearchSection handleShowModal={handleShowModal} />
      <Funtions />
      <UtopPoint />
    </SafeAreaView>
  );
};

export default HeaderHomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },
});
