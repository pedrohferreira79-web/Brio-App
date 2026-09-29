import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartografiaPage } from './cartografia.page';

const routes: Routes = [
  {
    path: '',
    component: CartografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartografiaPageRoutingModule {}
