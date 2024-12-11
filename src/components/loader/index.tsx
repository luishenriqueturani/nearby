import { ActivityIndicator, View } from "react-native";

import {colors} from "@/styles/theme"
import { styles } from "./styles";

export function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.green.base} />
    </View>
  )
}
