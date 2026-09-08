import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtesPageRoutingModule } from './artes-routing.module';

import { ArtesPage } from './artes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtesPageRoutingModule
  ],
  declarations: [ArtesPage]
})
export class ArtesPageModule {}
