import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeopoliticaPage } from './geopolitica.page';

const routes: Routes = [
  {
    path: '',
    component: GeopoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeopoliticaPageRoutingModule {}
