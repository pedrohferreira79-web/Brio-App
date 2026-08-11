import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojabrioPage } from './lojabrio.page';

const routes: Routes = [
  {
    path: '',
    component: LojabrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojabrioPageRoutingModule {}
