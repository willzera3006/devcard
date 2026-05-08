import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✓</Text>
      <Text style={styles.msg}>Cartão criado com sucesso!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.btnText}>Criar outro cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { fontSize: 80, color: 'green' },
  msg: { fontSize: 20, marginVertical: 20 },
  button: { borderBottomWidth: 1, padding: 10 },
  btnText: { fontWeight: 'bold', color: '#007AFF' }
});
