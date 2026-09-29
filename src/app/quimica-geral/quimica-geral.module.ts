import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuimicaGeralPageRoutingModule } from './quimica-geral-routing.module';

import { QuimicaGeralPage } from './quimica-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuimicaGeralPageRoutingModule
  ],
  declarations: [QuimicaGeralPage]
})
export class QuimicaGeralPageModule {}
