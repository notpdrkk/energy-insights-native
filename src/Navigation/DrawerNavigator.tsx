
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerList } from '../@types/navigation';
import { TabsNavigator } from './TabsNavigator';
import { Perfil } from '../Pages/Perfil';
import { Integrantes } from '../Pages/Integrantes';
import ConsumoScreen from '../Pages/Consumo';


const Drawer = createDrawerNavigator<DrawerList>();

export const DrawerRouters = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='DrawerTabs' 
        component={TabsNavigator}
      />
      
      <Drawer.Screen 
        name='DrawerPerfil' 
        component={Perfil} 
        options={{ title: 'Perfil' }}
      />
      
      <Drawer.Screen 
        name='DrawerIntegrantes' 
        component={Integrantes} 
        options={{ title: 'Integrantes' }}
      />
      
      <Drawer.Screen 
        name='DrawerConsumoScreen' 
        component={ConsumoScreen} 
        options={{ title: 'Consumo'}}
      />
      
    </Drawer.Navigator>
  )
}