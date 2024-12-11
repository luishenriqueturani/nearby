import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.green.base,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray[100],
  },
})
