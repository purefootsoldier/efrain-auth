import React from 'react';
import { View, Text, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

export default function Home() {
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('user');
    router.replace('/sign-in');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>¡Bienvenido a Home!</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
}
