import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol, IconName } from './IconSymbol';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: IconName;
}

export function CustomInput({ label, error, icon, ...props }: CustomInputProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.wrapper}>
      {label && (
        <ThemedText type="defaultSemiBold" style={styles.label}>
          {label}
        </ThemedText>
      )}
      
      <View style={[
        styles.inputContainer,
        { 
          borderColor: error ? '#ff4444' : colors.icon,
          backgroundColor: colors.background,
        }
      ]}>
        {icon && (
          <IconSymbol 
            name={icon} 
            size={20} 
            color={colors.icon}
            style={styles.icon}
          />
        )}
        
        <TextInput
          {...props}
          style={[
            styles.input,
            { color: colors.text },
            props.style,
          ]}
          placeholderTextColor={colors.icon}
        />
      </View>
      
      {error && (
        <ThemedText style={[styles.errorText, { color: '#ff4444' }]}>
          {error}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
  },
}); 