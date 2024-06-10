import { StyleSheet } from 'react-native';

const RegisterClienteStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
    height: '100%',
  },
  form: {
    width: '80%', 
    height: '90%',
    backgroundColor: '#F5F5F5', 
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 50, // Reduce paddingVertical para hacer que el formulario sea más bajo
    alignItems: 'center',
  },
  loginButtonContainer: {
    marginTop: 10, // Reduce marginTop for login button to 10
  },
  formText: {
    fontSize: 20,
    marginBottom: 20, // Reduced marginBottom
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#ff9900',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 60,
    marginTop: 20, // Reduced marginTop
    shadowColor: '#FF8C00',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  datePicker: {
    flex: 1, // Ocupa todo el espacio disponible
    opacity: 0.5, // Reduce la opacidad del componente DateTimePicker
  },
  
  datePickerText: {
    fontSize: 15, // Tamaño del texto dentro del botón de selección de fecha
    color: 'black', // Color del texto
    marginLeft: 0, // Ajusta el posicionamiento del texto dentro del botón de selección de fecha
    opacity: 0.6, // Reduce la opacidad del texto dentro del botón de selección de fecha
  },
  datePickerContainer: {
    flexDirection: 'row', // Alinea horizontalmente el texto y el botón de selección de fecha
    alignItems: 'center', // Alinea verticalmente el texto y el botón de selección de fecha
    marginBottom: 15, // Ajusta el margen inferior si es necesario
  },
  datePickerLabel: {
    fontSize: 15, // Tamaño del texto de la etiqueta de Fecha de nacimiento
    color: '#000', // Color del texto de la etiqueta de Fecha de nacimiento
    marginLeft: 10, // Alinea el texto a la izquierda
    marginRight: 'auto', // Alinea el texto a la derecha
    fontWeight: 'normal', // Quita la negrita del texto de la etiqueta de Fecha de nacimiento
    opacity: 0.6, // Reduce la opacidad del texto de la etiqueta de Fecha de nacimiento
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Espacio adicional en la parte inferior para evitar que los campos se superpongan con el botón de registro
  },
  registerText: {
    color: 'gray',
    fontSize: 16,
  },
  registerButton: {
    marginLeft: 5,
  },
  registerButtonText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default RegisterClienteStyles;
