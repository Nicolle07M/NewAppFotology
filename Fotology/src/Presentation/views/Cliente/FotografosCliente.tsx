import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image, Button, TextInput} from 'react-native';
import styles from './GlobalStyles/FotografoStyle';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MadeScreen from './made';


const Drawer = createDrawerNavigator();

const FotografosClienteScreen = () => {
  const navigation = useNavigation();


  const navigateToContactoClienteScreen = () => {
    navigation.navigate('ContactoClienteScreen' as never);
  };  

  const navigateWelcomeClienteScreen = () => {
    navigation.navigate('WelcomeClienteScreen' as never);
  };

 

  const navigateFotografosClienteScreen = () => {
    navigation.navigate('FotografosClienteScreen' as never);
  };

  const navigateMadeScreen = () => {
    navigation.navigate('MadeScreen' as never);
  };

  const navigateAlexisScreen = () => {
    navigation.navigate('AlexisScreen' as never);
  };

  const handleLoginPress = () => {
    navigation.navigate('HomeScreen' as never);
  };

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    // Implementamos la lógica de búsqueda
    const filteredResults = filtrarFotografos(searchText);
    setSearchResults(filteredResults);
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
              <Text style={styles.text}>¡Los mejores!</Text>
              <Text style={styles.text2}>Fotógrafos</Text>
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

            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.headerButton}>Cerrar Seion</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
         {/* Input para buscar fotógrafo */}
         <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Buscar fotógrafo"
        value={searchText}
        onChangeText={(text) => setSearchText(text)} // Actualiza el estado del texto de búsqueda
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
        <View style={styles.orangeLine} />
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
            <Text style={{ margin: 5, color: 'grey', fontSize: 15 }}>5,0</Text>
          </View>
          <Text style={styles.comentario}>
           Eventos, Moda, Retratos, Alimentos
          </Text>
          <TouchableOpacity onPress={navigateMadeScreen} style={styles.searchButton2}>
          <Text style={styles.searchButtonText}>Ver Perfil</Text>
          </TouchableOpacity>
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
            <Text style={{ margin: 5, color: 'grey', fontSize: 15 }}>5,0</Text>
          </View>
          <Text style={styles.comentario}>
           Viajes, Eventos, Retratos, Animales
          </Text>
          <TouchableOpacity onPress={navigateAlexisScreen} style={styles.searchButton2}>
          <Text style={styles.searchButtonText}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/foto6.jpg')} style={styles.foto}/> 
          <View style={styles.foto}><Text style={styles.username}>Paula B.</Text></View>
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
            <Ionicons name="star-outline" size={25} color={'#FFD700'} />
            <View style={styles.ratingButton}></View>
            <Ionicons name="star-outline" size={25} color={'#FFD700'} />
            <Text style={{ margin: 5, color: 'grey', fontSize: 15 }}>2,9</Text>
          </View>
          <Text style={styles.comentario}>
          Eventos
          </Text>
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton2}>
          <Text style={styles.searchButtonText}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
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
            <Text style={{ margin: 5, color: 'grey', fontSize: 15 }}>5,0</Text>
          </View>
          <Text style={styles.comentario}>
           Eventos, Retratos, Alimentos
          </Text>
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton2}>
          <Text style={styles.searchButtonText}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      
      
    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/foto4.jpg')} style={styles.foto}/> 
          <View style={styles.foto}><Text style={styles.username}>Sosa P.</Text></View>
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
            <Text style={{ margin: 5, color: 'grey', fontSize: 15 }}>4,8</Text>
          </View>
          <Text style={styles.comentario}>
           Paisajes, Eventos, Viajes, Moda
          </Text>
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton2}>
          <Text style={styles.searchButtonText}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


    <View style={styles.container}>
      <View style={styles.comentarioContainer}>
        <View style={styles.fotoContainer}>
         <Image source={require('../../../../assets/foto2.jpg')} style={styles.foto}/> 
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
            <Ionicons name="star-outline" size={25} color={'#FFD700'} />
            <Text style={{ margin: 5, color: 'grey', fontSize: 15 }}>4,0</Text>
          </View>
          <Text style={styles.comentario}>
           Eventos, Retratos, Alimentos
          </Text>
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton2}>
          <Text style={styles.searchButtonText}>Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
     
      <View style={styles.orangeLine} />

    </ScrollView>


  );
};

export default FotografosClienteScreen;