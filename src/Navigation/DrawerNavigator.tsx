import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../@types/navigation';
import { Perfil } from '../Pages/Perfil';
import { Integrantes } from '../Pages/Integrantes';
import { Home } from '../Pages/Home';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const DrawerRouters = () => {

  return (
    <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: "#F1FFF7", 
          width: 260,
        },

        drawerActiveTintColor: "#1EB980",      
        drawerInactiveTintColor: "#333",       
        drawerActiveBackgroundColor: "#C8F8E4",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },

        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#1EB980",
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "700",
        },
      }} >

      <Drawer.Screen 
        name='DrawerHome' 
        component={Home}
        options={{title: "Home"}}
      />
      
      <Drawer.Screen 
        name='DrawerPerfil' 
        component={Perfil} 
        options={{ title: 'Perfil' }}
      />
      
      <Drawer.Screen 
        name='DrawerIntegrantes' 
        component={Integrantes} 
        options={{ title: 'Integrantes'}}
      />
      
    </Drawer.Navigator>
  )
}