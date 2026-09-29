import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuimicaOrganicaPage } from './quimica-organica.page';

const routes: Routes = [
  {
    path: '',
    component: QuimicaOrganicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimicaOrganicaPageRoutingModule {}
