import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      params: { geoLocation },
    },
  } = useRoute();
  const [photoLocation, setPhotoLocation] = useState(
    geoLocation ? geoLocation : null
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPhotoLocation(coords);
    })();
  }, []);
  const handleReturnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerFullView}>
      <TouchableOpacity onPress={handleReturnPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
        {/* <Text>BACK</Text> */}
        </TouchableOpacity>
      <MapView
        style={styles.mapStyles}
        region={{
          ...photoLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {photoLocation && (
          <Marker
            title="Локація фотографії"
            coordinate={photoLocation}
            description="Локація"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFullView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyles: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
