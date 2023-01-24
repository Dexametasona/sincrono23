import { Auth, getAuth, User } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AuthguardService } from './service/authguard.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sincrono23';
  usuario!:string|null
  constructor(private auth:AuthguardService, private route:Router){}

  logout():void{
    const auth:Auth=getAuth()
    const user:User|null=auth.currentUser;
    if(user!=null){
      Swal.fire({
        icon:'warning',
        title:'Seguro que desea salir sesión',
        showCancelButton:true,
        confirmButtonText:'si',
        cancelButtonColor:'#3085d6',
        confirmButtonColor:'#d33'
      }).then((res)=>{
        if(res){
          this.auth.logout().then(()=>console.log('sesión cerrada')).catch(err=>console.log('ocurrio un error: '+err))
          this.route.navigate(['/login'])
        }
      })
    }else{
      Swal.fire({
        icon:'info',
        text:'Usuario no logeado'
      })
    }
    
    

  }
  ngOnInit(): void {
    
  }
}
