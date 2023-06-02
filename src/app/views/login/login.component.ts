import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;
  alerta:boolean = false;
 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private auth: AuthService, private router:Router){}

  login(email : string, pass:string){
    console.log(email + pass + "1st")
    let res = this.auth.login(email, pass)
    if(res != 400){
      this.router.navigate(['home', res])
    }
    else{
      this.alerta = true;
    }
  }

  turnOff(){
    this.alerta = false;
    console.log(this.alerta)
  }
}
