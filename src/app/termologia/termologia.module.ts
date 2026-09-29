import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermologiaPageRoutingModule } from './termologia-routing.module';

import { TermologiaPage } from './termologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermologiaPageRoutingModule
  ],
  declarations: [TermologiaPage]
})
export class TermologiaPageModule {}
