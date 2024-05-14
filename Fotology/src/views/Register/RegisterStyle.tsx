import { StyleSheet } from "react-native";
const RegisterStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      height: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
      height: '100%',
    },
    iconContainer: {
      borderWidth: 2,
      borderColor: 'orange',
      borderRadius: 60, // La mitad del tamaño del icono para que sea un círculo
      padding: 10,
      marginBottom: 18,
    },
    formContainer: {
      width: '80%', 
      backgroundColor: '#F5F5F5', 
      borderRadius: 20,
      paddingHorizontal: 50,
      paddingVertical: 50,
      alignItems: 'center',
    },
    label2: {
      fontSize: 20,
      marginBottom: 30,
      alignItems: 'center',
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1, // Línea inferior
      borderBottomColor: 'gray', // Color de la línea
      marginBottom: 20, // Espacio entre cajas de texto
    },
    input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 10,
    },
    buttonContainer: {
      backgroundColor: '#ff9900',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 60,
      marginTop: 50,
      shadowColor: '#FF8C00', // Color de la sombra naranja con opacidad reducida
      shadowOffset: {
        width: 0,
        height: 6, // Aumenta la altura de la sombra para que sea más pronunciada
      },
      shadowOpacity: 10, // Opacidad de la sombra eliminada
      shadowRadius: 80, // Radio de la sombra aumentado
      elevation: 8, // Elevación para la sombra en Android aumentada
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    profileImagePlaceholder: {
      fontSize: 16,
      color: 'white',
      textDecorationLine: 'underline',
    },
  });

export default RegisterStyles;