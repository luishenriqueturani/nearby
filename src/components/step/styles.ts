import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    flexDirection: "row",
    width: "100%",
  },
  wrapper: {
    gap: 8,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  }
})
