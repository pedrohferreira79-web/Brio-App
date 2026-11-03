import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafioPortuguesPage } from './desafio-portugues.page';

const routes: Routes = [
  {
    path: '',
    component: DesafioPortuguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafioPortuguesPageRoutingModule {}
