import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  itens: MenuItem[];
  paginaSelecionada: string;
  constructor() {}

  ngOnInit(): void {
    this.itens = [
      {
        label: 'Home',
      },
      {
        label: 'Usuários',
        routerLink: 'usuarios',
      },
      {
        label: 'Contas',
        routerLink: 'contas',
      },
      {
        label: 'Partidas',
        routerLink: 'partidas',
      },
      {
        label: 'Saques/Depósitos',
      },
      {
        label: 'Gráficos',
      },
      {
        label: 'Calculos',
        routerLink: 'calculos',
      },
    ];
  }
}
