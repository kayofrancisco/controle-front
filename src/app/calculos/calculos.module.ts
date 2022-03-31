import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculosRoutingModule } from './calculos-routing.module';
import { CalculosComponent } from './calculos/calculos.component';
import { PrimengImportsModule } from '../primeng-imports/primeng-imports.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculosComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalculosRoutingModule,
    PrimengImportsModule,
  ],
})
export class CalculosModule {}
