import { Producto } from './../../interfaces/producto';
import { DatabaseService } from 'src/app/service/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListaProd!:Producto[]
  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
    this.db.getListaProd().subscribe(res=>{
      this.ListaProd=res;
    })
  }

  async borrar(id:string){
    const borrado= await this.db.borrarProd(id);
  }

}
