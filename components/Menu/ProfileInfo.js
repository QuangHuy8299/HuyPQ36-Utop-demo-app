import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "./Input";
import Title from "./Title";

const profileInfo = {
  name: "Phạm Quang Huy",
  phone: "+84853806740",
  email: "huypq234@gmail.com",
};

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          color="#ccc"
          size={150}
        />
      </View>
      <View>
        <Input
          label="Họ và tên"
          value={profileInfo.name}
          style={styles.inputSection}
        />
        <Input
          label="Số điện thoại"
          value={profileInfo.phone}
          style={styles.inputSection}
        />
        <Input
          label="Email"
          value={profileInfo.email}
          style={styles.inputSection}
        />
        <View style={styles.buttonSection}>
          <Pressable style={styles.button}>
            <Title>Quản lý thẻ / Tài khoản</Title>
            <Title>{">"}</Title>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 6,
    paddingHorizontal: 20,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  inputSection: {
    borderBottomWidth: 1,
    borderColor: "#e5e3e3",
    marginTop: 10,
  },
  buttonSection: {
    borderBottomWidth: 1,
    borderColor: "#e5e3e3",
    paddingVertical: 24,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
