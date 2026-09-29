import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcologiaPageRoutingModule } from './ecologia-routing.module';

import { EcologiaPage } from './ecologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcologiaPageRoutingModule
  ],
  declarations: [EcologiaPage]
})
export class EcologiaPageModule {}
