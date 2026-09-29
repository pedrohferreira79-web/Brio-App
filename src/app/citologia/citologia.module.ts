import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitologiaPageRoutingModule } from './citologia-routing.module';

import { CitologiaPage } from './citologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitologiaPageRoutingModule
  ],
  declarations: [CitologiaPage]
})
export class CitologiaPageModule {}
