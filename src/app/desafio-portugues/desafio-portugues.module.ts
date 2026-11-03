import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafioPortuguesPageRoutingModule } from './desafio-portugues-routing.module';

import { DesafioPortuguesPage } from './desafio-portugues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafioPortuguesPageRoutingModule
  ],
  declarations: [DesafioPortuguesPage]
})
export class DesafioPortuguesPageModule {}
