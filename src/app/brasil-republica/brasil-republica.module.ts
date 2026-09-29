import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrasilRepublicaPageRoutingModule } from './brasil-republica-routing.module';

import { BrasilRepublicaPage } from './brasil-republica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrasilRepublicaPageRoutingModule
  ],
  declarations: [BrasilRepublicaPage]
})
export class BrasilRepublicaPageModule {}
