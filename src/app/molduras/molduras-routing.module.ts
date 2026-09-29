import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoldurasPage } from './molduras.page';

const routes: Routes = [
  {
    path: '',
    component: MoldurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoldurasPageRoutingModule {}
