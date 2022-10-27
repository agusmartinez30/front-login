import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/accounts/login/login.component';
import { ResetPasswordComponent } from './pages/accounts/reset-password/reset-password.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { ReservasComponent } from './modules/reservas/reservas.component';
import { ChangePassComponent } from './modules/cuenta/cambiar-contrasenia/cambiar-contra.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accounts/login', component: LoginComponent },
  { path: 'accounts/send-mail', component: ResetPasswordComponent },
  { path: 'restablecer-contrasenia/:token', component: ChangePassComponent },

  {
    path: '',
    component:  DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'reservas',
        component: ReservasComponent,
      },
      {
        path: 'clientes',
        component: ClientesComponent,
      },
    ],
  },

  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
