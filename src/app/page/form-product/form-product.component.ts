import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  public form!:FormGroup;
  styleValid:string='border-transparent text-gray-700';
  styleInvalid:string='border-red-800 text-rose-500 bg-rose-300';
  mensaje!:string|null

  constructor(private fb:FormBuilder, private db:DatabaseService) { }
  clearMensaje():void{
    this.mensaje=null;
  }
  async registrar():Promise<void>{
    const res= await this.db.AddProd(this.form.value)
    console.log(res)
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      title:['',[Validators.required, Validators.minLength(3)]],
      stock:['', [Validators.required, Validators.min(1)]],
      price:['',[Validators.required, Validators.min(1)]],
      img:['', [Validators.minLength(5)]]
    })
  }

}
