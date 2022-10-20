import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { ReqResetPassword } from '../models/req-reset-password';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authUrl = 'http://localhost:3000/usuario/'

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService ) {}

    login(dto: LoginUsuario): Observable<any>{
      return this.http.post(this.authUrl + 'ingreso', dto)

    }

    findCorreo(dto: ReqResetPassword): Observable<any>{
      return this.http.post(this.authUrl + 'solicitar-restablecer-contrasenia', dto)
    }

    reqResetPassword(dto: ReqResetPassword): Observable<any>{
      return this.http.post(this.authUrl + 'solicitar-restablecer-contrasenia', dto)

    }
  /* public  login(usuario:string, password:string){
    return this.http.post(`http://localhost:3000/usuario/ingreso`,  {usuario, password});
  } */



 isAuth(): boolean {
    const token:any = localStorage.getItem('token');
    if ( this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }

    return true;
  } 
}
