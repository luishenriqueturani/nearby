
import { Welcome } from '@/components/welcome';
import { StyleSheet, View } from 'react-native';
import { Steps } from '@/components/steps';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />

      <Steps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 40,
    justifyContent: "flex-start",
  },
});

