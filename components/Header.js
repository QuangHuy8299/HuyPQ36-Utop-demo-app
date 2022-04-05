import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import UtopPoint from "./UtopPoint";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.header}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View>
        <View style={styles.headerAbove}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.dropDown}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon2 name="location" size={20} />
              <Text style={styles.dropDownText}>Hanoi</Text>
            </View>
          </Pressable>
          <View style={styles.searchSection}>
            <Icon
              name="ios-search"
              style={styles.iconSearch}
              size={20}
              color="#000"
            />
            <TextInput style={styles.input} placeholder="Nhập để tìm kiếm..." />
          </View>
          <View style={styles.notification}>
            <Icon name="notifications-outline" size={20} color="#000" />
          </View>
        </View>
        <View style={styles.headerBelow}>
          <View style={styles.headerBelowFeature}>
            <Icon1 name="wallet" size={40} color="#000" />
            <Text style={styles.headerBelowFeatureText}>Nạp Điểm</Text>
          </View>
          <View style={styles.headerBelowFeature}>
            <Icon1 name="credit-card" size={40} color="#000" />
            <Text style={styles.headerBelowFeatureText}>Nạp Thẻ ĐT</Text>
          </View>
          <View style={styles.headerBelowFeature}>
            <Icon name="people-outline" size={40} color="#000" />
            <Text style={styles.headerBelowFeatureText}>Membership</Text>
          </View>
          <View style={styles.headerBelowFeature}>
            <Icon name="ios-scan-outline" size={40} color="#000" />
            <Text style={styles.headerBelowFeatureText}>Quét QR</Text>
          </View>
        </View>
        <UtopPoint />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
  },
  headerAbove: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchSection: {
    flex: 4,
    alignItems: "center",
    padding: 2,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  dropDown: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
  iconSearch: {
    marginLeft: 4,
  },
  notification: {
    flex: 1,
    alignItems: "center",
  },
  headerBelow: {
    flexDirection: "row",
    marginTop: 20,
  },
  headerBelowFeature: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBelowFeatureText: {
    fontSize: 12,
    marginTop: 6,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
