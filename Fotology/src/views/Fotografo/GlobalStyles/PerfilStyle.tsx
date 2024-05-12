import { StyleSheet } from "react-native";

const PerfilStyle = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 12,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#DDD',
    },
    headerButton: {
      fontSize: 16,
      color: 'black',
    },
    optionsButton: { // los 3 puntos que sirven para editar 
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 1,
    },
    profileContainer: { // imagen 
      position: 'absolute',
      top: 50,
      left: 100,
      alignItems: 'center',
    },
    profileImage: { // imagen 
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    profileNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileName: { //Nombre del fotografo 
      color: 'black',
      marginTop: 10,
      fontSize: 18,
    },
    backgroundContainer: {  // imagen del fondo 
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    backgroundImage: {
      flex: 1,
    },
    form: { // contenedor 
      width: '80%',
      height: '55%',
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      position: 'absolute',
      bottom: 50,
    },
    formTitle: {
      fontSize: 20, // perfil 
      fontWeight: 'bold',
      marginBottom: 20, // espacio estre el perfil y el Nombre 
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,// espacios entre Nombre, descripcion etc 
    },
    label: {
      fontSize: 16,
      color: 'black',
      marginBottom: 5,
    },
    input: {
      flex: 0.8, // largo de la linea 
      fontSize: 16, //letra 
      color: 'black',
      borderBottomWidth: 1, // grosor de las lineas 
      borderBottomColor: 'gray',
      paddingBottom: 0.2,
      marginLeft: 1, // ancho entre los iconos y las lineas 
    },
    saveButton: {
      alignSelf: 'center', // Alinea el botón al centro horizontalmente
      backgroundColor: 'orange', // Solo un color de ejemplo, puedes ajustarlo según sea necesario
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20, // Agrega un poco de margen desde el campo de entrada anterior
    },
    
    saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    
    socialIcon: { //iconos
      width: 25,
      height: 25,
      marginRight: 15,
      marginLeft: 30,
    },
  });

  export default PerfilStyle;