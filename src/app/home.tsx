import { Categories, ICategories } from "@/components/categories";
import { IPlace } from "@/components/place";
import { Places } from "@/components/places";
import { fetchCategories } from "@/services/requests/categories";
import { fetchPlaces } from "@/services/requests/places";
import { useEffect, useState } from "react";
import { View } from "react-native";


export default function Home() {
  const [ categories, setCategories ] = useState<ICategories[]>([])

  const [places, setPlaces] = useState<IPlace[]>([])

  const [ selectedCategory, setSelectedCategory ] = useState<ICategories>()


  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data)
      setSelectedCategory(data[0])
    })

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

      <Places data={places} />
    </View>
  );
}
