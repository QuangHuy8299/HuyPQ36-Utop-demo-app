import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { InvalidVoucher } from "../../data/voucherData";
import VoucherItem from "../../components/Voucher/VoucherItem";

export default function InvalidScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={InvalidVoucher}
        renderItem={({ item }) => <VoucherItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
