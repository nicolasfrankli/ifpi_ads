import { create } from 'domain';
import { Autor } from './Autor'
import { ulid } from 'ulidx';


export interface Topico {
  id: String;
  descricao: string;
  //autor: Autor;
  created_at: Date;
  tags: string[];
  active: boolean;
}


