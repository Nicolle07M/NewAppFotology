import React from 'react';
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  openGallery: () => void,
  openCamera: () => void,
  modalUseState: boolean,
  setModalUseState: React.Dispatch<React.SetStateAction<boolean>>,
}

const ModalPickImage = ({ openGallery, openCamera, setModalUseState, modalUseState }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalUseState}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalUseState(!modalUseState);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Seleccione una opción</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openGallery();
              setModalUseState(false);
            }}
          >
            <Text style={styles.buttonText}>Galería</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openCamera();
              setModalUseState(false);
            }}
          >
            <Text style={styles.buttonText}>Cámara</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalView: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff9900',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalPickImage;
