import { StyleSheet } from "react-native";

export const colores = {
   primary: '#5856D6'
};

export const styles = StyleSheet.create({
   globalMargin: {
      marginHorizontal: 20
   },
   title: {
      fontSize: 30,
      marginBottom: 10,
      color: 'black'
   },
   botonGrande: {
      width: 100,
      height: 100,
      backgroundColor: 'tomato',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginTop: 10
   },
   botonGrandeTexto: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
   },
   avatar: {
      width: 150,
      height: 150,
      borderRadius: 100
   },
   avatarContainer: {
      alignItems: 'center',
      marginTop: 20
   },
   menuContainer: {
      marginVertical: 30,
      marginHorizontal: 50,
      alignItems: 'center'
   },
   menuBoton: {
      marginVertical: 10
   },
   menuTexto: {
      fontSize: 25,
      color: 'black'
   }
});