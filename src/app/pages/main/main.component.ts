import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public title = 'EngGame';
  isStart: boolean = false; 
  isLogIn: boolean = false;

  constructor(private auth: AuthService){}

  onTestStart(e:boolean){
    this.isStart = e;
  }

  signInWhithGoogle(){
    this.auth.googleSignIn().then(res=>{
      this.isLogIn = true;
    }, err =>{
      this.isLogIn = false;
    });
  }

  logout(){
    this.auth.logout().then(res => {
      this.isLogIn = false;
    }, err =>{
      this.isLogIn = true;
    });
  }
}
