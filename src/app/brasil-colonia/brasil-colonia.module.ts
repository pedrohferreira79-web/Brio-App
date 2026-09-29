import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrasilColoniaPageRoutingModule } from './brasil-colonia-routing.module';

import { BrasilColoniaPage } from './brasil-colonia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrasilColoniaPageRoutingModule
  ],
  declarations: [BrasilColoniaPage]
})
export class BrasilColoniaPageModule {}
