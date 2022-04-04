import { Usuario } from './usuario';
export interface Conta {
  id: number;
  nick: string;
  ativo: boolean;
  criadoEm: string;
  usuario: Usuario;
}
