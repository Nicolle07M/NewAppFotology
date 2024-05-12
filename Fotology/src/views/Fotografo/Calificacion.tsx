import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa el icono de Ionicons

const CalificacionScreen = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert('Error', 'Por favor, selecciona una calificación.');
    } else {
      // Aquí puedes enviar la calificación y el comentario a la base de datos
      console.log('Calificación:', rating);
      console.log('Comentario:', comment);
      // También puedes reiniciar los estados después de enviar la calificación si es necesario
      setRating(0);
      setComment('');
      Alert.alert('Éxito', '¡Tu calificación ha sido enviada!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calificar Fotógrafo</Text>
      <View style={styles.ratingContainer}>
        <TouchableOpacity style={[styles.ratingButton, rating >= 1 && styles.selected]} onPress={() => handleRating(1)}>
          <Ionicons name="star" size={24} color={rating >= 1 ? '#FFD700' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ratingButton, rating >= 2 && styles.selected]} onPress={() => handleRating(2)}>
          <Ionicons name="star" size={24} color={rating >= 2 ? '#FFD700' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ratingButton, rating >= 3 && styles.selected]} onPress={() => handleRating(3)}>
          <Ionicons name="star" size={24} color={rating >= 3 ? '#FFD700' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ratingButton, rating >= 4 && styles.selected]} onPress={() => handleRating(4)}>
          <Ionicons name="star" size={24} color={rating >= 4 ? '#FFD700' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ratingButton, rating >= 5 && styles.selected]} onPress={() => handleRating(5)}>
          <Ionicons name="star" size={24} color={rating >= 5 ? '#FFD700' : '#ccc'} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.commentInput}
        value={comment}
        onChangeText={setComment}
        placeholder="Escribe un comentario (opcional)"
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Calificación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CalificacionScreen;
