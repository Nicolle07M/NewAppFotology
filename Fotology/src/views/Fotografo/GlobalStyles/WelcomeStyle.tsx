import { StyleSheet } from "react-native";
const WelcomeStyles = StyleSheet.create({
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
      marginTop: 20, // Ajusta el margen superior aquí
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

export default WelcomeStyles;