import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export function StatusCard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Status Atual</ThemedText>
      <ThemedText type="default">Disponível</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});