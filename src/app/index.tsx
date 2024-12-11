
import { Welcome } from '@/components/welcome';
import { StyleSheet, View } from 'react-native';
import { Steps } from '@/components/steps';
import { Button } from '@/components/button';
import { router } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />

      <Steps />

      <Button
        onPress={() => {
          router.navigate('/home');
        }}
      >
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 40,
  },
});

