import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {

   const { top: paddingTop } = useSafeAreaInsets();

   return (
      <Tab.Navigator
         style={{
            paddingTop
         }}
         sceneContainerStyle={{
            backgroundColor: 'white',
         }}
         screenOptions={({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
               backgroundColor: colores.primary,
            },
            tabBarStyle: {
               borderTopColor: colores.primary,
               shadowColor: 'transparent',
               elevation: 0
            },
            tabBarIcon: ({ color, focused }) => {
               let iconName: string = '';

               switch (route.name) {
                  case 'ChatScreen':
                     iconName = 'Ch'
                     break;

                  case 'ContactScreen':
                     iconName = 'Co'
                     break;

                  case 'AlbumScreen':
                     iconName = 'Al'
                     break;
               }

               return (
                  <Text style={{ color }}>{iconName}</Text>
               )
            }
         })}
      >
         <Tab.Screen name="ChatScreen" component={ChatScreen} />
         <Tab.Screen name="ContactScreen" component={ContactScreen} />
         <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
      </Tab.Navigator>
   );
}