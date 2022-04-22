import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import ProfileInfo from "../../components/Menu/ProfileInfo";
import LoginMetod from "../../components/Menu/LoginMetod";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerProfile}>
        <ProfileInfo />
        <Text style={styles.text}>Phương thức đăng nhập</Text>
        <LoginMetod />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Lưu Thông Tin</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerProfile: {
    backgroundColor: "#e5e3e3",
    padding: 8,
  },
  text: {
    marginVertical: 18,
  },
  button: {
    borderColor: "#fecf33",
    borderRadius: 40,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fecf33",
    fontWeight: "700",
  },
});
