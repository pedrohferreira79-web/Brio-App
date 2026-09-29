import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisicaQuimicaPage } from './fisica-quimica.page';

const routes: Routes = [
  {
    path: '',
    component: FisicaQuimicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisicaQuimicaPageRoutingModule {}
