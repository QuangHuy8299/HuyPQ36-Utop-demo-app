import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabScreenContainer from "./navigator/TabScreenContainer";
import DetailScreen from "./screens/HomeScreen/DetailScreen";
import ProfileScreen from "./screens/MenuScreen/ProfileScreen";
import HistoryPoints from "./screens/MenuScreen/HistoryPoints";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ tabBarShowLabel: false, headerShown: false }}
          initialRouteName="TabScreenContainer"
        >
          <Stack.Screen component={DetailScreen} name="Detail" />
          <Stack.Screen
            component={TabScreenContainer}
            name="TabScreenContainer"
          />
          <Stack.Screen
            component={ProfileScreen}
            name="Profile"
            options={{
              headerShown: true,
              headerTitle: "Thông tin cá nhân",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#fecf33" },
            }}
          />
          <Stack.Screen
            component={HistoryPoints}
            name="HistoryPoints"
            options={{
              headerShown: true,
              headerTitle: "Lịch sử điểm Utop",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#fecf33" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
