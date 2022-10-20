import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



// Module
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// provider
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// angular material
import { MaterialModule } from './material.module';
import { ResetPasswordComponent } from './pages/accounts/reset-password/reset-password.component';
import { LoginComponent } from './pages/accounts/login/login.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { ToastrModule } from 'ngx-toastr';
import { ClientesPageComponent } from './pages/dashboard/clientes-page/clientes-page.component';
import { ReservasComponent } from './components/reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ResetPasswordComponent,
    HeaderComponent,
    SidebarComponent,
    ClientesPageComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    /* ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es obligatorio',
          minlength: ({ requiredLength, actualLength }) => 
                      `La contraseña debe ser mayor a ${requiredLength} caracteres`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }) */
    
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
