import { StyleSheet } from "react-native";

const PublicacionStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    header: {
        backgroundColor: 'orange',
        width: '100%',
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        color: 'white',
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    mainText: {
        fontSize: 27,
        color: 'orange',
        marginBottom: -10,
    },
    subText: {
        fontSize: 17,
        color: '#5A5A5A',
        marginBottom: 5,
        textAlign: 'center',
        margin: 20,
    },
    divider: {
        height: 1.5,
        backgroundColor: 'black',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    additionalContainer: {
        width: '100%',
        alignItems: 'center',
    },
    additionalTextContainer: {
        width: '100%',
        paddingLeft: 20,
        marginBottom: 5,
    },
    additionalText: {
        fontSize: 25,
        color: 'black',
        marginBottom: 10,
        textAlign: 'left',
        paddingLeft: 15,
    },
    fileUploadContainer: {
        width: 350,
        height: 200,
        backgroundColor: 'rgba(255, 165, 0, 0.6)',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'orange',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
        position: 'relative',
    },
    uploadText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
        marginBottom: 10,
    },
    innerSquare: {
        width: 330,
        height: 130,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        position: 'relative',
    },
    squareText: {
        position: 'absolute',
        top: 50,
        left: 25,
        fontSize: 16,
        color: 'black',
    },
    additionalSquare: {
        width: 150,
        height: 30,
        backgroundColor: 'white',
        position: 'absolute',
        top: 45,
        left: 90,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
    },
    additionalSquareText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'left',
        marginLeft: 5,
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        position: 'absolute',
        top: -6,
        left: 160,
    },
    buttonText: {
        fontSize: 13,
        color: 'white',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    imageLoadedText: {
        fontSize: 18,
        color: 'black',
        marginRight: 10,
    },
    image: {
        width: 115,
        height: 115,
        resizeMode: 'contain',
    },
    deleteButton: {
        backgroundColor: 'orange',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 25,
        marginLeft: 10,
    },
    deleteButtonText: {
        fontSize: 14,
        color: 'white',
    },
    imageDescription: {
        fontSize: 25,
        color: 'black',
        textAlign: 'left',
        paddingLeft: 15,
        marginTop: 10,
    },
    descriptionInput: {
        width: '90%',
        height: 100,
        borderColor: 'orange',
        borderWidth: 1,
        paddingLeft: 5,
        marginTop: 20,
        textAlign: 'left', // Alinea el texto a la izquierda
        alignSelf: 'flex-start', // Centra horizontalmente el cuadro de texto
        marginLeft: '3%', // Ajusta la distancia de la parte izquierda
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    additionalButton: {
        backgroundColor: 'orange', // Color de fondo verde para el botón adicional
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 20, // Margen superior para separarlo del contenedor de entrada de texto
    },
    buttonsText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
});

export default PublicacionStyles;