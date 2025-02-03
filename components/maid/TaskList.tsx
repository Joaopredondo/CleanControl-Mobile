import React from 'react';
import { StyleSheet, FlatList, FlatListProps, TouchableOpacity, Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Task } from '@/types/maid';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface TaskListProps {
  tasks: Task[];
  headerOpacity: Animated.AnimatedInterpolation<string | number>;
  headerTranslateY: Animated.AnimatedInterpolation<string | number>;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

// Primeiro, vamos definir o tipo específico para o FlatList animado
type AnimatedFlatListType = typeof FlatList & {
  getNode(): FlatList<Task>;
};

// Agora vamos criar o componente animado com a tipagem correta
const AnimatedFlatList = Animated.createAnimatedComponent<typeof FlatList<Task>>(FlatList);

export function TaskList({ tasks, headerOpacity, headerTranslateY, onScroll }: TaskListProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const handleStartTask = (taskId: string) => {
    console.log(`Iniciando tarefa ${taskId}`);
  };

  const handleTakePhoto = (taskId: string) => {
    console.log(`Tirando foto para a tarefa ${taskId}`);
  };

  const ListHeaderComponent = () => (
    <>
      <Animated.View 
        style={[
          styles.header,
          {
            opacity: headerOpacity,
            transform: [{ translateY: headerTranslateY }]
          }
        ]}
      >
        <ThemedText style={styles.welcomeText}>
          Bem-vinda, Maria
        </ThemedText>
        <ThemedText style={styles.date}>
          Segunda-feira, 18 de Março
        </ThemedText>
      </Animated.View>

      <ThemedView style={styles.statusCard}>
        <ThemedText type="subtitle">Status Atual</ThemedText>
        <ThemedText type="default">Disponível</ThemedText>
      </ThemedView>

      <ThemedView style={styles.taskSection}>
        <ThemedText style={styles.sectionTitle}>
          Tarefas de Hoje
        </ThemedText>
      </ThemedView>
    </>
  );

  return (
    <AnimatedFlatList
      data={tasks}
      keyExtractor={(item: Task) => item.id}
      ListHeaderComponent={ListHeaderComponent}
      onScroll={onScroll}
      scrollEventThrottle={16}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }: { item: Task }) => (
        <ThemedView style={[styles.taskItem, { backgroundColor: colors.cardBackground }]}>
          <ThemedText type="defaultSemiBold" style={{ color: colors.text }}>{item.title}</ThemedText>
          <ThemedText type="default" style={{ color: colors.text }}>{item.description}</ThemedText>
          <TouchableOpacity onPress={() => handleStartTask(item.id)} style={styles.button}>
            <ThemedText type="link" style={{ color: colors.tint }}>Iniciar Limpeza</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTakePhoto(item.id)} style={styles.button}>
            <ThemedText type="link" style={{ color: colors.tint }}>Tirar Foto</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    paddingTop: 2,
  },
  header: {
    marginBottom: 24,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    lineHeight: 40,
  },
  date: {
    fontSize: 18,
    color: '#9ba5ae',
    marginTop: 4,
  },
  statusCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2c3e50',
    marginBottom: 24,
  },
  taskSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  taskItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    marginTop: 8,
  },
}); 