import { Stack } from 'expo-router';

import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik' 

import {colors, fontFamily} from '@/styles/theme'
import { Loader } from '@/components/loader';

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold
  })

  if (!fontsLoaded) {
    return <Loader />
  }


  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.gray[100],
      }
    }} />
  );
}

