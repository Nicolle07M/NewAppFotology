import { StyleSheet } from "react-native";
const eventoStyles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -30,
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
      marginRight: 0,
      marginBottom: 40,
    },
    comentarioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 17,
      backgroundColor: 'white', // Color de fondo blanco
      borderRadius: 8,
      marginBottom: 100,
      width: '40%',
      height: '82%',
      marginRight: 10, // Agregar margen derecho
      elevation: 5, // Agrega efecto 3D con elevación
    },
    comentario: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center', // Centra el texto horizontalmente
        textAlignVertical: 'center', // Centra el texto verticalmente
    },
    fotoContainer: {
      width: 100,
      height: 95, // Ajusta la altura del contenedor si es necesario
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50, 
      marginBottom: 5, 
    }, 
    foto: {
      width: 130,
      height: 150,
      borderRadius: 30,
      marginTop: 7,
      marginBottom: -50,
      marginLeft: 25, // Mueve la imagen hacia la derecha
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
      fontSize: 20,
      marginTop: 300,
   
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
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center', 
      marginVertical: 10,
      color: 'orange',
      marginTop: 5,
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

    input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
      // Agrega otros estilos que desees para el input de búsqueda
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: -7, // Espacio entre el input y los resultados de búsqueda
      marginTop: 5,
      marginRight: 10,
    },
  
    searchButton: {
      backgroundColor: 'orange', // Color del botón de búsqueda
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 5,
      marginBottom: 9,
      marginRight: 5,
    },
    searchButton2: {
      backgroundColor: 'orange', // Color del botón de búsqueda
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 5,
      marginBottom: 9,
      marginRight: -7,
      elevation: 5, // Agrega efecto 3D con elevación
      shadowColor: 'black', // Color de la sombra
      shadowOpacity: 0.3, // Opacidad de la sombra
      shadowRadius: 5, // Radio de la sombra
      shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
      
    },
    searchButtonText: {
      color: 'white', // Color del texto del botón de búsqueda
      textAlign: 'center', // Centra el texto horizontalmente
      textAlignVertical: 'center', // Centra el texto verticalmente
      fontWeight: 'bold', // Hace que el texto sea más grueso
    },


    iconContainer: {
        marginBottom: 0,
        marginTop: 10,
        flexDirection: 'row',
      },
      icon: {
        paddingVertical: -100,
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: -20,
      },
      icon2: {
        paddingVertical: -150,
        width: 25,
        height: 26,
        marginRight: 10,
        marginTop: -23,
      },
      tex: {
        margin: 100,
        marginTop: -25,
      },
      comentarioContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: 'white', // Color de fondo blanco
        borderRadius: 8,
        marginBottom: 10,
        width: '87%',
        elevation: 5,
      },
      
fotoContainer2: {
    marginRight: 10,
  },
  foto2: {
    width: 50,
    height: 50,
    borderRadius: 25, // Para que la foto se vea como un círculo
    marginTop: -40,
  },
comentario2: {
    fontSize: 14,
    marginBottom: 5,
  },
 
  container3: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer3: {
    flexDirection: 'row',
    marginTop: -25,
    marginBottom: 10,
    elevation: 2,
  },
  ratingButton3: {
    marginRight: 2,
  },
  selected3: {
    opacity: 1,
  },
  commentInput3: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 70,
    marginBottom: 10,
    width: '100%',

  },
  submitButton3: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 55,
  },
  submitButtonText3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFF',
  },
  descripcionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  descripcionText: {
    color: 'white',
  },

    
  });

export default eventoStyles;