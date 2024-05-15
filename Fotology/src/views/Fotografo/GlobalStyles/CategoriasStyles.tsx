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
    width: '100%', // Ancho al 100%
    paddingHorizontal: 20, // Añadido para espacio interno
    paddingVertical: 30, // Modificado para ajustar la altura del cuadro de texto
    alignItems: 'center', // Alineado al centro horizontalmente
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center', // Añadido para centrar horizontalmente
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    marginRight: 5,
  },
  symbolText: {
    fontSize: 20,
    color: 'white',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  listItem: {
    fontSize: 18,
    color: '#333',
    paddingVertical: 25,
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
  },
  bottomButtonText: {
    fontSize: 20,
    color: 'white',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default CategoriasStyles;