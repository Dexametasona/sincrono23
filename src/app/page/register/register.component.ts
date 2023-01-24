import { FirebaseError } from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthguardService } from './../../service/authguard.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form!:FormGroup
  styleValid:string='border-transparent text-gray-700';
  styleInvalid:string='border-red-800 text-rose-500 bg-rose-300';
  mensaje!:string|null
  constructor(private auth:AuthguardService, private fb:FormBuilder) { }

  registrar():void{
    this.auth.registrarUsuario(this.form.value).then(res=>{
      Swal.fire({
        icon:'success',
        title:'Usuario registrado con exito',
        heightAuto:false
      })
      console.log(res)
      this.form.reset()
    }).catch((err:FirebaseError)=>{
      if(err.code==='auth/email-already-in-use') this.mensaje='Usuario ya registrado';
      else console.log(err.code)
    })
  }

  limpiarMensaje():void{
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
