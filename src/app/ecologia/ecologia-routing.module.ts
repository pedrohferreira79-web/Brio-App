import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcologiaPage } from './ecologia.page';

const routes: Routes = [
  {
    path: '',
    component: EcologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcologiaPageRoutingModule {}
