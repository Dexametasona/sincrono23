import { Component } from '@angular/core';
import { AuthguardService } from './service/authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sincrono23';
  constructor(private auth:AuthguardService){}
  logout():void{
    this.auth.logout().then(()=>console.log('sesión cerrada')).catch(err=>console.log('ocurrio un error: '+err))

  }
}
