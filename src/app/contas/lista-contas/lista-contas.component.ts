import { Component, Input, OnInit } from '@angular/core';
import { Conta } from '../../shared/models/conta';
import { arrayValido } from '../../shared/utils/util-array';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.scss'],
})
export class ListaContasComponent implements OnInit {
  @Input('contas')
  set setContas(contas: Conta[]) {
    if (arrayValido(contas)) {
      this.contas = contas;
      this.cloneContas = contas;
    }
  }
  contas: Conta[];
  cloneContas: Conta[];
  constructor() {}

  ngOnInit(): void {}

  onRowEditSave(conta: Conta) {}

  onRowEditCancel(index: number) {
    console.log('veio k');
    this.contas[index] = { ...this.cloneContas[index] };
  }
}
