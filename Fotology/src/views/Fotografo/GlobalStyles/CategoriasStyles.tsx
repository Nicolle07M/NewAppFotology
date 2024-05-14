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
});

export default CategoriasStyles;
