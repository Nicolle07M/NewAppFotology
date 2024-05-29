import { StyleSheet } from "react-native";

const VistaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  centeredText: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  imageContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  imageItem: {
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: 'cover',
  },
  moreOptionsButton: {
    position: 'absolute',
    top: 10,
    right: 0,
    zIndex: 1,
  },
  optionsContainer: {
    position: 'absolute',
    top: 10,
    right: 40, // Ajusta esta posición para cambiar la distancia de la lista al ícono
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    zIndex: 2,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
  },
});

export default VistaStyles;