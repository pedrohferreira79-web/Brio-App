import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizacaoPageRoutingModule } from './personalizacao-routing.module';

import { PersonalizacaoPage } from './personalizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizacaoPageRoutingModule
  ],
  declarations: [PersonalizacaoPage]
})
export class PersonalizacaoPageModule {}
