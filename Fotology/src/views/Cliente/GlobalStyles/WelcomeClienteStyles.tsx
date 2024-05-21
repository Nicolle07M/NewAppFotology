import { StyleSheet } from "react-native";
const WelcomeClienteStyles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      overflow: 'hidden',
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
      marginBottom: 50,
    },
    headerButton: {
      fontSize: 16,
      color: 'black',
    },
    backgroundImage: {
      width: '100%',
      aspectRatio: 2,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      overflow: 'hidden',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
    },
    text2: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ratingButton: {
      marginRight: 2,
    },
    comentarioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 17,
      backgroundColor: 'white', // Color de fondo blanco
      borderRadius: 8,
      marginBottom: 10,
      width: '87%',
    },
    comentario: {
      fontSize: 14,
      marginBottom: 5,
    },
    fotoContainer: {
      width: 100,
      height: 100, // Ajusta la altura del contenedor si es necesario
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 70, 
      marginBottom: 5, 
    }, 
    foto: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginTop: 4,
    },
    tiempo: {
      fontSize: 12,
      color: '#999', // Color de texto gris para el tiempo
      alignSelf: 'flex-end',
    },
    infoContainer: {
      flex: 1,
    },
    username: {
      fontSize: 16,
  fontWeight: 'bold',
    },
    description: {
      textAlign: 'justify',
      fontSize: 16,
      marginVertical: 10,
      marginHorizontal: 40, 
  
    },
    description2: {
      textAlign: 'justify',
      fontSize: 16,
      marginVertical: 10,
      marginHorizontal: 40,
      marginTop: 30,
  
    },
    description3: {
      textAlign: 'justify',
      fontSize: 16,
      marginVertical: 10,
      marginHorizontal: 40,
      marginTop: 0,
  
    },
    orangeLine: {
      width: '80%',
      height: 2,
      backgroundColor: 'orange',
      alignSelf: 'center',
      marginVertical: 10,
    },
    title2: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center', 
      marginVertical: 10,
      color: 'orange',
    },

    button: {
      backgroundColor: '#007bff', // Cambia el color de fondo según tu preferencia
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20, // Puedes ajustar el espaciado superior según sea necesario
      alignSelf: 'center', // Centra el botón horizontalmente
    },
  
    buttonText: {
      color: 'white', // Color del texto del botón
      fontSize: 16, // Tamaño del texto del botón
      fontWeight: 'bold', // Puedes ajustar el grosor del texto según sea necesario
    },

    
    
  });

export default WelcomeClienteStyles;