import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  public title = 'EngGame';
  isShowTest: boolean = true;
  isTestFinish: boolean = false;  
  isLogIn: boolean = false;
  userLogin: string = "";

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.userLogin = localStorage.getItem('useremail')??"";
    if(this.userLogin) this.isLogIn = true;
  } 

  signInWhithGoogle(){
    this.auth.googleSignIn().then(res=>{
      this.userLogin = localStorage.getItem('useremail')??"";      
      this.isLogIn = true;
    }, err =>{
      this.isLogIn = false;
    });
  }

  logout(){
    this.auth.logout().then(() => { 
      this.userLogin = "";     
      this.isLogIn = false;
    });
  }

  backToHome(){
    this.isTestFinish = false;
    //this.isShowTest = false;
    window.location.reload();
  }

  onTestButtonClicked(event: boolean){
    this.isShowTest = event;
  }

  onTestFinish(event: boolean){
    this.isTestFinish = event;
  }
}
