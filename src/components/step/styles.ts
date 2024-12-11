import { StyleSheet } from "react-native";

import { fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    flexDirection: "row",
  },
  wrapper: {
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
  }
})
