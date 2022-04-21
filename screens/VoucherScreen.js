import React from "react";
import { StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InvalidScreen from "./VoucherScreen/InvalidScreen";
import ValidScreen from "./VoucherScreen/ValidScreen";

const Tab = createMaterialTopTabNavigator();

const VoucherScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "700" },
        tabBarStyle: {
          borderRadius: 6,
          marginHorizontal: 8,
        },

        tabBarIndicatorStyle: {
          backgroundColor: "#fecf33",
        },
      }}
    >
      <Tab.Screen
        name="ValidScreen"
        component={ValidScreen}
        options={{
          tabBarLabel: "Còn hiệu lực",
        }}
      />
      <Tab.Screen
        name="InvalidScreen"
        component={InvalidScreen}
        options={{ tabBarLabel: "Hết hiệu lực" }}
      />
    </Tab.Navigator>
  );
};

export default VoucherScreen;

const styles = StyleSheet.create({
  container: {},
});
