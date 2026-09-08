import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortuguesPage } from './portugues.page';

const routes: Routes = [
  {
    path: '',
    component: PortuguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortuguesPageRoutingModule {}
