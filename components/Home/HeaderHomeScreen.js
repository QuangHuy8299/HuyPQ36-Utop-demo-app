import React, { useState } from "react";
import { StyleSheet } from "react-native";
import UtopPoint from "./UtopPoint";
import Funtions from "./Funtions";
import SearchSection from "./SearchSection";
import ModalLocation from "./ModalLocation";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderHomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
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

const styles = StyleSheet.create({});
