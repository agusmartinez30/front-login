import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/accounts/login/login.component';
import { ResetPasswordComponent } from './pages/accounts/reset-password/reset-password.component';
import { ClientesPageComponent } from './pages/dashboard/clientes-page/clientes-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accounts/login', component: LoginComponent },
  { path: 'accounts/reset-password', component: ResetPasswordComponent },
  { path: 'clientes', component: ClientesPageComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch : 'full', redirectTo: 'home' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
