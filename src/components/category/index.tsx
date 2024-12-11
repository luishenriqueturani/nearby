import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";


interface CategoryProps extends PressableProps {
  iconId: string;
  isSelected?: boolean;
  name: string;
}

export function Category({ iconId, isSelected = false, name, ...rest }: CategoryProps) {

  const Icon = categoriesIcons[iconId]

  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon
        size={24}
        color={isSelected ? colors.gray[100] : colors.gray[400]}
      />
      <Text
        style={[styles.name, isSelected && styles.nameSelected]}
      >
        {name}
      </Text>
    </Pressable>
  )
}
