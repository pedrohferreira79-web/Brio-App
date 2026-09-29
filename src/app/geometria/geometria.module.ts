import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeometriaPageRoutingModule } from './geometria-routing.module';

import { GeometriaPage } from './geometria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeometriaPageRoutingModule
  ],
  declarations: [GeometriaPage]
})
export class GeometriaPageModule {}
