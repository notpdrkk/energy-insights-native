import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Home  from '../Pages/Home'
import RankingScreen from '@pages/Ranking'
import HistoricoScreen from '@pages/Historico'
import { RootTabParamlist } from '../@types/navigation'

const Tab = createBottomTabNavigator<RootTabParamlist>()

export const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="TabHome" component={ Home } />
      <Tab.Screen name="TabRanking" component={ RankingScreen } />
      <Tab.Screen name="TabHistorico" component={ HistoricoScreen } />
    </Tab.Navigator>
  )
}
