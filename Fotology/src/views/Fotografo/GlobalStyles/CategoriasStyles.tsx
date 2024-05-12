import { StyleSheet } from "react-native";

const CategoriasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  header: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Homenaje',
    fontSize: 30,
    color: 'white',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  listContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray', // Añade un borde inferior
    marginLeft: 10,
    marginRight: 10,
  },
  listItem: {
    fontFamily: 'Homenaje',
    fontSize: 18,
    color: '#333',
    paddingVertical: 25,
    flex: 1, // Hace que el texto ocupe todo el espacio disponible
  },
  categoryButtonContainer: {
    flexDirection: 'row', // Alinea los botones horizontalmente
  },
  categoryButton: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20, // Añade un margen derecho entre botones
  },
  categoryButtonSelected: {
    backgroundColor: 'orange',
  },
  checkmark: {
    color: 'white',
    fontSize: 20,
  },
  bottomButton: {
    backgroundColor: 'orange',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: 'center', // Centra el botón
  },
  bottomButtonText: {
    fontFamily: 'Homenaje',
    fontSize: 20,
    color: 'white',
  },
});

export default CategoriasStyles;
