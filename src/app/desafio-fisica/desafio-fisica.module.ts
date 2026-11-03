import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafioFisicaPageRoutingModule } from './desafio-fisica-routing.module';

import { DesafioFisicaPage } from './desafio-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafioFisicaPageRoutingModule
  ],
  declarations: [DesafioFisicaPage]
})
export class DesafioFisicaPageModule {}
