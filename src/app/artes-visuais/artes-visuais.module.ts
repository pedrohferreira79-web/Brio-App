import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtesVisuaisPageRoutingModule } from './artes-visuais-routing.module';

import { ArtesVisuaisPage } from './artes-visuais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtesVisuaisPageRoutingModule
  ],
  declarations: [ArtesVisuaisPage]
})
export class ArtesVisuaisPageModule {}
