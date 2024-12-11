import { Text, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { IPlace, Place } from "../place";

import BottomSheet, {BottomSheetFlatList} from  '@gorhom/bottom-sheet'
import { useRef } from "react";


interface PlacesProps {
  data: IPlace[];
}

export function Places({ data }: PlacesProps) {

  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 100,
    max: dimensions.height - 128,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.bottomSheet}
      enableOverDrag={false}
    >
      <BottomSheetFlatList 
        data={data}
        renderItem={({ item }) => (
          <Place data={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}
