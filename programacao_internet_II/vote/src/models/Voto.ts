import { VotoEnum } from '../enums/VotoEnum'

interface Topico {
  id: number;
  topico_id: number;
  tipo: VotoEnum;
  created_at: Date;
}

export default Topico;