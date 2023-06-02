import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientesService {

  private cliente: { [key: string]: any[] } = {};
  private movimentos: any;
  constructor(){}

  setCliente(novCliente: any) {
    this.cliente = novCliente;
    this.movimentos = this.cliente["movimentos"]
    this.sortArray(this.cliente["movimentos"]);

  }

  getCliente() {
    return this.cliente;
  }

  updateSaldo(novototal:any, valor:any, operacao:string){
    this.cliente["saldo"] = novototal;

    let nData = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    this.cliente["movimentos"].push({transacao: operacao, valor: valor, data: nData})
    this.sortArray(this.cliente["movimentos"]);
  }

  sortArray(lista:any){
      return lista.sort((a: any, b: any) => {
        return <any>new Date(b.data) - <any>new Date(a.data);
      });
  }
}
