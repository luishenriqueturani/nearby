import { Image, Text, View } from "react-native";
import { styles } from "./styles";



export function Welcome() {

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.icon} />

      <View style={styles.wrapper}>
        <Text style={styles.title}>Boas vindas ao Nearby!</Text>
        <Text style={styles.description}>Tenha cupons de vantagem para usar em{"\n"} seus estabelecimentos favoritos.</Text>
      </View>
    </View>
  )
}

