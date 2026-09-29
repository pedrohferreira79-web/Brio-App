import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtesVisuaisPage } from './artes-visuais.page';

const routes: Routes = [
  {
    path: '',
    component: ArtesVisuaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtesVisuaisPageRoutingModule {}
