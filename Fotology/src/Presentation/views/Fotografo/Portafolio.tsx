import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import useViewModel from '../Profile/info/viewModel'
import { ProfileInfoScreen } from '../Profile/info/ProfileInfo';

const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  PortafolioScreen: { selectedCategory?: string };
};

type PortafolioScreenRouteProp = RouteProp<RootStackParamList, 'PortafolioScreen'>;


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
  const handleNavigateToHome = () => {
    navigation.navigate('WelcomeScreen');
  };

  

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
      <DrawerItemList {...props}  /> 
      <DrawerItem
        label="Bienvenidos"
        onPress={handleNavigateToHome}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Calificacion"
        onPress={handleNavigateToCalificacion}
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

const PortafolioScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator drawerContent={props => <WelcomeViewModel {...props} />}>
      <Drawer.Screen name="Portafolio" component={WelcomeContent} />
    </Drawer.Navigator>
  );
};

const WelcomeContent = () => {
  const navigation = useNavigation();

  const route = useRoute<PortafolioScreenRouteProp>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAdditionalBlock, setShowAdditionalBlock] = useState<boolean>(false);

  useEffect(() => {
    if (route.params?.selectedCategory) {
      addCategory(route.params.selectedCategory);
    } else {
      // Si no hay categoría seleccionada, ocultar el bloque adicional
      setShowAdditionalBlock(false);
    }
  }, [route.params?.selectedCategory]);

  const addCategory = (category: string) => {
    setSelectedCategories((prevCategories) => [...prevCategories, category]);
    setShowAdditionalBlock(true); // Mostrar el bloque adicional cuando se selecciona una categoría
  };

  const removeCategory = (category: string) => {
    setSelectedCategories((prevCategories) => prevCategories.filter((cat) => cat !== category));
    setShowAdditionalBlock(false); // Ocultar el bloque adicional cuando se elimina la categoría
  };

  const categoryImages: { [key: string]: any } = {
    'Paisajes': require('../../../../assets/paisajes.jpg'),
    'Retratos': require('../../../../assets/retrato.jpg'),
    'Moda': require('../../../../assets/moda.jpg'),
    'Alimentos': require('../../../../assets/alimentos.jpg'),
    'Eventos': require('../../../../assets/eventos.jpg'),
    'default': require('../../../../assets/viajes.jpg'),
  };

  const renderSelectedCategories = () => {
    return selectedCategories.map((category, index) => (
      <View key={index} style={PortafolioStyles.categoryContainer}>
        <Image source={categoryImages[category] || categoryImages['default']} style={PortafolioStyles.categoryImage} />
        <Text style={PortafolioStyles.categoryText}>{category}</Text>
        <View style={PortafolioStyles.categoryButtonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('CategoriaDetalleScreen' as never, { category } as never)}>
            <Text style={PortafolioStyles.categoryButton}>Abrir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeCategory(category)}>
            <Text style={PortafolioStyles.categoryButton}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  const handleBottomButtonPress = () => {
    navigation.navigate('CategoriasScreen' as never);
  };

  return (
    <ScrollView contentContainerStyle={PortafolioStyles.container}>
      <View style={PortafolioStyles.backgroundContainer}>
        <ImageBackground
          source={require('../../../../assets/Fondo1.jpg')}
          style={PortafolioStyles.backgroundImage}
          blurRadius={3}
        >
          <View style={PortafolioStyles.overlay}>
            <View style={PortafolioStyles.textContainer}>
              <Text style={PortafolioStyles.text}>Portafolio</Text>
              <Text style={PortafolioStyles.text2}>¡Crea tus categorías y publica!</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={PortafolioStyles.content}>
          {selectedCategories.length > 0 && renderSelectedCategories()}
          <TouchableOpacity style={PortafolioStyles.bottomButton} onPress={handleBottomButtonPress}>
            <Text style={PortafolioStyles.bottomButtonText}>Crear categoría</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default PortafolioScreen;
