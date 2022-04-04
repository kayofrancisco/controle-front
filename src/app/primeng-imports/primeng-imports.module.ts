import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

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
    BlockUIModule,
    CalendarModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
  ],
  exports: [
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule,
    TabViewModule,
    InputTextModule,
    BlockUIModule,
    CalendarModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
  ],
})
export class PrimengImportsModule {}
