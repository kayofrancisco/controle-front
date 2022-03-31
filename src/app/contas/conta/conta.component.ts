import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/conta.service';
import { Conta } from '../../shared/models/conta';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],
})
export class ContaComponent implements OnInit {
  contas: Conta[];

  constructor(private service: ContaService) {}

  ngOnInit(): void {
    this.service.buscarContas().subscribe((resposta) => {
      this.contas = resposta.result;
    });
  }
}
