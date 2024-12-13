import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.green.base,
    height: 56,
    maxHeight: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 12,
    flexDirection: "row"
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  }
})