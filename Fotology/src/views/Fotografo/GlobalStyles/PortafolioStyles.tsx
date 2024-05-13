import { StyleSheet } from "react-native";

const PortafolioStyles = StyleSheet.create({
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
    fontFamily: 'Homenaje',
    fontSize: 30,
    color: 'white',
  },
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 20, // Añadido para separar el header de la sección de contenido
  },
  headerButton: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10, // Añadido para separar los botones del header
  },
  content: {
    flex: 1, // Cambiado para que ocupe el espacio disponible
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginTop: 20,
  },
  customButton: {
    backgroundColor: 'orange', 
    paddingVertical: 12,
    paddingHorizontal: 110,
    borderRadius: 25, 
    marginBottom: 20, // Añadido para separar el botón del contenido debajo
  },
  customButtonText: {
    fontFamily: 'Homenaje', 
    fontSize: 20,
    color: 'white', 
  },
});

export default PortafolioStyles;