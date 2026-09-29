import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuimicaOrganicaPageRoutingModule } from './quimica-organica-routing.module';

import { QuimicaOrganicaPage } from './quimica-organica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuimicaOrganicaPageRoutingModule
  ],
  declarations: [QuimicaOrganicaPage]
})
export class QuimicaOrganicaPageModule {}
