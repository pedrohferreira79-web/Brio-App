import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncoesPageRoutingModule } from './funcoes-routing.module';

import { FuncoesPage } from './funcoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncoesPageRoutingModule
  ],
  declarations: [FuncoesPage]
})
export class FuncoesPageModule {}
