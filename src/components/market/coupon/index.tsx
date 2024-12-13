
import { Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";



interface CouponProps {
  code: string
}

export function Coupon({ code }: CouponProps) {
  return (
    <View 
      style={styles.container}
    >
      <Text style={styles.title}>Utilize este cupom</Text>

      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  )
}

