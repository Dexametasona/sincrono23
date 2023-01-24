import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private auth:Auth) { }
  
  registrarUsuario({email,pass}:{email:string, pass:string}):Promise<UserCredential>{
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }

  signUser({email,pass}:{email:string, pass:string}):Promise<UserCredential>{
    return signInWithEmailAndPassword(this.auth, email, pass)
  }
  logout():Promise<void>{
    return signOut(this.auth)
  }
}
