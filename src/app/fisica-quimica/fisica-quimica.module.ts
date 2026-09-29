import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisicaQuimicaPageRoutingModule } from './fisica-quimica-routing.module';

import { FisicaQuimicaPage } from './fisica-quimica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisicaQuimicaPageRoutingModule
  ],
  declarations: [FisicaQuimicaPage]
})
export class FisicaQuimicaPageModule {}
