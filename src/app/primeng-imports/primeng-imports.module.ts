import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
  ],
  exports: [
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
  ],
})
export class PrimengImportsModule {}
