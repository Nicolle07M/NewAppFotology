import { StyleSheet } from "react-native";

const PerfilStyle = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0, // Ajusta el margen superior aquí
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 12,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#DDD',
      marginTop: 0, // Ajusta el margen superior aquí
    },
    headerButton: {
      fontSize: 16,
      color: 'black',
    },
    optionsButton: { // los 3 puntos que sirven para editar 
      position: 'absolute',
      top: 70, //bajar o subir el editar 
      right: 20,
      fontWeight: '900',
      zIndex: 1,
    },
    profileContainer: { // imagen 
      position: 'absolute',
      top: 70, // bajar o subir el circulo 
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
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
      marginTop: 45
    },
    form: { // contenedor 
      width: '80%',
      height: '50%',
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      position: 'absolute',
      bottom: 50, // subir o bajar el contenedor
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
    
      editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
      },
      // Otros estilos globales...
    
    socialIcon: { //iconos
      width: 25,
      height: 25,
      marginRight: 15,
      marginLeft: 30,
    },
      editText: {
        color: 'white',
        fontSize: 18,
      },
  });

  export default PerfilStyle;