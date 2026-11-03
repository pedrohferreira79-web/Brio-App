import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafioMatematicaPageRoutingModule } from './desafio-matematica-routing.module';

import { DesafioMatematicaPage } from './desafio-matematica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafioMatematicaPageRoutingModule
  ],
  declarations: [DesafioMatematicaPage]
})
export class DesafioMatematicaPageModule {}
