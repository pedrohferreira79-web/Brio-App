import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecanicaPageRoutingModule } from './mecanica-routing.module';

import { MecanicaPage } from './mecanica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecanicaPageRoutingModule
  ],
  declarations: [MecanicaPage]
})
export class MecanicaPageModule {}
