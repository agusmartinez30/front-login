import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ReqResetPassword } from 'src/app/models/req-reset-password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lost-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  public formLogin!: FormGroup;

  usuario!: ReqResetPassword;
  correo!: string;
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: [
        '',
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
    });
  }

  sendEmail(): void {
  
    this.usuario = new ReqResetPassword(this.formLogin.get('correo')?.value);

    console.log(this.usuario);

    this.authService.reqResetPassword(this.usuario).subscribe( 
      data => {
     
        console.log(data.msg);
        localStorage.setItem('tokenpass', data.msg)
         const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          
          timer: 1500,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'success',
          title: `Se envio el link de recuperación`,
        }); 
      },
      error => {
     
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          background: "#F25D5D",
          color: "#FFF",
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'warning',
          title: 'Formato de email incorrecto',
          iconColor: '#FFF'
        });
      })
    
  }

}
/* 
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          title: 'Correo no existe',
        });
 */
      
 
      
       

       /*  const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: `Te enviamos un correo`,
        }); */
  
  
