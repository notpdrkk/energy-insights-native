import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Pages/Home";
import RankingScreen from "@pages/Ranking";
import HistoricoScreen from "@pages/Historico";
import { RootTabParamlist } from "../@types/navigation";

const Tab = createBottomTabNavigator<RootTabParamlist>();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Ranking":
              iconName = focused ? "trophy" : "trophy-outline";
              break;
            case "Historico":
              iconName = focused ? "time" : "time-outline";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarIconActive: "#007bff",
        tabBarIconInactive: "#777",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Historico" component={HistoricoScreen} />
    </Tab.Navigator>
  );
};
