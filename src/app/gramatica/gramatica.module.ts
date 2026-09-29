import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GramaticaPageRoutingModule } from './gramatica-routing.module';

import { GramaticaPage } from './gramatica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GramaticaPageRoutingModule
  ],
  declarations: [GramaticaPage]
})
export class GramaticaPageModule {}
