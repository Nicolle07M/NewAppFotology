import { StyleSheet } from "react-native";
const PortafolioStyles= StyleSheet.create({

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
    content: {
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
    },
    customButtonText: {
      fontFamily: 'Homenaje', 
      fontSize: 20,
      color: 'white', 
    },
  });
  
  export default PortafolioStyles;