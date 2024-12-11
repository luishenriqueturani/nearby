import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    gap: 26,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.gray[600],
  },
  description: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  icon: {
    height: 48,
    width: 48,
  },
  wrapper: {
    gap: 16,
  }
});
