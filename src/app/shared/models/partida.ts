import { Limite } from './Limite';
import { Conta } from 'src/app/shared/models/conta';

export interface Partida {
  id: number;
  valor: number;
  quantidadeBigBlind: number;
  quantidadeMaos: number;
  quantidadeMesas: number;
  data: string;
  limite: Limite;
  conta: Conta;
}
