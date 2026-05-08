import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams<{ 
    nome: string, cargo: string, empresa: string, anos: string, tecnologia: string, cor: string 
  }>();

  const exp = parseInt(anos || "0");
  const nivel = exp <= 2 ? { label: 'Júnior', bg: '#808080' } : exp <= 5 ? { label: 'Pleno', bg: '#007AFF' } : { label: 'Sênior', bg: '#D4AF37' };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: cor }]}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{nome?.[0]}</Text></View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.cargo}>{cargo} {empresa ? `@ ${empresa}` : ''}</Text>
        <Text style={styles.tec}>Especialista em {tecnologia}</Text>
        <View style={[styles.badge, { backgroundColor: nivel.bg }]}><Text style={styles.badgeText}>{nivel.label}</Text></View>
      </View>

      <TouchableOpacity style={styles.btnEdit} onPress={() => router.back()}><Text>Editar dados</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btnFinish} onPress={() => router.replace('/sucesso')}><Text style={{color: '#fff'}}>Finalizar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  card: { padding: 25, borderRadius: 20, alignItems: 'center', elevation: 5 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 40, color: '#fff', fontWeight: 'bold' },
  nome: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  cargo: { fontSize: 16, color: '#fff', opacity: 0.9 },
  tec: { fontSize: 14, color: '#fff', marginTop: 10 },
  badge: { marginTop: 15, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 15 },
  badgeText: { color: '#fff', fontWeight: 'bold' },
  btnEdit: { marginTop: 30, alignItems: 'center' },
  btnFinish: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, marginTop: 15, alignItems: 'center' }
});
