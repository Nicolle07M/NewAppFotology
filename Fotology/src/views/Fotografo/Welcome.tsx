import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './GlobalStyles/WelcomeStyle';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const navigateToContactoScreen = () => {
    navigation.navigate('ContactoScreen' as never);
  };  

  const navigatePerfilScreen = () => {
    navigation.navigate('PerfilScreen' as never);
  };  

  const navigatePortafolioScreen = () => {
    navigation.navigate('PortafolioScreen' as never);
  };  
  const navigateCategoriasScreen = () => {
    navigation.navigate('CategoriasScreen' as never);
  };  


  const navigateWelcomeScreen = () => {
    navigation.navigate('WelcomeScreen' as never);
  };
  const navigateCalificacionScreen = () => {
    navigation.navigate('CalificacionScreen' as never);
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      

      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../../../assets/Fondo1.jpg')}
          style={styles.backgroundImage}
          blurRadius={3}
        >
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>¡Bienvenido!</Text>
              <Text style={styles.text2}>Fotology</Text>
            </View>
          </View>
          {/* Header */}
          <View style={styles.header}>
          <TouchableOpacity onPress={navigateWelcomeScreen}>
              <Text style={styles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress= {navigatePortafolioScreen}>
              <Text style={styles.headerButton}>Portafolio</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateCalificacionScreen}>
              <Text style={styles.headerButton}>Calificación</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToContactoScreen}>
              <Text style={styles.headerButton}>Contacto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={navigatePerfilScreen}>
              <Text style={styles.headerButton}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text style={styles.description2}>
        Fotografos destacados del mes
      </Text>
      <View style={styles.orangeLine} />
      </View>
      <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../assets/foto1.jpg')} style={styles.foto}/> 
          <View style={styles.foto}><Text style={styles.username}>Camila S.</Text></View>
        </View>    
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          ¡Absolutamente impresionante! Cada imagen que captura esta fotógrafa es una obra maestra. Su habilidad para jugar con la luz y la composición es simplemente asombrosa. No puedo dejar de admirar su talento.
          </Text>
          <Text style={styles.tiempo}>Top 1</Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../assets/foto2.jpg')} style={styles.foto}/> 
          <View style={styles.foto}><Text style={styles.username}>Andres C.</Text></View>
        </View>    
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          Este fotógrafo redefine constantemente los límites de la creatividad. Sus fotos son una mezcla perfecta de innovación y emoción. Cada imagen cuenta una historia única y te sumerge en un mundo de belleza y asombro.
          </Text>
          <Text style={styles.tiempo}>Top 2</Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../assets/foto3.jpg')} style={styles.foto}/> 
          <View style={styles.foto}><Text style={styles.username}>Made R.</Text></View>
        </View>    
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={25} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          Las fotografías de esta artista urbano son verdaderamente inspiradoras. Con una mirada perspicaz, captura la esencia de la vida en la ciudad de una manera que te deja sin aliento. Su trabajo nos recuerda la belleza que se puede encontrar en lo cotidiano.
          </Text> 
          <Text style={styles.tiempo}>Top 3</Text>
        </View>
      </View>
    </View>
      <Text style={styles.description}>
        Estamos aquí para brindarte la asistencia que necesitas para aprovechar al máximo nuestro sitio web de fotografía. Si tienes alguna pregunta o problema, ¡no dudes en ponerte en contacto con nosotros.
      </Text>
      <View style={styles.orangeLine} />

      <Text style={styles.title2}>Categorías de Fotografía</Text>
      <Text style={styles.description}>
        En nuestro sitio web, ofrecemos una amplia variedad de categorías de fotografía para que puedas explorar y disfrutar. Desde paisajes hasta retratos, tenemos algo para todos los amantes de la fotografía.
      </Text>
      <View style={styles.orangeLine} />

      <Text style={styles.title2}>Fotógrafos Destacados</Text>
      <Text style={styles.description}>
        De igual manera también tenemos una sección en la cual se dan a conocer los fotógrafos que han sido destacados durante el mes.
      </Text>
      <View style={styles.orangeLine} />
      <Text style={styles.title2}>Preguntas Frecuentes</Text>
      <Text style={styles.description}>
        ¿Cómo subir mis propias fotos?
        Inicia sesión en tu cuenta.
        Ve a tu perfil.
        Haz clic en "Subir Foto".
        Selecciona la imagen que deseas cargar desde tu dispositivo.
        Agrega metadatos y categorías.
      </Text>

      <Text style={styles.description}>
        ¡Listo! Tu foto estará disponible para que otros la vean.
      </Text>

      <View style={styles.orangeLine} />
      <Text style={styles.description}>
        Si experimentas problemas técnicos mientras usas nuestro sitio web, asegúrate de que tu navegador esté actualizado y que estés utilizando una conexión a Internet estable. Si el problema persiste, no dudes en contactarnos para obtener ayuda adicional.
      </Text>
      <Text style={styles.description3}>
        ¡Gracias por ser parte de nuestra comunidad de fotógrafos! Estamos aquí para apoyarte en tu viaje fotográfico.
      </Text>
    </ScrollView>


  );
};




export default WelcomeScreen;