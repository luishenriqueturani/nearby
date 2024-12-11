import { ICategories } from "@/components/categories"
import { api } from "../api"
import { Alert } from "react-native"

export async function fetchCategories(){
  try {
    const { data } = await api.get<ICategories[]>("/categories")

    //console.log(data)

    if(!data) return []

    return data

  } catch (error) {
    console.log(error)
    Alert.alert("Categorias", "Deu ruim, caralho!")
    return []
  }
}