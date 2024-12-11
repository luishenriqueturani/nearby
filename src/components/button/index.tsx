import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import React from "react";


interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? 
        <ActivityIndicator size="small" color={colors.gray[100]} />
      :
        children
      }
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  )
}


interface IconProps {
  icon : React.ComponentType<TablerIconProps>
}

function Icon({icon: Icon, ...rest}: IconProps) {
  return (
    <Icon size={24} color={colors.gray[100]} {...rest} />
  )
}

Button.Title = Title
Button.Icon = Icon

export { Button }
