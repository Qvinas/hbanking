import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['../home.component.css']
})
export class AtividadeComponent {

  constructor(private http: HttpClient, private clienteSer: ClientesService) { }

  cliente: any;
  clientes: any;
  movimentos: any;

  ngOnInit(): void {
    this.cliente = this.clienteSer.getCliente();
    this.movimentos = this.cliente["movimentos"];
  }
}