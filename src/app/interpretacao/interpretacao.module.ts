import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpretacaoPageRoutingModule } from './interpretacao-routing.module';

import { InterpretacaoPage } from './interpretacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpretacaoPageRoutingModule
  ],
  declarations: [InterpretacaoPage]
})
export class InterpretacaoPageModule {}
