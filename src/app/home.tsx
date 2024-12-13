import { Categories, ICategories } from "@/components/categories";
import MapView, { Callout, Marker } from "react-native-maps";
import { Places } from "@/components/places";
import { fetchCategories } from "@/services/requests/categories";
import { fetchPlaces, PlaceProps } from "@/services/requests/places";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import * as Location from 'expo-location';
import { fontFamily, colors } from "@/styles/theme";
import { router } from "expo-router";


const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

export default function Home() {
  const [categories, setCategories] = useState<ICategories[]>([])

  const [places, setPlaces] = useState<PlaceProps[]>([])

  const [selectedCategory, setSelectedCategory] = useState<ICategories>()


  async function getCurrentLocation() {
      
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      Alert.alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    //setLocation(location);
  }

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data)
      setSelectedCategory(data[0])
    })

    //getCurrentLocation()

  }, [])

  useEffect(() => {
    fetchPlaces(selectedCategory).then(setPlaces)
  }, [selectedCategory])

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        data={categories}
        onSelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker 
          identifier="current"
          coordinate={currentLocation}
          image={require("@/assets/location.png")}
        />

        {places.map((place) => (
          <Marker
            key={place.id}
            identifier={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            image={require("@/assets/pin.png")}
          >
            <Callout
              onPress={() => {
                router.navigate(`/market/${place.id}`)
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: fontFamily.medium ,
                    color: colors.gray[600],
                  }}
                >
                  {place.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: fontFamily.regular ,
                    color: colors.gray[600],
                  }}
                >
                  {place.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Places data={places} />
    </View>
  );
}
