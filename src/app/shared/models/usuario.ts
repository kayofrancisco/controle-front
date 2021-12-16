import { Perfil } from './perfil';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  ativo: boolean;
  criadoEm: string;
  ultimaAtualizacao: string;
  perfil: Perfil;
}
