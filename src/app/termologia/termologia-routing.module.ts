import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermologiaPage } from './termologia.page';

const routes: Routes = [
  {
    path: '',
    component: TermologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermologiaPageRoutingModule {}
