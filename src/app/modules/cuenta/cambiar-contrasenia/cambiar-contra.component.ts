import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordDto } from 'src/app/models/change-password';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './cambiar-contra.component.html',
  styleUrls: ['./cambiar-contra.component.css'],
})
export class ChangePassComponent {
  public formLogin!: FormGroup;
  usuario!: ChangePasswordDto;
  contrasenia!: string;
  constructor(private authService: AuthService, private fb: FormBuilder,   private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      contrasenia: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  ChangePassword() {

  let token: any = localStorage.getItem('tokenpass')

    this.usuario = new ChangePasswordDto(
      token,
      this.formLogin.get('contrasenia')?.value
    );

    console.log(this.usuario)
    this.authService.changePassword(this.usuario).subscribe(
      (data) =>{
        console.log(data)
        this.router.navigate(['/accounts/login']);
    }, error => {
      console.log(error)
    }
    )
  }
}
