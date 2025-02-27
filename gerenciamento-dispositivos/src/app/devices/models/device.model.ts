export interface Device {
  id: number;
  name: string;
  model: string;
  status: 'Disponível' | 'Em uso' | 'Manutenção';
}
