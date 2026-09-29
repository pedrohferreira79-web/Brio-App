import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrasilRepublicaPage } from './brasil-republica.page';

const routes: Routes = [
  {
    path: '',
    component: BrasilRepublicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrasilRepublicaPageRoutingModule {}
