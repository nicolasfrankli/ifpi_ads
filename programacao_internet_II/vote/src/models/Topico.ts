import { create } from 'domain';
import { Autor } from '../models/Autor'

interface Topico {
  id: number;
  descricao: string;
  autor: Autor;
  created_at: Date;
  tags: string[];
  active: boolean;
}

export default Topico;
