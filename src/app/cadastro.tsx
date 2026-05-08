import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', cargo: '', empresa: '', anos: '', tecnologia: '', cor: '#007AFF' });
  const [errors, setErrors] = useState<any>({});

  const validar = () => {
    let currentErrors: any = {};
    if (form.nome.length < 3) currentErrors.nome = "Mínimo 3 caracteres";
    if (!form.cargo) currentErrors.cargo = "Cargo obrigatório";
    if (!form.anos || parseInt(form.anos) <= 0) currentErrors.anos = "Insira um número maior que 0";
    if (!form.tecnologia) currentErrors.tecnologia = "Tecnologia obrigatória";
    
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length === 0) {
      router.push({ pathname: '/preview', params: form });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} onChangeText={(v) => setForm({...form, nome: v})} />
      {errors.nome && <Text style={styles.error}>{errors.nome}</Text>}

      <Text style={styles.label}>Cargo</Text>
      <TextInput style={styles.input} onChangeText={(v) => setForm({...form, cargo: v})} />
      {errors.cargo && <Text style={styles.error}>{errors.cargo}</Text>}

      <Text style={styles.label}>Empresa (Opcional)</Text>
      <TextInput style={styles.input} onChangeText={(v) => setForm({...form, empresa: v})} />

      <Text style={styles.label}>Anos de Experiência</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(v) => setForm({...form, anos: v})} />
      {errors.anos && <Text style={styles.error}>{errors.anos}</Text>}

      <Text style={styles.label}>Tecnologia Favorita</Text>
      <TextInput style={styles.input} onChangeText={(v) => setForm({...form, tecnologia: v})} />
      {errors.tecnologia && <Text style={styles.error}>{errors.tecnologia}</Text>}

      <Text style={styles.label}>Cor do Cartão</Text>
      <View style={styles.row}>
        {['#007AFF', '#4CAF50', '#9C27B0'].map(c => (
          <TouchableOpacity key={c} style={[styles.colorBtn, {backgroundColor: c, borderWidth: form.cor === c ? 3 : 0}]} onPress={() => setForm({...form, cor: c})} />
        ))}
      </View>

      <TouchableOpacity style={styles.btnGeral} onPress={validar}>
        <Text style={styles.btnText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: { borderBottomWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 5 },
  error: { color: 'red', fontSize: 12 },
  row: { flexDirection: 'row', gap: 10, marginVertical: 10 },
  colorBtn: { width: 40, height: 40, borderRadius: 20, borderColor: '#000' },
  btnGeral: { backgroundColor: '#000', padding: 15, borderRadius: 8, marginTop: 20, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' }
});
