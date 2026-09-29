import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeopoliticaPageRoutingModule } from './geopolitica-routing.module';

import { GeopoliticaPage } from './geopolitica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeopoliticaPageRoutingModule
  ],
  declarations: [GeopoliticaPage]
})
export class GeopoliticaPageModule {}
