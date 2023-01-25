import { Observable } from 'rxjs';
import { Producto } from './../interfaces/producto';
import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentReference } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore:Firestore) { }
  AddProd(prodModel:Producto):Promise<DocumentReference<DocumentData>>{
    const ListaProd=collection(this.firestore, 'ListaProductos');
    return addDoc(ListaProd, prodModel)
  }

  getListaProd():Observable<Producto[]>{
    const ListaProd=collection(this.firestore, 'ListaProductos');
    return collectionData(ListaProd, {idField:'id'}) as Observable<Producto[]>
  }

  borrarProd(id:string):Promise<void>{
    const prod=doc(this.firestore, `ListaProductos/${id}`);
    console.log(prod)
    return deleteDoc(prod);
  }
}
