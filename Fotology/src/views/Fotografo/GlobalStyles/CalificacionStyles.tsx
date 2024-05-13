import { StyleSheet } from "react-native";
const CalificacionStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    ratingContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    ratingButton: {
      marginRight: 10,
    },
    selected: {
      opacity: 1,
    },
    commentInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: '100%',
      minHeight: 100,
    },
    submitButton: {
      backgroundColor: '#FFD700',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    submitButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    
  });
export default CalificacionStyles;
  