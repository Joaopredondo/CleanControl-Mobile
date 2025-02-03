export interface Maid {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  status: 'available' | 'busy' | 'offline';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  room: string;
  status: 'pending' | 'in_progress' | 'completed';
  photos?: string[];
  startTime?: Date;
  endTime?: Date;
  maidId: string;
  houseId: string;
} 