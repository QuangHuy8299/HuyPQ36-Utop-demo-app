import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import VideoScreen from "./VideoScreen";
import VoucherScreen from "./VoucherScreen";
import MenuScreen from "./MenuScreen";
import HistoryScreen from "./HistoryScreen";
import HomeScreen from "./HomeScreen";

const BottomTab = createBottomTabNavigator();

function TabScreenContainer() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: "#fecf33" },
        headerTintColor: "black",
        headerTitleAlign: "center",
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#fecf33",
      }}
    >
      <BottomTab.Screen
        name="HomeScreenContainer"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => <HistoryIcon color={color} />,
          title: "Lịch sử giao dịch",
        }}
      />
      <BottomTab.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color }) => <VideoIcon color={color} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{
          tabBarIcon: ({ color }) => <VoucherIcon color={color} />,
          title: "Voucher của tôi",
        }}
      />
      <BottomTab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => <MenuIcon color={color} />,
          title: "Menu",
        }}
      />
    </BottomTab.Navigator>
  );
}

export default TabScreenContainer;

const HomeIcon = ({ color }) => {
  return <Icon name="home" size={25} color={color} />;
};
const HistoryIcon = ({ color }) => {
  return <Icon name="book" size={25} color={color} />;
};
const VideoIcon = ({ color }) => {
  return <Icon name="play" size={25} color={color} />;
};
const VoucherIcon = ({ color }) => {
  return <Icon name="creditcard" size={25} color={color} />;
};
const MenuIcon = ({ color }) => {
  return <Icon name="bars" size={25} color={color} />;
};
