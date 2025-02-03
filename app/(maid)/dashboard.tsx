import { StyleSheet, View, Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TaskList } from '@/components/maid/TaskList';
import { Task } from '@/types/maid';

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Limpar Sala',
    description: 'Limpeza completa da sala de estar.',
    room: 'Sala',
    status: 'pending',
    maidId: '1',
    houseId: '1',
  },
  {
    id: '2',
    title: 'Limpar Cozinha',
    description: 'Limpeza completa da cozinha.',
    room: 'Cozinha',
    status: 'pending',
    maidId: '1',
    houseId: '1',
  },
];

export default function DashboardScreen() {
  const scrollY = new Animated.Value(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { 
      useNativeDriver: true,
      listener: (_event: NativeSyntheticEvent<NativeScrollEvent>) => {
        // Opcional: adicionar lógica adicional aqui
      },
    }
  );

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  return (
    <LinearGradient 
      colors={['#1a2c3d', '#162536']} 
      style={styles.gradient}
    >
      <View style={styles.container}>
        <TaskList 
          tasks={mockTasks}
          headerOpacity={headerOpacity}
          headerTranslateY={headerTranslateY}
          onScroll={handleScroll}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
}); 