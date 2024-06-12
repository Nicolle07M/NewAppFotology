import { StyleSheet } from "react-native";

const CargaStyles = StyleSheet.create({
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
    subText: {
        fontSize: 20,
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
        marginBottom: 20,
        textAlign: 'left',
        paddingLeft: 15,
    },
    imageStyle: {
        width: 350, // Define el ancho deseado para la imagen
        height: 280, // Define la altura deseada para la imagen
        resizeMode: 'cover', // Opcional: ajusta la forma en que la imagen se redimensiona para cubrir su contenedor
    },
    additionalText2: {
        fontSize: 18,
        color: 'black', // Cambia el color a azul
        marginTop: 10, // Agrega un margen superior
        textAlign: 'left',
        paddingLeft: 15,
    },
});

export default CargaStyles;