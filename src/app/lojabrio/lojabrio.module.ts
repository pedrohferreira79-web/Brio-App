import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojabrioPageRoutingModule } from './lojabrio-routing.module';

import { LojabrioPage } from './lojabrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojabrioPageRoutingModule
  ],
  declarations: [LojabrioPage]
})
export class LojabrioPageModule {}
