import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['../home.component.css']
})
export class DepositosComponent {
  constructor(private http: HttpClient, private clienteSer: ClientesService) { }

  cliente: any;
  saldo: any;

  ngOnInit(): void {
    this.cliente = this.clienteSer.getCliente();
    this.saldo = this.cliente["saldo"]
  }

  depositar(valor:string){
    
    if (this.saldo > 0) {
      this.saldo += Number(valor)
      this.clienteSer.updateSaldo(this.saldo, valor,"deposito")
    }

    (<HTMLFormElement>document.getElementById("myForm")).reset();
  }
  }

