import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['../home.component.css']
})
export class MainComponent {
  constructor(private clienteSer: ClientesService, private router: Router) { }

  cliente: any;
  clientes: any;
  movimentosMain: any;
  movimentos: any;

  ngOnInit(): void {
    this.cliente = this.clienteSer.getCliente();
    this.movimentos = this.cliente["movimentos"];
    this.movimentosMain = this.getMovimentosMain(this.movimentos);
  }

  getMovimentosMain(movimentos:any){
    let movimentosMain = []

    for(let i=0; i<3; i++){
      movimentosMain.push(movimentos[i])
    }

    return movimentosMain
  }

  irPara(rota: string) {
    this.clienteSer.setCliente(this.cliente)
    this.router.navigate(["home/" + this.cliente["id"] + rota])
  }
}
