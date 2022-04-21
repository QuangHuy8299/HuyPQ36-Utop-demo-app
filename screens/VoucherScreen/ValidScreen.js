import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import VoucherItem from "../../components/Voucher/VoucherItem";
import { ValidVoucher } from "../../data/voucherData";

export default function ValidScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ValidVoucher}
        renderItem={({ item }) => <VoucherItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
