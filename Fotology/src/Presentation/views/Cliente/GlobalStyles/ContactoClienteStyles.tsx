import { StyleSheet } from "react-native";

const ContactoClienteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    marginTop: 0, // Ajusta el margen superior aquí
  },
  
  container2: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 0,
  position: 'relative', // Establece la posición relativa para que los elementos absolutos se posicionen dentro de este contenedor
  marginBottom: 95, // Ajusta el margen inferior para reducir el espacio con el contenido que le sigue
  borderBottomLeftRadius: 100, // Redondea más la esquina inferior izquierda
  borderBottomRightRadius: 100, // Redondea más la esquina inferior derecha
  marginHorizontal: -30, // Ajusta el margen horizontal para que el contenedor sea más amplio en la parte inferior
  width: '110%', // Asegura que el contenedor ocupe todo el ancho de la pantalla
  marginTop: -13, // Asegura que el contenedor esté pegado a la parte superior
  resizeMode: 'cover',
 
},
    bigTitle: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 56,
      fontWeight: '900',
      top: 5, // Ajusta la posición del texto más grande
      marginBottom: 5, // Reduzca el margen inferior aquí
    },
    smallTitle: {
      fontWeight: 'bold', 
      zIndex: 1,
      fontSize: 20,
      top: 60, // Ajusta la posición del texto más pequeño
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 12,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#FFF',
      marginTop: 0,

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
      marginTop: 40,
    },
    iconContainer: {
      marginBottom: 2,
      flexDirection: 'row',
     
    },
    icon: {
      paddingVertical: -100,
      width: 25,
      height: 25,
      marginRight: 10,
      top: -65, // Ajusta este valor según sea necesario para subir los iconos
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 20,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
      marginBottom: 30,
    },
    inputContainer: {
      width: '90%',
      marginBottom: 100,
    },
    inputGroup: {
      marginBottom: 12,
      position: 'relative', // Para posicionar el texto dentro del cuadro de entrada
    },
    
    label: {
      position: 'absolute',
      zIndex: 1,
      color: 'black',
      marginBottom: 5,
    },
    input: { 
      height: 50,
      borderWidth: 0, // grosor de los rectangulos
      borderColor: 'black', // los rectangulos que contienen los Nombre, Gmail, Mensaje 
      borderRadius: 5,
      padding: 10,
      paddingLeft: 70, // Ajuste para dejar espacio para el texto visible
      color: 'black',
      backgroundColor: 'white', // Cambia el color de fondo a blanco
    },
    backgroundContainer: {  //image de fondo  
      position: 'absolute',
      width: '110%',
      height: '110%',
      backgroundColor: '#D6DBDF', // Cambia el color de fondo a gris
    },
  
    backgroundImage: {
      width: '110%',
      height: 160, // Ajusta la altura según tus necesidades
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      marginTop: -13,
      overflow: 'hidden',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(200, 150, 2, 0.1)', // Color naranja semitransparente
      marginTop: 45
    },
    
    multilineInput: { //cuadro de mensaje 
      height: 100, // Altura del cuadro de entrada de varias líneas
    },
    button: {
      backgroundColor: 'orange',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: -80, // Ajusta el margen superior para subir el botón
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
  
    },
    confirmationMessage: {
      marginTop: -36,
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

    whiteRectangle: {
      backgroundColor: 'white',
      height: 50, // Ajusta la altura según sea necesario
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    
    textcajas: {
      left: 10, // Ajusta este valor según sea necesario para mover el texto hacia la derecha
      top: 10, // Ajusta este valor para mover el texto hacia arriba o abajo entre mayor el numero ira mas abajo
      
    },
    
  });
  
  export default ContactoClienteStyles;