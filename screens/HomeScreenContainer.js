import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

const HomeScreenContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenContainer;
