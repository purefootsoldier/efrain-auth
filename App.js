import { Slot, router } from 'expo-router';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, ActivityIndicator } from 'react-native';

export default function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const user = await SecureStore.getItemAsync('user');
      if (!user) {
        router.replace('/sign-in'); // Si no hay sesión, redirige al login
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />; // Renderiza la página actual dentro del layout
}
