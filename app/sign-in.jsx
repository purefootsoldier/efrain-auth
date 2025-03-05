import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email === 'usuario@ejemplo.com' && password === 'password123') {
      await SecureStore.setItemAsync('user', JSON.stringify({ email }));
      router.replace('/home');  
    } else {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderRadius: 4 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderRadius: 4 }}
      />
      <Button title="Iniciar sesión" onPress={handleSignIn} />
    </View>
  );
}
