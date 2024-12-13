import { Text, View } from "react-native";
import { styles } from "./styles";
import { Info } from "../info";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";


export interface IDetails {
  name: string;
  description: string;
  address: string
  phone: string
  coupons: number
  rules: {
    id: string;
    description: string;
  }[]
}

interface DetailsProps {
  data: IDetails;
}

export function Details({ data }: DetailsProps) {
  return (
    <View 
      style={styles.container}
    >
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>

        <Info description={`${data.coupons} cupons disponíveis`} icon={IconTicket} />
        <Info description={data.address} icon={IconMapPin} />
        <Info description={data.phone} icon={IconPhone} />
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>

        {data.rules.map((rule) => (
          <Text key={rule.id} style={styles.rule}>{`\u2022 ${rule.description}`}</Text>
        ))}
      </View>
    </View>
  )
}


