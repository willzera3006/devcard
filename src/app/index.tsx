import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DevCard</Text>
      <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/cadastro')}>
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 16, color: '#666', marginVertical: 20, textAlign: 'center' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
