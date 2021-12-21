import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [MenuComponent, FormularioComponent],
  imports: [CommonModule, MenubarModule, PanelModule],
  exports: [MenuComponent, FormularioComponent],
})
export class SharedModule {}
