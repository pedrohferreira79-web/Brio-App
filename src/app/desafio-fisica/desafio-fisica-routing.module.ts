import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafioFisicaPage } from './desafio-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: DesafioFisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafioFisicaPageRoutingModule {}
