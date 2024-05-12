import { StyleSheet } from "react-native";

const ContactoStyles = StyleSheet.create({
    
  
  container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      paddingTop: 50,
      paddingHorizontal: 20,
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'orange',
      marginBottom: 20,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    icon: {
      width: 32,
      height: 32,
      marginRight: 10,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 20,
    },
    text: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
    },
    inputContainer: {
      width: '90%',
    },
    inputGroup: {
      marginBottom: 20,
      position: 'relative', // Para posicionar el texto dentro del cuadro de entrada
    },
    label: {
      position: 'absolute',
      zIndex: 1,
      color: 'black',
      marginBottom: 5,
    },
    input: { 
      borderWidth: 2, // grosor de los rectangulos
      borderColor: 'black', // los rectangulos que contienen los Nombre, Gmail, Mensaje 
      borderRadius: 5,
      padding: 10,
      paddingLeft: 70, // Ajuste para dejar espacio para el texto visible
      color: 'white',
    },
    backgroundContainer: {  //image de fondo  
      position: 'absolute',
      width: '110%',
      height: '110%',
    },
  
     backgroundImage: { //se importa la imagen creo 
      flex: 1,
    },
    
    multilineInput: {
      height: 100, // Altura del cuadro de entrada de varias líneas
    },
    button: {
      backgroundColor: 'orange', // enviar mensaje 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    confirmationMessage: {
      marginTop: 20,
      color: 'white',
      textAlign: 'center',
    },
    visibleText: {
      opacity: 1, // Opacidad para hacer el texto visible pero no tan prominente
    },

    errorText: {
      color: 'red',
      fontSize: 16,
      marginTop: 5,
    },
    textcajas: {
      left: 10, // Ajusta este valor según sea necesario para mover el texto hacia la derecha
      top: 10, // Ajusta este valor para mover el texto hacia arriba o abajo entre mayor el numero ira mas abajo
      
    },
    
  });
  
  export default ContactoStyles;