import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GramaticaPage } from './gramatica.page';

const routes: Routes = [
  {
    path: '',
    component: GramaticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GramaticaPageRoutingModule {}
