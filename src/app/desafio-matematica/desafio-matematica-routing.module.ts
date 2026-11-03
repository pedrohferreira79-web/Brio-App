import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafioMatematicaPage } from './desafio-matematica.page';

const routes: Routes = [
  {
    path: '',
    component: DesafioMatematicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafioMatematicaPageRoutingModule {}
