import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { styles, colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabsNavigator } from './TopTapNavigator';

export const Tabs = () => {
   return Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
}

// TABS ANDROID
const BottomTabsAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
   return (
      <BottomTabsAndroid.Navigator
         sceneAnimationEnabled={true}
         barStyle={{
            backgroundColor: colores.primary
         }}
         screenOptions={({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
               borderTopColor: colores.primary,
               borderTopWidth: 0,
               elevation: 0
            },
            tabBarLabelStyle: {
               fontSize: 15
            },
            tabBarIcon: ({ color, focused }) => {
               let iconName: string = '';

               switch (route.name) {
                  case 'Tab1Screen':
                     iconName = 'T1'
                     break;

                  case 'TopTabsNavigator':
                     iconName = 'T2'
                     break;

                  case 'StackNavigator':
                     iconName = 'St'
                     break;
               }

               return (
                  <Text style={{ color }}>{iconName}</Text>
               )
            }
         })}
      >
         <BottomTabsAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
         <BottomTabsAndroid.Screen name="TopTabsNavigator" options={{ title: 'Tab 2' }} component={TopTabsNavigator} />
         <BottomTabsAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
      </BottomTabsAndroid.Navigator>
   );
}

// TABS IOS
const BottomTabsIOS = createBottomTabNavigator();

export const TabsIOS = () => {
   return (
      <BottomTabsIOS.Navigator
         screenOptions={({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
               borderTopColor: colores.primary,
               borderTopWidth: 0,
               elevation: 0
            },
            tabBarLabelStyle: {
               fontSize: 15
            },
            tabBarIcon: ({ color, focused, size }) => {
               let iconName: string = '';

               switch (route.name) {
                  case 'Tab1Screen':
                     iconName = 'T1'
                     break;

                  case 'TopTabsNavigator':
                     iconName = 'T2'
                     break;

                  case 'StackNavigator':
                     iconName = 'St'
                     break;
               }

               return (
                  <Text style={{ color }}>{iconName}</Text>
               )
            }
         })}
         sceneContainerStyle={{
            backgroundColor: 'white'
         }}
      >
         {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
         <BottomTabsIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
         <BottomTabsIOS.Screen name="TopTabsNavigator" options={{ title: 'Tab 2' }} component={TopTabsNavigator} />
         <BottomTabsIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
      </BottomTabsIOS.Navigator>
   );
}