import { StyleSheet } from "react-native";
const CategoriasStyles= StyleSheet.create({

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
      fontFamily: 'Homenaje',
      fontSize: 20,
      color: 'white',
      marginRight: 5,
    },
    symbolText: {
      fontFamily: 'Homenaje',
      fontSize: 20,
      color: 'white',
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
      borderBottomColor: 'white',
      marginLeft: 10,
      marginRight: 10,
    },
    listItem: {
      fontFamily: 'Homenaje',
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
      fontFamily: 'Homenaje',
      fontSize: 20,
      color: 'white',
    },
  });
  export default CategoriasStyles;