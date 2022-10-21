import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
   return (
      <Drawer.Navigator>
         <Drawer.Screen name="StackNavigator" component={StackNavigator} />
         <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
   );
}