import { StyleSheet } from "react-native";

import { fontFamily, colors } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  }
})
