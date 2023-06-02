import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-levantamentos',
  templateUrl: './levantamentos.component.html',
  styleUrls: ['../home.component.css']
})
export class LevantamentosComponent {
  constructor(private http: HttpClient, private clienteSer: ClientesService) { }
  
  alerta: boolean = false;
  cliente: any;
  saldo: any;

  ngOnInit(): void {
    this.cliente = this.clienteSer.getCliente();
    this.saldo = this.cliente["saldo"]
  }

  levantar(valor: any) {
    if (this.saldo > valor) {
      this.saldo -= valor
      this.clienteSer.updateSaldo(this.saldo, valor, "levantamento")
    }
    else{
      this.alerta = true;
    }
    (<HTMLFormElement>document.getElementById("myForm")).reset();
  }
  
  turnOff() {
    this.alerta = false;
    console.log(this.alerta)
  }
}
