import { VotoEnum } from '../enums/VotoEnum'

export interface Voto {
  id: number;
  topico_id: number;
  tipo: VotoEnum;
  created_at: Date;
}
