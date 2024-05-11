import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import styles from './WelcomeStyle';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const navigateToContactoScreen = () => {
    navigation.navigate('ContactoScreen');
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
        </ImageBackground>
      </View>

      <Text style={styles.description2}>
        Con nuestro aplicativo esperamos ayudar a fotógrafos emergentes, dándoles una opción de publicidad, haciendo conocer su perfil y sus proyectos, puesto que sabemos que la tarea del inicio en cualquier ámbito no es fácil y de igual manera el arte de la fotografía no es muy apoyado.
      </Text>
      <View style={styles.orangeLine} />

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

      <Text style={styles.title2}>Contacto</Text>
      <Text style={styles.description}>
        ¿Necesitas contactarnos? Estamos aquí para ayudarte. Puedes comunicarte con nosotros de las siguientes maneras:
      </Text>
      <Text style={styles.description}>
        Correo electrónico: correo@tusitio.com
      </Text>
      <Text style={styles.description}>
        Teléfono: +1234567890
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

      <Text style={styles.description}>
        ¿Cómo eliminar mi cuenta?
        Inicia sesión en tu cuenta
        Ve a tu configuración de cuenta.
        Busca la opción "Eliminar cuenta".
        Confirma tu decisión.
      </Text>
      <Text style={styles.description}>
        Tu cuenta se eliminará permanentemente.
      </Text>

      <View style={styles.orangeLine} />
      <Text style={styles.description}>
        Si experimentas problemas técnicos mientras usas nuestro sitio web, asegúrate de que tu navegador esté actualizado y que estés utilizando una conexión a Internet estable. Si el problema persiste, no dudes en contactarnos para obtener ayuda adicional.
      </Text>
      <Text style={styles.description3}>
        ¡Gracias por ser parte de nuestra comunidad de fotógrafos! Estamos aquí para apoyarte en tu viaje fotográfico.
      </Text>
      <TouchableOpacity onPress={navigateToContactoScreen} style={styles.button}>
        <Text style={styles.buttonText}>Contacto</Text>
      </TouchableOpacity>

    </ScrollView>


  );
};




export default WelcomeScreen;
