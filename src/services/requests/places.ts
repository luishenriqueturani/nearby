import { IPlace } from "@/components/place"
import { api } from "../api"
import { Alert } from "react-native"
import { ICategories } from "@/components/categories"


export interface PlaceProps extends IPlace {
  latitude: number;
  longitude: number;
}

export async function fetchPlaces(selectedCategory?: ICategories){
  try {
    if(!selectedCategory) return []
    
    const { data } = await api.get<PlaceProps[]>(`/markets/category/${selectedCategory?.id}`)

    //console.log(data) 

    return data
  } catch (error) {
    console.log(error)
    Alert.alert("Locais", "Deu ruim, caralho!")
    return []
  }
}