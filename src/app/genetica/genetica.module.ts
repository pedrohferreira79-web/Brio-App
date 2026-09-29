import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneticaPageRoutingModule } from './genetica-routing.module';

import { GeneticaPage } from './genetica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneticaPageRoutingModule
  ],
  declarations: [GeneticaPage]
})
export class GeneticaPageModule {}
