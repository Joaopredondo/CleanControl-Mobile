import { Stack } from 'expo-router';

export default function MaidLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="dashboard" 
        options={{ 
          title: 'Painel',
          headerShown: true 
        }} 
      />
    </Stack>
  );
} 