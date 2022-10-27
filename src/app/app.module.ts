import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





// Module
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// provider
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// angular material
import { ResetPasswordComponent } from './pages/accounts/reset-password/reset-password.component';
import { LoginComponent } from './pages/accounts/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { DefaultModule } from './layouts/default/default.module';
import { ChangePassComponent } from './modules/cuenta/cambiar-contrasenia/cambiar-contra.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ChangePassComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DefaultModule,
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
