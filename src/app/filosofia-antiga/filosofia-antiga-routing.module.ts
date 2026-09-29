import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilosofiaAntigaPage } from './filosofia-antiga.page';

const routes: Routes = [
  {
    path: '',
    component: FilosofiaAntigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilosofiaAntigaPageRoutingModule {}
