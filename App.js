import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import VideoScreen from "./screens/VideoScreen";
import VoucherScreen from "./screens/VoucherScreen";
import MenuScreen from "./screens/MenuScreen";
import HistoryScreen from "./screens/HistoryScreen";
import Icon from "react-native-vector-icons/AntDesign";
import HomeScreenContainer from "./screens/HomeScreenContainer";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreenContainer"
          component={HomeScreenContainer}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "blue",
            tabBarIcon: HomeIcon,
            tabBarLabelStyle: {
              color: "#000",
            },
          }}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            headerShown: false,
            tabBarIcon: HistoryIcon,
            tabBarLabelStyle: {
              color: "#000",
            },
          }}
        />
        <Tab.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{
            headerShown: false,
            tabBarIcon: VideoIcon,
            tabBarLabelStyle: {
              color: "#000",
            },
          }}
        />
        <Tab.Screen
          name="VoucherScreen"
          component={VoucherScreen}
          options={{
            headerShown: false,
            tabBarIcon: VoucherIcon,
            tabBarLabelStyle: {
              color: "#000",
            },
          }}
        />
        <Tab.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: MenuIcon,
            tabBarLabelStyle: {
              color: "#000",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeIcon = () => {
  return <Icon name="home" size={25} color="#000" />;
};
const HistoryIcon = () => {
  return <Icon name="book" size={25} color="#000" />;
};
const VideoIcon = () => {
  return <Icon name="play" size={25} color="#000" />;
};
const VoucherIcon = () => {
  return <Icon name="creditcard" size={25} color="#000" />;
};
const MenuIcon = () => {
  return <Icon name="bars" size={25} color="#000" />;
};
