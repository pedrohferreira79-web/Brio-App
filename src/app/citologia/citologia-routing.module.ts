import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitologiaPage } from './citologia.page';

const routes: Routes = [
  {
    path: '',
    component: CitologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitologiaPageRoutingModule {}
