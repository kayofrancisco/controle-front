import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidasRoutingModule } from './partidas-routing.module';
import { PartidasComponent } from './partidas/partidas.component';
import { PrimengImportsModule } from '../primeng-imports/primeng-imports.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PartidasComponent],
  imports: [
    CommonModule,
    PartidasRoutingModule,
    PrimengImportsModule,
    ReactiveFormsModule,
  ],
})
export class PartidasModule {}
