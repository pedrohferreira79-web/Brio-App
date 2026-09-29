import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeografiaFisicaPage } from './geografia-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: GeografiaFisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeografiaFisicaPageRoutingModule {}
