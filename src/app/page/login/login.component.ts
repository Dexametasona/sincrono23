import { AuthguardService } from './../../service/authguard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseError } from 'firebase/app';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!:FormGroup;
  styleValid:string='border-transparent text-gray-700';
  styleInvalid:string='border-red-800 text-rose-500 bg-rose-300';
  statusValidate:boolean=true
  mensaje!:string|null

  constructor( private fb:FormBuilder, private service:AuthguardService, private route:Router) { }

  enviar():void{
    this.service.signUser(this.form.value).then(res=>{
      Swal.fire({
        icon:'success',
        title:'Inicio de sesión exitoso',
        heightAuto:false
      })
      this.route.navigate(['/home'])
      console.log(res)
    }).catch((err:FirebaseError)=>{
      if (err.code==='auth/user-not-found') this.mensaje='Usuario no encontrado';
      else if(err.code==='auth/wrong-password') this.mensaje='Contraseña inválida'
      else console.log(err.code)

    })
  }

  anularMensaje():void{
    this.mensaje=null;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',
    [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]],
    pass:['',
    [Validators.required,
    Validators.minLength(6)]]
    })
  }

}
