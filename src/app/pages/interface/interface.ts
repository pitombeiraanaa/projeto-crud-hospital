export interface Paciente {
  nome: string;
  idade: number;
  dependentes: Dependentes[];
}

export interface Dependentes {
  nome: string;
  idade: number;
}
