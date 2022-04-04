import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { GraficosComponent } from './graficos.component';
import { PrimengImportsModule } from '../primeng-imports/primeng-imports.module';

@NgModule({
  declarations: [GraficosComponent],
  imports: [CommonModule, GraficosRoutingModule, PrimengImportsModule],
})
export class GraficosModule {}
