import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriaMundialPage } from './historia-mundial.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriaMundialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriaMundialPageRoutingModule {}
