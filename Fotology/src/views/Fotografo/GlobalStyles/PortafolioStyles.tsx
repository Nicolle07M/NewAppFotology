import { StyleSheet } from "react-native";

const PortafolioStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  header: {
    backgroundColor: 'orange',
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  headerButton: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
  middleText: {
    fontSize: 24,
    color: 'black',
    paddingHorizontal: 45,
    marginTop: 100,
    textAlign: 'justify',
  },
  content: {
    flex: 1, 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 110,
    borderRadius: 25,
    marginBottom: 20, // Añadido para espaciar los botones
  },
  customButtonText: {
    fontSize: 20,
    color: 'black',
  },
  bottomButtonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  imageContainer: {
    marginTop: 90,
    width: 500, // Ajusta el tamaño según tu necesidad
    height: 300, // Ajusta el tamaño según tu necesidad
    borderRadius: 150, // La mitad del tamaño de la imagen
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default PortafolioStyles;