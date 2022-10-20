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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
      usuario: ['', [Validators.required,  Validators.minLength(6)]],
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

      if(!data){
        
      }else{
       
        console.log(data.mensaje);
        this.tokenService.setToken(data.mensaje);
        this.router.navigate(['/admin']);
      }
    });

    if (this.error) {
      console.log('logged..');
    } else {
      console.log('incorecto..');
      this.error = true
      
    }

    console.log(this.formLogin.get('usuario')?.value);
    console.log(this.formLogin.get('clave')?.value);
  
  }
}
