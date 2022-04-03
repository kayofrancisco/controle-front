import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
    TabViewModule,
  ],
  exports: [
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
    TabViewModule,
    InputTextModule,
  ],
})
export class PrimengImportsModule {}
