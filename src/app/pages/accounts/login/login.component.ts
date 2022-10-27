import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';

  public formLogin!: FormGroup;

  error = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(6)]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(): void {
    // tomar los valores de los inputs
    const usuarioData = new LoginUsuario(
      this.formLogin.get('usuario')?.value,
      this.formLogin.get('clave')?.value
    );

    this.authService.login(usuarioData).subscribe((data) => {
      if (!data) {
        /* alert('ups....') */

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          background: "#F25D5D",
          color: "#FFF",
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'warning',
          title: 'Usuario o contraseña incorrectos',
          iconColor: '#FFF'
        })


       /*  Swal.fire({
          title: 'Datos incorrectos',
          text: 'Usuario o contraseña incorrectos.',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });  */
       
      } else {

        localStorage.setItem('name', this.formLogin.get('usuario')?.value)
        /* alert('yes todo ok...') */
      /*   Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Bienvenido ${ this.formLogin.get('usuario')?.value} ` ,
          showConfirmButton: false,
          timer: 1500
        }) */

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          background: '#75CB8D',
          color: '#FFF',
        })
        
        Toast.fire({
          icon: 'success',
          title: `Autenticación correcta` ,
          iconColor: '#fff'
        })

        setTimeout(()=>{
          console.log(data.mensaje);
          this.tokenService.setToken(data.mensaje);
          this.router.navigate(['/dashboard']);
        }, 1900)


       
      }
    });

   

    console.log(this.formLogin.get('usuario')?.value);
    console.log(this.formLogin.get('clave')?.value);
  }
}
