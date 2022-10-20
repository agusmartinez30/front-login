import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ReqResetPassword } from 'src/app/models/req-reset-password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lost-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {

  public formLogin!: FormGroup;

  usuario!: ReqResetPassword;
  correo!: string;
  constructor(private authService: AuthService,    private fb: FormBuilder,) {}

  ngOnInit(): void {
    
  this.formLogin = this.fb.group({
    correo: ['', [Validators.required,Validators.email,  Validators.minLength(6)]],
  });
  }

  onLogin(): void {
    console.log(this.formLogin.get('correo')?.value)
    this.usuario = new ReqResetPassword(this.correo)

    console.log(this.usuario)

    /* this.authService
      .reqResetPassword(this.correo)
      .subscribe((data: { mensaje: string }) => {
        console.log(this.correo);
      }); */
  }
}
