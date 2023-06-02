import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/home/main/main.component';
import { DepositosComponent } from './views/home/depositos/depositos.component';
import { LevantamentosComponent } from './views/home/levantamentos/levantamentos.component';
import { AtividadeComponent } from './views/home/atividade/atividade.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home/:id', component: HomeComponent,
    children:[
      { path: '', component: MainComponent },
      { path: 'depositos', component: DepositosComponent },
      { path: 'levantamentos', component: LevantamentosComponent },
      { path: 'atividade', component: AtividadeComponent },
    ]
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
