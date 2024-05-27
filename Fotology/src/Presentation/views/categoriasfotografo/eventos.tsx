import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert, Text, Linking, ImageBackground, ScrollView, TouchableOpacity, Image, Button, TextInput} from 'react-native';
import styles from './GlobalStyles/eventosStyles';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();



const EventoScreen = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
  const navigation = useNavigation();

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



  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/nataly.rincon.5205?mibextid=LQQJ4d');
  };

  const handleGmailPress = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/naatsn1?igsh=MTk0dW1lZzI0Y2JieQ%3D%3D&utm_source=qr');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://x.com/marioventura_?s=11');
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../../../../assets/event.jpg')}
          style={styles.backgroundImage}
          blurRadius={3}
        >
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Categoria</Text>
              <Text style={styles.text2}>Eventos</Text>
            </View>
          </View>
    
        </ImageBackground>


      <View style={styles.orangeLine} />
      <Text style={styles.title2}>Publicaciones</Text> 


      <View style={styles.container}>
  {/* Contenedor superior */}
  <View style={styles.rowContainer}>
  <View style={styles.comentarioContainer}>
  <View style={styles.fotoContainer}>
    <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
    <View style={styles.foto}>
      
    </View>
  </View>    
</View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
  </View>

  {/* Contenedor inferior */}
  <View style={styles.rowContainer}>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
  </View>
</View>

<View style={styles.container}>
  {/* Contenedor superior */}
  <View style={styles.rowContainer}>
  <View style={styles.comentarioContainer}>
  <View style={styles.fotoContainer}>
    <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
    <View style={styles.foto}>
      
    </View>
  </View>    
</View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
  </View>

  {/* Contenedor inferior */}
  <View style={styles.rowContainer}>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
  </View>
</View>


<View style={styles.container}>
  {/* Contenedor superior */}
  <View style={styles.rowContainer}>
  <View style={styles.comentarioContainer}>
  <View style={styles.fotoContainer}>
    <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
    <View style={styles.foto}>
      
    </View>
  </View>    
</View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
  </View>

  {/* Contenedor inferior */}
  <View style={styles.rowContainer}>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
        <View style={styles.foto}></View>
      </View>    
    </View>
  </View>
</View>

    </View>

    <View style={styles.orangeLine} />
    </ScrollView>
  );
};

export default EventoScreen;