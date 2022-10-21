import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

const Pagina1Screen = ({ navigation }: Props) => {
   return (
      <View style={styles.globalMargin}>
         <Text style={styles.title}>Pagina1Screen</Text>
         <Button
            title='Ir página 2'
            onPress={() => navigation.navigate('Pagina2Screen')}
         />
         <Text style={{ marginVertical: 20, fontSize: 20, color: 'black' }}>Navegar con argumentos</Text>

         <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
               onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Pedro' })}
               style={{
                  ...styles.botonGrande,
                  backgroundColor: '#5856D6'
               }}
            >
               <Text style={styles.botonGrandeTexto}>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'Miguel' })}
               style={{
                  ...styles.botonGrande,
                  backgroundColor: '#FF9427'
               }}
            >
               <Text style={styles.botonGrandeTexto}>Miguel</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Pagina1Screen;