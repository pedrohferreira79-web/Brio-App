import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiteraturaPageRoutingModule } from './literatura-routing.module';

import { LiteraturaPage } from './literatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiteraturaPageRoutingModule
  ],
  declarations: [LiteraturaPage]
})
export class LiteraturaPageModule {}
