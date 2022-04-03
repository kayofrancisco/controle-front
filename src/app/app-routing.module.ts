import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contas',
    loadChildren: () =>
      import('./contas/contas.module').then((m) => m.ContasModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'calculos',
    loadChildren: () =>
      import('./calculos/calculos.module').then((m) => m.CalculosModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'partidas',
    loadChildren: () =>
      import('./partidas/partidas.module').then((m) => m.PartidasModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
