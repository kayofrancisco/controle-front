import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'contas',
    loadChildren: () =>
      import('./contas/contas.module').then((m) => m.ContasModule),
  },
  {
    path: 'calculos',
    loadChildren: () =>
      import('./calculos/calculos.module').then((m) => m.CalculosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
