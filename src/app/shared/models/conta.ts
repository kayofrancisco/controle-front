import { Usuario } from './usuario';
export interface Conta {
  id: number;
  nick: string;
  ativo: string;
  criadoEm: string;
  usuario: Usuario;
}
