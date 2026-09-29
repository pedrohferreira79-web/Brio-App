import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrasilColoniaPage } from './brasil-colonia.page';

const routes: Routes = [
  {
    path: '',
    component: BrasilColoniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrasilColoniaPageRoutingModule {}
