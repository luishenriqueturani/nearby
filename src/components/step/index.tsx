import { Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { IconProps } from "@tabler/icons-react-native";
import {colors} from "@/styles/theme" 

interface StepProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>
}

export function Step({title, description, icon: Icon}: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}