import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setCount((c) => c + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.resetButton]} onPress={() => setCount(0)}>
          <Text style={styles.buttonText}>Сброс</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  counter: {
    fontSize: 96,
    fontWeight: 'bold',
    marginBottom: 48,
  },
  buttons: {
    gap: 16,
    width: '100%',
    maxWidth: 280,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});
