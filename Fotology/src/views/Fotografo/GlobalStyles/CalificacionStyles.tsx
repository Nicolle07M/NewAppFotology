import { StyleSheet } from "react-native";
const CalificacionStyles = StyleSheet.create({
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
      marginBottom: 10,
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
    comentarios: {

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
      backgroundColor: 'rgba(255, 192, 203, 0.3)', 
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
    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EFEFEF', // Color de fondo gris
    },
    comentarioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
      backgroundColor: 'white', // Color de fondo blanco
      borderRadius: 8,
      marginBottom: 10,
      width: '87%',
    },
    fotoContainer: {
      marginRight: 10,
    },
    foto: {
      width: 50,
      height: 50,
      borderRadius: 25, // Para que la foto se vea como un círculo
    },
    infoContainer: {
      flex: 1,
    },
    username: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    ratingButton: {
      marginRight: 2,
    },
    comentario: {
      fontSize: 14,
      marginBottom: 5,
    },
    tiempo: {
      fontSize: 12,
      color: '#999', // Color de texto gris para el tiempo
      alignSelf: 'flex-end',
    },
  });
  
export default CalificacionStyles;