import { useState } from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.replace('/(maid)/dashboard');
    } catch (err) {
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <ThemedText type="title" style={styles.title}>
          Clean Control
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Seu app de gerenciamento de limpeza
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        {error ? (
          <ThemedText style={styles.errorMessage}>
            {error}
          </ThemedText>
        ) : null}
        
        <CustomInput
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          icon="envelope.fill"
        />
        
        <CustomInput
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
          icon="lock.fill"
        />

        <CustomButton 
          title="Entrar"
          onPress={handleLogin}
          loading={loading}
        />

        <ThemedView style={styles.linksContainer}>
          <TouchableOpacity onPress={() => console.log('Esqueceu senha')}>
            <ThemedText type="link" style={styles.link}>
              Esqueceu sua senha?
            </ThemedText>
          </TouchableOpacity>

          <ThemedView style={styles.divider} />

          <TouchableOpacity onPress={() => console.log('Criar conta')}>
            <ThemedText type="link" style={styles.link}>
              Criar uma conta
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  errorMessage: {
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 16,
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 8,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    gap: 16,
  },
  link: {
    textAlign: 'center',
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: '#687076',
  },
});