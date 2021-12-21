import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from '../shared/shared.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [UsuarioComponent, CadastroUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    TabViewModule,
    SharedModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class UsuariosModule {}
