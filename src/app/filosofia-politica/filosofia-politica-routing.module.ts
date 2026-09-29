import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilosofiaPoliticaPage } from './filosofia-politica.page';

const routes: Routes = [
  {
    path: '',
    component: FilosofiaPoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilosofiaPoliticaPageRoutingModule {}
