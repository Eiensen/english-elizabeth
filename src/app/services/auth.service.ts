import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(email:string, password: string):  void{
    this.fireAuth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token', 'true')
    }, err => {
      console.log(err.massage);
    })
  }

  register(email: string, password: string): void{
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registration successfull')
    }, err => {
      console.log(err.massage);
    })
  }

  logout(){
    return this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token')
    }, err => {
      console.log(err.massage);
    })
  }

  googleSignIn(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
      console.log(res.user?.email);
      
    }, err => {
      console.log(err.massage);
    })
  }
}
