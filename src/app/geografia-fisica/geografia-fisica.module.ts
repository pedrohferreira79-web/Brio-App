import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeografiaFisicaPageRoutingModule } from './geografia-fisica-routing.module';

import { GeografiaFisicaPage } from './geografia-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeografiaFisicaPageRoutingModule
  ],
  declarations: [GeografiaFisicaPage]
})
export class GeografiaFisicaPageModule {}
