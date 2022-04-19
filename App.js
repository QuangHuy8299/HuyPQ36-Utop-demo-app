import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabScreenContainer from "./screens/TabScreenContainer";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
