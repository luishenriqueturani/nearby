import { FlatList, View } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";


export type ICategories = {
  id: string;
  name: string;
}

interface CategoryProps {
  data: ICategories[];
  onSelect: (category: ICategories) => void;
  selectedCategory?: ICategories;
}

export function Categories({ data, onSelect, selectedCategory }: CategoryProps) {
  return (
    <FlatList 
      data={data}
      renderItem={({ item }) => (
        <Category 
          iconId={item.id} 
          name={item.name}  
          onPress={() => onSelect(item)}
          isSelected={selectedCategory && item.id === selectedCategory.id}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )
}
