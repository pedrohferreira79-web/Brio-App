import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpretacaoPage } from './interpretacao.page';

const routes: Routes = [
  {
    path: '',
    component: InterpretacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpretacaoPageRoutingModule {}
