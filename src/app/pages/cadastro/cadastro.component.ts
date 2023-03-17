import { Component } from '@angular/core';
import { Paciente } from '../interface/interface'
import { Dependentes } from '../interface/interface';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  paciente: Paciente = {
    nome: '',
    idade: 0,
    dependentes: []
  };

  dependente: Dependentes = {
    nome: '',
    idade: 0,
  };

  pacientes: Paciente[] = [];



  adicionarDependente() {
    this.paciente.dependentes.push({ ...this.dependente });

    this.dependente = {
      nome: '',
      idade: 0
    };
  }

  salvar() {
    this.pacientes.push({ ...this.paciente });
    this.paciente = {
      nome: '',
      idade: 0,
      dependentes: []
    };
  }

  excluirDependente(index: number) {
    this.paciente.dependentes.splice(index, 1);
  }

  camposPreenchidos(): boolean {
    return !!this.paciente.nome && !!this.paciente.idade;
  }
  excluirPaciente(paciente: any) {
    const index = this.pacientes.indexOf(paciente);
    this.pacientes.splice(index, 1);
  }
  atualizar() {
    // encontrar o índice do paciente atual na lista de pacientes
    const index = this.pacientes.findIndex(p => p === this.paciente);

    // atualizar os dados do paciente na lista de pacientes
    this.pacientes[index] = this.paciente;
  }


}
