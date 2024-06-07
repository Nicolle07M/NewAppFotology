import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image, Button} from 'react-native';
import styles from './GlobalStyles/WelcomeClienteStyles';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const WelcomeClienteScreen = () => {
  const navigation = useNavigation();


  const navigateToContactoClienteScreen = () => {
    navigation.navigate('ContactoClienteScreen' as never);
  };  

  const navigateFotografosClienteScreen = () => {
    navigation.navigate('FotografosClienteScreen' as never);
  };

  const navigateWelcomeClienteScreen = () => {
    navigation.navigate('WelcomeClienteScreen' as never);
  };

  const navigatePerfilClienteScreen = () => {
    navigation.navigate('PerfilClienteScreen' as never);
  };


  const handleLoginPress = () => {
    navigation.navigate('HomeScreen' as never);
  };


  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../../../../assets/Fondo1.jpg')}
          style={styles.backgroundImage}
          blurRadius={3}
        >
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>¡Hola Nat!</Text>
              <Text style={styles.text2}>Esto es Fotology</Text>
            </View>
          </View>
          {/* Header */}
          <View style={styles.header}>
          <TouchableOpacity onPress={navigateWelcomeClienteScreen}>
              <Text style={styles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateFotografosClienteScreen}>
              <Text style={styles.headerButton}>Fotografos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToContactoClienteScreen}>
              <Text style={styles.headerButton}>Contacto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigatePerfilClienteScreen}>
              <Text style={styles.headerButton}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.headerButton}>Cerrar Seion</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.orangeLine} />
      <Text style={styles.title2}>Fotógrafos Destacados</Text> 
      <View style={styles.orangeLine} />
      </View>
      <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/foto1.jpg')} style={styles.foto}/> 
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
         <Image source={require('../../../../assets/foto5.jpg')} style={styles.foto}/> 
          <View style={styles.foto}><Text style={styles.username}>Alexis M.</Text></View>
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
         <Image source={require('../../../../assets/foto3.jpg')} style={styles.foto}/> 
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
     
      <View style={styles.orangeLine} />

    </ScrollView>


  );
};

export default WelcomeClienteScreen;