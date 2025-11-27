import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Home  from '../Pages/Home'
import RankingScreen from '@pages/Ranking'
import HistoricoScreen from '@pages/Historico'
import { RootTabParamlist } from '../@types/navigation'

const Tab = createBottomTabNavigator<RootTabParamlist>()

export const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={ Home } />
      <Tab.Screen name="Ranking" component={ RankingScreen } />
      <Tab.Screen name="Historico" component={ HistoricoScreen } />
    </Tab.Navigator>
  )
}
