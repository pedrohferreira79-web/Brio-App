import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncoesPage } from './funcoes.page';

const routes: Routes = [
  {
    path: '',
    component: FuncoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncoesPageRoutingModule {}
