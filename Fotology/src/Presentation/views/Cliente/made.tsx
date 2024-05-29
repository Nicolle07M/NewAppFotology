import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert, Text, Linking, ImageBackground, ScrollView, TouchableOpacity, Image, Button, TextInput} from 'react-native';
import styles from './GlobalStyles/madeStyles';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();



const MadeScreen = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
  const navigation = useNavigation();

  const navigateEventoScreen = () => {
    navigation.navigate('EventoScreen' as never);
  };

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
          source={require('../../../../assets/foto3.jpg')}
          style={styles.backgroundImage}
          blurRadius={3}
        >
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Made Rincón.</Text>
              
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="star" size={25} color={'#FFD700'} />
                <Ionicons name="star" size={25} color={'#FFD700'} />
                <Ionicons name="star" size={25} color={'#FFD700'} />
                <Ionicons name="star" size={25} color={'#FFD700'} />
                <Ionicons name="star" size={25} color={'#FFD700'} />
              </View>
              <Text style={styles.text2}>Top 3</Text>
            </View>
          </View>
    
        </ImageBackground>
        
      <Text style={styles.title2}>Contactame</Text> 
     
      <View style={styles.iconContainer}>
      <View style={{ marginTop: -20 }}><Text>Facebook </Text></View>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Image source={require('../../../../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={{ marginTop: -20 }}><Text>Gmail </Text></View>
        <TouchableOpacity onPress={handleGmailPress}>
          <Image source={require('../../../../assets/gmail.png')} style={styles.icon2} />
        </TouchableOpacity>
        <View style={{ marginTop: -20 }}><Text>Instagram </Text></View>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Image source={require('../../../../assets/instagram.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={{ marginTop: -20 }}><Text>Twtter </Text></View>
        <TouchableOpacity onPress={handleTwitterPress}>
          <Image source={require('../../../../assets/twtter.png')} style={styles.icon2} />
        </TouchableOpacity>
      </View>

      <View style={styles.orangeLine} />
      <Text style={styles.title2}>Categorias</Text> 


      <View style={styles.container}>
  {/* Contenedor superior */}
  <View style={styles.rowContainer}>
  <View style={styles.comentarioContainer}>
  <View style={styles.fotoContainer}>
    <Image source={require('../../../../assets/event.jpg')} style={styles.foto}/> 
    <View style={styles.foto}>
      <TouchableOpacity onPress={navigateEventoScreen} style={styles.searchButton2}>
        <Text style={styles.searchButtonText}>Eventos</Text>
      </TouchableOpacity>
    </View>
  </View>    
</View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/mod.jpg')} style={styles.foto}/> 
        <View style={styles.foto}><TouchableOpacity style={styles.searchButton2}>
        <Text style={styles.searchButtonText}>Moda</Text>
      </TouchableOpacity></View>
      </View>    
    </View>
  </View>

  {/* Contenedor inferior */}
  <View style={styles.rowContainer}>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/retra.jpg')} style={styles.foto}/> 
        <View style={styles.foto}><TouchableOpacity style={styles.searchButton2}>
        <Text style={styles.searchButtonText}>Retratos</Text>
      </TouchableOpacity></View>
      </View>    
    </View>
    <View style={styles.comentarioContainer}>
      <View style={styles.fotoContainer}>
        <Image source={require('../../../../assets/comida.jpg')} style={styles.foto}/> 
        <View style={styles.foto}><TouchableOpacity style={styles.searchButton2}>
        <Text style={styles.searchButtonText}>Alimentos</Text>
      </TouchableOpacity></View>
      </View>    
    </View>
  </View>
</View>
    </View>

    <View style={styles.orangeLine} />
      <Text style={styles.title2}>Calificaciones</Text> 

      <View style={styles.container}>
      <View style={styles.comentarioContainer2}>
        <View style={styles.fotoContainer2}>
         <Image source={require('../../../../assets/nat.jpg')} style={styles.foto}/> 
          <View style={styles.foto2}></View>
        </View>
        <View style={styles.infoContainer}>      
          <View style={styles.ratingContainer}>
          <Text style={styles.username}>natsn_19         </Text>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
          </View>
          <Text style={styles.comentario2}>
          Muy buen servicio en general. Las fotos quedaron geniales, aunque hubo algunos pequeños detalles que podrían mejorar.
          </Text>
          <Text style={styles.tiempo}>Hace 3 minutos</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer2}>
        <View style={styles.fotoContainer2}>
         <Image source={require('../../../../assets/karen.jpg')} style={styles.foto}/> 
          <View style={styles.foto2}></View>
        </View>
        <View style={styles.infoContainer}>      
          <View style={styles.ratingContainer}>
          <Text style={styles.username}>karnVera         </Text>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
          </View>
          <Text style={styles.comentario2}>
            Increíble tu trabajo, me encantó mucho. Muy recomendado, gracias por captar los mejores momentos de mi vida.
          </Text>
          <Text style={styles.tiempo}>Hace 59 minutos</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer2}>
        <View style={styles.fotoContainer2}>
         <Image source={require('../../../../assets/camilo.jpg')} style={styles.foto}/> 
          <View style={styles.foto2}></View>
        </View>
        <View style={styles.infoContainer}>      
          <View style={styles.ratingContainer}>
          <Text style={styles.username}>camiloRgz      </Text>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
          </View>
          <Text style={styles.comentario2}>
            Increíble tu trabajo, me encantó mucho, oistes. Muy recomendado a todos los socitos que pillen este perfil, la re buena y bendiciones paraz todos, no olviden bañarse.
          </Text>
          <Text style={styles.tiempo}>Hace 15 horas</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer2}>
        <View style={styles.fotoContainer2}>
         <Image source={require('../../../../assets/mario.jpg')} style={styles.foto}/> 
          <View style={styles.foto2}></View>
        </View>
        <View style={styles.infoContainer}>      
          <View style={styles.ratingContainer}>
          <Text style={styles.username}>marioprapra      </Text>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
          </View>
          <Text style={styles.comentario2}>
            Me encanto tu trabajo, gracias por todo, esas fotos bañandome quedaron increibles, asi compruebo que si me bañe hoy.
          </Text>
          <Text style={styles.tiempo}>Hace 23 horas</Text>
        </View>
      </View>
    </View>



    <TouchableOpacity style={styles.searchButton2}>
        <Text style={styles.searchButtonText}>VER MÁS</Text>
      </TouchableOpacity>

    <View style={styles.orangeLine} />
    <Text style={styles.title2}>Calificame</Text> 

    <View style={styles.container3}>
  <View style={styles.ratingContainer3}>
    <TouchableOpacity style={[styles.ratingButton3, rating >= 1 && styles.selected3]} onPress={() => handleRating(1)}>
      <Ionicons name="star" size={50} color={rating >= 1 ? '#FFD700' : '#ccc'} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.ratingButton3, rating >= 2 && styles.selected3]} onPress={() => handleRating(2)}>
      <Ionicons name="star" size={50} color={rating >= 2 ? '#FFD700' : '#ccc'} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.ratingButton3, rating >= 3 && styles.selected3]} onPress={() => handleRating(3)}>
      <Ionicons name="star" size={50} color={rating >= 3 ? '#FFD700' : '#ccc'} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.ratingButton3, rating >= 4 && styles.selected3]} onPress={() => handleRating(4)}>
      <Ionicons name="star" size={50} color={rating >= 4 ? '#FFD700' : '#ccc'} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.ratingButton3, rating >= 5 && styles.selected3]} onPress={() => handleRating(5)}>
      <Ionicons name="star" size={50} color={rating >= 5 ? '#FFD700' : '#ccc'} />
    </TouchableOpacity>
  </View>
  <TextInput
    style={styles.commentInput3}
    value={comment}
    onChangeText={setComment}
    placeholder="Escribe un comentario (opcional)"
    multiline
  />
  <TouchableOpacity style={styles.submitButton3} onPress={handleSubmit}>
    <Text style={styles.submitButtonText3}>Enviar Calificación</Text>
  </TouchableOpacity>
</View>




    </ScrollView>


  );
};

export default MadeScreen;