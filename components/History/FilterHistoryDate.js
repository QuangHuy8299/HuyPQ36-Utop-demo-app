import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";
import FilterButtonSection from "./FilterButtonSection";

const Choose = { All: "Tất cả", Voucher: "Voucher", Store: "Cửa hàng" };

export default function FilterHistoryDate() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateString, setDateString] = useState("-- Chọn ngày --");
  const [pressed, setPressed] = useState(Choose.All);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setDateString(" -- " + fDate + " -- ");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handlePressed = (item) => {
    setPressed(item);
  };

  return (
    <View style={styles.containerDate}>
      <Pressable
        onPress={() => showMode("date")}
        style={styles.inputDatePicker}
      >
        <MaterialIcons name="date-range" size={24} color="black" />
        <Text style={styles.datePickerText}>{dateString}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}
      <View style={styles.buttonSection}>
        <FilterButtonSection
          chosed={pressed === Choose.All}
          children={Choose.All}
          handlePressed={handlePressed}
        />
        <FilterButtonSection
          chosed={pressed === Choose.Voucher}
          children={Choose.Voucher}
          handlePressed={handlePressed}
        />
        <FilterButtonSection
          chosed={pressed === Choose.Store}
          children={Choose.Store}
          handlePressed={handlePressed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDate: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  inputDatePicker: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 4,
    borderRadius: 8,
  },
  datePickerText: {
    color: "black",
    marginLeft: 10,
  },
  buttonSection: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
