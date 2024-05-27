import { StyleSheet } from "react-native";
const RetratosStyles = StyleSheet.create({
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
  });
  

export default RetratosStyles;
