import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizacaoPage } from './personalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizacaoPageRoutingModule {}
