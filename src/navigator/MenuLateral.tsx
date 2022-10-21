import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

   const { width } = useWindowDimensions();

   return (
      <Drawer.Navigator
         screenOptions={{
            drawerType: (width >= 768 ? 'permanent' : 'front')
         }}
         drawerContent={
            (props) => <MenuInterno {...props}/>
         }
      >
         <Drawer.Screen name="StackNavigator" component={StackNavigator} />
         <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
   );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
   return (
      <DrawerContentScrollView>
         {/* Avatar */}
         <View style={styles.avatarContainer}>
            <Image
               source={{
                  uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
               }}
               style={ styles.avatar }
            />
         </View>

         {/* Opciones de menú */}
         <View style={styles.menuContainer}>
            <TouchableOpacity 
               style={styles.menuBoton}
               onPress={() => navigation.navigate('StackNavigator')}
            >
               <Text style={styles.menuTexto}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity 
               style={styles.menuBoton}
               onPress={() => navigation.navigate('SettingsScreen')}
            >
               <Text style={styles.menuTexto}>Settings</Text>
            </TouchableOpacity>
         </View>
      </DrawerContentScrollView>
   )
}