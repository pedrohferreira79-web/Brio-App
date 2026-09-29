import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneticaPage } from './genetica.page';

const routes: Routes = [
  {
    path: '',
    component: GeneticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneticaPageRoutingModule {}
