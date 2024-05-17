import { StyleSheet } from "react-native";

const PortafolioStyles = StyleSheet.create({
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
  headerText: {
    fontSize: 30,
    color: 'white',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textBelowInput: {
    fontSize: 20,
    color: 'gray',
  },
  bottomButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 460,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 18,
  },
  // Estilos para el bloque de categoría
  categoryBlock: {
    marginTop: 20,
    alignItems: 'center',
  },
  categoryImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'column', // Cambia a columna para apilar los elementos verticalmente
    alignItems: 'center', // Centra los elementos horizontalmente
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10, // Espacio entre la palabra y los botones
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra los botones horizontalmente
  },
  categoryButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5, // Espacio horizontal entre los botones
  },
  categoryButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // Estilos para el bloque adicional
  additionalBlock: {
    alignItems: 'center',
    marginTop: 20,
  },
  additionalBlockImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  additionalBlockButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  additionalBlockButtonText: {
    color: 'white',
    fontSize: 16,
  },
  additionalBlockText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default PortafolioStyles;
