import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import { ContaComponent } from './conta/conta.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [ContaComponent, ListaContasComponent],
  imports: [
    CommonModule,
    ContasRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
  ],
})
export class ContasModule {}
