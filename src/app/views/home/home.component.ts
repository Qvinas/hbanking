import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  id = "";

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private clienteService: ClientesService){}

  cliente: any;
  clientes: any;
  iban: string = "";

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getCliente()
    
  }

  getCliente() {
    this.http.get('http://localhost:4200/assets/data/clientes.JSON').subscribe((clientes: any) => {
      this.clientes = clientes
      let index = this.clientes.findIndex(
        (cliente: { id: string }) => cliente.id == this.id
      )
      if(index > -1)[
        this.cliente = this.clientes[index],
        
        this.iban = this.cliente["iban"],
        this.clienteService.setCliente(this.cliente)
      ]
    })
  } 

  isCollapsed = false;

  irPara(rota:string){
    this.clienteService.setCliente(this.cliente)
    this.router.navigate(["home/" + this.id + rota])
  }
}
