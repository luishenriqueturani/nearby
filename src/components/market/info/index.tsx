import { IconProps } from "@tabler/icons-react-native"
import React from "react"
import { Text, View } from "react-native"
import { styles } from "./styles"


interface InfoProps {
  description: string
  icon: React.ComponentType<IconProps>
}
 
export function Info({ description, icon: Icon }: InfoProps) {
  return (
    <View
      style={ styles.container }
    >
      <Icon size={16} color="black" />
      <Text style={styles.text}>{ description }</Text>
    </View>
  )
}

