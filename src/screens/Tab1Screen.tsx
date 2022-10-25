import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'


const Tab1Screen = () => {
   return (
      <View style={styles.globalMargin}>
         <Text style={styles.title}>Tab1 Screen</Text>
         <Text>
            <Icon name="airplane-outline" size={80} color="#900" />
         </Text>
      </View>
   )
}

export default Tab1Screen