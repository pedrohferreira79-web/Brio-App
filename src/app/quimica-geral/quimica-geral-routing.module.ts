import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuimicaGeralPage } from './quimica-geral.page';

const routes: Routes = [
  {
    path: '',
    component: QuimicaGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimicaGeralPageRoutingModule {}
