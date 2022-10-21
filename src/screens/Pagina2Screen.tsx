import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

const Pagina2Screen = ({ navigation }: Props) => {

   useEffect(() => {
      navigation.setOptions({
         title: 'Hola mundo',
         headerBackTitle: ''
      })
   }, []);

   return (
      <View style={styles.globalMargin}>
         <Text style={styles.title}>Pagina2Screen</Text>

         <Button
            title='Ir página 3'
            onPress={() => navigation.navigate('Pagina3Screen')}
         />
      </View>
   )
}

export default Pagina2Screen