import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate():boolean{

    if(!this.authService.isAuth()){
      console.log('token no valido');
      alert('Debe iniciar sesión...')
      this.router.navigate(['accounts/login'])
      return false
    }
    return true;
  }
  
}
