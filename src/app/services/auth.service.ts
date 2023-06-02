import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class AuthService {

  constructor() {
    
   }
  login(uname: string, pass: string){

    if (uname === "andre@email.com"){
      if("1234" == pass){
        return 1
      }
    }
    if (uname === "susana@email.com"){
      if("1234" == pass){
        return 2
      }
    }
    if (uname === "joao@email.com"){
      if("1234" == pass){
        return 3
      }
    }

    return 400
  }
}
