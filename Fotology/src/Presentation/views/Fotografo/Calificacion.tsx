import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, ImageBackground } from 'react-native';
import styles from './GlobalStyles/CalificacionStyles'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importa el icono de Ionicons
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import useViewModel from '../Profile/info/viewModel'


const WelcomeViewModel = (props: DrawerContentComponentProps) => {
  const { navigation } = props; // Desestructura navigation de las props
  const { removeSession } = useViewModel();
  
  const handleLogout = () => {
    removeSession();
    navigation.navigate('HomeScreen');
  };

  const handleNavigateToCalificacion = () => {
    navigation.navigate('CalificacionScreen');
  };
  const handleNavigateToContacto = () => {
    navigation.navigate('ContactoScreen');
  };
  const handleNavigateToPerfil = () => {
    navigation.navigate('PerfilScreen');
  };
  const handleNavigateToPortafolio = () => {
    navigation.navigate('PortafolioScreen');
  };
  const handleNavigateToHome = () => {
    navigation.navigate('WelcomeScreen');
  };

  

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
      <DrawerItemList {...props}  /> 
      <DrawerItem
        label="Home"
        onPress={handleNavigateToHome}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Portafolio"
        onPress={handleNavigateToPortafolio}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Contacto"
        onPress={handleNavigateToContacto}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Perfil"
        onPress={handleNavigateToPerfil}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Cerrar Sesión"
        onPress={handleLogout}
        labelStyle={{ color: 'black' }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const CalificacionScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator drawerContent={props => <WelcomeViewModel {...props} />} >
      <Drawer.Screen name="Calificacion" component={WelcomeContent} />
    </Drawer.Navigator>
  );
};

const WelcomeContent = () => {
  const navigation = useNavigation();



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
            <Text style={styles.text}>Fotógrafo</Text>
            <Text style={styles.text2}>Estas son tus calificaciones</Text>
          </View>
        </View>
      </ImageBackground>
      </View>
    
      <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/nat.jpg')} style={styles.foto}/> 
          <View style={styles.foto}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>natsn_19</Text>
          <View style={styles.ratingContainer}>
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
          <Text style={styles.comentario}>
            Increíble tu trabajo, me encantó mucho. Muy recomendado, gracias por captar los mejores momentos de mi vida.
          </Text>
          <Text style={styles.tiempo}>Hace 3 minutos</Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/nicolle.jpg')} style={styles.foto}/> 
          <View style={styles.foto}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>nicolle07</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          El servicio fue aceptable. Las fotos estuvieron bien, pero esperaba un poco más de creatividad en la composición.
          </Text>
          <Text style={styles.tiempo}>Hace 47 minutos</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/erik.jpg')} style={styles.foto}/> 
          <View style={styles.foto}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>cerik09</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          Una experiencia terrible. Las fotos fueron de muy mala calidad y el fotógrafo parecía desinteresado en mi evento. Definitivamente no lo recomendaría.
          </Text>
          <Text style={styles.tiempo}>Hace 10 horas</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/mario.jpg')} style={styles.foto}/> 
          <View style={styles.foto}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>mariopra</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          No quedé muy satisfecho con el resultado. Las fotos no cumplían mis expectativas y la comunicación durante la sesión fue escasa.
          </Text>
          <Text style={styles.tiempo}>hace 20 horas</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/camilo.jpg')} style={styles.foto}/> 
          <View style={styles.foto}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>CamiloRgz8</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star" size={15} color={'#FFD700'} />
          </View>
          <Text style={styles.comentario}>
          Muy buen servicio en general. Las fotos quedaron geniales, aunque hubo algunos pequeños detalles que podrían mejorar.
          </Text>
          <Text style={styles.tiempo}>Hace 5 días</Text>
        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/aleja.jpg')} style={styles.foto}/> 
          <View style={styles.foto}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>aleja5962</Text>
          <View style={styles.ratingContainer}>
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
          </View>
          <Text style={styles.comentario}>
          ¡Increíble trabajo! Me encantaron las fotos, definitivamente volveré a contratarte para futuros eventos.
          </Text>
          <Text style={styles.tiempo}>Hace 2 meses</Text>
        </View>
      </View>
    </View>

    
  </ScrollView>


    
  );
};


export default CalificacionScreen;
