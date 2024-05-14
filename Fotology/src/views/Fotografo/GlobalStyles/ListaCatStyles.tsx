import { StyleSheet } from "react-native";

const ListaCatStyles = StyleSheet.create({

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
    fontSize: 30,
    color: 'white',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  customText: {
    fontSize: 22,
    color: 'gray',
    marginBottom: 5, 
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    marginRight: 20,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'cover',
  },
  textButtonContainer: {
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center', 
  },
  secondaryText: {
    fontSize: 20,
    color: 'gray',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 25, 
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ListaCatStyles;

