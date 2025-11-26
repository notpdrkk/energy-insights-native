import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Home  from '../Pages/Home'
import { Perfil } from '../Pages/Perfil'
import { Integrantes } from '../Pages/Integrantes'

const Tab = createBottomTabNavigator()

export const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={ Home } />
      <Tab.Screen name="Perfil" component={ Perfil } />
      <Tab.Screen name="Integrantes" component={ Integrantes } />
    </Tab.Navigator>
  )
}
